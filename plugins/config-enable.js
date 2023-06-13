import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let pp = await(await fetch('https://i.pinimg.com/564x/63/97/37/639737ff17675ff407fcf0f3d0a69982.jpg')).buffer()
let img = await(await fetch('https://i.pinimg.com/564x/7d/6c/78/7d6c783029559308530e0fb5eb2ece68.jpg')).buffer()

const sections = [
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂`,
rows: [
{title: "✨ | BOAS VINDAS", description: "ATIVA OU DESATIVA AS BOAS VINDAS NO GP", rowId: `${usedPrefix + command} welcome`},
{title: "🌎 | MODO PÚBLICO", description: "O USO PRIVADO OU PUBLICO DA BOT", rowId: `${usedPrefix + command} public`},
{title: "🥵 | MODO NSFW", description: "ATIVA OU DESATIVA OS COMANDOS +18", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 | ANTILINK", description: "ATIVA OU DESATIVA O ANTLINK DE GRUPOS", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 | ANTILINK 2", description: "ATIVA OU DESATIVA O ANTILINK", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔎 | DETECTAR", description: "ATIVA OU DESATIVA AS NOTIFICAÇÕES DAS MODIFICACOES DO GP", rowId: `${usedPrefix + command} detect`},      
{title: "❗ | RESTRITO", description: "ATIVA OU DESATIVA AS RESTRIÇÕES PARA BANIR ALGUEM DO GP", rowId: `${usedPrefix + command} restrict`},    
{title: "☑️ | LEITURA", description: "MARCA AS MENSAGEM COMO LIDO AUTOMATICAMENTE", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | AUDIOS", description: "ATIVA OU DESATIVA OS COMANDOS DE AUDIO SEM PREFIXO", rowId: `${usedPrefix + command} audios`},
{title: "👾 | AUTOFIGU", description: "TODAS AS IMAGENS/VIDEOS/LINKS SERÃO TRANSFORMADA EM FIGURINHA", rowId: `${usedPrefix + command} autosticker`},
{title: "💬 | PRIVADO", description: "A BOT SÓ RESPONDERÁ OS COMANDOS NO PRIVADO", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | GRUPOS", description: "A BOT SÓ RESPONDERÁ OS COMANDOS NOS GRUPOS", rowId: `${usedPrefix + command} gconly`},
{title: "❌ | ANTI VISUNICA", description: "ATIVA OU DESATIVA O ANTI-VISUALIZAÇÃO UNICA", rowId: `${usedPrefix + command} antiviewonce`},
{title: "📵 | ANTI CHAMADA", description: "ATIVA OU DESATIVA O ANTI CHAMADA", rowId: `${usedPrefix + command} anticall`},
{title: "💬 | ANTI PRIVADO", description: "A BOT BLOQUEAIA QUEM FOR NO PRIVADO", rowId: `${usedPrefix + command} antiprivado`},
{title: "🤬 | ANTI PALAVRAO", description: "ATIVA OU DESATIVA O ANTI PALAVRÃO", rowId: `${usedPrefix + command} antitoxic`},
{title: "🕸️ | ANTI TRAVAS", description: "ATIVA OU DESATIVA O ANTI TRAVAS", rowId: `${usedPrefix + command} antitraba`},
{title: "👎🏻 | ANTI FAKES", description: "SE UM NUMERO FAKE MANDAR MSG, SERÁ BANIDO", rowId: `${usedPrefix + command} antiarabes`}, 
{title: "🤖 | MODO JADI", description: "ATIVA OU DESATIVA O COMANDO PARA SUB-BOTS (#𝚂𝙴𝚁𝙱𝙾𝚃 / #𝙹𝙰𝙳𝙸𝙱𝙾𝚃)", rowId: `${usedPrefix + command} modejadibot`}, 
{title: "👑 | MODO ADMIN", description: "A BOT SÓ RESPONDERÁ ADMINS", rowId: `${usedPrefix + command} modoadmin`}, 
{title: "😃 | MODO SIMI", description: "ATIVA OU DESATIVA QUE A BOT INTERAJA NO CHAT", rowId: `${usedPrefix + command} simsimi`},
]}, ]
//{title: "🔞 | 𝙰𝙽TIPO𝚁𝙽𝙾", description: "𝚂𝙸 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾 𝚃𝙸𝙴𝙽𝙴 𝙲𝙾𝙽𝚃𝙴𝙽𝙸𝙳𝙾 𝙿𝙾𝚁𝙽𝙾 𝙴𝙻 𝙱𝙾𝚃 𝙴𝙻𝙸𝙼𝙸𝙽𝙰 𝙻𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾", rowId: `${usedPrefix + command} antiporno`},
//let name = await conn.getName(m.sender)
let condfi = `┏━━━━━━━━━━━━━┓
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *autolevelup*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *autolevelup*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *bv*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *bv*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *antiviewonce*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *antiviewonce*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *autofigu*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *autofigu*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *anticall*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *anticall*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *antiprivado*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *antiprivado*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *antitoxic*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *antitoxic*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *antitrava*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *antitrava*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *antinota*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *antinota*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *antiarabes*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *antiarabes*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *modejadibot*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *modejadibot*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *modoadmin*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *modoadmin*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *autoban*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *autoban*_
┣ ඬ⃟ℹ️ _${usedPrefix}ativar *malia*_
┣ ඬ⃟ℹ️ _${usedPrefix}des *malia*_
┗━━━━━━━━━━━━━┛`

let isEnable = /true|ativar|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome': case 'bv':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'simsimi': case'malia':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break   
case 'autolevelup':
    isUser = true
     user.autolevelup = isEnable
     break
case 'autoban':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autoban = isEnable
break   
case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiporno = isEnable
break        
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'antinota':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiNota = isEnable
break
case 'antispam':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
chat.antispam = isEnable
}
}
  break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'autosticker': case 'autofigu':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'modejadibot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break        
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'antitraba': case 'antitrava':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antiarabes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {image: pp, caption:condfi.trim(),contextInfo: {
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
throw false
}
m.reply(`🗂️ *OPÇÃO*: ${type} 
🎚️ ESTADO: ${isEnable ? 'ATIVADO' : 'DESATIVADO'}
📣 PARA: ${isAll ? 'A BOT' : isUser ? '' : 'A CONVERSA'}`)
}
handler.help = ['enable', 'disable','desativar']
handler.tags = ['group', 'owner']
handler.command = ['enable','disable','ativar','des']
export default handler
