import fs from 'fs'
import fetch from 'node-fetch'
const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default
let handler= async (m, { conn, args, text, command, usedPrefix: _p, participants, isPrems }) => {
const chave = JSON.parse(fs.readFileSync('./src/chaves.json'));
if (chave.includes(m.sender)) throw 'Você um código antes. Aguarde um dia para tentar outro.'
const chaves = JSON.parse(fs.readFileSync('./src/chaves.json'));
if (!text.lenght < 1) return m.reply('Coloque uma chave válida da BOT e ganhe um tanto de dia(s) como ViP.\n\nExemplo:\n'+_p+command+' malia-ativacao.31dias')
if (!chaves.includes(args[0])) {
  return m.reply('Essa chave não existe ou já foi ativada!');
}
let who = m.sender
let user = global.db.data.users[who] 
let name = await '@' + who.split`@`[0]
// Remove a chave especificada do array
chaves.splice(chaves.indexOf(args[0]), 1);
// Escreve o novo array no arquivo JSON
fs.writeFileSync('./src/chaves.json', JSON.stringify(chaves));
var hora1 = 60 * 60 * 1000 * 1
var dia1 = 24 * hora1 * 1 // 1 día
var semana1 = 7 * dia1 * 1 // 1 semana
var quinze = 15 * dia1 * 1 // 1 semana
var mes1 = 30 * dia1 * 1 // 1 mes
var now = Date.now()
m.reply('_Chave resgata com sucesso!!_')
let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'Malia - Robot', 'jpegThumbnail': null}}} 
if (now < user.premiumTime) user.premiumTime = dia1
    else user.premiumTime = now + dia1
    user.premium = true
    let timeLeft = (user.premiumTime - now) / 1000 / 60 / 60 // tiempo restante en horas
    let textprem1 = `*✅ PREMIUM ADICIONADO!!!*\n\n*👤 USUÁRIO: ${name}*\n*🕐 TEMPO: 1 dia*\n*📉 RESTAM: ${timeLeft} horas*\n*🔑CHAVE: ${args[0]}*`
    m.reply(textprem1, null, { mentions: conn.parseMention(textprem1) })
    conn.sendMessage(`120363065213506525@g.us`, {text:textprem1, mentions: [m.sender], quoted: fakemek})
}


 //await fs.unlinkSync(`./tel-${m.chat}.txt`)
//conn.sendButton(m.chat, kkk+`\n\n*• USUÁRIO:* @${m.sender.split("@")[0]}\n*• BY:* @558582385190`, 'Malia-Robot', null, [['🗑️ Deletar', '#d'],['📋 Copiar',`#cenviar ${kkk}\n\n*• USUÁRIO:* @${m.sender.split("@")[0]}\n*• BY:* @558582385190`]], null, {mentions: [m.sender, '558582385190@s.whatsapp.net']})

//await conn.reply(m.chat, `*[ ❗ ] Enviado com sucesso ${command.toUpperCase()} 𝙰 ${send}*`, m, { mentions: [m.sender]})
handler.command = /^(chave)$/i
export default handler

async function formatTime(ms) {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    let timeString = '';
    if (days) { timeString += `${days} día${days > 1 ? 's' : ''} `; }
    if (hours) { timeString += `${hours} hora${hours > 1 ? 's' : ''} `; }
    if (minutes) { timeString += `${minutes} minuto${minutes > 1 ? 's' : ''} `; }
    if (seconds) { timeString += `${seconds} segundo${seconds > 1 ? 's' : ''} `; }
    return timeString.trim(); }