/* Creditos a FG de Dylux-fg (Bot) */

import fg from 'api-dylux' 
import fs from 'fs'
import fetch from 'node-fetch'
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
let imagen1 = await(await fetch('https://th.bing.com/th/id/R.25efcda28c91c84e0d3a1fb509d947d1?rik=vCh4WNA9lCqSug&pid=ImgRaw&r=0.jpg')).buffer()
if (!text) throw `*[ ❗ ] Falta o link do video>*\n\n*—◉ Exemplo:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[ ❗ ] Link incorreto, exemplo:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
let texto = `*[❗] @${m.sender.split`@`[0]} Aguarde um momento...*`
try {
let aa = { quoted: m, userJid: conn.user.jid }
//let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: wm, body: null, thumbnail: imagen1, sourceUrl: 'https://instagram.com/david.sousz' }, mentionedJid: [m.sender]}}}, aa)    
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let p = await fg.tiktok(args[0]) 
let buttons = [{ buttonText: { displayText: '♫ ÁUDIO ♫' }, buttonId: `${usedPrefix}tomp3` }]
let te = `*Nome:* ${p.author || 'Indefinido'}`
await conn.sendMessage(m.chat, { video: { url: p.nowm}, caption: te, footer: wm, buttons }, { quoted: m })  
} catch {  	
try { 
let aa2 = { quoted: m, userJid: conn.user.jid }
//let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: wm, body: null, thumbnail: imagen1, sourceUrl: 'https://instagram.com/david.sousz' }, mentionedJid: [m.sender]}}}, aa2)    
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0])).catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
let buttons = [{ buttonText: { displayText: '♫ ÁUDIO ♫' }, buttonId: `${usedPrefix}tomp3` }]
let cap = `*Nick:* ${nickname || 'Indefinido'}`
await conn.sendMessage(m.chat, { video: { url: url}, caption: cap, footer: wm, buttons }, { quoted: m })  
} catch {
try{
    let aa2 = { quoted: m, userJid: conn.user.jid }
    let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: wm, body: null, thumbnail: imagen1, sourceUrl: 'https://instagram.com/david.sousz' }, mentionedJid: [m.sender]}}}, aa2)    
    conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
    let ttk = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=ea7f3def37ca8dad8578250f&url=`+args[0])
    let ttkdown = await ttk.json()
    let buttons = [{ buttonText: { displayText: '♫ AUDIO ♫' }, buttonId: `${usedPrefix}tomp3` }]
    let cap = `*USER:* ${ttkdown.result.author.username || 'Indefinido'}\n*NICK:* ${ttkdown.result.author.nickname}`
    await conn.sendMessage(m.chat, { video: { url: ttkdown.result.link}, caption: cap }, { quoted: m })      
}catch(e){
console.log(e)
throw `*[ ❗ ] ERRO*`
}}}}
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm|tt|ttnowm|tiktokaudio)$/i
export default handler
