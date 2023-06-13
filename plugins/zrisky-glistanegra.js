import fs from 'fs'
import fetch from 'node-fetch'
const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default
const adeuscara = JSON.parse(fs.readFileSync('./src/adeuscara.json'));
const dbids = []
for(let i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}
let handler= async (m, { conn, args, text, command, isAdmin, usedPrefix, isRowner, participants, isPrems }) => {
    let mentioned = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '').replace('@s.whatsapp.net','')
    const isAdeusCara = (m.isGroup && dbids.indexOf(m.chat) >= 0) ? true : false
    if (command === 'listanegra') {
        if (!m.isGroup) return m.reply('Este comando só pode ser utilizado em grupos.');
        if (!isAdmin && isRowner) return m.reply('Este comando só pode ser utilizado por administradores do grupo.')
        if (args.length < 1) return m.reply('Digite 1 para ligar e 0 para desligar');
        if (isNaN(args[0])) return m.reply('Digite 1 para ligar e 0 para desligar');
    
        const groupId = m.chat;
        const ind = adeuscara.findIndex(item => item.groupId === groupId);
    
        if (Number(args[0]) === 1) {
          if (isAdeusCara) {
            adeuscara[ind].actived = true;
          } else {
            adeuscara.push({
              groupId: groupId,
              actived: true,
              number: []
            });
          }
          fs.writeFileSync('./src/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n');
          m.reply('Ativou com sucesso o recurso de autoban neste grupo✔️');
        } else if (Number(args[0]) === 0) {
          if (isAdeusCara) {
            adeuscara[ind].actived = false;
          } else {
            adeuscara.push({
              groupId: groupId,
              actived: false,
              number: []
            });
          }
          fs.writeFileSync('./src/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n');
          m.reply('Desativou com sucesso o recurso de autoban neste grupo✔️');
        } else {
          m.reply('1 para ativar, 0 para desativar');
        }
      }
    if (command == 'addlista') {
        if (!m.isGroup) return m.reply(enviar.msg.adm)
        if (!isAdmin && isRowner) return m.reply('Este comando só pode ser utilizado por administradores do grupo.')
        if (!mentioned) return m.reply('Diga o número sem espaço, + ou traço. Você também pode mencionar.')
       // if (isNaN(args[0])) return m.reply('Diga o número sem espaço, + ou traço')
        
        var groupId = m.chat;
        var ind = adeuscara.findIndex(item => item.groupId === groupId);
      
        if (ind >= 0) {
          if (adeuscara[ind].number.includes(mentioned.replace('@s.whatsapp.net',''))) {
            return m.reply('*Esse Número já está incluso*');
          }
          adeuscara[ind].number.push(mentioned.replace('@s.whatsapp.net',''));
        } else {
          adeuscara.push({
            groupId: groupId,
            actived: false,
            number: [mentioned.replace('@s.whatsapp.net','')]
          });
        }
      
        fs.writeFileSync('./src/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n');
        m.reply(`*Número adicionado à lista de autoban*`);
      }

      if (command == 'listban'){
        if (!m.isGroup) return m.reply('Este comando só pode ser utilizado em grupos.')
        if (!isAdmin && isRowner) return m.reply('Este comando só pode ser utilizado por administradores do grupo.')
        var ind = dbids.indexOf(m.chat)
        if(!isAdeusCara) return m.reply('*Nenhum Número não foi adicionado*')
        let teks = '*Números incluidos na lista negra:*\n\n'
        for(let i=0;i<adeuscara[ind].number.length;++i) {
        teks += `࿒❗࿒ *${adeuscara[ind].number[i]}*\n\n`
        }
        teks += '*! - Os números aparecidos irão tomar banimento*'
        m.reply(teks)
        }
        if (command == 'delista'){
            if (!m.isGroup) return m.reply('Este comando só pode ser utilizado em grupos.')
            if (!isAdmin && isRowner) return m.reply('Este comando só pode ser utilizado por administradores do grupo.')
            if (!mentioned) return m.reply('Diga o numero sem espaço, + ou traço')
          //  if (isNaN(args[0])) return m.reply('Diga o numero sem espaço, + ou traço')
            var ind = dbids.indexOf(m.chat)
            if(!isAdeusCara) return m.reply('*Nenhum Número foi adicionado*')
            var numind = adeuscara[ind].number.indexOf(mentioned.replace('@s.whatsapp.net',''))
            if(numind < 0) return m.reply('*Esse número não está incluso*')
            adeuscara[ind].number.splice(numind, 1)
            fs.writeFileSync('./src/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
            m.reply(`*Número removido a lista de autoban*`)
            }
 }
handler.command = /^(listanegra|addlista|listban|delista)$/i
handler.fail = null
export default handler

