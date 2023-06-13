import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/Messi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendMessage(m.chat, { image: { url: url }, caption: 'A não ⚽' })
//conn.sendButton(m.chat, "*Messi*", author, url, [['⚽ PRÓXIMO ⚽', `${usedPrefix + command}`]], m)
}
handler.help = ['messi']
handler.tags = ['internet']
handler.command = /^(messi)$/i
export default handler
