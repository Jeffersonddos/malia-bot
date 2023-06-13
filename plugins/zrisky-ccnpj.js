import fs from 'fs'
import fetch from 'node-fetch'

const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default

let handler= async (m, { conn, args, text, command, usedPrefix, participants }) => {
if (text.length < 8) return m.reply('Coloque um CNPJ válido!')
  const consultarCnpj = (cnpj) => {
    // Removendo caracteres não numéricos do CNPJ
    cnpj = args[0].replace(/\D/g, '');
  
    // Verificando se o CNPJ tem 14 dígitos
    if (cnpj.length !== 14) {
      return m.reply('CNPJ inválido');
    }
  
    const url = `https://www.receitaws.com.br/v1/cnpj/${cnpj}`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.status !== 'OK') {
          throw new Error('Erro na consulta do CNPJ');
        }
  
        let message = `🔍 *Informações sobre o CNPJ*\n\nCNPJ: ${data.cnpj}\n\n`;
        message += `Nome empresarial: ${data.nome}\n\n`;
        message += `Situação: ${data.situacao}\n\n`;
        message += `Data de abertura: ${data.abertura}\n\n`;
        message += `Endereço: ${data.logradouro}, ${data.numero} - ${data.bairro}, ${data.municipio} - ${data.uf}, ${data.cep}`;
        return m.reply(message);
      })
      .catch(error => {
        console.error(error);
        return 'Erro na consulta do CNPJ';
      });
  };
  
  // Exemplo de uso
  consultarCnpj(args[0])
    .then(message => console.log(message))
    .catch(error => console.error(error));
  
}


 //await fs.unlinkSync(`./tel-${m.chat}.txt`)
//conn.sendButton(m.chat, kkk+`\n\n*• USUÁRIO:* @${m.sender.split("@")[0]}\n*• BY:* @558582385190`, 'Malia-Robot', null, [['🗑️ Deletar', '#d'],['📋 Copiar',`#cenviar ${kkk}\n\n*• USUÁRIO:* @${m.sender.split("@")[0]}\n*• BY:* @558582385190`]], null, {mentions: [m.sender, '558582385190@s.whatsapp.net']})

//await conn.reply(m.chat, `*[ ❗ ] Enviado com sucesso ${command.toUpperCase()} 𝙰 ${send}*`, m, { mentions: [m.sender]})
handler.command = /^(cnpj)$/i
export default handler