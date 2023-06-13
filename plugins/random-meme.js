/*   Creditos - ig : https://www.instagram.com/fg98._/    */
import hispamemes from 'hispamemes'
let handler = async (m, {command, conn}) => {
const url = await hispamemes.meme()  
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🎐 | PRÓXIMA', `/${command}`]], m)}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme|memes)$/i
export default handler
