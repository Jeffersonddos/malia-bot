import fs from 'fs'
import fetch from 'node-fetch'

const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, args, text, command, usedPrefix, participants }) => {
let pon = text.replace('-','')
if (pon.length < 8) return m.reply('coloque um cep válido')
if (isNaN(pon)) return m.reply('Para consultar um CEP você deve por números válidos, não letras.')
let pika = await fetch('http://onlyfans.rardebuseta.tk/?type=cep&query='+ pon)
let num = 0
let cepyy = await pika.json()
let kkk = `🔎 *CONSULTA CEP COMPLETA*\n\n${cepyy.map((cepyy) => `[ ! ] Resultado: ${num += 1}\n• NOME: ${cepyy.nome}\n• CPF: ${cepyy.cpf}\n• RUA: ${cepyy.logradouro}\n• COMPLEMENTO: ${cepyy.complemento}\n• NÚMERO: ${cepyy.numero}`).join('\n\n') || 'Sem Informações'}`
m.reply(kkk)
//await conn.reply(m.chat, `*[ ❗ ] Enviado com sucesso ${command.toUpperCase()} 𝙰 ${send}*`, m, { mentions: [m.sender]})  
}
handler.command = /^(cep2)$/i
handler.tags = ['consultas']
export default handler

