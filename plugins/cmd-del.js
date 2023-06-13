let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `*[ ❗ ] SÓ PODE DELETAR CMD QUE TENHAM NA LISTA ${usedPrefix}listcmd*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw '*[ ❗ ] SÓ MEU DEV PODE USAR ESTE COMANDO!*'
delete sticker[hash]
m.reply(`*[ ✔ ] O COMANDO FOI DELETADO COM SUCESSO DA MINHA DATABASE!*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
