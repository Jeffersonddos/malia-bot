
import { canLevelUp, xpRange } from '../lib/levelling.js'
let handler = async (m, { conn }) => {
	  let name = conn.getName(m.sender)
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://crn10.org.br/wp-content/uploads/2021/09/perfil-300x300-4.jpg')
let user = global.db.data.users[m.sender]
if (!canLevelUp(user.level, user.exp, global.multiplier)) {
let { min, xp, max } = xpRange(user.level, global.multiplier)
let txt = `
┌───⊷ *NIVEL*
▢ Nome : *${name}*
▢ Nivel : *${user.level}*
▢ XP : *${user.exp - min}/${xp}*
▢ Rank : *${user.role}*
└──────────────

Falta *${max - user.exp}* de *XP* para subir de nivel
`.trim()
try {
  let imgg = API('fgmods', '/api/rank', {
username: name,
xp: user.exp - min,
exp: xp,
avatar: pp,
level: user.level,
background: 'https://i.ibb.co/CsNgBYw/qiyana.jpg'
}, 'apikey')

conn.sendFile(m.chat, imgg, 'level.jpg', txt, m)
} catch (e) {
m.reply(txt)
}
}
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (before !== user.level) {
	user.role = global.rpg.role(user.level).name

let str = `
┌─⊷ *LEVEL UP*
▢ Nivel anterior : *${before}*
▢ Nivel atual : *${user.level}*
▢ Rank : *${user.role}*
└──────────────

*_Quantos mais interagir com a bot, mais xp você ganha._*
`.trim()
try {
let img = API('fgmods', '/api/levelup', { 
avatar: pp 
 }, 'apikey')
  conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
} catch (e) {
m.reply(str)
}
}
}

handler.help = ['levelup']
handler.tags = ['econ']
handler.command = ['upar', 'levelup'] 

export default handler
