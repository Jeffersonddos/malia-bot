import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = await(await fetch('https://i.pinimg.com/564x/c7/cd/dc/c7cddcb8efb741a1d98cd09f6b475851.jpg')).buffer()
let img = await(await fetch('https://i.pinimg.com/564x/ba/e4/a5/bae4a57f1db19a990c1f8c8ad12f4c53.jpg')).buffer()
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
╭┈ ↷ 𝐌𝐄𝐍𝐔 𝐀𝐃𝐔𝐋𝐓𝐎
• ✐; Comandos porn*.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟🔞 _${usedPrefix}packsfw_
✧: ඬ⃟🔞 _${usedPrefix}packhentai 1 (buceta)_
✧: ඬ⃟🔞 _${usedPrefix}packhentai 2 (boquete)_
✧: ඬ⃟🔞 _${usedPrefix}packhentai 3 (loli)_
✧: ඬ⃟🔞 _${usedPrefix}packhentai 4 (peitos)_
✧: ඬ⃟🔞 _${usedPrefix}packhentai 5 (gozada)_
✧: ඬ⃟🔞 _${usedPrefix}xnxx (titulo)_
✧: ඬ⃟🔞 _${usedPrefix}pack_
✧: ඬ⃟🔞 _${usedPrefix}pack2_
✧: ඬ⃟🔞 _${usedPrefix}pack3_
✧: ඬ⃟🔞 _${usedPrefix}videoxxx_
✧: ඬ⃟🔞 _${usedPrefix}videolesbixxx_
✧: ඬ⃟🔞 _${usedPrefix}tetas_
✧: ඬ⃟🔞 _${usedPrefix}booty_
✧: ඬ⃟🔞 _${usedPrefix}ecchi_
✧: ඬ⃟🔞 _${usedPrefix}furro_
✧: ඬ⃟🔞 _${usedPrefix}imagenlesbians_
✧: ඬ⃟🔞 _${usedPrefix}panties_
✧: ඬ⃟🔞 _${usedPrefix}penis_
✧: ඬ⃟🔞 _${usedPrefix}porno_
✧: ඬ⃟🔞 _${usedPrefix}randomxxx_
✧: ඬ⃟🔞 _${usedPrefix}peitos_
✧: ඬ⃟🔞 _${usedPrefix}yaoi_
✧: ඬ⃟🔞 _${usedPrefix}yaoi2_
✧: ඬ⃟🔞 _${usedPrefix}yuri_
✧: ඬ⃟🔞 _${usedPrefix}yuri2_
✧: ඬ⃟🔞 _${usedPrefix}trapito_
✧: ඬ⃟🔞 _${usedPrefix}hentai_
✧: ඬ⃟🔞 _${usedPrefix}nsfwloli_
✧: ඬ⃟🔞 _${usedPrefix}nsfworgy_
✧: ඬ⃟🔞 _${usedPrefix}nsfwfoot_
✧: ඬ⃟🔞 _${usedPrefix}nsfwass_
✧: ඬ⃟🔞 _${usedPrefix}nsfwbdsm_
✧: ඬ⃟🔞 _${usedPrefix}nsfwcum_
✧: ඬ⃟🔞 _${usedPrefix}nsfwero_
✧: ඬ⃟🔞 _${usedPrefix}nsfwfemdom_
✧: ඬ⃟🔞 _${usedPrefix}nsfwglass_
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
m.react('🔞')
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[ ❗ ] OCORREU UM ERRO NO MENU E NÃO FOI POSSÍVEL ENVIÁLO.*', m)
}}
handler.command = /^(menuadulto|menunsfw)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
