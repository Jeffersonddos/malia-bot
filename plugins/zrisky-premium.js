import moment from "moment-timezone";
import fs from "fs";
import fetch from "node-fetch";
import jimp from "jimp";
import PhoneNumber from "awesome-phonenumber";
let { MessageType } = (await import("@adiwajshing/baileys")).default;

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
  let pp = await(await fetch('https://i.pinimg.com/564x/61/ff/1b/61ff1b4ff22fc2015466b4eb481d7377.jpg')).buffer()
  let img = await(await fetch('https://i.pinimg.com/564x/9b/68/a8/9b68a89da1d353ff42cfa97afa33c44b.jpg')).buffer()
  
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
  
  
  ╭┈ ↷ 𝐀𝐃𝐔𝐋𝐓𝐎
  • ✐; Comandos adultos.
  ├┈・──・──・﹕₊˚ ✦・୨୧・
  ✧: ඬ⃟🔞 _${_p}packsfw_
  ✧: ඬ⃟🔞 _${_p}hnt_gifs_
  ✧: ඬ⃟🔞 _${_p}packhentai 1 (buceta)_
  ✧: ඬ⃟🔞 _${_p}packhentai 2 (boquete)_
  ✧: ඬ⃟🔞 _${_p}packhentai 3 (loli)_
  ✧: ඬ⃟🔞 _${_p}packhentai 4 (peitos)_
  ✧: ඬ⃟🔞 _${_p}packhentai 5 (gozada)_
  ╰──────────────✧ 🌹 •°•°
  ˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・
  
  ╭┈ ↷ 𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐀𝐒 𝐕𝐈𝐏
  • ✐; Puxar dados.
  ├┈・──・──・﹕₊˚ ✦・୨୧・
  ✧: ඬ⃟🕵️‍♂️ */ip (online)*
  ✧: ඬ⃟🕵️‍♂️ */rg (online)*
  ✧: ඬ⃟🕵️‍♂️ */ir (online)*
  ✧: ඬ⃟🕵️‍♂️ */ddd (online)*
  ✧: ඬ⃟🕵️‍♂️ */mae (vip)*
  ✧: ඬ⃟🕵️‍♂️ */foto (online)*
  ✧: ඬ⃟🕵️‍♂️ */cnpj (online)*
  ✧: ඬ⃟🕵️‍♂️ */cnpj2 (online)*
  ✧: ඬ⃟🕵️‍♂️ */cep (online)*
  ✧: ඬ⃟🕵️‍♂️ */cep2 (online)*
  ✧: ඬ⃟🕵️‍♂️ */cep3 (online)*
  ✧: ඬ⃟🕵️‍♂️ */cns (online)*
  ✧: ඬ⃟🕵️‍♂️ */cpf (online)*
  ✧: ඬ⃟🕵️‍♂️ */cpf2 (online)*
  ✧: ඬ⃟🕵️‍♂️ */cpf3 (online)*
  ✧: ඬ⃟🕵️‍♂️ */cpf4 (online)*
  ✧: ඬ⃟🕵️‍♂️ */nome (online)*
  ✧: ඬ⃟🕵️‍♂️ */score (online)*
  ✧: ඬ⃟🕵️‍♂️ */abreviado (online)*
  ✧: ඬ⃟🕵️‍♂️ */vacina (online)*
  ✧: ඬ⃟🕵️‍♂️ */email (online)*
  ✧: ඬ⃟🕵️‍♂️ */placa (offline)*
  ✧: ඬ⃟🕵️‍♂️ */placa2 (offline)*
  ✧: ඬ⃟🕵️‍♂️ */telefone (online)*
  ✧: ඬ⃟🕵️‍♂️ */telefone2 (online)*
  ✧: ඬ⃟🕵️‍♂️ */telefone3 (online)*
  ✧: ඬ⃟🕵️‍♂️ */nascimento (online)*
  ╰──────────────✧ 🌹 •°•°
  ˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・
  
  ╭┈ ↷ 𝐂𝐇𝐄𝐂𝐊𝐄𝐑𝐒
  • ✐; Checadores.
  ├┈・──・──・﹕₊˚ ✦・୨୧・
  ✧: ඬ⃟💳 */chk (checar cartão)*
  ✧: ඬ⃟💳 */bin (puxa bin)*
  ✧: ඬ⃟⛑ */crunchyroll (checar)*
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
m.react('💎')
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
handler.command = /^(premium|vip)$/i;
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
