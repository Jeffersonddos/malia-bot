let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
try {  
let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'Malia - Robot', 'jpegThumbnail': null}}}
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (!code) throw '*[ ⚠️ ] LINK INCORRETO*\n*👉🏻 COLOQUE UM LINK VÁLIDO*\n\n*EXEMPLO:*\n*#join https://chat.whatsapp.com/BhdfTOJHUxR9I4hT1b8aOv*'
if (isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code).then(res => conn.reply(res, "🎉 Grupo aceito com sucesso!\n\n✅ O seu grupo foi APROVADO!", m, {mentions: [m.sender,'558582385190@s.whatsapp.net']}));
await m.reply(`*A BOT ENTROU NO GRUPO COM SUCESSO! ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗ 𝐈𝐍𝐅𝐎 ❗] NOVA SOLICITAÇÃO DE GRUPO [ ❗ ]*\n\n*—◉ SOLICITANTE:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ LINK DO GRUPO:* ' + link, jid)
await m.reply('*[ ❗ ] O LINK DO GRUPO FOI ENVIADO PARA MEU DEV*\n\n*👉🏻 SEU GRUPO ESTÁ EM AVALIAÇÃO.*\n\n*[ ❗ ] ALGUMAS RAZÕES PARA NÃO SER ACEITO:*\n*1.- A BOT ESTÁ CHEIA*\n*2.- VOCÊ TIROU RECENTEMENTE DO GRUPO*\n*3.- O LINK DO GRUPO FOI REVOGADO*\n*4.- A BOT NÃO ENTRARÁ POR DECISÃO DO DONO*\n\n*👉🏻 TENHA EM MENTE QUE NÃO HÁ SÓ ESTE GRUPO PARA SER AVALIADO. TENHA PACIÊNCIA.*')
}
} catch(e) {
    console.log(e)
throw '*[ ❗ ] DESCULPE, OCORREU UM ERRO!*'  
}}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|permitir|entrar|aprovar$/i
handler.private = true 
export default handler
