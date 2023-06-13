let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw '*[ ❗ ] RESPONDA UMA FIGURINHA OU UMA IMAGEM*'
if (!m.quoted.fileSha256) throw '*[ ❗ ] SÓ PODE USAR EM FIGURINHAS E IMAGENS*'
if (!text) throw `*[ ❗ ] ERRO, FALTA O COMANDO.*\n\n*USO CORRETO DO COMANDO:*\n*—◉ ${usedPrefix + command} <texto> <responder a sticker ou imagem>*\n\n*EXEMPLO:*\n*—◉ ${usedPrefix + command} <#menu> <responder a sticker ou imagem>*`
let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw '*[ ❗ ] SÓ MEU DEV PODE USAR ESSE COMANDO!*'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`*[ ✔ ] O COMANDO NA FIGURINHA FOI ADICIONADO COM EXITO NA MINHA DATABASE!*`)
}
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']
handler.rowner = true
export default handler
