import fs from 'fs';
import fetch from 'node-fetch';
import { sticker } from '../lib/sticker.js';

const handler = async (m, { conn, text, args }) => {
//if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '🔰 • *Para a segurança do grupo, este comando não está disponível sem que seja ativado uma função.*\n\n❔ • Para fazer a ativação do comando, você deve digitar: */ativar modohorny*\n\n⚠️ • *É obrigatório ser um administrador* para ativar esta função.'

if (args == '1') {
m.react('⏰')
const reis = await fetch('https://api-xcoders.site/api/download/telesticker?url=https://t.me/addstickers/cysgod&apikey=Frieren');
const resu = await reis.json();
for (let i = 0; i < resu.result.sticker.length; i++) {
console.log(resu.result)
const stikers = await sticker(false, resu.result.sticker[i], '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Mᴇɴsαɢᴇᴍ ʙᴏᴛ\n⤷cσᴍᴘʟᴇᴛαᴅα!', `↓🍓⃟ Cʀιαᴅα ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`)
await conn.sendFile(m.chat, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 999999, 'isForwarded': true }})
}
await m.react('✅')
}
if (args == '2') {
m.react('⏰')
const reis = await fetch('https://api.lolhuman.xyz/api/telestick?apikey=ea7f3def37ca8dad8578250f&url=https://t.me/addstickers/monke2004');
const resu = await reis.json();
for (let i = 0; i < resu.result.sticker.length; i++) {
console.log(resu.result)
const stikers = await sticker(false, resu.result.sticker[i], '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Mᴇɴsαɢᴇᴍ ʙᴏᴛ\n⤷cσᴍᴘʟᴇᴛαᴅα!', `↓🍓⃟ Cʀιαᴅα ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`)
await conn.sendFile(m.chat, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 999999, 'isForwarded': true }})
}
await m.react('✅')
}
if (args == '3') {
m.react('⏰')
const reis = await fetch('https://api-xcoders.site/api/download/telesticker?url=https://t.me/addstickers/Eufentz&apikey=Frieren');
const resu = await reis.json();
for (let i = 0; i < resu.result.sticker.length; i++) {
console.log(resu.result)
const stikers = await sticker(false, resu.result.sticker[i], '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Mᴇɴsαɢᴇᴍ ʙᴏᴛ\n⤷cσᴍᴘʟᴇᴛαᴅα!', `↓🍓⃟ Cʀιαᴅα ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`)
await conn.sendFile(m.chat, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 999999, 'isForwarded': true }})
}
await m.react('✅')
}
if (args == '4') {
m.react('⏰')
const reis = await fetch('https://api-xcoders.site/api/download/telesticker?url=https://t.me/addstickers/emoticon_by_naeim&apikey=Frieren');
const resu = await reis.json();
for (let i = 0; i < resu.result.sticker.length; i++) {
console.log(resu.result)
const stikers = await sticker(false, resu.result.sticker[i], '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Mᴇɴsαɢᴇᴍ ʙᴏᴛ\n⤷cσᴍᴘʟᴇᴛαᴅα!', `↓🍓⃟ Cʀιαᴅα ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`)
await conn.sendFile(m.chat, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 999999, 'isForwarded': true }})
}
await m.react('✅')
}
if (args == '5') {
m.react('⏰')
const reis = await fetch('https://api-xcoders.site/api/download/telesticker?url=https://t.me/addstickers/KiritoPack2&apikey=Frieren');
const resu = await reis.json();
for (let i = 0; i < resu.result.url.length; i++) {
console.log(resu.result)
const stikers = await sticker(false, resu.result.url[i], '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Mᴇɴsαɢᴇᴍ ʙᴏᴛ\n⤷cσᴍᴘʟᴇᴛαᴅα!', `↓🍓⃟ Cʀιαᴅα ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`)
await conn.sendFile(m.chat, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 999999, 'isForwarded': true }})
}
await m.react('✅')
}
};

handler.command = ['packfigu'];
handler.tags = ['tools'];
handler.help = ['listgg', 'Lista todos os processos do Google Chrome abertos.'];
handler.diamond = true

export default handler;
