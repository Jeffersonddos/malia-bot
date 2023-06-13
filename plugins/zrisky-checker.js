import fetch from 'node-fetch'
import { addExif } from '../lib/sticker.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, text, command }) => {
if (text < 1) return m.reply('4590800659153283|1|31|686?')
let stiker = false
  let reis = await fetch("https://riskyzin1.000webhostapp.com/card.php?lista=" + text).then(v => v.text());
  m.reply(reis)
}
handler.help = ['checker']
handler.tags = ['owner']
handler.command = /^(chk)$/i
handler.rowner = true
handler.fail = null
export default handler