import puppeteer from 'puppeteer-core';
import fs from 'fs';
import Jimp from 'jimp';
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
let [nome1, nome2] = text.split`|`
if (!text.includes('|')) throw 'Você deve por o nome completo e o primeiro nome da mãe.\nExemplo: Rafael Gomes Lima|Rosana\n\nAtenção! Este comando só funciona se os dados for de carioca!'
if (nome2.length < 2) throw 'Você deve por o nome completo e o primeiro nome da mãe.\nExemplo: Rafael Gomes Lima|Rosana\n\nAtenção! Este comando só funciona se os dados for de carioca!'
  m.reply('Consultando, por favor aguarde...\nEste comando só funciona com dados carioca!')
  try {
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      userDataDir: 'C:\\Users\\riskyzin\\AppData\\Local\\Google\\Chrome\\User Data'
    });
    const page = await browser.newPage();
    await page.goto('https://portal.pmerj.rj.gov.br/login');
    await page.type('input[type="text"]', '10920559751')
    await page.type('input[type="password"]', '230986')
    await page.click('button[type="submit"]')
    await page.waitForNavigation()
    await page.goto('https://portal.pmerj.rj.gov.br/consultas/consultapessoas');
    await page.waitForNavigation()
    await delay(5000);
    await page.type('input[type="text"]', nome1)
    await page.type('input[placeholder="Nome da Mãe"]', nome2)
    await delay(1000);
    await page.click('button[mattooltip="Buscar dados na base do Detran"]')
    await delay(3000);
    // Execute o recorte (clip) desejado
  const clip = { x: 110, y: 140, width: 590, height: 180 }; // Define as coordenadas e o tamanho do recorte
  const screenshotOptions = { clip };
    const screenshot = await page.screenshot(screenshotOptions);
    await browser.close();
    let rane = getRandom('.'+'png')
    await fs.writeFileSync(rane, screenshot);
    const stats = fs.statSync(rane);
    const fileSizeInBytes = stats.size;
    const fileSizeInKb = fileSizeInBytes / 1024;
    if (fileSizeInKb <= 25 || !fs.existsSync(rane)) {
      m.reply('⚠️ Nenhum resultado encontrado!');
    } else {
      let msg = `Resultado de: ${nome1}`;
      await conn.sendFile(m.chat, rane, nome1 + '.png', msg, m, false);
    }
fs.unlinkSync(rane);
  } catch (err) {
    console.error(err);
    m.reply('Infelizmente ocorreu um erro no servidor.')
  }

};


handler.command = ['foto'];
handler.tags = ['tools'];
handler.help = ['screenshot', 'Tira uma screenshot da página atual do navegador.'];

export default handler;
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`}