let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
  else who = m.chat
  let textpremERROR = `*[ ❗ ] MARQUE UMA PESSOA POR @ OU MSG*\n\n*—◉ EX:*\n*◉ ${usedPrefix + command} @${m.sender.split`@`[0]} 1*\n*◉ ${usedPrefix + command} 1 <responder a mensagem>*`    
  if (!who) return m.reply(textpremERROR, null, { mentions: conn.parseMention(textpremERROR) })
   
  let user = global.db.data.users[who] 
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  //let name = await conn.getName(who)
  let name = await '@' + who.split`@`[0]

  let ERROR = `*[❗] O USUÁRIO ${'@' + who.split`@`[0]} NÃO SE ENCONTRA NA MINHA DATABASE*`
  if (!user) return m.reply(ERROR, null, { mentions: conn.parseMention(ERROR) })     
  
  var segundos10 = 10 * 1000; // 10 segundos en milisegundos
  var hora1 = 60 * 60 * 1000 * txt // 1 hora
  var dia1 = 24 * hora1 * txt // 1 día
  var semana1 = 7 * dia1 * txt // 1 semana
  var mes1 = 30 * dia1 * txt // 1 mes
  var now = Date.now()

  if (command == 'addprem' || command == 'addvip') {
    if (now < user.premiumTime) user.premiumTime += hora1
    else user.premiumTime = now + hora1
    user.premium = true
    let timeLeft = (user.premiumTime - now) / 1000 // tiempo restante en segundos
    let textprem1 = `*✅ NOVO USUÁRIO ADICIONADO!!!*\n\n*👤 USUÁRIO: ${name}*\n*🕐 TEMPO: ${txt} hora(s)*\n*📉 RESTAM: ${timeLeft} segundos*`
    m.reply(textprem1, null, { mentions: conn.parseMention(textprem1) })}
    
  if (command == 'addprem2' || command == 'addvip2') {
    if (now < user.premiumTime) user.premiumTime += dia1
    else user.premiumTime = now + dia1
    user.premium = true
    let timeLeft = (user.premiumTime - now) / 1000 / 60 / 60 // tiempo restante en horas
    let textprem2 = `*✅ NOVO USUÁRIO ADICIONADO!!!*\n\n*👤 USUÁRIO: ${name}*\n*🕐 TEMPO: ${txt} dia(s)*\n*📉 RESTAM: ${timeLeft} horas*`
    m.reply(textprem2, null, { mentions: conn.parseMention(textprem2) })}
  
  if (command == 'addprem3' || command == 'addvip3') {
    if (now < user.premiumTime) user.premiumTime += semana1
    else user.premiumTime = now + semana1
    user.premium = true
  formatTime(user.premiumTime - now).then(timeleft => {
    let textprem3 = `*✅ NOVO USUÁRIO ADICIONADO!!!*\n\n*👤 USUÁRIO: ${name}*\n*🕐 TEMPO: ${txt} semana(s)*\n*📉 RESTAM: ${timeleft}*`
    m.reply(textprem3, null, { mentions: conn.parseMention(textprem3) })})}
  
  if (command == 'addprem4' || command == 'addvip4') {
    if (now < user.premiumTime) user.premiumTime += mes1
    else user.premiumTime = now + mes1
    user.premium = true
  formatTime(user.premiumTime - now).then(timeleft => {
    let textprem4 = `*✅ NOVO USUÁRIO ADICIONADO!!!*\n\n*👤 USUÁRIO: ${name}*\n*🕐 TEMPO: ${txt} mês(es)*\n*📉 RESTAM: ${timeleft}*`
    m.reply(textprem4, null, { mentions: conn.parseMention(textprem4) })})}
}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = ['addprem', 'addvip', 'addprem2', 'addvip2', 'addprem3', 'addvip3', 'addprem4', 'addvip4'] 
handler.group = true
handler.rowner = true
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
