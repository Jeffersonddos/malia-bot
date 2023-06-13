import fetch from 'node-fetch'
import { addExif } from '../lib/sticker.js'
import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import { Sticker } from 'wa-sticker-formatter'
let handler = async (m, { conn, text, command, args }) => {
if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
let stiker = false
conn.sendMessage(m.chat, {react: { text: "⏰", key: m.key }})
  let reis = await fetch("https://api.zahwazein.xyz/downloader/telesticker?apikey=zenzkey_1639ccd633&url=" + text)
  let resu = await reis.json()  
 /* if (m.isGroup && resu.result.sticker.length > 121) {
await m.reply('O número de figurinhas é maior que 50, será enviado no chat privado.')
for (let i = 0; i < resu.result.sticker.length; i++) {
const stikers = await sticker(false, resu.result.sticker[i], 'ᴍᴀᴅᴇ ʙʏ\nꜰᴇɪᴛᴀ ʙʏ\nɪɴꜱᴛᴀɢʀᴀᴍ', `ᴍᴀʟɪᴀ ʀᴏʙᴏᴛ タ\n${m.pushName}\nᴅᴀᴠɪᴅ.sᴏᴜsᴢ`)
conn.sendFile(m.sender, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 999999, 'isForwarded': true }})
}
} else {*/
  // resu = await fetchJson(`https://raw.githubusercontent.com/shoukosagiri-poi/swenson-web-vercel/main/anjime.json`)
  // console.log(resu)
  for (let i = 0; i < resu.result.sticker.length; i++) {
console.log(resu.result)
const stikers = await sticker(false, resu.result.sticker[i], '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Mᴇɴsαɢᴇᴍ ʙᴏᴛ\n⤷cσᴍᴘʟᴇᴛαᴅα!', `↓🍓⃟ Cʀιαᴅα ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`)
conn.sendFile(m.chat, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 999999, 'isForwarded': true }})
}
await conn.sendMessage(m.chat, {react: { text: "✅", key: m.key }})
//}
}
}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(telesticker)$/i
handler.rowner = true
handler.fail = null
export default handler