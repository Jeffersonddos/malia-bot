import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*[❗] RESPONDA UMA IMAGEM*'
if (!/image\/(jpe?g|png)/.test(mime)) throw `*[❗] TIPO DE ARQUIVO INVÁLIDO. TIPO USADO: ${mime}*`
if (!text) return m.reply(`*[ ❗ ] Como usar o comando?*
—◉ #phmaker (opção) <responder / marcar uma imagem>

*Exemplo:*
—◉ ${usedPrefix + command} artist_in_the_dark <responder / marcar uma imagem>

*< LISTA DE OPÇÕES />*
° ඬ⃟💫 ${usedPrefix + command} xpro2
° ඬ⃟💫 ${usedPrefix + command} cartoon
° ඬ⃟💫 ${usedPrefix + command} lofi
° ඬ⃟💫 ${usedPrefix + command} moon
° ඬ⃟💫 ${usedPrefix + command} beautiful
° ඬ⃟💫 ${usedPrefix + command} rainbow
° ඬ⃟💫 ${usedPrefix + command} pixelate
° ඬ⃟💫 ${usedPrefix + command} triggered
° ඬ⃟💫 ${usedPrefix + command} triggered2
° ඬ⃟💫 ${usedPrefix + command} kelvin
° ඬ⃟💫 ${usedPrefix + command} wanted
° ඬ⃟💫 ${usedPrefix + command} wasted`)
m.reply('*[❗] Realizando pedido, aguarde...*')
let img = await q.download?.()
let url = await uploadImage(img)
const images = `https://api.lolhuman.xyz/api/filter/${encodeURIComponent(text)}?apikey=ea7f3def37ca8dad8578250f&img=${encodeURIComponent(url)}`
let caption = `*⎔┉━「 𝐏𝐇𝐌𝐀𝐊𝐄𝐑 」━┉⎔*
*💟 EFEITO:* ${text}`
conn.sendMessage(m.chat, { image: await(await fetch(images)).buffer(), caption: caption}, { mentions: [m.sender] })
//conn.sendButton(m.chat, caption, wm, images, [['💫 MAIS OPÇÕES 💫', `${usedPrefix}phmakerlist`]], m)
}
handler.command = /^(phmaker|phmarker|phmarke|phmake)$/i
export default handler
const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
