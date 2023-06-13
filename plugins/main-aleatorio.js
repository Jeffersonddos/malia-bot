import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = await(await fetch('https://images4.alphacoders.com/726/72618.jpg')).buffer()
let img = await(await fetch('https://images3.alphacoders.com/726/72627.jpg')).buffer()
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
let str = `
╭━━━━━◉                         ◉━━━━━╮
  ╔┉🧁┉═══『🍫』═══┉🧁┉╗    
  ║ㅤ    𝐌𝐀𝐋𝐈𝐀-𝐑𝐎𝐁𝐎𝐓 𝐎𝐅𝐂ㅤ     ║
  ╚┉🧁┉═══『🍫』═══┉🧁┉╝    
╰━━━━━◉                         ◉━━━━━╯
ㅤི⋮ ྀ🍫⏝ ི⋮ ྀ  🧁 ི⋮ ྀ⏝🍫ི⋮ ྀ
${readMore}
╭──────────────✧ 🌹 °•°•
│⍆ 👑 *Seja bem-vindo(a)!*
│⍆ *Olá, ${taguser}*
│
│⍆ *Data:* ${date}
│⍆ *Atividade:* ${uptime}
│⍆ *Usuários:* ${rtotalreg}
╰──────────────✧ 🌹 •°•°

╭┈ ↷ *MENU ALEATÓRIO*
│ ✐; Menu de imagens
├─────────────────
├ ඬ⃟ 👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
├ ඬ⃟ 👾 _${usedPrefix}cristianoronaldo_
├ ඬ⃟ 👾 _${usedPrefix}messi_
├ ඬ⃟ 👾 _${usedPrefix}cat_
├ ඬ⃟ 👾 _${usedPrefix}dog_
├ ඬ⃟ 👾 _${usedPrefix}meme_
├ ඬ⃟ 👾 _${usedPrefix}itzy_
├ ඬ⃟ 👾 _${usedPrefix}blackpink_
├ ඬ⃟ 👾 _${usedPrefix}lolivid_
├ ඬ⃟ 👾 _${usedPrefix}loli_
├ ඬ⃟ 👾 _${usedPrefix}navidad_
├ ඬ⃟ 👾 _${usedPrefix}metadinha_
├ ඬ⃟ 👾 _${usedPrefix}wpmontaña_
├ ඬ⃟ 👾 _${usedPrefix}pubg_
├ ඬ⃟ 👾 _${usedPrefix}wpgaming_
├ ඬ⃟ 👾 _${usedPrefix}wpaesthetic_
├ ඬ⃟ 👾 _${usedPrefix}wpaesthetic2_
├ ඬ⃟ 👾 _${usedPrefix}wprandom_
├ ඬ⃟ 👾 _${usedPrefix}wallhp_
├ ඬ⃟ 👾 _${usedPrefix}wpvehiculo_
├ ඬ⃟ 👾 _${usedPrefix}wpmoto_
├ ඬ⃟ 👾 _${usedPrefix}coffee_
├ ඬ⃟ 👾 _${usedPrefix}pentol_
├ ඬ⃟ 👾 _${usedPrefix}caricatura_
├ ඬ⃟ 👾 _${usedPrefix}ciberespacio_
├ ඬ⃟ 👾 _${usedPrefix}technology_
├ ඬ⃟ 👾 _${usedPrefix}doraemon_
├ ඬ⃟ 👾 _${usedPrefix}hacker_
├ ඬ⃟ 👾 _${usedPrefix}planeta_
├ ඬ⃟ 👾 _${usedPrefix}randomprofile_
├ ඬ⃟ 👾 _${usedPrefix}neko_
├ ඬ⃟ 👾 _${usedPrefix}waifu_
├ ඬ⃟ 👾 _${usedPrefix}akira_
├ ඬ⃟ 👾 _${usedPrefix}akiyama_
├ ඬ⃟ 👾 _${usedPrefix}anna_
├ ඬ⃟ 👾 _${usedPrefix}asuna_
├ ඬ⃟ 👾 _${usedPrefix}ayuzawa_
├ ඬ⃟ 👾 _${usedPrefix}boruto_
├ ඬ⃟ 👾 _${usedPrefix}chiho_
├ ඬ⃟ 👾 _${usedPrefix}chitoge_
├ ඬ⃟ 👾 _${usedPrefix}deidara_
├ ඬ⃟ 👾 _${usedPrefix}erza_
├ ඬ⃟ 👾 _${usedPrefix}elaina_
├ ඬ⃟ 👾 _${usedPrefix}eba_
├ ඬ⃟ 👾 _${usedPrefix}emilia_
├ ඬ⃟ 👾 _${usedPrefix}hestia_
├ ඬ⃟ 👾 _${usedPrefix}hinata_
├ ඬ⃟ 👾 _${usedPrefix}inori_
├ ඬ⃟ 👾 _${usedPrefix}isuzu_
├ ඬ⃟ 👾 _${usedPrefix}itachi_
├ ඬ⃟ 👾 _${usedPrefix}itori_
├ ඬ⃟ 👾 _${usedPrefix}kaga_
├ ඬ⃟ 👾 _${usedPrefix}kagura_
├ ඬ⃟ 👾 _${usedPrefix}kaori_
├ ඬ⃟ 👾 _${usedPrefix}keneki_
├ ඬ⃟ 👾 _${usedPrefix}kotori_
├ ඬ⃟ 👾 _${usedPrefix}kurumi_
├ ඬ⃟ 👾 _${usedPrefix}madara_
├ ඬ⃟ 👾 _${usedPrefix}mikasa_
├ ඬ⃟ 👾 _${usedPrefix}miku_
├ ඬ⃟ 👾 _${usedPrefix}minato_
├ ඬ⃟ 👾 _${usedPrefix}naruto_
├ ඬ⃟ 👾 _${usedPrefix}nezuko_
├ ඬ⃟ 👾 _${usedPrefix}sagiri_
├ ඬ⃟ 👾 _${usedPrefix}sasuke_
├ ඬ⃟ 👾 _${usedPrefix}sakura_
├ ඬ⃟ 👾 _${usedPrefix}cosplay_
╰─────────────────
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
m.react('🔮')
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[ ❗ ] OCORREU UM ERRO NO MENU E NÃO FOI POSSÍVEL ENVIÁLO.*', m)
}}
handler.command = /^(menurandom|menualeatorio|menuale)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
