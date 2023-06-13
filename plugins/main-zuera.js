import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = await(await fetch('https://i.pinimg.com/564x/63/97/37/639737ff17675ff407fcf0f3d0a69982.jpg')).buffer()
let img = await(await fetch('https://i.pinimg.com/564x/7d/6c/78/7d6c783029559308530e0fb5eb2ece68.jpg')).buffer()
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


╭┈ ↷ 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐉𝐎𝐆𝐎𝐒
• ✐; Por enquanto só:
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟ 🎮 ${_p}caçapalavras
✧: ඬ⃟ 🎮 ${_p}perfil
✧: ඬ⃟ 🎮 ${_p}topotakus
✧: ඬ⃟ 🎮 ${_p}topcornos
✧: ඬ⃟ 🎮 ${_p}topgays
✧: ඬ⃟ 🎮 ${_p}prostituta
✧: ඬ⃟ 🎮 ${_p}lesbica
✧: ඬ⃟ 🎮 ${_p}precoce
✧: ඬ⃟ 🎮 ${_p}puta
✧: ඬ⃟ 🎮 ${_p}rata
✧: ඬ⃟ 🎮 ${_p}rato
✧: ඬ⃟ 🎮 ${_p}gay2
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
m.react('🎮')
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
/*
╭┈ ↷ *MENU DO DESENVOLVEDOR*
│ ✐; COMANDOS SUPREMOS
├─────────────────
├  ඬ⃟ 👑 > *<funcion>*
├  ඬ⃟ 👑 => *<funcion>*
├  ඬ⃟ 👑 $ *<funcion>*
├  ඬ⃟ 👑 _${usedPrefix}setprefix *<prefijo>*_
├  ඬ⃟ 👑 _${usedPrefix}desactivarwa *<numero>*_
├  ඬ⃟ 👑 _${usedPrefix}resetprefix_
├  ඬ⃟ 👑 _${usedPrefix}autoadmin_
├  ඬ⃟ 👑 _${usedPrefix}leavegc_
├  ඬ⃟ 👑 _${usedPrefix}cajafuerte_
├  ඬ⃟ 👑 _${usedPrefix}blocklist_
├  ඬ⃟ 👑 _${usedPrefix}block *<@tag / numero>*_
├  ඬ⃟ 👑 _${usedPrefix}unblock *<@tag / numero>*_
├  ඬ⃟ 👑 _${usedPrefix}ativar *restrict*_
├  ඬ⃟ 👑 _${usedPrefix}desativar *restrict*_
├  ඬ⃟ 👑 _${usedPrefix}ativar *autoread*_
├  ඬ⃟ 👑 _${usedPrefix}desativar *autoread*_
├  ඬ⃟ 👑 _${usedPrefix}ativar *public*_
├  ඬ⃟ 👑 _${usedPrefix}desativar *public*_
├  ඬ⃟ 👑 _${usedPrefix}ativar *pconly*_
├  ඬ⃟ 👑 _${usedPrefix}desativar *pconly*_
├  ඬ⃟ 👑 _${usedPrefix}ativar *gconly*_
├  ඬ⃟ 👑 _${usedPrefix}desativar *gconly*_
├  ඬ⃟ 👑 _${usedPrefix}ativar *anticall*_
├  ඬ⃟ 👑 _${usedPrefix}desativar *anticall*_
├  ඬ⃟ 👑 _${usedPrefix}ativar *antiprivado*_
├  ඬ⃟ 👑 _${usedPrefix}desativar *antiprivado*_
├  ඬ⃟ 👑 _${usedPrefix}ativar *modejadibot*_
├  ඬ⃟ 👑 _${usedPrefix}desativar *modejadibot*_
├  ඬ⃟ 👑 _${usedPrefix}msg *<texto>*_
├  ඬ⃟ 👑 _${usedPrefix}banchat_
├  ඬ⃟ 👑 _${usedPrefix}unbanchat_
├  ඬ⃟ 👑 _${usedPrefix}banuser *<@tag>*_
├  ඬ⃟ 👑 _${usedPrefix}unbanuser *<@tag>*_
├  ඬ⃟ 👑 _${usedPrefix}dardiamantes *<@tag>*_
├  ඬ⃟ 👑 _${usedPrefix}añadirxp *<@tag>*_
├  ඬ⃟ 👑 _${usedPrefix}banuser *<@tag>*_
├  ඬ⃟ 👑 _${usedPrefix}bc *<texto>*_
├  ඬ⃟ 👑 _${usedPrefix}bcchats *<texto>*_
├  ඬ⃟ 👑 _${usedPrefix}bcgc *<texto>*_
├  ඬ⃟ 👑 _${usedPrefix}bcgc2 *<audio>*_
├  ඬ⃟ 👑 _${usedPrefix}bcgc2 *<video>*_
├  ඬ⃟ 👑 _${usedPrefix}bcgc2 *<imagen>*_
├  ඬ⃟ 👑 _${usedPrefix}bcbot *<texto>*_
├  ඬ⃟ 👑 _${usedPrefix}cleartpm_
├  ඬ⃟ 👑 _${usedPrefix}restart_
├  ඬ⃟ 👑 _${usedPrefix}update_
├  ඬ⃟ 👑 _${usedPrefix}banlist_
├  ඬ⃟ 👑 _${usedPrefix}addprem *<@tag> <tiempo>*_
├  ඬ⃟ 👑 _${usedPrefix}addprem2 *<@tag> <tiempo>*_
├  ඬ⃟ 👑 _${usedPrefix}addprem3 *<@tag> <tiempo>*_
├  ඬ⃟ 👑 _${usedPrefix}addprem4 *<@tag> <tiempo>*_
├  ඬ⃟ 👑 _${usedPrefix}delprem *<@tag>*_
├  ඬ⃟ 👑 _${usedPrefix}listcmd_
├  ඬ⃟ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
├  ඬ⃟ 👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
├  ඬ⃟ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
╰─────────────────*/ 
} catch {
conn.reply(m.chat, '*[ ❗ ] OCORREU UM ERRO NO MENU E NÃO FOI POSSÍVEL ENVIÁLO.*', m)
}}
handler.command = /^(menuzuera|brincadeiras|menubrinks|brinks|menujogos)$/i
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
