import fs from 'fs'
import fetch from 'node-fetch'

const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default

let handler= async (m, { conn, args, text, command, usedPrefix, participants, isPrems }) => {
const buttons = [
{ buttonId: `#vipp tabela`, buttonText: { displayText: '💎 Adquirir ViP' }, type: 1 }, { buttonId: `#testevipp`, buttonText: { displayText: '🔥 Ativar Teste' }, type: 1 }, ] 
let texto1 = `🍫 - Este comando é exclusivo apenas para usuários *Premium*!\nAdquira já o seu *ViP* e tenha acesso à todos os comandos *Premium*!\n👤 *Contato:*\nhttps://wa.me/558582385190`.trim()
let buttonMessage = { "document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} 
//if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, {"document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} , { quoted: m })

let consu = text.replaceAll(' ','')
let consul = consu.replaceAll('-','')
if (consul.length > 7) throw 'Placa inválida! Digite uma placa válida de 8 caractéres!'
if (consul.length < 7) throw 'Placa inválida! Digite uma placa válida de 8 caractéres!'
m.reply('Consultando, por favor aguarde...')
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)
try{
let placa = await fetch('https://japa-apis.herokuapp.com/puxar/placa?token=@Riskyzin&placa=' + consul)
let placak = await placa.json()
//let placa = placa1.json()
if (placak.resultado == 'Não encontrado'){
    conn.reply(m.chat, `\`\`\`⚠️ PLACA NÃO ENCONTRADA!\`\`\``);
return;
}
let retorno = `${placak.resultado.replace('__POSSUIDOR__','*👤 POSSUIDOR*').replace('__PROPRIETÁRIO__','*👨 PROPRIETÁRIO*')}\n\nDONO: @558582385190\nUSER: @${m.sender.split("@")[0]}`
conn.reply(m.chat, "`\`\`\`🔍 *CONSULTA DE PLACA*\n\n🚙 *DADOS DO VEÍCULO*\n\n"+readMore +retorno.toUpperCase()+`\`\`\``, m, {mentions: [m.sender,'558582385190@s.whatsapp.net']});
//m.reply(m.chat, "🔍 *PLACA ENCONTRADA*\n\n🚙 *DADOS DO VEÍCULO*\n\n"+readMore +retorno.toUpperCase(),{mentions: [m.sender, '558582385190@s.whatsapp.net']})

//m.reply("🔍 *PLACA ENCONTRADA*\n\n🚙 *DADOS DO VEÍCULO*\n"+readMore +retorno.toUpperCase(), false, {mentions: [m.sender, '558582385190@s.whatsapp.net']})
}catch(e){
console.log(e)
m.reply("⚠️ PLACA NÃO ENCONTRADA")
}
}
//await conn.reply(m.chat, `*[ ❗ ] Enviado com sucesso ${command.toUpperCase()} 𝙰 ${send}*`, m, { mentions: [m.sender]})
handler.command = /^(placa)$/i
handler.tags = ['consultas']
export default handler

