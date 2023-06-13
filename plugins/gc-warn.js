let handler = async (m, { conn, text, command, usedPrefix }) => {
if (m.mentionedJid.includes(conn.user.jid)) return	
let pp = './src/warn.jpg'
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (who === '558582385190@s.whatsapp.net') return
let user = global.db.data.users[who]
let bot = global.db.data.settings[conn.user.jid] || {}
let warntext = `*[❗] MARQUE UMA PESSOA OU UMA MENSAGEM PARA ADV O MEMBRO*\n\n*—◉ EXEMPLO:*\n*${usedPrefix + command} @${global.suittag}*`
if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
user.warn += 1
  
await conn.reply(m.chat, `${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} ${text || "enviou uma mensagem de spam"}!\n*Ação:* Advertência ${user.warn}/3 ❕`, m, {mentions: [who]});
	
if (user.warn >= 3) {
if (!bot.restrict) return m.reply('*[ ❗ ] MEU DONO NÃO HABILITOU A FUNÇÃO DE RESTRIÇÃO. CONTATE-O PARA ATIVÁ-LA!*')        
user.warn = 0
//await m.reply(`𝚃𝙴 𝙻𝙾 𝙰𝙳𝚅𝙴𝚁𝚃𝙸 𝚅𝙰𝚁𝙸𝙰𝚂 𝚅𝙴𝙲𝙴𝚂!!\n*@${who.split`@`[0]}* 𝚂𝚄𝙿𝙴𝚁𝙰𝚂𝚃𝙴 𝙻𝙰𝚂 *3* 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰𝚂, 𝙰𝙷𝙾𝚁𝙰 𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾/𝙰 👽`, null, { mentions: [who]})
//user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') 
} 
return !1
}
handler.command = /^(advertir|advertencia|warn|adv)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
