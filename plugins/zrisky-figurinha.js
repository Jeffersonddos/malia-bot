import fs from 'fs'
import { exec } from 'child_process'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { sticker, addExif } from '../lib/sticker.js'
import { Sticker } from 'wa-sticker-formatter'
let stiker = false
const mensagemfigu = ['Aᴍᴇɪ sᴜα ғɪɢᴜʀɪɴʜα!', 'Fɪᴄᴏᴜ ᴜᴍα ʙᴇʟᴇᴢα!', 'Bᴇʟα ғιɢᴜʀιɴʜα!', 'Fαᴄ̧α ᴍααααɪss!!','Mɪɴʜα ғαᴠᴏʀɪᴛα!','Essα ᴇ́ ʟɪɴᴅα!','Mɪɴʜα ɴᴏᴛα ᴇ́ 10/10.']
let msgf = mensagemfigu[Math.floor(mensagemfigu.length * Math.random())]
let handler = async (m, { conn, args, __dirname, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
  if (!/webp|image|video/g.test(mime)) throw 'Você deve marcar um vídeo, gif, imagem.'
  if (/webp|image|video/g.test(mime)) {
    let buffimg = await q.download?.()
    let rane = getRandom('.'+'mp4')
    fs.writeFileSync(rane, buffimg)
    const media = rane
    let rano = getRandom('.webp')
    
    await new Promise((resolve, reject) => {
      exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
        fs.unlinkSync(media)
        const buffer = fs.readFileSync(rano)
        fs.unlinkSync(rano)
        
        resolve(buffer)
      })
    }).then(async (buffer) => {
        stiker = await addExif(buffer, '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Oᴘɪɴɪα̃σ ∂α ʙσᴛ\n⤷'+msgf,`↓🍓⃟ Cʀιαᴅα ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`)
        //stiker = await sticker(buffer, false, '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Oᴘɪɴɪα̃σ ∂α ʙσᴛ\n⤷', `↓🍓⃟ Cʀιαᴅα ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`)
        await conn.sendMessage(m.chat, {sticker: stiker}, {quoted: m})
    })
  }
}

handler.command = /^(f3|sticker3|figu3|s3)$/i
export default handler

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}
