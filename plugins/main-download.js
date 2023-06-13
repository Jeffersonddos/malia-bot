import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
  const imagens = [
'https://i.pinimg.com/564x/eb/00/74/eb00747666349e8ba894e91218d56efe.jpg',
'https://i.pinimg.com/564x/3d/c3/6d/3dc36d6462920ec7c20abac83a4e1634.jpg',
'https://i.pinimg.com/564x/d7/a9/5a/d7a95a325264b7680de7fd9fa30cb5ee.jpg',
'https://i.pinimg.com/564x/7d/58/48/7d5848cef10ebb1c2e02f0e56e004d22.jpg',
'https://i.pinimg.com/564x/dc/8b/34/dc8b34e74e348891d1fde138571a1504.jpg'
]
let msgf = imagens[Math.floor(imagens.length * Math.random())]
let pp = await(await fetch(msgf)).buffer()
const imagenss = [
'https://i.pinimg.com/564x/7c/d0/1e/7cd01e56ca0348ee08f277f33e275d5f.jpg',
'https://i.pinimg.com/564x/68/d3/3a/68d33a850ce808c8c0abb657be167b53.jpg',
'https://i.pinimg.com/564x/bd/e7/e4/bde7e495774b36618bdbb049eeba72d2.jpg',
'https://i.pinimg.com/564x/f0/99/b6/f099b6b4db8c5bb03bb583ba97c42722.jpg',
'https://i.pinimg.com/564x/2b/f1/80/2bf1804f767522d408f93c2d9f828b4a.jpg'
]
let msgff = imagenss[Math.floor(imagenss.length * Math.random())]
let img = await(await fetch(msgff)).buffer()
  let d = new Date(new Date + 3600000)
let locale = 'pt'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `₊˚✦୧︰ 𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎╭・❒ ୨๑
╭───╯ - ${taguser}
╰──➤ 🍉 ཷꦿ⃘⃜꙰⇥𝐌𝐀𝐋𝐈𝐀 𝐑𝐎𝐁𝐎𝐓🍦
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭┈ ↷ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎 𝐃𝐄 𝐁𝐑𝐀𝐒𝐈𝐋𝐈𝐀
• ✐; Ajeite seu relógio.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: *Data:* ${date}
✧: *Atividade:* ${uptime}
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・


╭┈ ↷ 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒
• ✐; Baixe coisas.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟ 📥 _${usedPrefix}instagram *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}mediafire *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}gitclone *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}gdrive *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}tiktok *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}xnxxdl *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}xvideosdl *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}twitter *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}fb *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}ytmp3 *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}ytmp4 *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}ytmp3doc *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}ytmp4doc *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}videodoc *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}dapk2 *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}stickerpack *<link/url>*_
✧: ඬ⃟ 📥 _${usedPrefix}play *<texto>*_
✧: ඬ⃟ 📥 _${usedPrefix}play.1 *<texto>*_
✧: ඬ⃟ 📥 _${usedPrefix}play.2 *<texto>*_
✧: ඬ⃟ 📥 _${usedPrefix}playdoc *<texto>*_
✧: ඬ⃟ 📥 _${usedPrefix}playlist *<texto>*_
✧: ඬ⃟ 📥 _${usedPrefix}playlist2 *<texto>*_
✧: ඬ⃟ 📥 _${usedPrefix}spotify *<texto>*_
✧: ඬ⃟ 📥 _${usedPrefix}ringtone *<texto>*_
✧: ඬ⃟ 📥 _${usedPrefix}soundcloud *<texto>*_
✧: ඬ⃟ 📥 _${usedPrefix}imagen *<texto>*_
✧: ඬ⃟ 📥 _${usedPrefix}pinterest *<texto>*_
✧: ඬ⃟ 📥 _${usedPrefix}wallpaper *<texto>*_
✧: ඬ⃟ 📥 _${usedPrefix}wallpaper2 *<texto>*_
✧: ඬ⃟ 📥 _${usedPrefix}pptiktok *<nome de usuario>*_
✧: ඬ⃟ 📥 _${usedPrefix}igstalk *<nome de usuario>*_
✧: ඬ⃟ 📥 _${usedPrefix}igstory *<nome de usuario>*_
✧: ඬ⃟ 📥 _${usedPrefix}tiktokstalk *<username>*_
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・
`.trim()
conn.sendMessage(m.chat, {image: pp, caption:str.trim(),contextInfo: {
  mentionedJid: [m.sender],
  externalAdReply: {
  showAdAttribution: true,
  mediaType: 'VIDEO',
  mediaUrl: null,
  title: 'ᴹᴬᴸᴵᴬ ⁻ ᴿᴼᴮᴼᵀ',
  body: null,
  thumbnail: img,
  sourceUrl: `https://www.instagram.com/david.sousz`
  }}}, { quoted: m })
m.react('📥')
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[ ❗ ] OCORREU UM ERRO NO MENU E NÃO FOI POSSÍVEL ENVIÁLO.*', m)
}}
handler.command = /^(menudown|down|download)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
