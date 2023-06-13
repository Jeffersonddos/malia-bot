import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = await(await fetch('https://i.pinimg.com/564x/61/ff/1b/61ff1b4ff22fc2015466b4eb481d7377.jpg')).buffer()
let img = await(await fetch('https://i.pinimg.com/564x/9b/68/a8/9b68a89da1d353ff42cfa97afa33c44b.jpg')).buffer()
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

╭┈ ↷ 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒
• ✐; Menu de figurinhas
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟ 🐂 *${usedPrefix}Packfigu 1*
• ✐; _*Faz o L* Quant: 9 Tipo: normal_
✧: ඬ⃟ 🐒 *${usedPrefix}Packfigu 2*
• ✐; _*Mamacos* Quant: 50 Tipo: animado_
✧: ඬ⃟ 🐓 *${usedPrefix}Packfigu 3*
• ✐; _*Random* Quant: 21 Tipo: normal_
✧: ඬ⃟ 😂 *${usedPrefix}Packfigu 4*
• ✐; _*Emotes* Quant: 75 Tipo: normal_
✧: ඬ⃟ 🐶 *${usedPrefix}Packfigu 5*
• ✐; _*Animais* Quant: 87 Tipo: normal_
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・

╭┈ ↷ 𝐂𝐑𝐈𝐀𝐑 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒
• ✐; Criar figurinhas
├─────────────────
✧: ඬ⃟ 💛 _${usedPrefix}sticker *<marca img/vídeo>*_
✧: ඬ⃟ 💛 _${usedPrefix}sticker *<link/url>*_
✧: ඬ⃟ 💛 _${usedPrefix}sticker2 *<marca img/vídeo>*_
✧: ඬ⃟ 💛 _${usedPrefix}sticker2 *<link/url>*_
✧: ඬ⃟ 💛 _${usedPrefix}sticker3 *<marca img/vídeo>*_
✧: ඬ⃟ 💛 _${usedPrefix}f *<marca img/vídeo>*_
✧: ඬ⃟ 💛 _${usedPrefix}f *<link/url>*_
✧: ඬ⃟ 💛 _${usedPrefix}f2 *<marca img/vídeo>*_
✧: ඬ⃟ 💛 _${usedPrefix}f2 *<link/url>*_
✧: ඬ⃟ 💛 _${usedPrefix}f3 *<marca img/vídeo>*_
✧: ඬ⃟ 💛 _${usedPrefix}emojimix *<emoji 1>&<e2>*_
✧: ඬ⃟ 💛 _${usedPrefix}scircle *<imagem>*_
✧: ඬ⃟ 💛 _${usedPrefix}sremovebg *<imagem>*_
✧: ඬ⃟ 💛 _${usedPrefix}semoji *<tipo> <emoji>*_
✧: ඬ⃟ 💛 _${usedPrefix}attp *<texto>*_
✧: ඬ⃟ 💛 _${usedPrefix}attp2 *<texto>*_
✧: ඬ⃟ 💛 _${usedPrefix}attp3 *<texto>*_
✧: ඬ⃟ 💛 _${usedPrefix}attp4 *<texto>*_
✧: ඬ⃟ 💛 _${usedPrefix}attp5 *<texto>*_
✧: ඬ⃟ 💛 _${usedPrefix}attp6 *<texto>*_
✧: ඬ⃟ 💛 _${usedPrefix}attp7 *<texto>*_
✧: ඬ⃟ 💛 _${usedPrefix}attp8 *<texto>*_
✧: ඬ⃟ 💛 _${usedPrefix}ttp *<texto>*_
✧: ඬ⃟ 💛 _${usedPrefix}ttp2 *<texto>*_
✧: ඬ⃟ 💛 _${usedPrefix}ttp3 *<texto>*_
✧: ඬ⃟ 💛 _${usedPrefix}ttp4 *<texto>*_
✧: ඬ⃟ 💛 _${usedPrefix}ttp5 *<texto>*_
✧: ඬ⃟ 💛 _${usedPrefix}pat *<@tag>*_
✧: ඬ⃟ 💛 _${usedPrefix}slap *<@tag>*_
✧: ඬ⃟ 💛 _${usedPrefix}kiss *<@tag>*_
✧: ඬ⃟ 💛 _${usedPrefix}dado_
✧: ඬ⃟ 💛 _${usedPrefix}wm *<packname> <author>*_
✧: ඬ⃟ 💛 _${usedPrefix}stickermarker *efeito*_
✧: ඬ⃟ 💛 _${usedPrefix}stickerfilter *efeito*_
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
m.react('💛')
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[ ❗ ] OCORREU UM ERRO NO MENU E NÃO FOI POSSÍVEL ENVIÁLO.*', m)
}}
handler.command = /^(menufigurinhas|menufigu|figumenu)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
