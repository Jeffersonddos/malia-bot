let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*[ ✨ ] - MENSAGEM DE SAÍDA ADICIONADA COM ÊXITO!*')
} else throw `*[❗] MENSAGEM DE DESPEDIDA. USE:*\n*- @user (para mencionar o usuário que saiu)*`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
export default handler
