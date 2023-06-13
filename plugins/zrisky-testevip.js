import fs from 'fs'
import fetch from 'node-fetch'
const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default
const antilinkhard = JSON.parse(fs.readFileSync('./src/teste.json'))
let handler= async (m, { conn, args, text, command, usedPrefix, participants, isPrems }) => {
const buttons = [
{ buttonId: `#vipp tabela`, buttonText: { displayText: '💎 Adquirir ViP' }, type: 1 }, { buttonId: `#testevipp`, buttonText: { displayText: '🔥 Ativar Teste' }, type: 1 }, ] 
let texto1 = `🍫 - Este comando é exclusivo apenas para usuários *Premium*!\nAdquira já o seu *ViP* e tenha acesso à todos os comandos *Premium*!\n👤 *Contato:*\nhttps://wa.me/558582385190`.trim()
let buttonMessage = { "document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} 
if (isPrems) throw 'Boas notícias!\nVocê ainda é um usuário Premium!'
if (antilinkhard.includes(m.sender)) throw 'Você já ativou seu teste ViP.\nCompre Premium com meu Desenvolvedor.\nWA.me/558582385190'
let who = m.sender
let user = global.db.data.users[who] 
let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'Malia - Robot', 'jpegThumbnail': null}}} 
let name = await '@' + who.split`@`[0]
antilinkhard.push(m.sender)
let txt = text.replace('@' + who.split`@`[0], '').trim()
fs.writeFileSync('./src/teste.json', JSON.stringify(antilinkhard))
var hora1 = 60 * 60 * 1000 * 1 // 1 hora
var now = Date.now()
m.reply(`*✅ TESTE PREMIUM ATIVADO!!!*\n\n*👤 USUÁRIO: ${name}*\n*🕐 TEMPO: 1 hora*\n*📉 RESTAM: 3600 segundos*`)
if (now < user.premiumTime) user.premiumTime = hora1
    else user.premiumTime = now + hora1
    user.premium = true
    let timeLeft = (user.premiumTime - now) / 1000 // tiempo restante en segundos
    let textprem1 = `*✅ TESTE PREMIUM ATIVADO!!!*\n\n*👤 USUÁRIO: ${name}*\n*🕐 TEMPO: 1 hora*\n*📉 RESTAM: ${timeLeft} segundos*`
    //m.reply(textprem1, null, { mentions: conn.parseMention(textprem1) })
    await conn.sendMessage(`120363140192130451@g.us`, {text:textprem1, mentions: [m.sender], quoted: fakemek})
}


 //await fs.unlinkSync(`./tel-${m.chat}.txt`)
//conn.sendButton(m.chat, kkk+`\n\n*• USUÁRIO:* @${m.sender.split("@")[0]}\n*• BY:* @558582385190`, 'Malia-Robot', null, [['🗑️ Deletar', '#d'],['📋 Copiar',`#cenviar ${kkk}\n\n*• USUÁRIO:* @${m.sender.split("@")[0]}\n*• BY:* @558582385190`]], null, {mentions: [m.sender, '558582385190@s.whatsapp.net']})

//await conn.reply(m.chat, `*[ ❗ ] Enviado com sucesso ${command.toUpperCase()} 𝙰 ${send}*`, m, { mentions: [m.sender]})
handler.command = /^(testevipp)$/i
handler.fail = null
export default handler

