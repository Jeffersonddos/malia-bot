//import db from '../lib/database.js'

let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { antiNota, audios, antiLink2, autosticker, antiviewonce, modohorny, modoadmin, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = ` 
┌──「 *INFO GROUP* 」
▢ *♻️ID:*
   • ${groupMetadata.id}
▢ *🔖NOME* : 
• ${groupMetadata.subject}
▢ *👥Membros* :
• ${participants.length}
▢ *🤿Dono do grupo:*
• @${owner.split('@')[0]}
▢ *🕵🏻‍♂️Admins:*
 ${listAdmin}
▢ *🪢 Configurações do Grupo:*
• ${isBanned ? '✅' : '❎'} Banido
• ${welcome ? '✅' : '❎'} Boas-vindas
• ${detect ? '✅' : '❎'} Detector
• ${audios ? '✅' : '❎'} Áudios 
• ${del ? '❎' : '✅'} Anti Delete
• ${antiNota ? '✅' : '❎'} Anti Notas Fakes
• ${antiLink ? '✅' : '❎'} Anti Link WhatsApp
• ${antiLink2 ? '✅' : '❎'} Anti Link Tudo
• ${antiviewonce ? '✅' : '❎'} Anti visualizaçãp única
• ${modohorny ? '✅' : '❎'} Modo Nsfw/Horny
• ${modoadmin ? '✅' : '❎'} Modo Admin
• ${autosticker ? '✅' : '❎'} Auto Figurinha

*▢  📬 Mensagens Configuradas:*
• Boas Vindas: ${sWelcome}
• Saída: ${sBye}
• Promovido: ${sPromote}
• Rebeixado: ${sDemote}

▢ *📌Descrição* :
   • ${groupMetadata.desc?.toString() || 'Sem descrição'}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['infogrupo', 'groupinfo', 'infogp'] 
handler.group = true

export default handler