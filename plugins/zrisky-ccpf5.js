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
  if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, {"document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} , { quoted: m })
 
let consu = text.replaceAll('.','')
  let consul = consu.replaceAll('-','')
  if (!consul || isNaN(consul) || consul.length !== 11) {
    return m.reply('⚠️ *DIGITE UM CPF VÁLIDO!*')
  }
  m.reply('Consultando, por favor aguarde...')
  try {
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      userDataDir: 'C:\\Users\\riskyzin\\AppData\\Local\\Google\\Chrome\\User Data'
    });
    const page = await browser.newPage();
    await page.goto('https://i-find.org/consultar/Completo/?CPF='+consul);
    await page.setViewport({
      width: 1366,
      height: 768 - 180,
    });
    const screenshot = await page.screenshot({ fullPage: true });
    await browser.close();
    let rane = getRandom('.'+'png')
    await fs.writeFileSync(rane, screenshot);
    let marca = await (await fetch('https://i.ibb.co/LQG7wyj/Sem-T-tulo-1.png')).buffer()
      const imagemOriginal = rane;
  const imagemMarcaDagua = marca;
  Jimp.read(imagemOriginal, (err, imagem) => {
    if (err) throw err;
    Jimp.read(imagemMarcaDagua, (err, marcaDagua) => {
      if (err) throw err;
      marcaDagua.scale(0.4); // Redimensiona a marca d'água para metade do tamanho original
      marcaDagua.opacity(0.9); // Define a transparência da marca d'água (de 0 a 1)
      imagem.composite(marcaDagua, 10, -15); // Adiciona a marca d'água na posição (10, 10)
    const nomeDoArquivo = 'imagem_com_marca.png';
    imagem.write(nomeDoArquivo, () => {
      const stats = fs.statSync(nomeDoArquivo);
const fileSizeInBytes = stats.size;
const fileSizeInKb = fileSizeInBytes / 1024;
if (fileSizeInKb <= 58) {
  m.reply('⚠️ Nenhum resultado encontrado!');
} else {
  let msg = `Resultado de: ${text}`
  conn.sendFile(m.chat, nomeDoArquivo, text+'.pdf', msg, m, false, { asDocument: true });
}
    });
  });
});
fs.unlinkSync(rane);
  } catch (err) {
    console.error(err);
    m.reply('Ocorreu um erro...')
  }

};


handler.command = ['cpf4','cpf2'];
handler.tags = ['tools'];
handler.help = ['screenshot', 'Tira uma screenshot da página atual do navegador.'];

export default handler;

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`}