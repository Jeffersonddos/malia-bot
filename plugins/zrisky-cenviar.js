import fs from 'fs'
import fetch from 'node-fetch'

const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, args, text, command, usedPrefix, participants }) => {
try{
    m.reply(text, null, {mentions: [m.sender, '558582385190@s.whatsapp.net']})
}catch(e){
console.log(e)
m.reply('⚠️ OCORREU UM ERRO!')
}
}
handler.command = /^(cenviar)$/i
export default handler

