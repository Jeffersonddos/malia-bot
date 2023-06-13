import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { 
conn.sendButton(id, `${text}`, 'Comunicado Oficial  ', fs.readFileSync('./media/bcgc.jpg'), [['🗑️ Deletar', '.del']], false, { 
contextInfo: { externalAdReply: {
title: 'ᴄᴏᴍᴜɴɪᴄᴀᴅᴏ ᴏғɪᴄɪᴀʟ ᴀ ᴛᴏᴅᴏs ᴏs ᴄʜᴀᴛs',
body: 'ʙʏ ᴍᴀʟɪᴀ ﹣ ʙᴏᴛ', 
sourceUrl: `https://instagram.com/david.sousz`, 
thumbnail: fs.readFileSync('./media/bcgc.jpg') }}})}
m.reply(`*[ ❗ ] MENSAGEM ENVIADA A TODOS OS CHATS*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler
