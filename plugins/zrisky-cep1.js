import fs from 'fs'
import fetch from 'node-fetch'

const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default

let handler= async (m, { conn, args, text, command, usedPrefix, participants }) => {
let pon = text.replace('-','')
if (pon.length < 8) return m.reply('coloque um cep válido')
const cep = pon
fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(response => response.json())
.then(data => {
let ping =(`*🔍 CONSULTA DE CEP V1*\n\n*CEP:* ${data.cep || 'SEM INFORMAÇÕES'}\n`);
ping +=(`*Logradouro:* ${data.logradouro || 'SEM INFORMAÇÕES'}\n`);
ping +=(`*Complemento:* ${data.complemento || 'SEM INFORMAÇÕES'}\n`);
ping +=(`*Bairro:* ${data.bairro || 'SEM INFORMAÇÕES'}\n`);
ping +=(`*Cidade:* ${data.localidade || 'SEM INFORMAÇÕES'}\n`);
ping +=(`*Estado:* ${data.uf || 'SEM INFORMAÇÕES'}`);
m.reply(ping)
})
.catch(error => console.error(error));

}


 //await fs.unlinkSync(`./tel-${m.chat}.txt`)
//conn.sendButton(m.chat, kkk+`\n\n*• USUÁRIO:* @${m.sender.split("@")[0]}\n*• BY:* @558582385190`, 'Malia-Robot', null, [['🗑️ Deletar', '#d'],['📋 Copiar',`#cenviar ${kkk}\n\n*• USUÁRIO:* @${m.sender.split("@")[0]}\n*• BY:* @558582385190`]], null, {mentions: [m.sender, '558582385190@s.whatsapp.net']})

//await conn.reply(m.chat, `*[ ❗ ] Enviado com sucesso ${command.toUpperCase()} 𝙰 ${send}*`, m, { mentions: [m.sender]})
handler.command = /^(cep)$/i
export default handler