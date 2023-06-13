import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['jail', 'gay', 'glass', 'wasted' ,'triggered', 'lolice', 'simpcard', 'horny']

let handler = async (m, { conn, usedPrefix, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
*_✳️ USO CORRETO DO COMANDO ✳️_*
*👉 Use:* ${usedPrefix}stickermaker (efeito) 
- E responda a uma imagen
*✅ Exemplo:* ${usedPrefix}stickermaker jail
*Lista dos Efeitos:*
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*_🔰 Não encontrei a imagem._*\n\n*_✅ Responda a uma imagem_*'
if (!/image\/(jpe?g|png)/.test(mime)) throw `*_⚠️ Formato não permitido_*\n\n*_👉🏻 Responda a uma imagem_*`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply('*_⚠️ Ocorreu um erro ao fazer a conversão em figurinhas._*\n\n*_✳️ Enviando imagem no lugar..._*')
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickmaker (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickmaker|stickermaker|stickermarker|cs)$/i
export default handler
