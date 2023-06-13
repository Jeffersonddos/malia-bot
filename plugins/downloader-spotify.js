import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[ 👻 ] - Coloque o nome de alguma música*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists } = json2.result
let spotifyi = `❒═════❬ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 ❭═════╾❒\n\n✨ *TÍTULO:* ${title}\n🗣️ *ARTISTA:* ${artists}\n🌐 *LINK*: ${link}\n💚 *DOWNLOAD:* ${json2.result.link}`
conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)
let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch {
throw '*Não consegui encontrar a música...*'
}}
handler.command = /^(spotify2|music)$/i
export default handler
