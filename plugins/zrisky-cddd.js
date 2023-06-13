import fs from 'fs'
import fetch from 'node-fetch'

const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default

let handler= async (m, { conn, args, text, command, usedPrefix, participants }) => {
  if (text.length !== 2) return m.reply('Digite um DDD válido!');
const telefone = text; // substitua pelo telefone desejado
const ddd = telefone.substring(0, 2);
fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
  .then(response => response.json())
  .then(data => {
    let ping = (`🔍 *Informações sobre o DDD ${ddd}*:\n\n`);
    ping += (`*Estado:* ${data.state||'SEM INFORMAÇÃO'}\n`);
    ping += (`*Regiões:*\n${data.cities||'SEM INFORMAÇÃO'}`);
    m.reply(ping)
  })
  .catch(error => console.error(error));


}


 //await fs.unlinkSync(`./tel-${m.chat}.txt`)
//conn.sendButton(m.chat, kkk+`\n\n*• USUÁRIO:* @${m.sender.split("@")[0]}\n*• BY:* @558582385190`, 'Malia-Robot', null, [['🗑️ Deletar', '#d'],['📋 Copiar',`#cenviar ${kkk}\n\n*• USUÁRIO:* @${m.sender.split("@")[0]}\n*• BY:* @558582385190`]], null, {mentions: [m.sender, '558582385190@s.whatsapp.net']})

//await conn.reply(m.chat, `*[ ❗ ] Enviado com sucesso ${command.toUpperCase()} 𝙰 ${send}*`, m, { mentions: [m.sender]})
handler.command = /^(ddd)$/i
export default handler