import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*🌟 Exemplo: ${usedPrefix + command} licor 43*`
try {
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch('https://api.akuari.my.id/search/lirik?query='+text)
let json = await res.json()
let letratexto =`Título: ${json.result[0].judul.replace('Lyrics','')}\n\nLetra: ${json.result[0].lirik}`.trim()
let linkresult = monospace + result.link + monospace
m.reply('LETRA DA SUA MÚSICA:\n\n'+monospace +letratexto+'\n\nDev: @david.sousz'+monospace)
} catch(e) {
    console.log(e)
await m.reply('*Letra não encontrada.*')}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
export default handler
let mono = '`' + '`' + '`'
global.monospace = mono
