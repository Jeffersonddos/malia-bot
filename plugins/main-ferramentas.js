import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = await(await fetch('https://i.pinimg.com/564x/f9/e4/5e/f9e45e28149dd075069b8695ebd600c6.jpg')).buffer()
let img = await(await fetch('https://i.pinimg.com/564x/03/05/36/03053657f601110318b5aa0a83ce84a5.jpg')).buffer()
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


╭┈ ↷ 𝐈𝐍𝐓𝐄𝐋𝐈𝐆𝐄𝐍𝐂𝐈𝐀𝐒
• ✐; Inteligencias A.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟🔊 */ia (gratuito)*
┣ ඬex: /ia qual seu nome?
✧: ඬ⃟🔊 */ia2 (gratuito)*
┣ ඬex: /ia2 crie uma redação
✧: ඬ⃟🔊 */ia-img (gratuito)*
┣ ඬex: /ia-img rato de oculos
✧: ඬ⃟🔊 */ia3 (ia)*
┣ ඬex: /ia3 crie uma redação
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・


╭┈ ↷ 𝐅𝐄𝐑𝐑𝐀𝐌𝐄𝐍𝐓𝐀𝐒
• ✐; TOOLS DA BOT.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟🛠️ _${usedPrefix}ia *<texto>*_
✧: ඬ⃟🛠️ _${usedPrefix}ia2 *<texto>*_
✧: ඬ⃟🛠️ _${usedPrefix}ia-img *<texto>*_
✧: ඬ⃟🛠️ _${usedPrefix}delchatgpt_
✧: ඬ⃟🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
✧: ඬ⃟🛠️ _${usedPrefix}tamanho *<cantidad> <imagem / video>*_
✧: ඬ⃟🛠️ _${usedPrefix}clima *<país> <ciudad>*_
✧: ඬ⃟🛠️ _${usedPrefix}enquete *<texto1|texto2...>*_
✧: ඬ⃟🛠️ _${usedPrefix}afk *<motivo>*_
✧: ඬ⃟🛠️ _${usedPrefix}ocr *<responde a imagem>*_
✧: ඬ⃟🛠️ _${usedPrefix}encurtar *<link/url>*_
✧: ඬ⃟🛠️ _${usedPrefix}calc *<calculo math>*_
✧: ඬ⃟🛠️ _${usedPrefix}del *<mensaje>*_
✧: ඬ⃟🛠️ _${usedPrefix}acharmsc *<audio>*_
✧: ඬ⃟🛠️ _${usedPrefix}readqr *<imagem (QR)>*_
✧: ඬ⃟🛠️ _${usedPrefix}qrcode *<texto>*_
✧: ඬ⃟🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
✧: ඬ⃟🛠️ _${usedPrefix}styletext *<texto>*_
✧: ඬ⃟🛠️ _${usedPrefix}traduzir *<texto>*_
✧: ඬ⃟🛠️ _${usedPrefix}nowa *<numero>*_
✧: ඬ⃟🛠️ _${usedPrefix}horario_
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・

╭┈ ↷ 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀𝐒
• ✐; Pesquisas na WEB.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟🔍 _${usedPrefix}cuevana *<texto>*_
✧: ඬ⃟🔍 _${usedPrefix}pelisplus *<texto>*_
✧: ඬ⃟🔍 _${usedPrefix}modapk *<texto>*_
✧: ඬ⃟🔍 _${usedPrefix}stickersearch *<texto>*_
✧: ඬ⃟🔍 _${usedPrefix}stickersearch2 *<texto>*_
✧: ඬ⃟🔍 _${usedPrefix}xnxxsearch *<texto>*_
✧: ඬ⃟🔍 _${usedPrefix}animeinfo *<texto>*_
✧: ඬ⃟🔍 _${usedPrefix}google *<texto>*_
✧: ඬ⃟🔍 _${usedPrefix}letra *<texto>*_
✧: ඬ⃟🔍 _${usedPrefix}wikipedia *<texto>*_
✧: ඬ⃟🔍 _${usedPrefix}ytsearch *<texto>*_
✧: ඬ⃟🔍 _${usedPrefix}playstore *<texto>*_
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・

╭┈ ↷ 𝐂𝐎𝐍𝐕𝐄𝐑𝐒𝐀𝐎
• ✐; Conversões.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟🧧 _${usedPrefix}toanime *<imagem>*_
✧: ඬ⃟🧧 _${usedPrefix}togifaud *<video>*_
✧: ඬ⃟🧧 _${usedPrefix}toimg *<sticker>*_
✧: ඬ⃟🧧 _${usedPrefix}tomp3 *<video>*_
✧: ඬ⃟🧧 _${usedPrefix}tomp3 *<nota de voz>*_
✧: ඬ⃟🧧 _${usedPrefix}toptt *<video / audio>*_
✧: ඬ⃟🧧 _${usedPrefix}tovideo *<sticker>*_
✧: ඬ⃟🧧 _${usedPrefix}tourl *<video / imagem / audio>*_
✧: ඬ⃟🧧 _${usedPrefix}tts pt *<texto>*_
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・

╭┈ ↷ 𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒
• ✐; Alterar áudios
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟🎤 _${usedPrefix}bass_
✧: ඬ⃟🎤 _${usedPrefix}blown_
✧: ඬ⃟🎤 _${usedPrefix}deep_
✧: ඬ⃟🎤 _${usedPrefix}earrape_
✧: ඬ⃟🎤 _${usedPrefix}fast_
✧: ඬ⃟🎤 _${usedPrefix}fat_
✧: ඬ⃟🎤 _${usedPrefix}nightcore_
✧: ඬ⃟🎤 _${usedPrefix}reverse_
✧: ඬ⃟🎤 _${usedPrefix}robo_
✧: ඬ⃟🎤 _${usedPrefix}lento_
✧: ඬ⃟🎤 _${usedPrefix}smooth_
✧: ඬ⃟🎤 _${usedPrefix}esquilo_
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
m.react('🛠')
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[ ❗ ] OCORREU UM ERRO NO MENU E NÃO FOI POSSÍVEL ENVIÁLO.*', m)
}}
handler.command = /^(menuferramentas|menutools)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
