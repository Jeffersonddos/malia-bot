import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = await(await fetch('https://cdn.idntimes.com/content-images/duniaku/post/20230413/mv5bmwnhn2q3ytutztuzni00njy1lwizzdqtmwq2mmq3yjhjnmyzxkeyxkfqcgdeqxvynji3mdyxmjg-at-v1-47eb2c291db54acb77724d3c38fbeb1c.jpg')).buffer()
let img = await(await fetch('https://imagecache.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6fa96b5e-8ea4-4c2d-e836-82fec7bf4700/width=1800/43063-1525763327-(chibi_1.4),%20BREAK%20(SLE_1.2),%20ai%20hoshino,%20long%20hair,%20blush,%20bangs,%20purple%20eyes,%20bow,%20parted%20lips,%20black%20hair,%20ahoge,%20hair%20bow,%20m.jpeg')).buffer()
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
╰──────────────✧ 🌹 •°•°

╭┈ ↷ *MENU DO DESENVOVLEDOR*
│ ✐; COMANDOS GOD
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
╰─────────────────
`.trim()
let buttons = [
{ buttonId: '#vip', buttonText: { displayText: 'ViP' }, type: 1 },
//{ buttonId: '#terminosycondiciones', buttonText: { displayText: '📋 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂 📋' }, type: 1 }]
{ buttonId: '#infobot', buttonText: { displayText: 'PING' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'ᴹᴬᴸᴵᴬ ⁻ ᴿᴼᴮᴼᵀ',
body: null,
thumbnail: img,
sourceUrl: `https://www.instagram.com/david.sousz`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
m.react('👑')
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[ ❗ ] OCORREU UM ERRO NO MENU E NÃO FOI POSSÍVEL ENVIÁLO.*', m)
}}
handler.command = ['menudono']
handler.rowner = true
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
