import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*🧃 - Faça uma pergunta após o digitar o comando.*`
m.react('✨')
try {
let IA2 = await fetch(`https://botcahx.cyclic.app/openai?text=${text}`)  
let IAR2 = await IA2.json()
let res = await api.json()
let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&dt=t&q=" + IAR2.result)
let resu2 = await reis2.json()
await m.reply(resu2[0][0][0].trim()) 
} catch {
try {   
let rrEes = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let jjJson = await rrEes.json()
let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&dt=t&q=" + jjJson.data.data)
let resu2 = await reis2.json()
await m.reply(resu2[0][0][0].trim())
} catch {      
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=ea7f3def37ca8dad8578250f&text=${text}&user=${m.sender}`)
let hasill = await tioress.json()
let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&dt=t&q=" + hasill.result)
let resu2 = await reis2.json()
await m.reply(resu2[0][0][0].trim())
} catch {        
throw `*⚠ Ocorreu um erro. Tente o comando ia2*`
}}}}
handler.command = ['openai', 'chatgpt', 'ia', 'ai']
export default handler
