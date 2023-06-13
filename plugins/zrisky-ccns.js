import puppeteer from 'puppeteer-core';
import fs from 'fs';
import Jimp from 'jimp';
import fetch from 'node-fetch'
import { decryptMedia } from '@open-wa/wa-decrypt';
const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default

let handler= async (m, { conn, args, text, command, usedPrefix, participants, isPrems }) => {
if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, {"document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} , { quoted: m })

    if (!text || isNaN(text) || text.length !== 15) {
        return m.reply('⚠️ *DIGITE UM CNS VÁLIDO!*')
      }
      m.reply('Consultando, por favor aguarde...')
  async function takeScreenshot(page) {
    const screenshotBuffer = await page.screenshot();
    return screenshotBuffer;
  }

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    userDataDir: 'C:\\Users\\riskyzin\\AppData\\Local\\Google\\Chrome\\User Data'
  });

  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
  );
  
  // Adiciona um cabeçalho de usuário para evitar detecção de robô

  await page.goto('https://i-find.org/consultar/CNS/?CNS='+text);
  //await page.click('button[type="button"]');
  //await page.waitForNavigation();
  const screenshot = await page.screenshot({
    clip: {
      x: 90,
      y: 90,
      width: 650,
      height: 600
    }
  });
  console.log('Login realizado com sucesso!');
  let rane = getRandom('.'+'png')
  await fs.writeFileSync(rane, screenshot);
    let marca = await (await fetch('https://i.ibb.co/dJNxsnZ/Sem-T-tulo-1.png')).buffer()
    const imagemOriginal = rane;
const imagemMarcaDagua = marca;
Jimp.read(imagemOriginal, (err, imagem) => {
  if (err) throw err;
  Jimp.read(imagemMarcaDagua, (err, marcaDagua) => {
    if (err) throw err;
    marcaDagua.opacity(0.2); // Define a transparência da marca d'água (de 0 a 1)
    imagem.composite(marcaDagua, 10, 10); // Adiciona a marca d'água na posição (10, 10)
    const nomeDoArquivo = 'imagem_com_marca.png';
    imagem.write(nomeDoArquivo, () => {
      const stats = fs.statSync(nomeDoArquivo);
const fileSizeInBytes = stats.size;
const fileSizeInKb = fileSizeInBytes / 1024;
if (fileSizeInKb <= 242) {
  m.reply('⚠️ Nenhum resultado encontrado!');
} else {
  let msg = `Resultado de: ${text}`
  conn.sendFile(m.chat, nomeDoArquivo, text+'.pdf', msg, m, false, { asDocument: true });
}
    });
  });
});
fs.unlinkSync(rane);
  await browser.close();
};

//await conn.reply(m.chat, `*[ ❗ ] Enviado com sucesso ${command.toUpperCase()} 𝙰 ${send}*`, m, { mentions: [m.sender]})
handler.command = ['cns']
handler.tags = ['consultas']
export default handler

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`}