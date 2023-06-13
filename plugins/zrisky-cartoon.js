import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*[❗] RESPONDA UMA IMAGEM*'
if (!/image\/(jpe?g|png)/.test(mime)) throw `*[❗] TIPO DE ARQUIVO INVÁLIDO. TIPO USADO: ${mime}*`
let img = await q.download?.()
let url = await uploadImage(img)
m.reply('*[❗] Realizando pedido, aguarde...*')
const images = `https://api.lolhuman.xyz/api/editor/cartoon?apikey=ea7f3def37ca8dad8578250f&img=${encodeURIComponent(url)}`
let caption = `*⎔┉━「 𝐏𝐇𝐌𝐀𝐊𝐄𝐑 」━┉⎔*
*💟 EFEITO:* ${text}`
conn.sendButton(m.chat, caption, wm, images, [['Apagar', `${usedPrefix}delete`]], m)
}
handler.command = /^(cartoon)$/i
export default handler
const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
