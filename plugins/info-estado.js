let handler = async (m, { conn }) => {
try {
let pp = imagen4
let img = await(await fetch('https://i.pinimg.com/originals/99/3c/4a/993c4a8f2dba9646fa0015d723d0e3fd.jpg')).buffer()
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭────[ *Malia - Robot* ]
│
│ *➤ ʜᴏʟᴀ ${taguser}*
│
│ *=> 🤖 ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:* ${uptime}
│ *=> ✅ ʙᴏᴛ ᴅᴇ ᴜsᴏ ᴘᴜʙʟɪᴄᴏ*
│ *=> 👑 ᴄʀᴇᴀᴅᴏʀ: ᴅᴀᴠɪᴅ sᴏᴜsᴀ*
│ *=> 🔗 ɪɴꜱᴛᴀɢʀᴀᴍ:* https://www.instagram.com/david.sousz
╰────────────────`.trim()
let buttons = [{ buttonId: '#menu', buttonText: { displayText: '💫 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💫' }, type: 1 }]
let buttonMessage = { image: pp, caption: str.trim(), mentions: [m.sender], footer: global.wm, buttons: buttons, headerType: 4, contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: '𝙲𝚄𝙴𝙽𝚃𝙰𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂', body: '𝙱𝚈 @𝐵𝑟𝑢𝑛𝑜𝑆𝑜𝑏𝑟𝑖𝑛𝑜', thumbnail: img, sourceUrl: `https://www.instagram.com/david.sousz`}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)    
throw `*🤖 ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ: ${uptime} ┃ 👑 ʙʏ ᴅᴀᴠɪᴅ ꜱᴏᴜꜱᴀ ┃ 🔗 ɪɴꜱᴛᴀɢʀᴀᴍ: https://www.instagram.com/david.sousz*`}}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats|runtime|uptime)$/i
export default handler
function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [`\n│ *=> 💥 ` + d, ' Dia(s)* ', `\n│ *=> 💫 ` + h, ' Hora(s)* ', `\n│ *=> 💠 ` + m, ' Minuto(s)* ', `\n│ *=> ♦ ` + s, ' Segundo(s)* '].map(v => v.toString().padStart(2, 0)).join('')}
