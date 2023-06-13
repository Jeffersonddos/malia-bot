import fs from 'fs'
import fetch from 'node-fetch'
const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default
let handler  = async (m, { conn, args, text, command, usedPrefix, participants, isPrems }) => {
let ip = await fetch('http://ip-api.com/json/'+ text)
let ipz = await ip.json()
let qwe = '558893673497@s.whatsapp.net'
let kkk = `*🔎 IP ENCONTRADO*

🏡 *ENDEREÇO*

• *CIDADE:* ${ipz.city}\n• *TIMERZONE:* ${ipz.timezone}\n• *REGIÃO:* ${ipz.region}\n• *CEP:* ${ipz.zip}\n• *PAÍS:* ${ipz.country}\n• *ORGANIZAÇÃO:* ${ipz.org}\n• *ISP:* ${ipz.isp}

• *USUÁRIO:* @${m.sender.split`@`[0]}
• *BY:* @558893673497`
m.reply(kkk, false, { mentions: [m.sender, qwe] })
//await conn.reply(m.chat, `*[ ❗ ] Enviado com sucesso ${command.toUpperCase()} 𝙰 ${send}*`, m, { mentions: [m.sender]})  
}
handler.command = /^(ip)$/i
handler.tags = ['consultas']
export default handler

