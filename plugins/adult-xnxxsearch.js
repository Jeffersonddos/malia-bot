import axios from 'axios'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '🔰 • *Para a segurança do grupo, este comando não está disponível sem que seja ativado uma função.*\n\n❔ • Para fazer a ativação do comando, você deve digitar: */ativar modohorny*\n\n⚠️ • *É obrigatório ser um administrador* para ativar esta função.'
if (!text) throw `*[ 🥵 ] - Comando usado de maneira incorreta:\nExemplo: ${usedPrefix + command} bucetinha*`
try {
//let res = await axios.get(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=ea7f3def37ca8dad8578250f&query=${text}`)
let res = await xnxxsearch(text)
let json = res.result
let listSearch = [];
let resultsCount = 0;
let searchQuery = args.join(" ");
let textMessage = `*Resultados da pesquisa: ${searchQuery}*\n\n`;

for (let i of json) {
  textMessage += `*⛩ Título:*\n${i.title}\n`;
  textMessage += `*ℹ Descrição:*\nSelecione a opção e envie.\n`;
  textMessage += `*🔥 Faça download:*\n${usedPrefix}xnxxdl ${i.link}\n\n`;
  resultsCount++;

  // Verificar se já foram retornados 20 resultados
  if (resultsCount % 20 === 0) {
conn.sendMessage(
m.chat,
{
image: { url: 'https://assets.stickpng.com/images/61fae98c95e6ca00047b4f30.png' },
caption: textMessage,
},
{ quoted: m }
      );
      
    textMessage = ""; // Reiniciar a mensagem para a próxima iteração
  }
}

// Enviar a última mensagem, caso haja resultados restantes
if (textMessage !== "") {
    conn.sendMessage(
m.chat,
{
image: { url: 'https://assets.stickpng.com/images/61fae98c95e6ca00047b4f30.png' },
caption: textMessage,
},
{ quoted: m }
      );
}

conn.sendMessage(
    m.chat,
    {
    image: { url: 'https://assets.stickpng.com/images/61fae98c95e6ca00047b4f30.png' },
    caption: textMessage,
    },
    { quoted: m }
  );

} catch (e) {
console.log(e)
m.reply('*Infelizmente ocorreu um erro. Tente mais tarde!*')
}}
handler.command = /^porhubsearch|xvideossearch|xnxx|xnxxsearch$/i
handler.diamond = true
export default handler

async function xnxxsearch(query) {
return new Promise((resolve, reject) => {
const baseurl = 'https://www.xnxx.com'
fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'}).then(res => res.text()).then(res => {
let $ = cheerio.load(res, { xmlMode: false });
let title = [];
let url = [];
let desc = [];
let results = [];
$('div.mozaique').each(function(a, b) {
$(b).find('div.thumb').each(function(c, d) {
url.push(baseurl+$(d).find('a').attr('href').replace("/THUMBNUM/", "/"))
})})
$('div.mozaique').each(function(a, b) {
$(b).find('div.thumb-under').each(function(c, d) {
desc.push($(d).find('p.metadata').text())
$(d).find('a').each(function(e,f) {
title.push($(f).attr('title'))
})})})
for (let i = 0; i < title.length; i++) {
results.push({ title: title[i], info: desc[i], link: url[i] })}
resolve({ code: 200, status: true, result: results
})}).catch(err => reject({code: 503, status: false, result: err }))})}
