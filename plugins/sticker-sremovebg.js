import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let sremovebg = global.API(`https://api.lolhuman.xyz/api/removebg?apikey=${lolkeysapi}&img=${url}`) 
let stickerr = await sticker(false, sremovebg, 'ᴍᴀᴅᴇ ʙʏ', `ᴍᴀʟɪᴀ ʀᴏʙᴏᴛ タ`)
conn.sendFile(m.chat, stickerr, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
m.reply('*[ ❗ ] OCORREU UM ERRO. ENVIE A IMAGEM QUE DESEJA CRIAR UMA FIGURINHA SEM FUNDO.*')
}}
handler.command = /^sremovebg|removebg$/i
export default handler
