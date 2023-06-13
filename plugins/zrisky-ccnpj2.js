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
  if (!consul || isNaN(consul) || consul.length !== 14) {
    return m.reply('⚠️ *DIGITE UM CNPJ VÁLIDO!*')
  }

  m.reply('Consultando, por favor aguarde...')
  try {
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      userDataDir: 'C:\\Users\\riskyzin\\AppData\\Local\\Google\\Chrome\\User Data'
    });
    const page = await browser.newPage();
    await page.goto('https://i-find.org/consultar/CNPJ/?CNPJ='+consul);
    await page.setViewport({
        width: 1066,
        height: 968 - 180,
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
  if (fileSizeInKb <= 469) {
    m.reply('⚠️ Nenhum resultado encontrado!');
  } else {
    let msg = `Resultado de: ${text}`
    conn.sendFile(m.chat, nomeDoArquivo, text+'.pdf', msg, m, false, { asDocument: true });
  }});
    });
  });
  fs.unlinkSync(rane);
  } catch (err) {
    console.error(err);
  }

};


handler.command = ['cnpj2'];
handler.tags = ['tools'];
handler.help = ['screenshot', 'Tira uma screenshot da página atual do navegador.'];

export default handler;
const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`}