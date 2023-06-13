import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
  const imagens = [
'https://i.pinimg.com/564x/6a/72/b0/6a72b0ad759e0cc3d461825438197188.jpg',
'https://i.pinimg.com/564x/dc/a8/6f/dca86fd33b73f6e4708e34e169542f6a.jpg',
'https://i.pinimg.com/564x/36/58/f4/3658f48616473e3cb6a0072231f7ef4a.jpg',
'https://i.pinimg.com/564x/1d/b6/e1/1db6e1695a987acb73e80999c6c76468.jpg',
'https://i.pinimg.com/564x/b3/82/4d/b3824dbe367ef475a9961ef72b544ef5.jpg'
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

╭┈ *Comandos Importantes*
• ✐; Comandos para grupo.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟🧩 _${usedPrefix}listanegra_
• ✐; Ativar o auto-banimento
✧: ඬ⃟🧩 _${usedPrefix}listban_
• ✐; Lista dos numeros inclusos
✧: ඬ⃟🧩 _${usedPrefix}addlista_
• ✐; Adiciona um numero na lista
✧: ඬ⃟🧩 _${usedPrefix}delista_
• ✐; Remover um núero da lista
╰─────────────────

╭┈ *Comandos Admins*
• ✐; Comandos para grupo.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟🌪 _${usedPrefix}add *<numero>*_
✧: ඬ⃟🌪 _${usedPrefix}kick *<@tag>*_
✧: ඬ⃟🌪 _${usedPrefix}kick2 *<@tag>*_
✧: ඬ⃟🌪 _${usedPrefix}listanum *<texto>*_
✧: ඬ⃟🌪 _${usedPrefix}kicknum *<texto>*_
✧: ඬ⃟🌪 _${usedPrefix}grupo *<abrir / cerrar>*_
✧: ඬ⃟🌪 _${usedPrefix}grouptime *<opcion> <tiempo>*_
✧: ඬ⃟🌪 _${usedPrefix}promote *<@tag>*_
✧: ඬ⃟🌪 _${usedPrefix}demote *<@tag>*_
✧: ඬ⃟🌪 _admins *<texto>*_ (sem prefixo)
✧: ඬ⃟🌪 _${usedPrefix}demote *<@tag>*_
✧: ඬ⃟🌪 _${usedPrefix}infogp_
✧: ඬ⃟🌪 _${usedPrefix}resetar_
✧: ඬ⃟🌪 _${usedPrefix}link_
✧: ඬ⃟🌪 _${usedPrefix}setnome *<texto>*_
✧: ඬ⃟🌪 _${usedPrefix}setdesc *<texto>*_
✧: ඬ⃟🌪 _${usedPrefix}invocar *<texto>*_
✧: ඬ⃟🌪 _${usedPrefix}setbv *<texto>*_
✧: ඬ⃟🌪 _${usedPrefix}setbye *<texto>*_
✧: ඬ⃟🌪 _${usedPrefix}hidetag *<texto>*_
✧: ඬ⃟🌪 _${usedPrefix}hidetag *<audio>*_
✧: ඬ⃟🌪 _${usedPrefix}hidetag *<video>*_
✧: ඬ⃟🌪 _${usedPrefix}hidetag *<imagen>*_
✧: ඬ⃟🌪 _${usedPrefix}adv *<@tag>*_
✧: ඬ⃟🌪 _${usedPrefix}deladv *<@tag>*_
✧: ඬ⃟🌪 _${usedPrefix}listadv_
✧: ඬ⃟🌪 _${usedPrefix}fantasmas_
✧: ඬ⃟🌪 _${usedPrefix}destrava_
✧: ඬ⃟🌪 _${usedPrefix}setpp *<imagen>*_
╰─────────────────

╭┈ ↷ *ATIVADORES/PROTEÇÕES*
│ ✐; Função apenas para admins
├─────────────────
✧: ඬ⃟☑️ _${usedPrefix}ativar *welcome*_
✧: ඬ⃟☑️ _${usedPrefix}des *welcome*_
✧: ඬ⃟☑️ _${usedPrefix}ativar *modohorny*_
✧: ඬ⃟☑️ _${usedPrefix}des *modohorny*_
✧: ඬ⃟☑️ _${usedPrefix}ativar *antilink*_
✧: ඬ⃟☑️ _${usedPrefix}des *antilink*_
✧: ඬ⃟☑️ _${usedPrefix}ativar *antilink2*_
✧: ඬ⃟☑️ _${usedPrefix}des *antilink2*_
✧: ඬ⃟☑️ _${usedPrefix}ativar *detect*_
✧: ඬ⃟☑️ _${usedPrefix}des *detect*_
✧: ඬ⃟☑️ _${usedPrefix}ativar *audios*_
✧: ඬ⃟☑️ _${usedPrefix}des *audios*_
✧: ඬ⃟☑️ _${usedPrefix}ativar *autosticker*_
✧: ඬ⃟☑️ _${usedPrefix}des *autosticker*_
✧: ඬ⃟☑️ _${usedPrefix}ativar *antiviewonce*_
✧: ඬ⃟☑️ _${usedPrefix}des *antiviewonce*_
✧: ඬ⃟☑️ _${usedPrefix}ativar *antitoxic*_
✧: ඬ⃟☑️ _${usedPrefix}des *antitoxic*_
✧: ඬ⃟☑️ _${usedPrefix}ativar *antitrava*_
✧: ඬ⃟☑️ _${usedPrefix}des *antitrava*_
✧: ඬ⃟☑️ _${usedPrefix}ativar *antiarabes*_
✧: ඬ⃟☑️ _${usedPrefix}des *antiarabes*_
✧: ඬ⃟☑️ _${usedPrefix}ativar *antinota*_
✧: ඬ⃟☑️ _${usedPrefix}des *antinota*
✧: ඬ⃟☑️ _${usedPrefix}ativar *modoadmin*_
✧: ඬ⃟ ☑️ _${usedPrefix}des *modoadmin*_
╰──────────────✧ 🌹 •°•°
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
m.react('⛩')
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[ ❗ ] OCORREU UM ERRO NO MENU E NÃO FOI POSSÍVEL ENVIÁLO.*', m)
}}
handler.command = /^(menuadm|menuadmin)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
