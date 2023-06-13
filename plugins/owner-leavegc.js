let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*Adeus à todos! Estou saindo :3ゞ*') 
await conn.groupLeave(id)}
handler.command = /^(out|leavegc|sair|salirdelgrupo)$/i
handler.group = true
handler.rowner = true
export default handler
