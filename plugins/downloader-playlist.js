import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `*[ ❗ ] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/TÍTULO 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Begin you*`
try {
const { video } = await youtubeSearch(text)
const listSections = []
let teks = [...video ].map(v => {
switch (v.type) {
case 'video': {
listSections.push([`${v.title}`, [
['VIDEO 🎥', `${usedPrefix}ytmp4 ${v.url}`, `baixar: ${v.title} (${v.url})`],
['VIDEODOC 🎥', `${usedPrefix}ytmp4doc ${v.url}`, `baixar: ${v.title} (${v.url})`],    
['AUDIO 🎧', `${usedPrefix}ytmp3 ${v.url}`, `baixar: ${v.title} (${v.url})`],
['AUDIODOC 🎧', `${usedPrefix}ytmp3doc ${v.url}`, `baixar: ${v.title} (${v.url})`]
]])
}}}).filter(v => v).join('\n\n========================\n\n')
conn.sendList(m.chat, '🌪 *RESULTADOS ENCONTRADOS*', `Sua pesquisa: ${args.join(" ")}`, 'Escolha uma das opções e clique em enviar', '🌬 Resultados', listSections, m)
} catch {
try {     
let get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)
let get_result22 = get_result.result 
const listSerch = []
const listSerch2 = []
const listSerch3 = []
const listSerch4 = []
let teskd = `Música relacionada com: ${args.join(" ")}`
const sections = [{ title: `|－－－－－{ ＡＵＤＩＯ }－－－－－|`, rows: listSerch }, { title: `|－－－－－{ ＶＩＤＥＯ }－－－－－|`, rows: listSerch2 }, { title: `|－－{ ＤＯＣＵＭＥＮＴＯ  ＭＰ３ }－－|`, rows: listSerch3 }, { title: `|－－{ ＤＯＣＵＭＥＮＴＯ  ＭＰ４ }－－|`, rows: listSerch4 }]
for (let x of get_result22) {
listSerch.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3 https://www.youtube.com/watch?v=${x.videoId}`})
listSerch2.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4 https://www.youtube.com/watch?v=${x.videoId}`})
listSerch3.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3doc https://www.youtube.com/watch?v=${x.videoId}`})
listSerch4.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4doc https://www.youtube.com/watch?v=${x.videoId}`})}
const listMessage = { text: teskd, footer: 'Escolha uma das opções e clique em enviar', title: " 『 𝗠𝗨𝗦𝗜𝗖𝗔 𝗥𝗘𝗟𝗔𝗖𝗜𝗢𝗡𝗔𝗗𝗔 』", buttonText: "[♦ 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 ♦]", sections }
conn.sendMessage(m.chat, listMessage, { quoted: m })    
} catch(e) {
console.log(e)    
await m.reply('*[ 🦓 ] - Ocorreu um erro. Tente novamente mais tarde!*')
}}}
handler.command = /^playlist|playlist2$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
