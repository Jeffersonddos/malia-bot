
import fs from 'fs'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default
let handler  = async (m, { conn, args, text, command, usedPrefix, participants }) => {
 
conn.sendMessage(m.chat, { react: { text: "⏰", key: m.key }})
let ttp = encodeURI(`https://api.brizaloka-api.tk/ttp/${command}?apikey=brizaloka&text=${text}`)
const stikers = await sticker(false, ttp, '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Mᴇɴsαɢᴇᴍ ʙᴏᴛ\n⤷Volte sempre', `↓🍓⃟ Cʀιαᴅα ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`)
try {
    conn.sendFile(m.sender, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 999999, 'isForwarded': true }})

} catch(e) {
console.log(e)
m.reply(resposta.erro)
}
}
handler.command = /^(attp6|attp5|attp4|attp3|attp2)$/i
export default handler