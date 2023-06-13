import puppeteer from 'puppeteer-core';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
const cooldowns = {}; // Objeto para rastrear os horários de uso do comando por usuário

// Função para verificar o tempo decorrido desde o último uso do comando
function checkCooldown(userId) {
  const cooldownTime = 20 * 60 * 1000; // Tempo mínimo de espera em milissegundos (20 minutos)

  const lastUsedTime = cooldowns[userId] || 0; // Obtém o último horário de uso do comando (ou 0 se nunca usado antes)
  const currentTime = Date.now(); // Obtém o horário atual

  if (currentTime - lastUsedTime < cooldownTime) {
    const remainingTime = cooldownTime - (currentTime - lastUsedTime);
    const remainingMinutes = Math.ceil(remainingTime / 60000); // Converte o tempo restante em minutos
    return remainingMinutes;
  }

  return 0; // O tempo de espera foi cumprido
}
const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default;

// Handler do comando
let handler = async (m, { conn, args, text, command, usedPrefix, participants, isPrems }) => {
  const userId = m.sender; // ID do usuário que acionou o comando
  const isPremium = isPrems; // Verifique se o usuário é premium (ajuste isso de acordo com a lógica do seu sistema de premium)
  // Verifique se o usuário precisa esperar
  const remainingMinutes = checkCooldown(userId);
  if (remainingMinutes > 0 && !isPremium) {
    return m.reply(`Aguarde ${remainingMinutes} minutos antes de usar o comando novamente. Caso não queira esperar, estamos com uma boa promoção no ViP! Entre em contato: https://WA.me/558582385190`);
  }
  // Atualize o horário de uso do comando para o horário atual
  cooldowns[userId] = Date.now();

  let texto1 = `🍫 - Este comando é exclusivo apenas para usuários *Premium*!\nAdquira já o seu *ViP* e tenha acesso à todos os comandos *Premium*!\n👤 *Contato:*\nhttps://wa.me/558582385190`.trim()
  if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, { "document": { "url": "https://wa.me/558582385190" }, "fileName": '🧁 - ' + command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` } } }, { quoted: m });

  if (!text || isNaN(text) || text.length <= 6) {
    return m.reply('⚠️ *DIGITE UM RG VÁLIDO!*');
  }
  m.reply('Consultando, por favor aguarde...');

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    userDataDir: 'C:\\Users\\riskyzin\\AppData\\Local\\Google\\Chrome\\User Data'
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36');

  await page.goto('https://i-find.org/consultar/RG/?RG=' + text);

  const html = await page.content();
  const $ = cheerio.load(html);

  const data = {};
  $('table.dataframe tbody tr').each((index, element) => {
    const key = $(element).find('th').text().trim();
    const value = $(element).find('td').text().trim();
    data[key] = value;
  });

  const resultText = Object.entries(data).map(([key, value]) => `${key}: ${value}`).join('\n');
conn.reply(m.chat, `\`\`\`🔎 CONSULTA DE RG 🔎:\n\n${resultText}`+`\n\nUser: @${m.sender.split("@")[0]}\nBot: @558893673497\`\`\``, m, {mentions: [m.sender,'558893673497@s.whatsapp.net']});
  await browser.close();
};

//await conn.reply(m.chat, `*[ ❗ ] Enviado com sucesso ${command.toUpperCase()} 𝙰 ${send}*`, m, { mentions: [m.sender]})
handler.command = ['rg'];
handler.tags = ['consultas'];
export default handler;
