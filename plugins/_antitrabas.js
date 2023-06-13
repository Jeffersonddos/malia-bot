//
//By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs'
let handler = m => m
export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  if (m.isBaileys && m.fromMe)
   return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'Malia - Robot', 'jpegThumbnail': null}}} 
if (chat.antiTrava && m.mtype == "documentMessage" || m.mtype == "locationMessage" || m.mtype == "productMessage"){
    if (isAdmin) return //conn.sendMessage(m.chat, { text: `O administrador @${m.sender.split("@")[0]} acaba de enviar um texto suspeito -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    if (isBotAdmin && bot.restrict) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            /*setTimeout(() => { 
            conn.sendMessage(m.chat, { text: `Limpando chat por possível ataque ✓\n${"\n".repeat(400)}\n=> O número : wa.me/${m.sender.split("@")[0]}\n=> Alias : ${name}\n[ ! ] Acaba de enviar um texto com muitos caractéres que pode causar travamentos em alguns dispositivos!`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
            conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }, 1000)*/
        } else if (!bot.restrict) return m.reply('[ ! ] Para realizar banimentos, devo está com restrições habilitadas!')
}
  if (chat.antiTrava && m.text.length > 400 || m.text.includes('/settings')) { //Cantidad máxima de caracteres aceptados en un mensaje//
if (isAdmin) return //conn.sendMessage(m.chat, { text: `O administrador @${m.sender.split("@")[0]} acaba de enviar um texto suspeito -.-!`, mentions: [m.sender] }, { quoted: fakemek })
//await conn.sendButton(m.chat, `*[ ! ] Foi detectado uma mensagem com muitos caracteres [ ! ]*\n`, `${isBotAdmin ? '' : 'Não sou administradora, não posso fazer nada :/'}`, author, ['[ DESATIVAR ANTI-TRAVA ]', usedPrefix+'apagar antiTrava'], fakemek )
if (isBotAdmin && bot.restrict) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
	/*setTimeout(() => { 
	conn.sendMessage(m.chat, { text: `Limpando chat por possível ataque ✓\n${"\n".repeat(400)}\n=> O número : wa.me/${m.sender.split("@")[0]}\n=> Alias : ${name}\n[ ! ] Acaba de enviar um texto com muitos caractéres que pode causar travamentos em alguns dispositivos!`, mentions: [m.sender] }, { quoted: fakemek })
}, 0)
setTimeout(() => { 
	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)*/
} else if (!bot.restrict) return m.reply('[ ! ] Para realizar banimentos, devo está com restrições habilitadas!')
}
return !0
}
