import moment from "moment-timezone";
import fs from "fs";
import fetch from "node-fetch";
import jimp from "jimp";
import PhoneNumber from "awesome-phonenumber";
let { MessageType } = (await import("@adiwajshing/baileys")).default;

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
  let pp = await(await fetch('https://i.pinimg.com/564x/44/71/7d/44717d4364cf6bd0594e558bcfda7658.jpg')).buffer()
  let img = await(await fetch('https://i.pinimg.com/564x/ba/35/ad/ba35ad1f8963b934e1d8e9111e8c32db.jpg')).buffer()
  
  let tag = `@${m.sender.replace(/@.+/, "")}`;
  let mentionedJid = [m.sender];
  let ucpn = `${ucapan()}`;
  let name = conn.getName(m.sender);

  //tim
  let wib = moment.tz("America/Fortaleza").format("HH:mm:ss");
  let wibh = moment.tz("America/Fortaleza").format("HH");
  let wibm = moment.tz("America/Fortaleza").format("mm");
  let wibs = moment.tz("America/Fortaleza").format("ss");
  let wit = moment.tz("America/Fortaleza").format("HH:mm:ss");
  let wita = moment.tz("America/Fortaleza").format("HH:mm:ss");
  let wktuwib = `${wibh} H ${wibm} M ${wibs} S`;

  let d = new Date(new Date() + 3600000);
  let locale = "pt-BR";
  // d.getTimeZoneOffset()
  // Offset -420 is 18.00
  // Offsetalldiii0 is  0.00
  // Offset  420 is  7.00
  let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
    Math.floor(d / 84600000) % 5
  ];
  let week = d.toLocaleDateString(locale, { weekday: "long" });
  let date = d.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
  let more = String.fromCharCode(8206)
  let readMore = more.repeat(850)   
  //==============> Menu nya
  let intro = `₊˚✦୧︰ 𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎╭・❒ ୨๑
  ╭───╯ - ${taguser}
  ╰──➤ 🍉 ཷꦿ⃘⃜꙰⇥𝐌𝐀𝐋𝐈𝐀 𝐑𝐎𝐁𝐎𝐓🍦
  ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
  ╭┈ ↷ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎 𝐃𝐄 𝐁𝐑𝐀𝐒𝐈𝐋𝐈𝐀
  • ✐; Ajeite seu relógio.
  ├┈・──・──・﹕₊˚ ✦・୨୧・
  ✧: *Data:* ${date}
  ✧: *Atividade:* ${uptime}
  ╰──────────────✧ 🌹 •°•°
  ˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・

  ╭┈ ↷ 𝐋𝐎𝐆𝐎𝐒 𝐑𝐀𝐏𝐈𝐃𝐀𝐒
  • ✐; Criação de logos
  ├┈・──・──・﹕₊˚ ✦・୨୧・
  ✧: ඬ⃟🧩 */logokk 1 texto*
  ✧: ඬ⃟🧩 */logokk 2 texto*
  ✧: ඬ⃟🧩 */logokk 3 texto*
  ✧: ඬ⃟🧩 */qc 1 texto*
  ╰──────────────✧ 🌹 •°•°
  ˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・
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
m.react('🧩')
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
  /*  conn.send3ButtonDoc(
    m.chat,
    `\n\n     *『 INTROCADUTION 』*\n\n`,
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
handler.command = /^(logos2|menulogos2|menulogo2)$/i;
handler.register = false;

export default handler;

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [h, " H ", m, " M ", s, " S "]
    .map((v) => v.toString().padStart(2, 0))
    .join("");
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10;
  let mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12;
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30;
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [
    ye,
    " *Years 🗓️*\n",
    mo,
    " *Month 🌙*\n",
    d,
    " *Days ☀️*\n",
    h,
    " *Hours 🕐*\n",
    m,
    " *Minute ⏰*\n",
    s,
    " *Second ⏱️*",
  ]
    .map((v) => v.toString().padStart(2, 0))
    .join("");
}

function ucapan() {
  const time = moment.tz("America/Fortaleza").format("HH");
  let res = "Kok Belum Tidur Kak? 🥱";
  if (time >= 4) {
    res = "Pagi Lord 🌄";
  }
  if (time >= 10) {
    res = "Siang Lord ☀️";
  }
  if (time >= 15) {
    res = "Sore Lord 🌇";
  }
  if (time >= 18) {
    res = "Malam Lord 🌙";
  }
  return res;
}

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
