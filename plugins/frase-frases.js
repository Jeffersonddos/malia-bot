import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
    
if (command == 'conselho') {
//let res = await fetch("https://zenzapis.xyz/randomtext/motivasi?apikey=hdiiofficial")
let res = await fetch(`https://latam-api.vercel.app/api/rand_aviso?apikey=ea7f3def37ca8dad8578250f`)
let json = await res.json()
let frase = json.aviso
let frase1 = await translate(frase, { to: 'pt', autoCorrect: true })
await m.reply(`"${frase1.text}"`)}

if (command == 'fraseromantica') {
let res = await fetch("https://api.zahwazein.xyz/randomtext/bucinquote?apikey=hdiiofficial")
let json = await res.json()
let frase = json.result.message
let frase1 = await translate(frase, { to: 'pt', autoCorrect: true }).catch(_ => null)
m.reply(`*╭─◆────◈⚘◈─────◆─╮*\n*❥  ${frase1.text}*\n*╰─◆────◈⚘◈─────◆─╯*`)}

if (command == 'historiaromantica') {  
try {    
let cerpe = await cerpen(`conto romântico`)
let storytime = await translate(cerpe.cerita, { to: 'es', autoCorrect: true }).catch(_ => null)
let titletime = await translate(cerpe.title, { to: 'es', autoCorrect: true }).catch(_ => null)
conn.reply(m.chat, `᭥🫐᭢ Título: ${titletime.text}
᭥🍃᭢ Autor: ${cerpe.author}
────────────────
${storytime.text}`, m)
} catch {
let err = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=Elabore+uma+historia+romantica+utilizando+o+nome+da+protragonista+como+malia&user=user-unique-id`)
let json = await err.json()
let fraseChat = json.result     
conn.reply(m.chat, fraseChat, m)
}}}
handler.tags = ['frases']
handler.command = handler.help = ['conselho', 'fraseromantica', 'historiaromantica']
export default handler
async function cerpen(category) {
return new Promise((resolve, reject) => {
let title = category.toLowerCase().replace(/[()*]/g, "")
let judul = title.replace(/\s/g, "-")
let page = Math.floor(Math.random() * 5)
axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
.then((get) => {
let $ = cheerio.load(get.data)
let link = []
$('article.post').each(function (a, b) { link.push($(b).find('a').attr('href'))})
let random = link[Math.floor(Math.random() * link.length)]
axios.get(random).then((res) => {
let $$ = cheerio.load(res.data)
let hasil = {
title: $$('#content > article > h1').text(),
author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
cerita: $$('#content > article > p').text()
}
resolve(hasil)})})})}
