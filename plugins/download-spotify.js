import axios from 'axios'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
let handler = async (m, { text, conn, args, command, usedPrefix, isPrems }) => {
/*const buttons = [
{ buttonId: `#vipp tabela`, buttonText: { displayText: '💎 Adquirir ViP' }, type: 1 }, { buttonId: `#testevipp`, buttonText: { displayText: '🔥 Ativar Teste' }, type: 1 }, ] 
let texto1 = `🍫 - Este comando é exclusivo apenas para usuários *Premium*!\nAdquira já o seu *ViP* e tenha acesso à todos os comandos *Premium*!\n👤 *Contato:*\nhttps://wa.me/558582385190`.trim()
let buttonMessage = { "document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} 
//if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
*/if (!text) throw `*[ ❗ ] EXEMPLO DO USO: ${usedPrefix + command} YKWYM?*`
try {
//let res = await axios.get(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=ea7f3def37ca8dad8578250f&query=${text}`)
let ress = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=ea7f3def37ca8dad8578250f&query=${text}`)
let res = await ress.json()
const hdata = res.result
m.react("⏰")
let listSerch = []
let teskd = `*Resultados de:*\n${args.join(" ")}`;
let resultMessage = teskd;

for (let i = 0; i < hdata.length; i++) {
  resultMessage += `\n\n*⛩ Titulo:*\n${hdata[i].artists} - ${hdata[i].title}\n*📥 Baixe usando:*\n${usedPrefix}spotifydl ${hdata[i].external_urls.spotify}`;
}

await conn.sendMessage(m.chat, { image: { url: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' }, caption: resultMessage }, { quoted: m });


await m.react('✅')
} catch (e) {
    console.log(e)
m.reply('*🦓 - Ocorreu um erro.*\n*Tente novamente mais tarde!*')
}}
handler.command = /^spotify$/i
export default handler

