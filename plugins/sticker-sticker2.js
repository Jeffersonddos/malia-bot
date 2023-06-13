import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let stiker = false
try {
const mensagemfigu = ['Aᴍᴇɪ sᴜα ғɪɢᴜʀɪɴʜα!', 'Fɪᴄᴏᴜ ᴜᴍα ʙᴇʟᴇᴢα!', 'Bᴇʟα ғιɢᴜʀιɴʜα!', 'Fαᴄ̧α ᴍααααɪss!!','Mɪɴʜα ғαᴠᴏʀɪᴛα!','Essα ᴇ́ ʟɪɴᴅα!','Mɪɴʜα ɴᴏᴛα ᴇ́ 10/10.']
let msgf = mensagemfigu[Math.floor(mensagemfigu.length * Math.random())]
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('*[ ❗ ] O VÍDEO TEM QUE TER MENOS QUE 10s*')
let img = await q.download?.()
if (!img) throw `*[ ❗ ] RESPONSDA UM VIDEO OU IMAGEM COM ${usedPrefix + command}*`
let out
try {
stiker = await sticker(img, false, '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Oᴘɪɴɪα̃σ ∂α ʙσᴛ\n⤷'+msgf, `↓🍓⃟ Cʀιαᴅα ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`)
} catch (e) {
console.error(e)
} finally {
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Oᴘɪɴɪα̃σ ∂α ʙσᴛ\n⤷'+msgf, `↓🍓⃟ Cʀιαᴅα ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`)
}}
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Oᴘɪɴɪα̃σ ∂α ʙσᴛ\n⤷'+msgf, `↓🍓⃟ Cʀιαᴅα ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`)
else return m.reply('*[ ❗ ] LINK INVÁLIDO!*')
}} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
else throw '*📸 Você deve marcar uma imagem ou um vídeo de dez segundos.*'
}}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^(sfull|s2|sticker2|stickergif|stickerwm|f2|stiker2|sgif)$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
