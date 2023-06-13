import { sticker } from '../lib/sticker.js'
let handler = m => m
handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]

if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Abre este enlace')) && !m.isBaileys && !m.isGroup && !chat.isBanned) {
let join = `*<  Coloque a BOT em seu Grupo: />*\n\n*Olá, usuário!*\n*Para solicitar a entrada da bot em seu grupo digite: #entrar + o link do grupo*\n\n*—◉ EXEMPLO:*\n*◉ #entrar* https://chat.whatsapp.com/BhdfTOJHUxR9I4hT1b8aOv`.trim() 
//this.sendHydrated(m.chat, join, wm, imagen4, 'https://www.instagram.com/david.sousz', 'INSTAGRAM', null, null, [[null, null]], m)
m.reply(join)
}    
if (m.text.match(/(flamengo|Flamengo)/gi)) {    
let vn = './media/flamengo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}     

if (m.text.match(/(banido|Baneado)/gi)) {    
let vn = './media/banido.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}   
  
if (m.text.match(/(bora tomar uma|br tomar uma|br tomar|bora tomar)/gi)) {    
let vn = './media/brtmuma.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}   

if (m.text.match(/((m|M)eu (d|D)eus|mds|MDS)/gi)) {    
let vn = './media/meudeus.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}   
 
if (m.text.match(/(nyanpasu|loli)/gi)) {    
let vn = './media/nyanpasu.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}   
 
return !0 }
export default handler
