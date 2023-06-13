import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['greyscale', 'invert', 'brightness', 'threshold', 'sepia', 'red', 'green', 'blue', 'blurple', 'pixelate', 'blur']

let handler = async (m, { conn, usedPrefix, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
*_✳️ USO CORRETO DO COMANDO ✳️_*
*👉 Use:* ${usedPrefix}stickerfilter (efeito) 
- E responda uma imagem
*✅ Exemplo:* ${usedPrefix}stickerfilter greyscale
*Lista de efeitos:*
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*_🔰 Não encontrei a imagem_*\n\n*_✅ Responda a uma imagem*'
if (!/image\/(jpe?g|png)/.test(mime)) throw `*_⚠️ Formato não admitido_*\n\n*_👉🏻 Responda a uma imagem_*`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply('*_⚠️ Ocorreu um erro ao converter a figurinha_*\n\n*_✳️ Enviando imagem no lugar..._*')
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickfilter (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickerfilter|stikerfilter|cs2)$/i
export default handler
