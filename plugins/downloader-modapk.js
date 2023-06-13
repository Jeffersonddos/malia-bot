let handler  = async (m, { conn, usedPrefix: prefix, args, command, text }) => {
try {
switch(command) {
case 'modapk': case 'apkmod': {  
if (!args[0]) return m.reply(`*[ ❗ ] Coloque o link semelhante a: ${command} https://latestmodapks.com/whatsapp-prime-apk-download*`)
try {  
    let data4 = await fetch('https://api.akuari.my.id/downloader/dlmod?link=' + text)
    let data5 = await data4.json()
   let caption = `
*📁 TAMANHO:* ${data5.respon.size}

*⏳ Processando download, aguarde...* 
`.trim()
await m.reply(caption)
conn.sendFile(m.chat, data5.respon.linkdl, 'Seu arquivo.apk', 'Baixado com sucesso!', m, false, { asDocument: true });
} catch (e){
    console.log(e)  
   await m.reply('*🦓 - Ocorreu um erro.*\n*Tente novamente mais tarde!*\n\n*- Coloque um link semelhante a:*\n*◉ https://latestmodapks.com/whatsapp-prime-apk-download*')
}}
break
case 'dapk2': 
if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 LINK 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽𝙰 𝙰𝙿𝙺, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${prefix + command}* https://rexdl.com/android/minecraft-pocket-edition-apk-download1.html/`     
await conn.reply(m.chat, global.wait, m)
let data5 = await fetchJson('https://api.akuari.my.id/downloader/dlmod2?link=' + text)
if ( data5.respon.size.replace(' MB' , '') > 200) return await conn.sendMessage(m.chat, { text: '*[ ⛔ ] ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴇs ᴅᴇᴍᴀsɪᴀᴅᴏ ᴘᴇsᴀᴅᴏ*' }, { quoted: m } )
if ( data5.respon.size.includes('GB')) return await conn.sendMessage(m.chat, { text: '*[ ⛔ ] ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴇs ᴅᴇᴍᴀsɪᴀᴅᴏ ᴘᴇsᴀᴅᴏ*' }, { quoted: m } )
const apk5 = await conn.sendMessage(m.chat, { document: { url: data5.respon.download[0].url }, mimetype: 'application/vnd.android.package-archive', fileName: data5.respon.title + '.apk', caption: null }, { quoted: m })   
break        
}
} catch (e){
    console.log(e)

throw `*Opa... não encontrei nada*`
}}    
handler.command = /^(apkmod|modapk|dapk2)$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
