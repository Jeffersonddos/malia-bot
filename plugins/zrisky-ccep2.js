import puppeteer from 'puppeteer-core';
import fs from 'fs';
import Jimp from 'jimp';
import fetch from 'node-fetch'

const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default

let handler= async (m, { conn, args, text, command, usedPrefix: _p, participants, isPrems }) => {
const buttons = [
{ buttonId: `#vipp tabela`, buttonText: { displayText: '💎 Adquirir ViP' }, type: 1 }, { buttonId: `#testevipp`, buttonText: { displayText: '🔥 Ativar Teste' }, type: 1 }, ] 
let texto1 = `🍫 - Este comando é exclusivo apenas para usuários *Premium*!\nAdquira já o seu *ViP* e tenha acesso à todos os comandos *Premium*!\n👤 *Contato:*\nhttps://wa.me/558582385190`.trim()
let buttonMessage = { "document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} 
//if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, {"document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} , { quoted: m })

let pon = text.replace('-','')
if (pon.length < 8) return m.reply('coloque um cep válido')
  m.reply(`Consultando, por favor aguarde...`)
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      userDataDir: 'C:\\Users\\riskyzin\\AppData\\Local\\Google\\Chrome\\User Data'
    });
    const page = await browser.newPage();
    await page.goto('https://i-find.org/consultar/CEP/?CEP='+pon);
   await page.setViewport({
      width: 1366,
      height: 768 - 180,
    });
    const screenshot = await page.screenshot({ fullPage: true });
    await browser.close();
    fs.writeFileSync('screenshot.png', screenshot);
    let marca = await (await fetch('https://i.ibb.co/dJNxsnZ/Sem-T-tulo-1.png')).buffer()
      const imagemOriginal = 'screenshot.png';
  const imagemMarcaDagua = marca;
  Jimp.read(imagemOriginal, (err, imagem) => {
    if (err) throw err;
    Jimp.read(imagemMarcaDagua, (err, marcaDagua) => {
      if (err) throw err;
      marcaDagua.scale(0.4); // Redimensiona a marca d'água para metade do tamanho original
      imagem.composite(marcaDagua, 10, -15); // Adiciona a marca d'água na posição (10, 10)
    const nomeDoArquivo = 'imagem_com_marca.png';
    imagem.write(nomeDoArquivo, () => {
      conn.sendFile(m.chat, nomeDoArquivo, pon+'.pdf', 'Resultado da sua consulta.', m, false, { asDocument: true });
    });
  });
});
};

//await conn.reply(m.chat, `*[ ❗ ] Enviado com sucesso ${command.toUpperCase()} 𝙰 ${send}*`, m, { mentions: [m.sender]})
handler.command = ['cep3']
handler.tags = ['consultas']
export default handler

