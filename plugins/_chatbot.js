
import fetch from 'node-fetch'

export async function before(m, { conn }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let user = global.db.data.users[m.sender]
  if (!user.chatbot)
return !0
const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu;
const result = m.text.replace(emojiRegex, '');
//let api = await fetch(`https://api.simsimi.net/v2/?text=${result}&lc=pt`)
let api = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=ea7f3def37ca8dad8578250f&text=${m.text}&system=diverso`)
let res = await api.json()
m.reply(res.result.replace('simsimi', 'Malia').replace('Simsimi', 'Malia').replace('sim simi', 'Malia').replaceAll('please enter the text - text=hello',''))
  
}
