import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*[ ❗ ] Coloque o nome que deseja por no grupo.*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*[ ❗ ] O nome não pode conter mais que 25 caractéres*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(setnome)$/i
handler.group = true
handler.admin = true
export default handler
