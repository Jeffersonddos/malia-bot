import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata, command, conn, participants }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()

if (command == 'topgays') {
let vn = './media/gay2.mp3'
let top = `*🌈TOP 10 GAYS/LESBICAS DO GRUPO🌈*

*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*
*_7.- ${user(g)}_*
*_8.- ${user(h)}_*
*_9.- ${user(i)}_*
*_10.- ${user(j)}_*`
//m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})
conn.sendMessage(
m.chat,
{ image: { url: 'https://f.i.uol.com.br/fotografia/2018/01/18/15163227325a613fac50ca3_1516322732_3x2_rt.jpg' }, caption: top,
mentions: [a, b, c, d, e, f, g, h, i, j] },
{ quoted: m }
  );
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })
//conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}

if (command == 'topotakus') {
let vn = './media/otaku.mp3'
let top = `*🌸 TOP 10 OTAKUS DO GRUPO 🌸*

*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*
*_7.- ${user(g)}_*
*_8.- ${user(h)}_*
*_9.- ${user(i)}_*
*_10.- ${user(j)}_*`
conn.sendMessage(
m.chat,
{ image: { url: 'https://animeportifolio.files.wordpress.com/2013/12/otaku.jpg' }, caption: top,
mentions: [a, b, c, d, e, f, g, h, i, j] },
{ quoted: m }
  );
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })
//conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}
if (command == 'topcornos') {
let vn = './media/cornos.mp3'
let top = `*🐂 TOP 10 CORNOS DO GRUPO 🐂*

*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*
*_7.- ${user(g)}_*
*_8.- ${user(h)}_*
*_9.- ${user(i)}_*
*_10.- ${user(j)}_*`
conn.sendMessage(
m.chat,
{ image: { url: 'https://www.girodoboi.com.br/wp-content/uploads/2022/10/15889-4-1024x576.jpg' }, caption: top,
mentions: [a, b, c, d, e, f, g, h, i, j] },
{ quoted: m }
  );
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })
//conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}
}
handler.help = handler.command = ['topgays','topotakus','topcornos']
handler.tags = ['games']
handler.group = true
export default handler  
