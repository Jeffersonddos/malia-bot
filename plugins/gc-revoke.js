/* Creditos a https://github.com/ALBERTO9883 */

let handler = async(m, { conn }) => {
let revoke = await conn.groupRevokeInvite(m.chat)
await conn.reply(m.chat, `🔹️ *_Link resetado com sucesso!._*\n♾ • Novo Link: ${'https://chat.whatsapp.com/' + revoke}`, m)}
handler.command = ['resetlink', 'resetar']
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
