import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `${text}`, 'Malia-Md', false, [['🗑️ Deletar', '#d']], false)}
m.reply(`*[ ❗ ] ENVIADA PARA ${groups.length} 𝙶𝚁𝚄𝙿𝙾/𝚂*\n\n*𝐍𝐎𝐓𝐀: E POSSIVEL QUE TENHA FALHAS*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(desbugar)$/i
handler.rowner = true
export default handler