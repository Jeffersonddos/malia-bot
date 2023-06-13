import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*[ ❗ ] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝚅ID𝙴𝙾 𝙾 𝙰𝚄𝙳𝙸𝙾 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙰 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*[ ❗ ] Ocorreu um erro. Tente novamente mais tarde.*'
if (!media && !/audio/.test(mime)) throw '*[ ❗ ] Ocorreu um erro. Tente novamente mais tarde.*'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*[ ❗ ] Ocorreu um erro. Tente novamente mais tarde.*'
if (!audio.data && !/video/.test(mime)) throw '*[ ❗ ] Ocorreu um erro. Tente novamente mais tarde.*'
let aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
if (!aa) return conn.sendMessage(m.chat, { audio: { url: media }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^to(vn|(ptt)?)$/i
export default handler
