import fs from 'fs'
import fetch from 'node-fetch'
const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, args, text, command, usedPrefix, participants, isPrems }) => {
//if (isPrems) throw '🤩 Boas Notícias!\nVocê já é um usuário *Premium*!'
let type = (args[0] || '').toLowerCase()
  switch(type){
    case 'tabela':{
let pp = await(await fetch('https://i.ibb.co/LQG7wyj/Sem-T-tulo-1.png')).buffer()
let img = await(await fetch('https://play-lh.googleusercontent.com/Zp0Z-NbmWx_8o8PKYLNZHjqKNNVGKPcP5GKtvTGIa3LcbewkqZI0XHrF00xLnjIRww')).buffer()
let msg = `🥰 Olá!
🐈 ~ Caso você deseja ser um membro *Premium*, veja algumas coisas que irão ser acrescentada em seu plano:
🥀 - *BOT em seu Grupo*.
🥀 - Comandos de *Consultas*.
🥀 - Comandos *Exclusivos para ViP*.
🥀 - Comandos *Premium em Geral*.

✅ ~ *Tabela de Valores*
☑ *1 hora* ➔ Gratuito
☑ *1 dia* ➔ R$ 7,00
☑ *7 dias* ➔ R$ 10,00
☑ *15 dias* ➔ R$ 15,00
☑ *31 dias* ➔ R$ 30,00
☑ *93 dias* ➔ R$ 50,00
☑ *365 dias* ➔ R$ 90,00

➣ Caso deseja continuar, clique abaixo:`
const buttons = [
  { buttonId: `#vipp comprar`, buttonText: { displayText: '💰 Comprar Agora!' }, type: 1 }, ] 
let buttonMessage = { "text": msg,  "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} 
//conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, {image: pp, caption:msg.trim()+'\nhttps://wa.me/558582385190?text=Olá,%20Risky!%20Tenho%20interesse%20no%20ViP.',contextInfo: {
  mentionedJid: [m.sender],
  externalAdReply: {
  showAdAttribution: true,
  mediaType: 'VIDEO',
  mediaUrl: null,
  title: 'ᴹᴬᴸᴵᴬ ⁻ ᴿᴼᴮᴼᵀ',
  body: null,
  thumbnail: img,
  sourceUrl: `https://www.instagram.com/david.sousz`
  }}}, { quoted: m })
}
break

case 'comprar':{
const delay = time => new Promise(res=>setTimeout(res,time));
//https://telegra.ph/file/d94d486ecdb1dfb4e5e86.png
let pp = await(await fetch('https://telegra.ph/file/d94d486ecdb1dfb4e5e86.png')).buffer()
let img = await(await fetch('https://telegra.ph/file/d94d486ecdb1dfb4e5e86.png')).buffer()
  let buttons = [
    { buttonId: '#d', buttonText: { displayText: '💸 Cancelar Transação' }, type: 1 }]
    let buttonMessage = {
    image: pp,
    caption: 'Escaneie o Código QR.\nChave: 85982123790\nTipo: Telefone\nBanco: PicPay\n\nEssa mensagem vai ser deletada em 60 segundos.',
    mentions: [m.sender],
    footer: `Envie o Comprovante:\nhttps://wa.me/558582385190`,
    buttons: buttons,
    headerType: 4,
    contextInfo: {
    mentionedJid: [m.sender],
    externalAdReply: {
    showAdAttribution: true,
    mediaType: 'VIDEO',
    mediaUrl: null,
    title: 'Enviar Comprovante',
    body: null,
    thumbnail: img,
    sourceUrl: `https://wa.me/558582385190`
    }}}
let feel = conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await delay(60000)
conn.sendMessage(m.sender, { delete: { remoteJid: m.chat, fromMe: false, id: feel, participant: feel }})
}
break
//await conn.reply(m.chat, `*[ ❗ ] Enviado com sucesso ${command.toUpperCase()} 𝙰 ${send}*`, m, { mentions: [m.sender]})  
}
}
handler.command = ['vipp']
export default handler

