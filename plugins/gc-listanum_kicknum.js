/*              Codigo Creado Por David Sousa 
      (https://instagram.com/david.sousz) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`*[❗] COLOQUE O PREFIXO DE ALGUM PAIS PARA PROCURAR O NÚMERO E BANIR, EX: ${usedPrefix + command} 55*`) 
if (isNaN(args[0])) return m.reply(`*[❗] COLOQUE O PREFIXO DE ALGUM PAIS PARA PROCURAR O NÚMERO E BANIR, EX: ${usedPrefix + command} 52*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`*[❗] NÃO HÁ NINGUEM COM +${lol}*`)
let numeros = ps.map(v=> '⭔ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listanum": 
conn.reply(m.chat, `*LISTA DOS NUMEROS COM PREFIXO +${lol} QUE ESTÃO NO GRUPO:*\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum":  
if (!bot.restrict) return m.reply('*[ ❗ ] MEU DONO NÃO HABILITOU A FUNÇÃO DE RESTRIÇÃO. CONTATE-O PARA ATIVÁ-LA!*') 
if (!isBotAdmin) return m.reply('*[ ❗ ] A BOT NÃO É ADM, NÃO POSSO BANIR*')          
conn.reply(m.chat, `*[❗] INICIANDO BANIMENTO EM MASSA DE +${lol}, A CADA 1(UM) SEGUNDO, UM SERÁ REMOVIDO.*`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} já foi removido*`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(100)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply('*[❗] Erro*')}
break            
}}
handler.command = /^(listanum|kicknum)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
