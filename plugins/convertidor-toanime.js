import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ""
if (!/image/g.test(mime)) throw '*[❗] RESPONDA À UMA IMAGEM*'
m.reply('*[ 🥰 ] - Convertendo sua imagem em anime...*')    
let data = await q.download?.()
let image = await uploadImage(data)
try {
let anime = `https://api-xcoders.site/api/maker/toonify?url=${image}&id=5&apikey=Frieren`
await conn.sendFile(m.chat, anime, 'error.jpg', null, m)
} catch (i) {
try {
let anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`
await conn.sendFile(m.chat, anime2, 'error.jpg', null, m) 
} catch (a) {    
try{    
let anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`
await conn.sendFile(m.chat, anime3, 'error.jpg', null, m) 
} catch (e) {
throw '*[😵] - Ocorreu um erro. Verifique se há algum rosto na imagem.*'
}}}}
handler.help = ["toanime"]
handler.tags = ["tools"]
handler.diamond = true
handler.exp = 100
handler.command = /^(jadianime|toanime|avatar)$/i
export default handler
