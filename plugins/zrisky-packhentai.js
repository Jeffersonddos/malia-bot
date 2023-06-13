import fs from 'fs';
import fetch from 'node-fetch';
import { sticker } from '../lib/sticker.js';

const handler = async (m, { conn, text, args, isPrems, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '🔰 • *Para a segurança do grupo, este comando não está disponível sem que seja ativado uma função.*\n\n❔ • Para fazer a ativação do comando, você deve digitar: */ativar modohorny*\n\n⚠️ • *É obrigatório ser um administrador* para ativar esta função.'
let texto1 = `🍫 - Este comando é exclusivo apenas para usuários *Premium*!\nAdquira já o seu *ViP* e tenha acesso à todos os comandos *Premium*!\n👤 *Contato:*\nhttps://wa.me/558582385190`.trim()
  if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, {"document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} , { quoted: m })

  if (command === 'packhentai') {
if (args == '1') {
m.react('🔞')
const hentai = await fetch('https://japa-apis-v3.herokuapp.com/api/hentaigif?nome=pussy&apikey=J3FbWhio');
const response = await hentai.json();
const { resultado } = response;
const quantidade = resultado.length;
m.reply(`Quantidade de figurinhas: ${quantidade}\nNão tem como parar o envio!`)
for (let i = 0; i < resultado.length; i++) {
const { titulo, gif } = resultado[i];

console.log(titulo);
console.log(gif);

const stickers = await sticker(false, gif, '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Mᴇɴsαɢᴇᴍ ʙᴏᴛ\n⤷cσᴍᴘʟᴇᴛαᴅα!', `↓🍓⃟ Cʀιαᴅᴀ ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`);

await conn.sendFile(m.chat, stickers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 999999, 'isForwarded': true }});
}
await m.react('✅')
}
if (args == '2') {
m.react('🔞')
const hentai = await fetch('https://japa-apis-v3.herokuapp.com/api/hentaigif?nome=blowjob&apikey=J3FbWhio');
const response = await hentai.json();
const { resultado } = response;

for (let i = 0; i < resultado.length; i++) {
const { titulo, gif } = resultado[i];
const quantidade = resultado.length;
m.reply(`Quantidade de figurinhas: ${quantidade}\nNão tem como parar o envio!`)
console.log(titulo);
console.log(gif);

const stickers = await sticker(false, gif, '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Mᴇɴsαɢᴇᴍ ʙᴏᴛ\n⤷cσᴍᴘʟᴇᴛαᴅα!', `↓🍓⃟ Cʀιαᴅᴀ ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`);

await conn.sendFile(m.chat, stickers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 999999, 'isForwarded': true }});
}
await m.react('✅')
}
if (args == '3') {
m.react('🔞')
const hentai = await fetch('https://japa-apis-v3.herokuapp.com/api/hentaigif?nome=loli&apikey=J3FbWhio');
const response = await hentai.json();
const { resultado } = response;
const quantidade = resultado.length;
m.reply(`Quantidade de figurinhas: ${quantidade}\nNão tem como parar o envio!`)
for (let i = 0; i < resultado.length; i++) {
const { titulo, gif } = resultado[i];

console.log(titulo);
console.log(gif);

const stickers = await sticker(false, gif, '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Mᴇɴsαɢᴇᴍ ʙᴏᴛ\n⤷cσᴍᴘʟᴇᴛαᴅα!', `↓🍓⃟ Cʀιαᴅᴀ ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`);

await conn.sendFile(m.chat, stickers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 999999, 'isForwarded': true }});
}
await m.react('✅')
}
if (args == '4') {
m.react('🔞')
const hentai = await fetch('https://japa-apis-v3.herokuapp.com/api/hentaigif?nome=tits&apikey=J3FbWhio');
const response = await hentai.json();
const { resultado } = response;
const quantidade = resultado.length;
m.reply(`Quantidade de figurinhas: ${quantidade}\nNão tem como parar o envio!`)
for (let i = 0; i < resultado.length; i++) {
const { titulo, gif } = resultado[i];

console.log(titulo);
console.log(gif);

const stickers = await sticker(false, gif, '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Mᴇɴsαɢᴇᴍ ʙᴏᴛ\n⤷cσᴍᴘʟᴇᴛαᴅα!', `↓🍓⃟ Cʀιαᴅᴀ ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`);

await conn.sendFile(m.chat, stickers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 999999, 'isForwarded': true }});
}
await m.react('✅')
}
if (args == '5') {
m.react('🔞')
const hentai = await fetch('https://japa-apis-v3.herokuapp.com/api/hentaigif?nome=cum&apikey=J3FbWhio');
const response = await hentai.json();
const { resultado } = response;
const quantidade = resultado.length;
m.reply(`Quantidade de figurinhas: ${quantidade}\nNão tem como parar o envio!`)
for (let i = 0; i < resultado.length; i++) {
const { titulo, gif } = resultado[i];

console.log(titulo);
console.log(gif);

const stickers = await sticker(false, gif, '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Mᴇɴsαɢᴇᴍ ʙᴏᴛ\n⤷cσᴍᴘʟᴇᴛαᴅα!', `↓🍓⃟ Cʀιαᴅᴀ ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`);

await conn.sendFile(m.chat, stickers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 999999, 'isForwarded': true }});
}
await m.react('✅')
}
}
if (command.toLowerCase() === 'packsfw') {
  await m.react('🔞');
  const reis = await fetch('https://api.lolhuman.xyz/api/telestick?apikey=ea7f3def37ca8dad8578250f&url=https://t.me/addstickers/SexyPePaPy');
  const resu = await reis.json();
  const quantidade = resu.result.url.length;
  console.log(resu.result.url.length);
  m.reply(`Quantidade de figurinhas: ${quantidade}\nNão é possível parar o envio!`);
  for (let i = 0; i < resu.result.url.length; i++) {
    const stikers = await sticker(false, resu.result.url[i], '↓🧁⃟ Mαℓια Roɓοτ\n⤷fir3.net/malia-md\n\n↓🌈⃟ Mᴇɴsαɢᴇᴍ ʙᴏᴛ\n⤷cσᴍᴘʟᴇᴛαᴅα!', `↓🍓⃟ Cʀιαᴅᴀ ᴘᴏʀ\n⤷@david.sousz\n\n↓🧃⃟ Fᴇιτα ᴘοʀ\n⤷${m.pushName}`);
    await conn.sendFile(m.chat, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 999999, 'isForwarded': true }});
  }
  await m.react('✅');
}


};

handler.command = ['packhentai','packsfw'];
handler.tags = ['tools'];
handler.help = ['listgg', 'Lista todos os processos do Google Chrome abertos.'];

export default handler;
