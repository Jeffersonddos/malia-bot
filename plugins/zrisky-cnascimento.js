import puppeteer from 'puppeteer-core';
import fetch from 'node-fetch'
import cheerio from 'cheerio'
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
  if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, {"document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} , { quoted: m })

if (text.length < 1) throw '*🤪 - O uso correto do comando é: #nascimento nome|data de nascimento*\n*Exemplo:*\n*#nascimento david|22-06-2006*'

let [emoji1, emoji2] = text.split`|`
if (!text.includes('|')) throw 'Preencha pelo menos a data.\nExemplo: /nascimento |22/05/2009.\nUse o | para separar'
if (emoji2.length < 10) throw 'Preencha pelo menos a data.\nExemplo: /nascimento |22/05/2009'
let nomee = emoji1 || ''
let consul = emoji2.replaceAll('/','-')
let dataa = consul;
let partes = dataa.split('-');
let novaData = `${partes[2]}-${partes[1]}-${partes[0]}`;
  m.reply(`Consultando, por favor aguarde...`)
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      userDataDir: 'C:\\Users\\riskyzin\\AppData\\Local\\Google\\Chrome\\User Data'
    });
    const page = await browser.newPage();
    await page.goto('https://i-find.org/consultar/Nascimento/?Nome='+nomee+'&Nascimento='+novaData);
    try{
    const tableHtml = await page.evaluate(() => {
      return document.querySelector('.tablOverflow .dataframe').outerHTML;
    });
    const $ = cheerio.load(tableHtml);
    const data = [];
  
    $('tr').each((i, row) => {
      if (i > 0) {
        const columns = $(row).find('td');
        const nome = $(columns[0]).text();
        const cpf = $(columns[1]).text();
        const nascimento = $(columns[2]).text();
        data.push({ nome, cpf, nascimento });
      }
    });
  
    let message = "\`\`\`🔎 CONSULTA DE NASCIMENTO 🔎:\n\n";
    
    data.forEach((item) => {
      message += `Nome: ${item.nome}\nCPF: ${item.cpf}\nNascimento: ${item.nascimento}\n\n-----\n`;
    });
  
    conn.reply(m.chat, message + `User: @${m.sender.split("@")[0]}\nBot: @558893673497\`\`\``, m, { mentions: [m.sender, '558893673497@s.whatsapp.net'] });
  
    await browser.close();
  }catch(e){
    console.log(e)
     m.reply("⚠️ NÃO ENCONTRADO")
  }
};

//await conn.reply(m.chat, `*[ ❗ ] Enviado com sucesso ${command.toUpperCase()} 𝙰 ${send}*`, m, { mentions: [m.sender]})
handler.command = ['nascimento']
handler.tags = ['consultas']
export default handler
const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`}