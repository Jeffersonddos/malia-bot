let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `*[❗] Marque a mensagem ou a pessoa.*`
if (!user) throw `*[❗] Usuário não encontrado no banco de dados.*`
if (user.premiumTime = 0) throw '*[❗] O usuário não está na database Premium.*'
let txt = text.replace('@' + who.split`@`[0], '').trim()

user.premiumTime = 0
  
user.premium = false
  
let textdelprem = `*Usuário @${who.split`@`[0]} removido da Lista Premium!*`
m.reply(textdelprem, null, { mentions: conn.parseMention(textdelprem) })  
    
}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(delvip|delprem)$/i
handler.group = true
handler.rowner = true
export default handler
