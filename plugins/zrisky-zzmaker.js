import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { sticker, addExif } from '../lib/sticker.js'
import axios from "axios"
import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, command, usedPrefix,  participants, isPrems }) => {
if (args[0] === '1'){
  if (args.length <= 1) return m.reply('Digite algo na frente do comando');
  if (text.length > 9) return m.reply('O máximo de caracteres permitido é 7!');
  text = text.slice(2);
m.reply('Criando imagem...')
conn.sendMessage(m.chat, { image: await(await fetch(`https://api-xcoders.site/api/maker/gungale?text=${text}&apikey=Frieren`)).buffer(), caption: command}, { quoted: m });
}
if (args[0] === '2'){
  if (args.length <= 1) return m.reply('Digite algo na frente do comando');
  if (text.length > 9) return m.reply('O máximo de caracteres permitido é 7!');
  text = text.slice(2);
m.reply('Criando imagem...')
conn.sendMessage(m.chat, { image: await(await fetch(`https://api-xcoders.site/api/maker/gura?text=${text}&apikey=Frieren`)).buffer(), caption: command}, { quoted: m });
}
if (args[0] === '3'){
  if (args.length <= 1) return m.reply('Digite algo na frente do comando');
  if (text.length > 9) return m.reply('O máximo de caracteres permitido é 7!');
  text = text.slice(2);
m.reply('Criando imagem...')
conn.sendMessage(m.chat, { image: await(await fetch(`https://api-xcoders.site/api/maker/kaneki?text=${text}&apikey=Frieren`)).buffer(), caption: command}, { quoted: m });
}
if (command == 'qc'){
  if (text.length <= 1) return m.reply('Digite algo na frente do comando');
  if (text.length > 90) return m.reply('O máximo de caracteres permitido é 90!');
m.reply('Criando figurinha...')
let ppimg;
//let mentioned = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender;
try {
  ppimg = await conn.profilePictureUrl(m.sender, 'image');
} catch (error) {
  console.log('Erro ao obter a imagem do perfil:', error);
  ppimg = 'https://crn10.org.br/wp-content/uploads/2021/09/perfil-300x300-4.jpg';
}
let url = await uploadImage(await(await fetch(ppimg)).buffer())
let stiker = false
let pong = await(await fetch(`https://api-xcoders.site/api/maker/quote?url=${url}&username=${m.pushName}&text=${text}&apikey=Frieren`)).buffer();
stiker = await addExif(pong, '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Oᴘɪɴɪα̃σ ∂α ʙσᴛ\n⤷ᴄʜᴀᴍᴀ ᴏ ᴅᴇᴠ',`↓🍓⃟ Cʀιαᴅα ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`)
        //stiker = await sticker(buffer, false, '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Oᴘɪɴɪα̃σ ∂α ʙσᴛ\n⤷', `↓🍓⃟ Cʀιαᴅα ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`)
        await conn.sendMessage(m.chat, {sticker: stiker}, {quoted: m})
}
}
handler.command = /^(logokk|qc)$/i
handler.diamond = true
export default handler
