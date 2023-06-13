import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[ ❗ ] EXEMPLO: ${usedPrefix + command} minecraft*`
const res = await googleImage(text)
let image = await res.getRandom()
let link = image
let captionn = `🔎 *RESULTADO DE:* ${text}\n🔗 *LINK* ${link}\n🌎 *BUSCA:* Google`
conn.sendMessage(m.chat, { image: { url: link }, caption: captionn }, m)
//conn.sendButton(m.chat, captionn, author, link, [['🎐 | PRÓXIMA', `#imagen ${text}`]], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagem)$/i
export default handler
