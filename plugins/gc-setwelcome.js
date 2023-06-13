let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[ ✨ ] MENSAGEM DE BOAS VINDAS CONFIGURADA COM ÊXITO!*')
} else throw `*[❗] COLOQUE A MENSAGEM QUE DESEJAS. USE PARA:*\n*- @user (menciona o membro novo)*\n*- @group (nome de grupo)*\n*- @desc (descrição de grupo)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome','setbv'] 
handler.admin = true
export default handler
