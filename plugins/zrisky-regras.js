import moment from "moment-timezone";
import fs from "fs";
import fetch from "node-fetch";
import jimp from "jimp";
import PhoneNumber from "awesome-phonenumber";
let { MessageType } = (await import("@adiwajshing/baileys")).default;

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
    const imagens = [
'https://i.pinimg.com/564x/6a/72/b0/6a72b0ad759e0cc3d461825438197188.jpg',
'https://i.pinimg.com/564x/dc/a8/6f/dca86fd33b73f6e4708e34e169542f6a.jpg',
'https://i.pinimg.com/564x/36/58/f4/3658f48616473e3cb6a0072231f7ef4a.jpg',
'https://i.pinimg.com/564x/1d/b6/e1/1db6e1695a987acb73e80999c6c76468.jpg',
'https://i.pinimg.com/564x/b3/82/4d/b3824dbe367ef475a9961ef72b544ef5.jpg'
]
let msgf = imagens[Math.floor(imagens.length * Math.random())]
let pp = await(await fetch(msgf)).buffer()
const imagenss = [
'https://i.pinimg.com/564x/7c/d0/1e/7cd01e56ca0348ee08f277f33e275d5f.jpg',
'https://i.pinimg.com/564x/68/d3/3a/68d33a850ce808c8c0abb657be167b53.jpg',
'https://i.pinimg.com/564x/bd/e7/e4/bde7e495774b36618bdbb049eeba72d2.jpg',
'https://i.pinimg.com/564x/f0/99/b6/f099b6b4db8c5bb03bb583ba97c42722.jpg',
'https://i.pinimg.com/564x/2b/f1/80/2bf1804f767522d408f93c2d9f828b4a.jpg'
]
let msgff = imagenss[Math.floor(imagenss.length * Math.random())]
let img = await(await fetch(msgff)).buffer()
let tag = `@${m.sender.replace(/@.+/, "")}`;
let mentionedJid = [m.sender];
let name = conn.getName(m.sender);
const { restrict, antiCall, antiprivado, modejadibot } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}
//tim
let wib = moment.tz("America/Fortaleza").format("HH:mm:ss");
let wibh = moment.tz("America/Fortaleza").format("HH");
let wibm = moment.tz("America/Fortaleza").format("mm");
let wibs = moment.tz("America/Fortaleza").format("ss");
let wit = moment.tz("America/Fortaleza").format("HH:mm:ss");
let wita = moment.tz("America/Fortaleza").format("HH:mm:ss");
let wktuwib = `${wibh}horas ${wibm}minutos ${wibs}segundos`;

const time = moment.tz("America/Fortaleza").format("HH");
if (time >= 4) {
var res = "Boa madrugada";
}
if (time >= 10) {
var res = "Bom dia ☀️";
}
if (time >= 15) {
var res = "Boa tarde 🌇";
}
if (time >= 18) {
var res = "Boa noite 🌙";
}

let d = new Date(new Date() + 3600000);
let locale = "pt-BR";
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offsetalldiii0 is0.00
// Offset420 is7.00
let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
Math.floor(d / 84600000) % 5
];
let week = d.toLocaleDateString(locale, { weekday: "long" });
let date = d.toLocaleDateString(locale, {
day: "numeric",
month: "long",
year: "numeric",
});
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
//==============> Menu nya
let intro = `
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
├┈ ↷ *INFORMAÇÕES*
├─────────────────
│ *${name}*, ${res}
│ *Horário:* ${wita}
│ *Data:* ${date}
│ *Ativo:* ${uptime}
│ *Chats:* ${chats.length - groups.length} bate papos
│ *Grupos:* ${groups.length} grupos
│ *Total:* ${chats.length} conversas
│ *ViP:* https://fir3.net/malia-keys
╰──────────────✧ 🌹 •°•°

╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
├┈ ↷ *REGRAS DA BOT*
├─────────────────
├ ඬ⃟ ⛔ *PROIBIDO FLOOD*
├ ඬ⃟ ⛔ *PROIBIDO LIGAR*
├ ඬ⃟ ⛔ *PROIBIDO SPAM*
╰──────────────✧ 🌹 •°•°

╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
├┈ ↷ *INFO ATIVADOS*
├─────────────────
├ ඬ⃟ 💬 *APNS PV:* ${pconly ? 'Ativado' : 'Desativado'}
├ ඬ⃟ 🏢 *APNS GP:* ${gconly ? 'Ativado' : 'Desativado'}
├ ඬ⃟ ☑️ *LEITURA:* ${autoread ? 'Ativado' : 'Desativado'}
├ ඬ⃟ ❗ *RESTRITO:* ${restrict ? 'Ativado' : 'Desativado'} 
├ ඬ⃟ 🌎 *MODO*: ${self ? 'Privado' : 'Público'}
├ ඬ⃟ 💬 *ANTIPRIVADO:* ${antiprivado ? 'Ativado' : 'Desativado'}
├ ඬ⃟ 📵 *ANTICHAMADA:* ${antiCall ? 'Ativado' : 'Desativado'}
╰──────────────✧ 🌹 •°•°
`.trim()
conn.sendMessage(m.chat, {image: pp, caption:intro.trim(),contextInfo: {
    mentionedJid: [m.sender],
    externalAdReply: {
    showAdAttribution: true,
    mediaType: 'VIDEO',
    mediaUrl: null,
    title: 'ᴹᴬᴸᴵᴬ ⁻ ᴿᴼᴮᴼᵀ',
    body: null,
    thumbnail: img,
    sourceUrl: `https://www.instagram.com/david.sousz`
    }}}, { quoted: m })
m.react('🚧')
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})

/*await conn.relayMessage(
m.chat,
{
requestPaymentMessage: {
currencyCodeIso4217: "BRL",
amount1000: '15000',
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text:
intro +
"\n\n" +
"`\`\`\Você não ainda não é Premium?!\nAdquira com meu dono: \`\`\`@558582385190\n\n" +
wm,
contextInfo: {
mentionedJid: [m.sender, '558582385190@s.whatsapp.net'],
externalAdReply: {
showAdAttribution: true,
},
},
},
},
},
},
{}
);*/
/*conn.send3ButtonDoc(
m.chat,
`\n\n *『 INTROCADUTION 』*\n\n`,
intro + `\n\n${tag}\n\n`,
"Aʟʟ Mᴇɴᴜ",
".menu2 all",
"Lɪsᴛ Mᴇɴᴜ",
".menu2",
"\nAku bedo 🗿",
"bilek",
m,
{
contextInfo: {
forwardingScore: fsizedoc,
externalAdReply: ,
},
}
);*/
};

handler.help = ["menu"];
handler.tags = ["main"];
handler.command = /^(regras)$/i;
handler.register = false;

export default handler;

//----------- FUNCTION -------

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    console.log({ms,h,m,s})
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}

function wish() {
let wishloc = "";
const time = moment.tz("Asia/Kolkata").format("HH");
wishloc = "Hi";
if (time >= 0) {
wishloc = "Night Rider";
}
if (time >= 4) {
wishloc = "Good Morning";
}
if (time >= 12) {
wishloc = "Good Afternoon";
}
if (time >= 16) {
wishloc = "️Good Evening";
}
if (time >= 23) {
wishloc = "Night Rider";
}
return wishloc;
}
