import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import { xpRange } from '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
const imagens = [
'https://i.pinimg.com/564x/9e/8c/ef/9e8cef9ea0a8c4c5474656a1c7ea5dff.jpg',
'https://i.pinimg.com/564x/6a/1b/58/6a1b585c599e24040509192cc3d3cbd7.jpg',
'https://i.pinimg.com/564x/d3/8b/53/d38b537103ac00979a0ca7f8ec2263b1.jpg',
'https://i.pinimg.com/564x/a7/1a/78/a71a7851d57cc4a0dc1425efd85245b7.jpg',
'https://i.pinimg.com/564x/43/76/a0/4376a06f6dd4c0436919126f53676214.jpg'
]
let msgf = imagens[Math.floor(imagens.length * Math.random())]
let pp = await(await fetch(msgf)).buffer()
const imagenss = [
'https://i.pinimg.com/564x/e7/e0/92/e7e092b7e79c91082d6dd6a7e0c1567f.jpg',
'https://i.pinimg.com/564x/51/77/d7/5177d7258787dcc63082a4d39aa8adab.jpg',
'https://i.pinimg.com/736x/d0/38/f4/d038f40532846b7a728d5cdd9a2cb061.jpg',
'https://i.pinimg.com/736x/62/2e/e8/622ee88915bf8d60d1480dec4e3836a9.jpg',
'https://i.pinimg.com/564x/b7/5d/a6/b75da6f4a05ece924d910316897a1a5f.jpg'
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
let { exp, diamond, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `₊˚✦୧︰ 𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎╭・❒ ୨๑
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭───╯ - ${taguser}
╰──➤ 🍉 ཷꦿ⃘⃜꙰⇥𝐌𝐀𝐋𝐈𝐀 𝐑𝐎𝐁𝐎𝐓🍦
╭┈ ↷ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎 𝐃𝐄 𝐁𝐑𝐀𝐒𝐈𝐋𝐈𝐀
• ✐; Ajeite seu relógio.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: *Data:* ${date}
✧: *Atividade:* ${uptime}
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・


╭┈ ↷ 𝐒𝐎𝐁𝐑𝐄 𝐕𝐎𝐂𝐄
• ✐; Suas estastísticas.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: *Plano:* ${user.premiumTime > 0 ? ' ViP ✅' : (isPrems ? 'Ilimitado ✅' : 'Gratuito ❌') || ''}
✧: *Diamantes:* ${diamond}
├─────────────────
✧: ඬ⃟🌟 *Foto:* /nivel
✧: *Rank:* ${role}
✧: *Nível:* ${level}
✧: *Experiência:* ${exp}/${max}
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・


╭┈ ↷ 𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐀𝐒/𝐕𝐈𝐏
• ✐; Puxar dados.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟ 💎 *_${usedPrefix}consultas_*
✧: ඬ⃟ 💎 *_${usedPrefix}vip_*
✧: ඬ⃟ 💎 *Chaves Premium:*
✧: ඬ⃟ https://fir3.net/malia-keys
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・


╭┈ ↷ 𝐌𝐄𝐍𝐔 𝐀𝐃𝐔𝐋𝐓𝐎
• ✐; Comandos porn*graficos.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟ 🔞 *_${usedPrefix}menunsfw_*
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・


╭┈ ↷ 𝐌𝐄𝐍𝐔 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐑
• ✐; Comandos para grupo.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟ ⛩ *_${usedPrefix}menuadm_*
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・

╭┈ ↷ 𝐋𝐎𝐆𝐎𝐒 𝐑𝐀𝐏𝐈𝐃𝐀𝐒 🆕
• ✐; Criação de logos
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟🧩 *_${usedPrefix}menulogo2_*
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・

╭┈ ↷ 𝐌𝐄𝐍𝐔 𝐀𝐋𝐄𝐀𝐓𝐎𝐑𝐈𝐎
• ✐; Comandos de imagens.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟ 🔮 *_${usedPrefix}menuale_*
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・


╭┈ ↷ 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃
• ✐; Comandos de download.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟ 📥 *_${usedPrefix}menudown_*
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・


╭┈ ↷ 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒
• ✐; Jogos em BETA.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟ 🎃 *_${usedPrefix}menulogos_*
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・


╭┈ ↷ 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐉𝐎𝐆𝐎𝐒
• ✐; Jogos em BETA.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟ 🎮 *_${usedPrefix}menubrinks_*
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・


╭┈ ↷ 𝐌𝐄𝐍𝐔 𝐅𝐄𝐑𝐑𝐀𝐌𝐄𝐍𝐓𝐀𝐒
• ✐; Comandos de tools.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟ ✂ *_${usedPrefix}menutools_*
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・


╭┈ ↷ 𝐌𝐄𝐍𝐔 𝐅𝐈𝐆𝐔𝐑𝐈𝐍𝐇𝐀𝐒
• ✐; Comandos de figurinhas.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟ 🌸 *_${usedPrefix}menufigu_*
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・


╭┈ ↷ 𝐀𝐋𝐆𝐔𝐍𝐒 𝐀𝐔𝐃𝐈𝐎𝐒
• ✐; Apenas digite.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟ 🔊 _banido_
✧: ඬ⃟ 🔊 _meu deus_
✧: ඬ⃟ 🔊 _bora tomar uma_
✧: ඬ⃟ 🔊 _nyanpasu_
✧: ඬ⃟ 🔊 _flamengo_
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・

❗ ESTE BOT ESTÁ A VENDA!
- Embutido no bot tem:
🧩 Painel de Consultas
🧩 Painel da PMERJ
🧩 Comandos porn*gráficos
🧩 Comandos de figurinhas
🧩 Comandos de download
🧩 Comandos de ferramentas
🧩 Comandos de criação
🧩 Comandos de manipular imagens
🧩 Comandos de inteligencias art.
🧩 E muito mais!
🔥 Contato:
https://wa.me/558582385190`.trim()
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
m.react('🥳')
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch(e) {
console.log(e) 
conn.reply(m.chat, '*[ ❗ ] OCORREU UM ERRO NO MENU E NÃO FOI POSSÍVEL ENVIÁLO.*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|start|2help|menu1.2|ajuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
