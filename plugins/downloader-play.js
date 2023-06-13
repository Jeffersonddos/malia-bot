import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
import fs from 'fs'
/**
 *
 * @param {*} query
 * @param {*} options
 * @returns
 */
async function search(query, options = {}) {
  const search = await yts.search({ query, hl: "pt", gl: "PT", ...options });
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = "$1.";
  let arr = number.toString().split(".");
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join(".") : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " dias, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
  if (!text)
    throw `*[ 🌬 ] Você deve por o nome da música/vídeo que deseja baixar*\n\n*—◉ Exemplo:*\n*${
      usedPrefix + command
    } Good Feeling - Flo Rida*`;
  try {
    const yt_play = await search(args.join(" "));
    let texto1 = `*◉—⌈🔊 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘 🔊⌋—◉*\n
📌 *TÍTULO:* ${yt_play[0].title}
📆 *ENVIADO:* ${yt_play[0].ago}
⌚ *DURAÇÃO:* ${secondString(yt_play[0].duration.seconds)}
👀 *VISUALIZAÇÕES:* ${`${MilesNumber(yt_play[0].views)}`}
👤 *AUTOR:* ${yt_play[0].author.name}
⏯️ *CANAL:* ${yt_play[0].author.url}
🆔 *ID:* ${yt_play[0].videoId}
🪬 *TIPO:* ${yt_play[0].type}
🔗 *LINK:* ${yt_play[0].url}

Estou processando a música na melhor qualidade, aguarde...`.trim();
  await conn.sendMessage(m.chat, {image: {url: yt_play[0].image}, caption:texto1.trim(),contextInfo: {
  mentionedJid: [m.sender],
  externalAdReply: {
  showAdAttribution: true,
  mediaType: 'VIDEO',
  mediaUrl: `https://www.instagram.com/david.sousz`,
  title: `I N S T A G R A M`,
  body: null,
  thumbnail: await(await fetch('https://i.pinimg.com/564x/9b/68/a8/9b68a89da1d353ff42cfa97afa33c44b.jpg')).buffer(),
  sourceUrl: `https://www.instagram.com/david.sousz`}}}, { quoted: m })
  let mediaa = await fetch('https://api.brizaloka-api.tk/sociais/v2/ytmp3?apikey=brizaloka&url='+yt_play[0].url)
  let audiocore = await mediaa.json()
  conn.sendMessage(m.chat, { audio: { url: audiocore.dl_link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m }) 
  } catch (e){
    console.log(e)
    try {
      let vid2 = await (
await fetch(
  `https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`
)
      ).json();
      let { videoId, title, views, published, thumbnail } = await vid2
.result[0];
      const url = "https://www.youtube.com/watch?v=" + videoId;
      let ytLink = await fetch(
`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`
      );
      let jsonn = await ytLink.json();
      let aud = await jsonn.result.audio;
      let capt = `📌 *TÍTULO:* ${title}\n📆 *ENVIADO:* ${published}\n👀 *VISUALIZAÇÕES:* ${views}\n🔗 *LINK:* ${url}`;
      const buttons = [
{
  buttonId: `#playlist ${title}`,
  buttonText: { displayText: "MAIS RESULTADOS 📋" },
  type: 1,
},
      ];
      const buttonMessage = {
image: { url: thumbnail },
caption: capt,
footer: "*ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*",
buttons: buttons,
headerType: 4,
      };
      let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m });

      conn.sendMessage(
m.chat,
{
  audio: { url: aud },
  mimetype: "audio/mp4",
  fileName: `${title}.mp3`,
},
{ quoted: msg }
      );
    } catch {
      throw "*🦓 - Ocorreu um erro.*\n*Tente novamente mais tarde!*";
    }
  }
};
handler.help = ["play", "play2"].map((v) => v + " < busqueda >");
handler.tags = ["downloader"];
handler.command = /^play2?$/i;
export default handler;

/*import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[ ❗ ] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/TÍTULO 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3 ${urll}`, buttonText: { displayText: '🎵 𝐀𝐔𝐃𝐈𝐎 🎵' }, type: 1 },
{ buttonId: `#ytmp4 ${urll}`, buttonText: { displayText: '🎥 𝐕𝐈𝐃𝐄𝐎 🎥' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '📋 𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 📋' }, type: 1 }, ]    
let texto1 = `*◉—⌈🔊 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘 🔊⌋—◉*\n
📌 *TÍTULO:* ${title}
📆 *ENVIADO:* ${publishedTime}
⌚ *DURAÇÃO:* ${durationH}
👀 *VISUALIZAÇÕES:* ${viewH}
📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* ${description}
🔗 *LINK:* ${urll}`.trim()
let buttonMessage = { "document": { url: "https://wa.me/558582385190" }, "fileName": 'Baixador do Youtube', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://instagram.com/david.sousz` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `📌 *TÍTULO:* ${title}\n📆 *ENVIADO:* ${published}\n👀 *VISUALIZAÇÕES:* ${views}\n🔗 *LINK:* ${url}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '📋 𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 📋'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*🦓 - Ocorreu um erro.*\n*Tente novamente mais tarde!*'}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler*/
