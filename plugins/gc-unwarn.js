let handler = async (m, { conn, text, command, usedPrefix }) => {
let pp = './src/warn.jpg'
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
let bot = global.db.data.settings[conn.user.jid] || {}
let warntext = `*[❗] MARQUE ALGUEM DO GRUPO, EX:*\n*${usedPrefix + command} @${global.suittag}*`
if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
if (m.mentionedJid.includes(conn.user.jid)) return
if (user.warn == 0) throw '*[❗] O USUÁRIO NÃO POSSUI ADVERTÊNCIAS*'  
user.warn -= 1
await conn.reply(m.chat, `${user.warn == 1 ? `*@${who.split`@`[0]}*` : `♻️ Removido uma advertência de: *@${who.split`@`[0]}*\nPossui: ${user.warn}/3`}`, m, { mentions: [who] })}
handler.command = /^(unwarn|delwarn|deladvertir|deladvertencia|delwarning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
