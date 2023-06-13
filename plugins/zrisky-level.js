import fetch from 'node-fetch'
import { sticker, addExif } from '../lib/sticker.js'
import { Sticker } from 'wa-sticker-formatter'
import { xpRange } from '../lib/levelling.js'
import { exec } from 'child_process'
import uploadImage from '../lib/uploadImage.js'
import fs from 'fs'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let user = global.db.data.users[m.sender]
let { exp, diamond, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
//if (!mime) throw '*[❗] RESPONDA UMA IMAGEM*'
//if (!/image\/(jpe?g|png)/.test(mime)) throw `*[❗] TIPO DE ARQUIVO INVÁLIDO. TIPO USADO: ${mime}*`
let stiker = false
//let ppimg = await 
let rank;
if (role === 'Mestre') {
    rank = 'https://i.pinimg.com/564x/73/57/1a/73571a6b47e93a4475350a1b3055fc1c.jpg'
} else if (role === 'Novato'){
    rank = 'https://i.pinimg.com/564x/63/58/a6/6358a6744130d9745a36d1e9a159b5e4.jpg'
} else if (role === 'Aprendiz'){
    rank = 'https://i.pinimg.com/564x/b1/c0/a1/b1c0a1c449909d6ac72e7139e9cf46f9.jpg'
} else if (role === 'Adapto'){
    rank = 'https://i.pinimg.com/564x/8a/a2/d5/8aa2d5a3fef001887cc670c065078c49.jpg'
} else if (role === 'Guardião'){
    rank = 'https://i.pinimg.com/564x/78/5c/65/785c65982f3dda72e4762e52144396e1.jpg'
} else if (role === 'Campião'){
    rank = 'https://i.pinimg.com/564x/b8/80/e6/b880e6ff4667a245b90783d6981d7f89.jpg'
} else if (role === 'Herói'){
    rank = 'https://i.pinimg.com/564x/54/c8/a2/54c8a21f18991a51560837e073a81e79.jpg'
} else if (role === 'Lendário'){
    rank = 'https://i.pinimg.com/564x/35/23/b9/3523b94c6aa0b62abd5dc9ae57b6e552.jpg'
} else if (role === 'Mito'){
    rank = 'https://i.pinimg.com/564x/15/1a/56/151a56e4a5720fb3f7b24c0c010b98a0.jpg'
} else if (role === 'Bruxo'){
    rank = 'https://i.pinimg.com/564x/74/1a/2b/741a2bef502a71f9f273b69af1c08e53.jpg'
} else if (role === 'Arquimago'){
    rank = 'https://i.pinimg.com/564x/71/65/e8/7165e8b316a9d1888e96c55d7025aeaa.jpg'
} else if (role === 'Sábio'){
    rank = 'https://i.pinimg.com/564x/52/b5/1b/52b51be9278a8dc48d62880d2f1d2fdb.jpg'
} else if (role === 'Divino'){
    rank = 'https://i.pinimg.com/564x/d9/bd/0b/d9bd0b30940d67bd62528b255d21cfd0.jpg'
} else if (role === 'Pai de todos'){
    rank = 'https://i.pinimg.com/564x/43/99/89/439989bdde80f07146681d26ed674586.jpg'
  }
const url = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://crn10.org.br/wp-content/uploads/2021/09/perfil-300x300-4.jpg');
const kkks = await (await fetch(url)).buffer()
const urll = await uploadImage(kkks)
const images = `https://api.akuari.my.id/canvas/rank?avatar=${encodeURIComponent(urll)}&username=${m.pushName}&needxp=${max}&bg=https://e1.pxfuel.com/desktop-wallpaper/1023/271/desktop-wallpaper-hitam-keren-info-thumbnail.jpg&level=${level}&currxp=${exp}&rank=${rank}`
let kkk = await(await fetch(images)).buffer()
await conn.sendMessage(m.chat, { image: kkk, caption: `Para passar de nível, use */upar*` }, { quoted: m })

}
//conn.sendMessage(m.chat, { image: await(await fetch(images)).buffer(), caption: caption}, { mentions: [m.sender] })
//conn.sendButton(m.chat, caption, wm, images, [['💫 MAIS OPÇÕES 💫', `${usedPrefix}phmakerlist`]], m)

handler.command = /^(nivel|level|rank)$/i
export default handler
const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
async function createSticker(img, url, packName, authorName, quality) {
let stickerMetadata = { type: 'full', pack: packName, author: authorName, quality }
return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()}
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}