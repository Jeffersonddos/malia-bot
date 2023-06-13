import fetch from 'node-fetch'
let handler = async(m, { conn, args, text }) => {
if (!text) throw '*[ ❗ ] ADICIONE O LINK QUE DESEJA CORTAR*'
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) throw `*[❗] ERRO, TENTE DEPOIS*`
let done = `*LINK ENCURTADO COM SUCESSO!!*\n\n*LINK ANTERIOR:*\n${text}\n*LINK ENCURTADO:*\n${shortUrl1}`.trim()   
m.reply(done)}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|encurtar)$/i
handler.fail = null
export default handler
