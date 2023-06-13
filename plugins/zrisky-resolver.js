import fetch from 'node-fetch'
import { webp2png } from '../lib/webp2mp4.js'
import { Configuration, OpenAIApi } from "openai"
let handler = async (m, { conn, text, isPrems, command }) => {
  const buttons = [
    { buttonId: `#vipp tabela`, buttonText: { displayText: '💎 Adquirir ViP' }, type: 1 }, { buttonId: `#testevipp`, buttonText: { displayText: '🔥 Ativar Teste' }, type: 1 }, ] 
    let texto1 = `🍫 - Este comando é exclusivo apenas para usuários *Premium*!\nAdquira já o seu *ViP* e tenha acesso à todos os comandos *Premium*!\n👤 *Contato:*\nhttps://wa.me/558582385190`.trim()
    let buttonMessage = { "document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} 
//if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
let q = m.quoted ? m.quoted : m,
mime = (q || q.msg).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
m.reply(`❲❗❳ Atenção!
• Este comando está em teste, então caso ocorra erro, releve.
• Caso o problema seja repetitivo, contate o desenvolvedor.
- WhatsApp;
https://tinyurl.com/suporte-malia

- Instagram;
@david.sousz
`)
let url = await webp2png(await q.download()),
res = await fetch(API('https://api.ocr.space', '/parse/imageurl', { apikey: '8e65f273cd88957', url }))
if (res.status !== 200) throw res.statusText
let json = await res.json()
const qwe = json?.ParsedResults?.[0]?.ParsedText
let rres = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=ea7f3def37ca8dad8578250f&text=${qwe}&system=diverso`)
let jjson = await rres.json()
await m.reply(jjson.result)  
} else throw '*[❗] ERROR. POR FAVOR, COLOQUE SÓ A PARTE DA QUESTÃO.*'
}
handler.command = /^resolver$/i
export default handler
