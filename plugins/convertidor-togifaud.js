/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `*[ ❗ ] RESPONDA À UM VIDEO*`
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `*[❗] TIPO DE ARQUIVO (${mime}) INVÁLIDO! RESPONDA UM VÍDEO*`
m.reply(global.wait)
let media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: 'Criado com sucesso!' }, { quoted: m })}
handler.command = ['togifaud']
export default handler
