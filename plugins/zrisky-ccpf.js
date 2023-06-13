import fetch from 'node-fetch'
let handler = async (m, { conn, isPrems, text, command }) => {
  const buttons = [
    { buttonId: `#vipp tabela`, buttonText: { displayText: '💎 Adquirir ViP' }, type: 1 }, { buttonId: `#testevipp`, buttonText: { displayText: '🔥 Ativar Teste' }, type: 1 }, ] 
    let texto1 = `🍫 - Este comando é exclusivo apenas para usuários *Premium*!\nAdquira já o seu *ViP* e tenha acesso à todos os comandos *Premium*!\n👤 *Contato:*\nhttps://wa.me/558582385190`.trim()
    let buttonMessage = { "document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} 
//if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, {"document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} , { quoted: m })

let consu = text.replaceAll('.','')
  let consul = consu.replaceAll('-','')
if (consul < 1) return m.reply('Você deve digitar algo na frente!\nExemplo: /cpf 00000000272')
if (isNaN(consul)) return m.reply('Para consultar um CPF você deve por números válidos, não letras.')
if (consul.length > 11) throw '⚠️ *DIGITE UM CPF VÁLIDO!*'
if (consul.length < 11) throw '⚠️ *DIGITE UM CPF VÁLIDO!*'
m.reply('Consultando, por favor aguarde...')
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
try{
let stiker = false
  let reis = await fetch("https://japa-apis.herokuapp.com/puxar/cpf2?token=@Riskyzin&cpf=" + consul)
  let ping = await reis.json()
  let pong = ping.resultado
  let retornoo = pong.replaceAll('[+] ENDEREÇOS [+]','*🏡 ENDEREÇOS NO CPF*').replaceAll('[+] ENDEREÇO [+]','*🏡 ENDEREÇOS NO CPF*').replaceAll('[+] PARENTES [+]','*👥 PARENTES*').replaceAll('[+] EMPREGOS [+]','*👷 EMPREGOS*')
  let retornooo = retornoo.replaceAll('[+] REGISTRO GERAL [+]','*🪪 REGISTRO GERAL*').replaceAll('[+] EMAILS [+]','*📧 E-MAILS*').replaceAll('[+] PERFIL DE CONSUMO [+]','*💰 PERFIL DE CONSUMO*').replaceAll('((','(').replaceAll('))',')')
  let retornoooou = retornooo.replaceAll('[+] IRPF [+]','*💸 IMPOSTOS DE RENDA*').replaceAll('[+] VIZINHOS [+]','*🏘 VIZINHOS*').replaceAll('[+] TELEFONES [+]','*📞 TELEFONES NO CPF*').replaceAll('[+] CARTÕES AGREGADOS [+]','*💳 CARTÕES AGREGADOS*')
  let retorno = retornoooou.replaceAll('Inválido','⚠️ CPF NÃO ENCONTRADO')
  conn.reply(m.chat, '\`\`\`*🔎 CONSULTA DE CPF 🔎*\n\n*👤 INFORMAÇÕES PESSOAIS:*\n\n'+retorno+`\n-----\n\nDev: @558582385190\nUser: @${m.sender.split("@")[0]}\`\`\``, m, {mentions: [m.sender,'558582385190@s.whatsapp.net']});

 }catch(e){
  console.log(e)
    m.reply("⚠️ Ocorreu um erro no servidor. Temporáriamente Offline.")
    }
}
handler.command = ['cpf22']
handler.tags = ['consultas']
handler.fail = null
export default handler