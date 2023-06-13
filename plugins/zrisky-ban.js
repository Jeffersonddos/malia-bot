import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, args, text, command, usedPrefix, participants, isPrems }) => {
const time2 = moment().tz('America/Fortaleza').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Boa noite'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Boa noite'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Boa tarrde'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Boa tarde'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Bom dia'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Bom dia'
 } 
if (!m.sender.startsWith('554491126415')) return
  const buttons = [
    { buttonId: `#d`, buttonText: { displayText: '<3' }, type: 1 }, ] 
    let texto1 = `${ucapanWaktu}, meu anjo 💖!!\nComo você está? Bebeu água hoje?\nHIDRAAAATE-SE!!!💞\n\nTe amo muitão😍💘`.trim()
    let buttonMessage = { "document": { url: "https://wa.me/558582385190" }, "fileName": '💖 - Banzinhuu'.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `✨ Meu Amoor `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://th.bing.com/th/id/OIP.uiKYKq3xQy2PuCddRW1axAHaEo?pid=ImgDet&rs=1.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })

}
handler.command = /^(amor)$/i
export default handler

