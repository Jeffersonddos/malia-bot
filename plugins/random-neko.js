import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
let nek = ne.split('\n')
let neko = await nek[Math.floor(Math.random() * nek.length)]
if (neko == '') throw 'Error'
conn.sendMessage(m.chat, { image: { url: neko }, caption: 'Nyaww~ 🐾💗' })}
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
export default handler
