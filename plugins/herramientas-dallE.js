let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗] COLOQUE O TEXTO QUE QUEIRA QUE EU FASSE:*\n\n*—◉ EXEMPLO*\n*◉ ${usedPrefix + command} RATO COM RELOGIO*`
try {
m.reply('*[❗] AGUARDE UM INSTANTE...*')
let tiores = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
throw `*[❗] OCORREU UM ERRO. TENTE NOVAMENTE MAIS TARDE!*`
}}
handler.command = ['dall-e', 'dalle', 'ia2', 'ia-img', 'openai3']
export default handler
