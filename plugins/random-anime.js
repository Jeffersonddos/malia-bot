import axios from "axios"
import fetch from 'node-fetch'
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-${command}.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendMessage(m.chat, {image: await ((await fetch(haha)).buffer()), caption:`_${command}_`.trim(),contextInfo: {
    mentionedJid: [m.sender],
    externalAdReply: {
    showAdAttribution: true,
    mediaType: 'VIDEO',
    mediaUrl: null,
    title: 'ᴹᴬᴸᴵᴬ ⁻ ᴿᴼᴮᴼᵀ',
    body: null,
    thumbnail: await ((await fetch(haha)).buffer()),
    sourceUrl: `https://www.instagram.com/david.sousz`
    }}}, { quoted: m })
//conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['🎐 | PRÓXIMA', `${usedPrefix + command}`]], m)    
}
handler.command = handler.help = ['akira', 'akiyama', 'anna', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'deidara', 'erza', 'elaina', 'eba', 'emilia', 'hestia', 'hinata', 'inori', 'isuzu', 'itachi', 'itori', 'kaga', 'kagura', 'kaori', 'keneki', 'kotori', 'kurumi', 'madara', 'mikasa', 'miku', 'minato', 'naruto', 'nezuko', 'sagiri', 'sasuke', 'sakura', 'cosplay']
handler.tags = ['anime']
export default handler
