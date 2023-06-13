import puppeteer from 'puppeteer-core';
import fs from 'fs';
import fetch from 'node-fetch'
import Jimp from 'jimp';
let handler = async (m, { conn, isPrems, text, command }) => {
  const buttons = [
    { buttonId: `#vipp tabela`, buttonText: { displayText: '💎 Adquirir ViP' }, type: 1 }, { buttonId: `#testevipp`, buttonText: { displayText: '🔥 Ativar Teste' }, type: 1 }, ] 
    let texto1 = `🍫 - Este comando é exclusivo apenas para usuários *Premium*!\nAdquira já o seu *ViP* e tenha acesso à todos os comandos *Premium*!\n👤 *Contato:*\nhttps://wa.me/558582385190`.trim()
    let buttonMessage = { "document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} 
//if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, {"document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} , { quoted: m })

let consul = (text.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
if (!isNaN(consul)) return m.reply('Para consultar um NOME você NÃO deve por letras válidas, não números.')
if (consul.length > 60) throw 'Sério que essa pessoa tem mais de 60 letras no nome?'
  m.reply('Consultando, por favor aguarde...')
  try {
    const browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      userDataDir: 'C:\\Users\\riskyzin\\AppData\\Local\\Google\\Chrome\\User Data'
    });
    const page = await browser.newPage();
    await page.goto('https://i-find.org/consultar/Nome/?Nome='+consul+'&SobrOrdem=on');
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
      const imagemMarcaDagua1 = marca;
      const imagemMarcaDagua2 = marca;
      Jimp.read(imagemOriginal, (err, imagem) => {
        if (err) throw err;
        
        // Carrega as duas marcas d'água
        Jimp.read(imagemMarcaDagua1, (err, marcaDagua1) => {
          if (err) throw err;
          marcaDagua1.scale(0.4); // Redimensiona a marca d'água para metade do tamanho original
          
          Jimp.read(imagemMarcaDagua2, (err, marcaDagua2) => {
            if (err) throw err;
            marcaDagua2.scale(2); // Redimensiona a marca d'água para metade do tamanho original
            marcaDagua2.opacity(0.05); // Define a transparência da marca d'água (de 0 a 1)
            
            // Adiciona as duas marcas d'água na imagem
            imagem.composite(marcaDagua1, 10, -15);
            imagem.composite(marcaDagua2, 10, 10);
            
            const nomeDoArquivo = 'imagem_com_marca.png';
            imagem.write(nomeDoArquivo, () => {
              conn.sendFile(m.chat, nomeDoArquivo, text+'.pdf', '', m, false, { asDocument: true });
            });
            fs.unlinkSync(rane);
          });
        });
      });
  } catch (err) {
    console.error(err);
  }

};


handler.command = ['nome2'];
handler.tags = ['tools'];
handler.help = ['screenshot', 'Tira uma screenshot da página atual do navegador.'];

export default handler;

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`}