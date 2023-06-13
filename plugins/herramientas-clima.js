import axios from "axios"
let handler = async (m, { conn, args, text }) => {
if (!args[0]) throw "*[ ❗ ] ESCREVA O NOME DA CIDADE*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&dt=t&q=" + Weather)
let resu2 = await reis2.json()
let wew = resu2[0][0][0]
const Temperature = res.data.main.temp + "°C"
const Minimum_Temperature = res.data.main.temp_min + "°C"
const Maximum_Temperature = res.data.main.temp_max + "°C"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "km/h"
const wea = `「 📍 」LUGAR: ${name}\n「 🗺️ 」PAIS: ${Country}\n「 🌤️ 」TEMPO: ${wew.toUpperCase()}\n「 🌡️ 」TEMPERATURA: ${Temperature}\n「 💠 」 TEMPERATURA MÍNIMA: ${Minimum_Temperature}\n「 📛 」 TEMPERATURA MÁX: ${Maximum_Temperature}\n「 💦 」 HUMIDADE: ${Humidity}\n「 🌬️ 」 VENTO: ${Wind}`
m.reply(wea)
} catch {
return "*[ ❗ ] NÃO ENCONTREI NADA. VERIFIQUE SE A CIDADE E PAIS ESTÁ CORRETA.*"}}
handler.help = ['clima *<ciudad/país>*']
handler.tags = ['herramientas']
handler.command = /^(clima|tiempo)$/i
export default handler
