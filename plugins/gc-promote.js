let handler = async (m, { conn,usedPrefix, text, isPrems, isAdmin }) => {
if (isPrems){
    if(isNaN(text) && !text.match(/@/g)){
	
    }else if(isNaN(text)) {
    var number = text.split`@`[1]
    }else if(!isNaN(text)) {
    var number = text
    }
        
    if(!text && !m.quoted) return conn.reply(m.chat, `*[❗] USO APROPIADO*\n\n*┯┷*\n*┠≽ ${usedPrefix}daradmin @tag*\n*┠≽ ${usedPrefix}darpoder -> responder a un mensaje*\n*┷┯*`, m)
    if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*[ ⚠️ ] O número inserido está incorreto.*`, m)
        
    try {
    if(text) {
    var user = number + '@s.whatsapp.net'
    } else if(m.quoted.sender) {
    var user = m.quoted.sender
    } else if(m.mentionedJid) {
    var user = number + '@s.whatsapp.net'
    } 
    } catch (e) {
    } finally {
    conn.groupParticipantsUpdate(m.chat, [user], 'promote')
    conn.reply(m.chat, `*✨ - Ordem recebida!*\n*[${user.split('@')[0]}] agora é um administrador.*`, m)
    }
    return;
}
if (!isAdmin) throw 'Este comando so pode ser usado pelos administradores do grupo.'
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `*[❗] USO APROPIADO*\n\n*┯┷*\n*┠≽ ${usedPrefix}daradmin @tag*\n*┠≽ ${usedPrefix}darpoder -> responder a un mensaje*\n*┷┯*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*[ ⚠️ ] O número inserido está incorreto.*`, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, `*✨ - Ordem recebida!*\n*[${user.split('@')[0]}] agora é um administrador.*`, m)
}}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'promote ' + v)
handler.tags = ['group']
handler.command = /^(promote|daradmin|darpoder|pm)$/i
handler.group = true
handler.botAdmin = true
handler.fail = null
export default handler
