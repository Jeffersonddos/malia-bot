import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*🧃 - Faça uma pergunta após o digitar o comando.*`    
try {
m.react('✨')
m.reply('⚙ Gerando resposta, aguarde.')
let tioress22 = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=ea7f3def37ca8dad8578250f&text=${text}&system=assuntos%20diversos%20em%20portugues`)
let hasill22 = await tioress22.json()
m.reply(`${hasill22.result.replace('Mohon maaf iBeng belum tau','Desculpe, não posso ajudar')}`.trim())         
} catch (efe4) {   
console.log(efe4)
m.react('⚠')  
}}
handler.command = ['openai2', 'chatgpt2', 'ia2', 'robot2', 'Malia', 'MaliaBot']
handler.diamond = true
export default handler
