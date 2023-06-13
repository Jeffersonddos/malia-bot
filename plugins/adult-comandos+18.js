import axios from "axios"
import fetch from 'node-fetch'
let handler = async (m, {command, conn}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '🔰 • *Para a segurança do grupo, este comando não está disponível sem que seja ativado uma função.*\n\n❔ • Para fazer a ativação do comando, você deve digitar: */ativar modohorny*\n\n⚠️ • *É obrigatório ser um administrador* para ativar esta função.'

if (command == 'nsfwloli') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwloli.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
let img = await(await fetch(haha)).buffer()
conn.sendMessage(m.chat, { image: img, caption: command}, { quoted: m });}
  
if (command == 'nsfwfoot') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfoot.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
let img = await(await fetch(haha)).buffer()
conn.sendMessage(m.chat, { image: img, caption: command}, { quoted: m });}
  
if (command == 'nsfwass') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwass.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
let img = await(await fetch(haha)).buffer()
conn.sendMessage(m.chat, { image: img, caption: command}, { quoted: m });}
  
if (command == 'nsfwbdsm') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwbdsm.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
let img = await(await fetch(haha)).buffer()  
conn.sendMessage(m.chat, { image: img, caption: command}, { quoted: m });}
  
if (command == 'nsfwcum') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwcum.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
let img = await(await fetch(haha)).buffer()
conn.sendMessage(m.chat, { image: img, caption: command}, { quoted: m });}   
  
if (command == 'nsfwero') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwero.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
let img = await(await fetch(haha)).buffer()   
conn.sendMessage(m.chat, { image: img, caption: command}, { quoted: m });}
  
if (command == 'nsfwfemdom') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfemdom.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
let img = await(await fetch(haha)).buffer()
conn.sendMessage(m.chat, { image: img, caption: command}, { quoted: m });} 
  
if (command == 'nsfwglass') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwglass.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
let img = await(await fetch(haha)).buffer()
conn.sendMessage(m.chat, { image: img, caption: command}, { quoted: m });}
  
if (command == 'hentai') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/hentai.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
let img = await(await fetch(haha)).buffer()
conn.sendMessage(m.chat, { image: img, caption: command}, { quoted: m });}
  
if (command == 'nsfworgy') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfworgy.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
let img = await(await fetch(haha)).buffer()
conn.sendMessage(m.chat, { image: img, caption: command}, { quoted: m });}
  
if (command == 'booty') {
let resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/ass?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
conn.sendMessage(m.chat, { image: {url: res}, caption: command}, { quoted: m });}
  
if (command == 'tetas') {
let resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tetas.json`)).data   
let resr = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/boobs?apikey=fg-dylux`).data
if (resr == '' || !resr || resr == null) resr = await resError[Math.floor(resError.length * Math.random())]  
conn.sendMessage(m.chat, { image: {url: resr}, caption: command}, { quoted: m });}

if (command == 'ecchi') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/ecchi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
let img = await(await fetch(url)).buffer()
conn.sendMessage(m.chat, { image: img, caption: command}, { quoted: m });}
  
if (command == 'furro') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/furro.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
let img = await(await fetch(url)).buffer()
conn.sendMessage(m.chat, { image: img, caption: command}, { quoted: m });}
  
if (command == 'trapito') {
let res = await fetch(`https://api.waifu.pics/nsfw/trap`)
let json = await res.json()
let url = json.url
let img = await(await fetch(url)).buffer()
conn.sendMessage(m.chat, { image: img, caption: command}, { quoted: m });}
  
if (command == 'imagenlesbians') {
let resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/lesbian?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
conn.sendMessage(m.chat, { image: {url: res}, caption: command}, { quoted: m });}
  
if (command == 'panties') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
let img = await(await fetch(url)).buffer()
conn.sendMessage(m.chat, { image: img, caption: command}, { quoted: m });}
  
if (command == 'penis') {
let resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/pene.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/penis?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
conn.sendMessage(m.chat, { image: {url: res}, caption: command}, { quoted: m });}
  
if (command == 'porno') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendMessage(m.chat, { image: {url: url}, caption: command}, { quoted: m });}
  
if (command == 'randomxxx') {
let rawjsonn = ['https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tetas.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json'] 
let rawjson = await rawjsonn[Math.floor(rawjsonn.length * Math.random())]  
let res = (await axios.get(rawjson)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendMessage(m.chat, { image: {url: url}, caption: command}, { quoted: m });}
  
if (command == 'yaoi') {
let res = await fetch(`https://nekobot.xyz/api/image?type=yaoi`)
let json = await res.json()
let url = json.message
conn.sendMessage(m.chat, { image: {url: url}, caption: command}, { quoted: m });}
  
if (command == 'yaoi2') {
let res = await fetch(`https://purrbot.site/api/img/nsfw/yaoi/gif`)
let json = await res.json()
let url = json.link
conn.sendMessage(m.chat, { image: {url: url}, caption: command}, { quoted: m });}
  
if (command == 'yuri') { 
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json`)).data  
let url = await res[Math.floor(res.length * Math.random())] 
conn.sendMessage(m.chat, { image: {url: url}, caption: command}, { quoted: m });}
  
if (command == 'yuri2') {
let resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json`)).data   
let res = await fetch(`https://purrbot.site/api/img/nsfw/yuri/gif`)
let json = await res.json()
let url = json.link
if (url == '' || !url || url == null) url = await resError[Math.floor(resError.length * Math.random())]
conn.sendMessage(m.chat, { image: {url: url}, caption: command}, { quoted: m });}

  
if (command == 'peitos') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/pechos.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendMessage(m.chat, { image: {url: url}, caption: command}, { quoted: m });}
}  
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos']
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'peitos', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'penis', 'porno', 'randomxxx', 'pechos']
handler.tags = ['nsfw']
handler.diamond = true
export default  handler
