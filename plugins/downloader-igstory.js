let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[ ❗ ] COLOQUE O NOME DE USUÁRIO DO INSTAGRAM*`
await m.reply(global.wait)    
const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`)
var anu = await res.json()
var anuku = anu.result
if (anuku == '') return m.reply('*Usuário inválido. Também pode não ter enviado nenhum story ou a conta ser privada.*')  
for (var i of anuku) {
let res = await axios.head(i)
let mime = res.headers['content-type']
if (/image/.test(mime)) await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => { return m.reply('*[❗] Usuário inválido ou sem stories.*')})
if (/video/.test(mime)) await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => { return m.reply('*[❗] Usuário inválido ou sem stories.*')})
}}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria' ]
export default handler
