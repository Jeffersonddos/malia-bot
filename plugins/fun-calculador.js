let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[ ❗ ] MARQUE UM PARTICIPANTE OU DIGITE O NOME DE ALGUEM.*`
let mentioned = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
if (command == 'gay2') {
    conn.sendMessage(m.chat, { image: { url: 'https://www.guiagaysaopaulo.com.br/public/uploads/imagens/originais/lula_lgbt_gay_eleies_2022.jpg' },
    caption: `_*${text.toUpperCase()}* *É🏳️‍🌈* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ Será ele um viadinho pão com ovo?`, mentions: [mentioned], contextInfo:{forwardingScore:9999, isForwarded:true}}, {quoted: m})
    }
if (command == 'lesbiana') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *É🏳️‍🌈* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'precoce') {
conn.sendMessage(m.chat, { image: { url: 'https://uromedical.com.br/wp-content/uploads/2018/08/ejaculacao-precoce.jpg' },
caption: `_*${text.toUpperCase()}* *É😏💦* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_`, mentions: [mentioned], contextInfo:{forwardingScore:9999, isForwarded:true}}, {quoted: m})
}
if (command == 'puto') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *É* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MAIS INFORMAÇÕES NO SEU PRIVADO 🔥🥵 XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'puta') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *É* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MAIS INFORMAÇÕES NO SEU PRIVADO 🔥🥵 XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'manco') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *É* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 💩*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'manca') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *É* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 💩*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})} 
if (command == 'rata') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *É* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🐁 COME QUESO 🧀*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'prostituto') {
conn.reply(m.chat, `
_*${text.toUpperCase()}* *É* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🫦👅, QUIEN QUIERE DE SUS SERVICIOS? XD*_
`.trim(), m, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})}
if (command == 'prostituta') {
conn.sendMessage(m.chat, { image: { url: 'https://conteudo.imguol.com.br/c/entretenimento/23/2019/08/20/prostituta-1566342011682_v2_1x1.jpg' },
caption: `_*${text.toUpperCase()}* *É* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} 🫦👅, Quem vai querer a sua periquita?!*_`, mentions: [mentioned], contextInfo:{forwardingScore:9999, isForwarded:true}}, {quoted: m})
 }
}
handler.help = ['gay2', 'lesbiana', 'precoce', 'precoce', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map(v => v + ' @tag | nombre')
handler.tags = ['calculator']
handler.command = /^gay2|lesbiana|precoce|precoce|puto|puta|manco|manca|rata|prostituta|prostituto/i
export default handler
