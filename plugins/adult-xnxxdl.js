import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '🔰 • *Para a segurança do grupo, este comando não está disponível sem que seja ativado uma função.*\n\n❔ • Para fazer a ativação do comando, você deve digitar: */ativar modohorny*\n\n⚠️ • *É obrigatório ser um administrador* para ativar esta função.'
if (!args[0]) throw `*[ ❗ ] COLOQUE UM LINK VALIDO, EX: ${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`
try {
await conn.reply(m.chat, '[❗] O vídeo está sendo processado, aguarde até que eu baixe...\n\n﹣ O tempo de envio depende do peso e duração do vídeo', m)
let res = await xnxxdl(args[0])
let json = await res.result.files
conn.sendMessage(m.chat, { document: { url: json.high }, mimetype: 'video/mp4', fileName: res.result.title }, { quoted: m })
} catch {
throw '*[ ❗ ] ERRO, VOLTE MAIS TARDE*'
}}
handler.command = /^(xnxxdl)$/i
handler.diamond = true
export default handler

async function xnxxdl(URL) {
return new Promise((resolve, reject) => {
fetch(`${URL}`, {method: 'get'}).then(res => res.text()).then(res => {
let $ = cheerio.load(res, { xmlMode: false  });
const title = $('meta[property="og:title"]').attr('content');
const duration = $('meta[property="og:duration"]').attr('content');
const image = $('meta[property="og:image"]').attr('content');
const videoType = $('meta[property="og:video:type"]').attr('content');
const videoWidth = $('meta[property="og:video:width"]').attr('content');
const videoHeight = $('meta[property="og:video:height"]').attr('content');
const info = $('span.metadata').text();
const videoScript = $('#video-player-bg > script:nth-child(6)').html();
const files = {
low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1], };
resolve({ status: 200, result: { title, URL, duration, image, videoType, videoWidth, videoHeight, info, files }})}).catch(err => reject({code: 503, status: false, result: err }))})}
