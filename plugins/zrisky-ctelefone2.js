import puppeteer from 'puppeteer-core';
import fetch from 'node-fetch'
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
if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, {"document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} , { quoted: m })

  const newStr = text.replaceAll('+55','').replaceAll(' ','').replaceAll(/[-+ ]/g, '')
  if (newStr.length === 11 || newStr.length === 10) {
    // Código a ser executado se o comprimento for igual a 11 ou 10
  m.reply('Consultando, por favor aguarde...')
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    userDataDir: 'C:\\Users\\riskyzin\\AppData\\Local\\Google\\Chrome\\User Data',
  });
  const page = await browser.newPage();
  await page.goto(`https://i-find.org/consultar/Telefone/?tipo=iFind&Tel=${newStr}`);
  
  const results = await page.evaluate(() => {
    const tables = document.querySelectorAll('table.dataframe, table.table-striped');
    const data = [];
    tables.forEach(table => {
      const rows = table.querySelectorAll('tbody tr');
      if (rows.length > 0) {
        const result = {};
        rows.forEach(row => {
          const [key, value] = row.querySelectorAll('th, td');
          result[key.textContent.trim()] = value.textContent.trim();
        });
        data.push(result);
      }
    });
    return data;
  });
  
  console.log(results);
  
  await browser.close();

  if (results.length > 0) {
    let messageContent = `\`\`\`🔎 CONSULTA DE TEL 🔎\n\n`;
    results.forEach(result => {
      messageContent += `Telefone: ${result.Telefone || '-'}
UF: ${result.UF || '-'}
Nome: ${result.Nome || '-'}
CPF: ${result.CPF || '-'}
Endereço: ${result.Endereco || '-'}
Número: ${result.Numero || '-'}
Bairro: ${result.Bairro || '-'}
Cidade: ${result.Cidade || '-'}
CEP: ${result.CEP || '-'}\n\n---------\n\n`;
    });
    //messageContent += '---------';
    conn.reply(m.chat, messageContent.replaceAll('[empty]','')+`Dev: @558582385190\nUser: @${m.sender.split("@")[0]}\`\`\``, m, {mentions: [m.sender,'558582385190@s.whatsapp.net']});
   // m.reply(messageContent+'\`\`\`');
    
  } else {
    m.reply('⚠️ Nenhum resultado encontrado!');
  }
} else {
  throw '⚠️ DIGÍTE UM NÚMERO DE TELEFONE VÁLIDO DE 10 OU 11 CARACTERES!';
}
};

handler.command = /^(telefone|tel1|telefone1|tel)$/i;
handler.tags = ['consultas'];

export default handler;
