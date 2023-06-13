import fetch from 'node-fetch'
import { WAMessageStubType } from '@adiwajshing/baileys'
import PhoneNumber from 'awesome-phonenumber'
import chalk from 'chalk'
import { watchFile } from 'fs'
let handler = m => m

handler.before = async (m) => {
let isMedia = /sticker/
let chat = global.db.data.chats[m.chat]
if (chat.simi) {
if (m.fromMe) return
if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
let textodem = m.text  
try {
let ressimi = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(textodem)}&lc=pt`)
let data = await ressimi.json(); 
if (data.success == 'Eu n\u00e3o resposta. Por favor me ensine.') return// m.reply(`${lol}`) /* EL TEXTO "lol" NO ESTA DEFINIDO PARA DAR ERROR Y USAR LA OTRA API */
if (data.success == 'please enter the text - text=hello') return
await m.reply(data.success.replace('simsimi', 'Malia').replace('Simsimi', 'Malia').replace('sim simi', 'Malia'))
} catch {
/* SI DA ERROR USARA ESTA OTRA OPCION DE API DE IA QUE RECUERDA EL NOMBRE DE LA PERSONA */
if (textodem.includes('Hola')) textodem = textodem.replace('Hola', 'Hello')
if (textodem.includes('hola')) textodem = textodem.replace('hola', 'hello')
if (textodem.includes('HOLA')) textodem = textodem.replace('HOLA', 'HELLO')
let reis = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&dt=t&q=" + textodem)
let resu = await reis.json()  
let nama = m.pushName || '1'
let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" + nama + "&msg=" + resu[0][0][0])
let res = await api.json()
let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&dt=t&q=" + res.cnt)
let resu2 = await reis2.json()
await m.reply(resu2[0][0][0])}
return !0
}

return true
}
export default handler
