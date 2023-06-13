import puppeteer from 'puppeteer-core';
import fs from 'fs';
import Jimp from 'jimp';
import fetch from 'node-fetch'
let handler = async (m, { conn, isPrems, text, command }) => {
  const buttons = [
    { buttonId: `#vipp tabela`, buttonText: { displayText: '💎 Adquirir ViP' }, type: 1 }, { buttonId: `#testevipp`, buttonText: { displayText: '🔥 Ativar Teste' }, type: 1 }, ] 
    let texto1 = `🍫 - Este comando é exclusivo apenas para usuários *Premium*!\nAdquira já o seu *ViP* e tenha acesso à todos os comandos *Premium*!\n👤 *Contato:*\nhttps://wa.me/558582385190`.trim()
    let buttonMessage = { "document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} 
//if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, {"document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} , { quoted: m })
 
let consu = text.replaceAll('.','')
  let consul = consu.replaceAll('-','')
  if (consul < 1) return m.reply('Você deve digitar algo na frente!\nExemplo: /vacina 00000000272')
  if (isNaN(consul)) return m.reply('Para consultar um CPF você deve por números válidos, não letras.')
  if (consul.length > 11) throw '⚠️ *DIGITE UM CPF VÁLIDO!*'
  if (consul.length < 11) throw '⚠️ *DIGITE UM CPF VÁLIDO!*'
  m.reply('Consultando, por favor aguarde...')
  try {
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      userDataDir: 'C:\\Users\\riskyzin\\AppData\\Local\\Google\\Chrome\\User Data'
    });
    const page = await browser.newPage();
    await page.goto('https://i-find.org/consultar/Covid/?CPF='+consul);
    const screenshot = await page.screenshot({
      clip: {
        x: 90,
        y: 90,
        width: 650,
        height: 600
      }
    });
    await browser.close();
    fs.writeFileSync('screenshot.png', screenshot);
    let marca = await (await fetch('https://i.ibb.co/HFdNBg5/maliamd.png')).buffer()
    const imagemOriginal = 'screenshot.png';
const imagemMarcaDagua = marca;
Jimp.read(imagemOriginal, (err, imagem) => {
  if (err) throw err;
  Jimp.read(imagemMarcaDagua, (err, marcaDagua) => {
    if (err) throw err;
    marcaDagua.opacity(0.1); // Define a transparência da marca d'água (de 0 a 1)
    imagem.composite(marcaDagua, 10, 10); // Adiciona a marca d'água na posição (10, 10)
    const nomeDoArquivo = 'imagem_com_marca.png';
    imagem.write(nomeDoArquivo, () => {
      conn.sendFile(m.chat, nomeDoArquivo, text+'.pdf', '', m, false, { asDocument: true });
    });
  });
});
  } catch (err) {
    console.error(err);
  }

};


handler.command = ['vacina'];
handler.tags = ['tools'];
handler.help = ['screenshot', 'Tira uma screenshot da página atual do navegador.'];

export default handler;
