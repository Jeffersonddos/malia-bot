import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = await(await fetch('https://cdn.wallpapersafari.com/65/48/qQw2k4.jpg')).buffer()
let img = await(await fetch('https://i.pinimg.com/564x/7d/6c/78/7d6c783029559308530e0fb5eb2ece68.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'pt'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `₊˚✦୧︰ 𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎╭・❒ ୨๑
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


╭┈ ↷ 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐋𝐎𝐆𝐎𝐒
• ✐; Crie fotos.
├┈・──・──・﹕₊˚ ✦・୨୧・
✧: ඬ⃟📝 ${usedPrefix}logo 3d-deep-sea-metal
✧: ඬ⃟📝 ${usedPrefix}logo American-flag-3D
✧: ඬ⃟📝 ${usedPrefix}logo 3D-sci-fi
✧: ඬ⃟📝 ${usedPrefix}logo 3D-rainbow-color-calligraphy
✧: ඬ⃟📝 ${usedPrefix}logo 3D-water-pipe
✧: ඬ⃟📝 ${usedPrefix}logo Halloween-skeleton
✧: ඬ⃟📝 ${usedPrefix}logo a-spooky-Halloween
✧: ඬ⃟📝 ${usedPrefix}logo a-cinematic-horror
✧: ඬ⃟📝 ${usedPrefix}logo a-sketch
✧: ඬ⃟📝 ${usedPrefix}logo blue-circuit-style
✧: ඬ⃟📝 ${usedPrefix}logo space
✧: ඬ⃟📝 ${usedPrefix}logo a-metallic
✧: ඬ⃟📝 ${usedPrefix}logo Creat-glossy-metalic
✧: ඬ⃟📝 ${usedPrefix}logo a-Captain-America
✧: ඬ⃟📝 ${usedPrefix}logo science-fiction
✧: ඬ⃟📝 ${usedPrefix}logo Video-game-classic-8-bit
✧: ඬ⃟📝 ${usedPrefix}logo green-horror-style
✧: ඬ⃟📝 ${usedPrefix}logo a-transformer
✧: ඬ⃟📝 ${usedPrefix}logo berry
✧: ඬ⃟📝 ${usedPrefix}logo layered
✧: ඬ⃟📝 ${usedPrefix}logo Online-thunder--generator
✧: ඬ⃟📝 ${usedPrefix}logo a-magma-hot
✧: ඬ⃟📝 ${usedPrefix}logo 3D-stone-cracked-cool
✧: ඬ⃟📝 ${usedPrefix}logo 3D-neon-light
✧: ඬ⃟📝 ${usedPrefix}logo impressive-glitch
✧: ඬ⃟📝 ${usedPrefix}logo a-glitch
✧: ඬ⃟📝 ${usedPrefix}logo Harry-Potter
✧: ඬ⃟📝 ${usedPrefix}logo embossed--on-cracked-surface
✧: ඬ⃟📝 ${usedPrefix}logo Broken-glass
✧: ඬ⃟📝 ${usedPrefix}logo art-paper-cut
✧: ඬ⃟📝 ${usedPrefix}logo artistic-black-and-white-status-and-quote-with-your-photos
✧: ඬ⃟📝 ${usedPrefix}logo Online-3D-gradient--generator
✧: ඬ⃟📝 ${usedPrefix}logo a-3D-glossy-metal
✧: ඬ⃟📝 ${usedPrefix}logo 3D-realistic--on-the-beach
✧: ඬ⃟📝 ${usedPrefix}logo a-watercolor
✧: ඬ⃟📝 ${usedPrefix}logo Online-multicolor-3D-paper-cut
✧: ඬ⃟📝 ${usedPrefix}logo Write-text-on-foggy-window
✧: ඬ⃟📝 ${usedPrefix}logo neon-devil-wings
✧: ඬ⃟📝 ${usedPrefix}logo 3D-underwater--generator
✧: ඬ⃟📝 ${usedPrefix}logo Online-black-and-white-bear-mascot-logo-creation
✧: ඬ⃟📝 ${usedPrefix}logo wonderful-graffiti-art
✧: ඬ⃟📝 ${usedPrefix}logo a-cool-graffiti-text-on-the-wall
✧: ඬ⃟📝 ${usedPrefix}logo cool-wall-graffiti
✧: ඬ⃟📝 ${usedPrefix}logo a-christmas-holiday-snow
✧: ඬ⃟📝 ${usedPrefix}logo a-futuristic-technology-neon-light
✧: ඬ⃟📝 ${usedPrefix}logo snow--for-winter-holidays
✧: ඬ⃟📝 ${usedPrefix}logo a-cloud--on-the-sky
✧: ඬ⃟📝 ${usedPrefix}logo 3D-luxury-gold
✧: ඬ⃟📝 ${usedPrefix}logo 3D-gradient
✧: ඬ⃟📝 ${usedPrefix}logo Blackpink-logo-style
✧: ඬ⃟📝 ${usedPrefix}logo realistic-vintage-style-light-bulb
✧: ඬ⃟📝 ${usedPrefix}logo realistic-cloud
✧: ඬ⃟📝 ${usedPrefix}logo a-cloud--in-the-sky
✧: ඬ⃟📝 ${usedPrefix}logo Write-in-Sand-Summer-Beach
✧: ඬ⃟📝 ${usedPrefix}logo Sand-Writing
✧: ඬ⃟📝 ${usedPrefix}logo Sand-engraved-3d
✧: ඬ⃟📝 ${usedPrefix}logo a-summery-sand-writing
✧: ඬ⃟📝 ${usedPrefix}logo Foil-Balloon--For-Birthday
✧: ඬ⃟📝 ${usedPrefix}logo 3d-glue--with-realistic-style
✧: ඬ⃟📝 ${usedPrefix}logo space-3D
✧: ඬ⃟📝 ${usedPrefix}logo Metal-Dark-Gold
✧: ඬ⃟📝 ${usedPrefix}logo Glitch--Style-Tik-Tok
✧: ඬ⃟📝 ${usedPrefix}logo a-Stone
✧: ඬ⃟📝 ${usedPrefix}logo Neon-Light--With-Galaxy-Style
✧: ඬ⃟📝 ${usedPrefix}logo 1917-Style
✧: ඬ⃟📝 ${usedPrefix}logo 80's-Retro-Neon
✧: ඬ⃟📝 ${usedPrefix}logo Minion--3D
✧: ඬ⃟📝 ${usedPrefix}logo Pornhub-Style-Logo
✧: ඬ⃟📝 ${usedPrefix}logo Double-Exposure--Black-&-White
✧: ඬ⃟📝 ${usedPrefix}logo Holographic-3D
✧: ඬ⃟📝 ${usedPrefix}logo 3D-Avengers-logo
✧: ඬ⃟📝 ${usedPrefix}logo Metal-Purple-Dual-Effect
✧: ඬ⃟📝 ${usedPrefix}logo logo-style-Marvel-studios-Ver:-metal
✧: ඬ⃟📝 ${usedPrefix}logo logo-style-Marvel-studios
✧: ඬ⃟📝 ${usedPrefix}logo Deluxe-Silver
✧: ඬ⃟📝 ${usedPrefix}logo Color-Full-Luxury-Metal
✧: ඬ⃟📝 ${usedPrefix}logo Glossy-Blue-Metal
✧: ඬ⃟📝 ${usedPrefix}logo Deluxe-Gold
✧: ඬ⃟📝 ${usedPrefix}logo Glossy-Carbon
✧: ඬ⃟📝 ${usedPrefix}logo Fabric
✧: ඬ⃟📝 ${usedPrefix}logo Neon
✧: ඬ⃟📝 ${usedPrefix}logo New-Year-Cards-3D-By-Name
✧: ඬ⃟📝 ${usedPrefix}logo Happ-new-year-card-firework-gif
✧: ඬ⃟📝 ${usedPrefix}logo Fullcolor-Balloon
✧: ඬ⃟📝 ${usedPrefix}logo Text-Logo-3D-Metal
✧: ඬ⃟📝 ${usedPrefix}logo avatar-gold
✧: ඬ⃟📝 ${usedPrefix}logo Text-Logo-3D-Metal-Silver
✧: ඬ⃟📝 ${usedPrefix}logo Text-Logo-3D-Metal-Rose-Gold
✧: ඬ⃟📝 ${usedPrefix}logo Text-Logo-3D-Metal-Gold
✧: ඬ⃟📝 ${usedPrefix}logo Text-Logo-3D-Metal-Galaxy
✧: ඬ⃟📝 ${usedPrefix}logo Xmas-Cards-3D
✧: ඬ⃟📝 ${usedPrefix}logo Blood-Text-On-The-Frosted-Glass
✧: ඬ⃟📝 ${usedPrefix}logo Halloween-Fire
✧: ඬ⃟📝 ${usedPrefix}logo Metal-Dark-Gold
✧: ඬ⃟📝 ${usedPrefix}logo Lion-Logo-Mascot
✧: ඬ⃟📝 ${usedPrefix}logo Wolf-Logo-Black-&-White
✧: ඬ⃟📝 ${usedPrefix}logo Wolf-Logo-Galaxy
✧: ඬ⃟📝 ${usedPrefix}logo Ninja-Logo
✧: ඬ⃟📝 ${usedPrefix}logo Logo-Joker
✧: ඬ⃟📝 ${usedPrefix}logo Wicker
✧: ඬ⃟📝 ${usedPrefix}logo Natural-Leaves
✧: ඬ⃟📝 ${usedPrefix}logo Firework-Sparkle
✧: ඬ⃟📝 ${usedPrefix}logo Skeleton
✧: ඬ⃟📝 ${usedPrefix}logo Red-Foil-Balloon
✧: ඬ⃟📝 ${usedPrefix}logo Purple-Foil-Balloon
✧: ඬ⃟📝 ${usedPrefix}logo Pink-Foil-Balloon
✧: ඬ⃟📝 ${usedPrefix}logo Green-Foil-Balloon
✧: ඬ⃟📝 ${usedPrefix}logo Cyan-Foil-Balloon
✧: ඬ⃟📝 ${usedPrefix}logo Blue-Foil-Balloon
✧: ඬ⃟📝 ${usedPrefix}logo Gold-Foil-Balloon
✧: ඬ⃟📝 ${usedPrefix}logo Steel
✧: ඬ⃟📝 ${usedPrefix}logo Ultra-Gloss
✧: ඬ⃟📝 ${usedPrefix}logo Denim
✧: ඬ⃟📝 ${usedPrefix}logo Decorate-Green
✧: ඬ⃟📝 ${usedPrefix}logo Decorate-Purple
✧: ඬ⃟📝 ${usedPrefix}logo Peridot-Stone
✧: ඬ⃟📝 ${usedPrefix}logo Rock
✧: ඬ⃟📝 ${usedPrefix}logo Lava
✧: ඬ⃟📝 ${usedPrefix}logo Yellow-Glass
✧: ඬ⃟📝 ${usedPrefix}logo Purple-Glass
✧: ඬ⃟📝 ${usedPrefix}logo Orange-Glass
✧: ඬ⃟📝 ${usedPrefix}logo Green-Glass
✧: ඬ⃟📝 ${usedPrefix}logo Cyan-Glass
✧: ඬ⃟📝 ${usedPrefix}logo Blue-Glass
✧: ඬ⃟📝 ${usedPrefix}logo Red-Glass
✧: ඬ⃟📝 ${usedPrefix}logo Purple-Shiny-Glass
✧: ඬ⃟📝 ${usedPrefix}logo Captain-America
✧: ඬ⃟📝 ${usedPrefix}logo Robot-R2-D2
✧: ඬ⃟📝 ${usedPrefix}logo Rainbow-Equalizer
✧: ඬ⃟📝 ${usedPrefix}logo Toxic
✧: ඬ⃟📝 ${usedPrefix}logo Pink-Sparkling-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Blue-Sparkling-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Green-Sparkling-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Purple-Sparkling-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Gold-Sparkling-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Red-Sparkling-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Cyan-Sparkling-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Purple-Glass
✧: ඬ⃟📝 ${usedPrefix}logo Decorative-Glass
✧: ඬ⃟📝 ${usedPrefix}logo Chocolate-Cake
✧: ඬ⃟📝 ${usedPrefix}logo Strawberry
✧: ඬ⃟📝 ${usedPrefix}logo Koi-Fish
✧: ඬ⃟📝 ${usedPrefix}logo Bread
✧: ඬ⃟📝 ${usedPrefix}logo Matrix-Style
✧: ඬ⃟📝 ${usedPrefix}logo Horror-Blood
✧: ඬ⃟📝 ${usedPrefix}logo Neon-Light
✧: ඬ⃟📝 ${usedPrefix}logo Thunder
✧: ඬ⃟📝 ${usedPrefix}logo 3D-Box
✧: ඬ⃟📝 ${usedPrefix}logo Neon
✧: ඬ⃟📝 ${usedPrefix}logo Road-Warning
✧: ඬ⃟📝 ${usedPrefix}logo 3D-Steel
✧: ඬ⃟📝 ${usedPrefix}logo Bokeh
✧: ඬ⃟📝 ${usedPrefix}logo Green-Neon
✧: ඬ⃟📝 ${usedPrefix}logo Free-Advanced-Glow
✧: ඬ⃟📝 ${usedPrefix}logo Dropwater
✧: ඬ⃟📝 ${usedPrefix}logo Break-Wall
✧: ඬ⃟📝 ${usedPrefix}logo Chrismast-Gift
✧: ඬ⃟📝 ${usedPrefix}logo Honey
✧: ඬ⃟📝 ${usedPrefix}logo Plastic-Bag-Drug
✧: ඬ⃟📝 ${usedPrefix}logo Horror-Gift
✧: ඬ⃟📝 ${usedPrefix}logo Marble-Slabs
✧: ඬ⃟📝 ${usedPrefix}logo Marble
✧: ඬ⃟📝 ${usedPrefix}logo Ice-Cold
✧: ඬ⃟📝 ${usedPrefix}logo Fruit-Juice
✧: ඬ⃟📝 ${usedPrefix}logo Rusty-Metal
✧: ඬ⃟📝 ${usedPrefix}logo Abstra-Gold
✧: ඬ⃟📝 ${usedPrefix}logo Biscuit
✧: ඬ⃟📝 ${usedPrefix}logo Bagel
✧: ඬ⃟📝 ${usedPrefix}logo Wood
✧: ඬ⃟📝 ${usedPrefix}logo SCI---Fi
✧: ඬ⃟📝 ${usedPrefix}logo Metal-Rainbow
✧: ඬ⃟📝 ${usedPrefix}logo Purple-Gem
✧: ඬ⃟📝 ${usedPrefix}logo Shiny-Metal
✧: ඬ⃟📝 ${usedPrefix}logo Yellow-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Silver-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Red-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Purple-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Orange-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Green-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Cyan-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Blue-Jewelry
✧: ඬ⃟📝 ${usedPrefix}logo Hot-Metal
✧: ඬ⃟📝 ${usedPrefix}logo Hexa-Golden
✧: ඬ⃟📝 ${usedPrefix}logo Blue-Glitter
✧: ඬ⃟📝 ${usedPrefix}logo Purple-Glitter
✧: ඬ⃟📝 ${usedPrefix}logo Pink-Glitter
✧: ඬ⃟📝 ${usedPrefix}logo Green-Glitter
✧: ඬ⃟📝 ${usedPrefix}logo Silver-Glitter
✧: ඬ⃟📝 ${usedPrefix}logo Gold-Glitter
✧: ඬ⃟📝 ${usedPrefix}logo Bronze-Glitter
✧: ඬ⃟📝 ${usedPrefix}logo Eroded-Metal
✧: ඬ⃟📝 ${usedPrefix}logo Carbon
✧: ඬ⃟📝 ${usedPrefix}logo Pink-Candy
✧: ඬ⃟📝 ${usedPrefix}logo Blue-Metal
✧: ඬ⃟📝 ${usedPrefix}logo Blue-Gem
✧: ඬ⃟📝 ${usedPrefix}logo Black-Metal
✧: ඬ⃟📝 ${usedPrefix}logo 3D-Glowing-Metal
✧: ඬ⃟📝 ${usedPrefix}logo 3D-Chrome
✧: ඬ⃟📝 ${usedPrefix}phmaker *<opção> <imagem>*
✧: ඬ⃟📝 ${usedPrefix}ytcomment *<texto>*
✧: ඬ⃟📝 ${usedPrefix}hornycard *<@tag>*
✧: ඬ⃟📝 ${usedPrefix}simpcard *<@tag>*
✧: ඬ⃟📝 ${usedPrefix}lolice *<@tag>*
✧: ඬ⃟📝 ${usedPrefix}itssostupid
✧: ඬ⃟📝 ${usedPrefix}pixelar
✧: ඬ⃟📝 ${usedPrefix}blur
╰──────────────✧ 🌹 •°•°
˳⁺ :🌹: ੭ 𝓭𝓪𝓿𝓲𝓭.𝓼𝓸𝓾𝓼𝔃︰꒰✦꒱・
`.trim()
conn.sendMessage(m.chat, {image: pp, caption:str.trim(),contextInfo: {
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
m.react('🖍️')
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[ ❗ ] OCORREU UM ERRO NO MENU E NÃO FOI POSSÍVEL ENVIÁLO.*', m)
}}
handler.command = /^(menulogo|menulogos)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
