import puppeteer from 'puppeteer-core';
import cheerio from 'cheerio';
import fetch from 'node-fetch';

const handler = async (m, { conn, args, text, command, usedPrefix, participants, isPrems }) => {
//if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, {"document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} , { quoted: m })

  let consu = text.replaceAll('.','')
  let consul = consu.replaceAll('-','')
  if (!consul || isNaN(consul) || consul.length !== 11) {
    return m.reply('⚠️ *DIGITE UM CPF VÁLIDO!*')
  }

  m.reply('Consultando, por favor aguarde...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    userDataDir: 'C:\\Users\\riskyzin\\AppData\\Local\\Google\\Chrome\\User Data'
  });
  const page = await browser.newPage();

  try {
    await page.goto('https://i-find.org/consultar/Score/?CPF='+consul);

 // Extrair o HTML da tabela
 const pageHtml = await page.evaluate(() => {
  return document.documentElement.innerHTML;
});

// Analisar o HTML da página com Cheerio
const $ = cheerio.load(pageHtml);
const scoreSPC = $('.titleConsulta:contains("Score SPC Atual")').next('.tablOverflow').find('.ConsultaText').text();
const mosaicInfo = $('.titleConsulta:contains("Mosaic")').next('.tablOverflow').find('.ConsultaText').text();

// Criar a string formatada com os dados
let message = "\`\`\`🔎 CONSULTA DE SCORE SPC E MOSAIC 🔎:\n\n";
message += `Score SPC Atual: ${scoreSPC}\n\n`;
message += `Mosaic: ${mosaicInfo}\n`;

    // Enviar a mensagem usando conn.reply
    conn.reply(m.chat, message + `\nUser: @${m.sender.split("@")[0]}\nBot: @558893673497\`\`\``, m, {
      mentions: [m.sender, '558893673497@s.whatsapp.net']
    });

    await browser.close();
  } catch (e) {
    console.log(e);
    m.reply("⚠️ SCORE NÃO ENCONTRADO");
  }
}

handler.command = /^(score)$/i;
handler.tags = ['consultas'];
export default handler;
