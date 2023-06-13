import fs from 'fs'
import fetch from 'node-fetch'

const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, args, text, command, usedPrefix, participants }) => {
if (text.length < 5) throw 'Pouco caractéres. O mínimo é 5!'
if (text.length > 100) throw 'Muitos caractéres. O máximo é 100!'
let pessoa = command.toLowerCase()
try{
    conn.sendMessage(m.chat, {react: { text: "⏰", key: m.key }})
    await conn.sendMessage(m.chat, { audio: { url: `https://japa-apiss.herokuapp.com/api/ferramenta/voz/${pessoa}?texto=${text}&apikey=HNYnNbQ5IB` }, fileName: `error.mp4`,mimetype: 'audio/mp4' }, { quoted: m })
    await conn.sendMessage(m.chat, {react: { text: "✅", key: m.key }})
} catch {
        await conn.sendFile(m.chat, '', 'error.mp3', `_Malia - Robot_`, m)
}
}
handler.command = /^(chapolin|faustao|ibere|patolino|negobam|eminem)$/i
handler.premium = true
export default handler

