import fs from 'fs'
import fetch from 'node-fetch'
const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default
let handler  = async (m, { conn, args, text, command, usedPrefix, participants }) => {
let sections = [{
    title: "Escolha O Estilo Da Sua Figurinha",
    rows: [
     {title: "🧁 Estilo 1 ↯", description: 'Estilo 1 do Attp', rowId: `#attp1 ${text}`},
     {title: "🧁 Estilo 2 ↯", description: 'Estilo 2 do Attp', rowId: `#attp2 ${text}`},   
     {title: "🧁 Estilo 3 ↯", description: 'Estilo 3 do Attp', rowId: `#attp3 ${text}`},
     {title: "🧁 Estilo 4 ↯", description: 'Estilo 4 do Attp', rowId: `#attp4 ${text}`},
     {title: "🧁 Estilo 5 ↯", description: 'Estilo 5 do Attp', rowId: `#attp5 ${text}`},
     {title: "🧁 Estilo 6 ↯", description: 'Estilo 6 do Attp', rowId: `#attp6 ${text}`},
     {title: "🧁 Estilo 7 ↯", description: 'Estilo 7 do Attp', rowId: `#attp7 ${text}`},
     {title: "🧁 Estilo 8 ↯", description: 'Estilo 8 do Attp', rowId: `#attp8 ${text}`},
    ]
    },
    ]
     
    let listMessage7 = {
      text: `Resultados para [ ${text} ]`,
      footer: "",
      title: "✨ Estilos de ATTP.",
      buttonText: "🍫 Escolher",
      sections
    }
    let message = '';
    for (const section of sections) {
        message += `${section.title}\n`;
        for (const row of section.rows) {
            message += `${row.title} - ${row.rowId}\nExemplo: ${row.rowId} Risky\n\n`;
        }
    }
    const trimmedMessage = message.trim();
    await conn.reply(m.chat, `${trimmedMessage}`, m, { mentions: [m.sender] });


}
handler.command = /^(attp)$/i
export default handler