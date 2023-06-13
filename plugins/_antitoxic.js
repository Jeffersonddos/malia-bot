const toxicRegex = /puto|puta|lixo|estupido|imbecil|tmnc|mrd|buceta|fodase|cp|vagabund/i

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup)
        return !1
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isToxic = toxicRegex.exec(m.text)
    
    if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
       user.warn += 1
       if (!(user.warn >= 5)) await m.reply(`${user.warn == 1 ? `O usuário *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`} enviou uma palavra proibida (${isToxic}).\n*Ação*: Advertência ${user.warn}/5* ❕`, false, { mentions: [m.sender] })
    }
    
    if (user.warn >= 5) {
       user.warn = 0
       await m.reply(`*@${m.sender.split`@`[0]}* superou as 5 advertências.\n*Ação:* Banido ❗`, false, { mentions: [m.sender] })
       user.banned = true
       await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       //await this.updateBlockStatus(m.sender, 'block')
    }
    return !1
}
