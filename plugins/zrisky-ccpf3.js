import puppeteer from 'puppeteer-core';
import fetch from 'node-fetch'
const cooldowns = {}; // Objeto para rastrear os horários de uso do comando por usuário

// Função para verificar o tempo decorrido desde o último uso do comando
function checkCooldown(userId) {
  const cooldownTime = 20 * 60 * 1000; // Tempo mínimo de espera em milissegundos (20 minutos)

  const lastUsedTime = cooldowns[userId] || 0; // Obtém o último horário de uso do comando (ou 0 se nunca usado antes)
  const currentTime = Date.now(); // Obtém o horário atual

  if (currentTime - lastUsedTime < cooldownTime) {
    const remainingTime = cooldownTime - (currentTime - lastUsedTime);
    const remainingMinutes = Math.ceil(remainingTime / 60000); // Converte o tempo restante em minutos
    return remainingMinutes;
  }

  return 0; // O tempo de espera foi cumprido
}
const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default;

// Handler do comando
let handler = async (m, { conn, args, text, command, usedPrefix, participants, isPrems }) => {
  const userId = m.sender; // ID do usuário que acionou o comando
  const isPremium = isPrems; // Verifique se o usuário é premium (ajuste isso de acordo com a lógica do seu sistema de premium)
  // Verifique se o usuário precisa esperar
  const remainingMinutes = checkCooldown(userId);
  if (remainingMinutes > 0 && !isPremium) {
    return m.reply(`Aguarde ${remainingMinutes} minutos antes de usar o comando novamente. Caso não queira esperar, estamos com uma boa promoção no ViP! Entre em contato: https://WA.me/558582385190`);
  }
  // Atualize o horário de uso do comando para o horário atual
  cooldowns[userId] = Date.now();
  let texto1 = `🍫 - Este comando é exclusivo apenas para usuários *Premium*!\nAdquira já o seu *ViP* e tenha acesso à todos os comandos *Premium*!\n👤 *Contato:*\nhttps://wa.me/558582385190`.trim()
  if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, {"document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} , { quoted: m })

  let consu = text.replaceAll('.','')
  let consul = consu.replaceAll('-','')
if (consul < 1) return m.reply('Você deve digitar algo na frente!\nExemplo: /cpf 00000000272')
if (isNaN(consul)) return m.reply('Para consultar um CPF você deve por números válidos, não letras.')
if (consul.length > 11) throw '⚠️ *DIGITE UM CPF VÁLIDO!*'
if (consul.length < 11) throw '⚠️ *DIGITE UM CPF VÁLIDO!*'
m.reply('Consultando, por favor aguarde...');
(async () => {

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    userDataDir: 'C:\\Users\\riskyzin\\AppData\\Local\\Google\\Chrome\\User Data'
  });

  const page = await browser.newPage();
  await page.goto(`https://i-find.org/consultar/Completo/?CPF=${consul}`);

// Extrai os dados básicos do HTML usando page.evaluate()
const basicData = await page.evaluate(() => {
  const table = document.querySelector('.tablOverflow table.dataframe');
  const rows = table.querySelectorAll('tbody tr');
  let data = {};
  rows.forEach(row => {
    const [key, value] = row.querySelectorAll('th, td');
    if (key && value) {
      data[key.textContent.trim()] = value.textContent.trim();
    }
  });

  return data;
});

  // Extrai os parentes do HTML usando page.evaluate()
  const relatives = await page.evaluate(() => {
    const table = document.querySelectorAll('.tablOverflow table.dataframe')[1];
    const rows = table.querySelectorAll('tbody tr');
    let data = [];
    rows.forEach(row => {
      const [name, cpf, relationship] = row.querySelectorAll('td');
      if (name && cpf && relationship) {
        data.push({
          nome: name.textContent.trim(),
          cpf: cpf.textContent.trim(),
          parentesco: relationship.textContent.trim()
        });
      }
    });

    return data;
  });
 // Extrai os interesses do HTML usando page.evaluate()
 const interests = await page.evaluate(() => {
  const tableRows = document.querySelectorAll('.tablOverflow table.dataframe tbody tr');
  const interests = [];

  tableRows.forEach(row => {
    const [interestCell, statusCell] = row.querySelectorAll('th, td');

    if (interestCell && statusCell) {
      const interest = interestCell.textContent.trim();
      const status = statusCell.textContent.trim();

      interests.push({ interest, status });
    }
  });

  return interests;
});
console.log(interests);

  // Extrai os telefones do HTML usando page.evaluate()
  const phones = await page.evaluate(() => {
    const table = document.querySelectorAll('.tablOverflow div.ConsultaText');
    let data = [];
    table.forEach(row => {
      const phoneElement = row.querySelector('a');
      if (phoneElement) {
        const phone = phoneElement.textContent.trim();
        const ufElement = row.querySelector('br:nth-of-type(2)');
        const uf = ufElement && ufElement.nextSibling.textContent.trim();
        const nomeElement = row.querySelector('br:nth-of-type(3)');
        const nome = nomeElement && nomeElement.nextSibling.textContent.trim();
        const cpfElement = row.querySelector('br:nth-of-type(4)');
        const cpf = cpfElement && cpfElement.nextSibling.textContent.trim();
        const enderecoElement = row.querySelector('br:nth-of-type(5)');
        const endereco = enderecoElement && enderecoElement.nextSibling.textContent.trim();
        const numeroElement = row.querySelector('br:nth-of-type(6)');
        const numero = numeroElement && numeroElement.nextSibling.textContent.trim();
        const complementoElement = row.querySelector('br:nth-of-type(7)');
        const complemento = complementoElement && complementoElement.nextSibling.textContent.trim();
        const bairroElement = row.querySelector('br:nth-of-type(8)');
        const bairro = bairroElement && bairroElement.nextSibling.textContent.trim();
        const cepElement = row.querySelector('br:nth-of-type(9)');
        const cep = cepElement && cepElement.nextSibling.textContent.trim();
        const operadoraElement = row.querySelector('br:nth-of-type(10)');
        const operadora = operadoraElement && operadoraElement.nextSibling.textContent.trim();

        data.push({
          telefone: phone,
          uf: uf || "",
          nome: nome || "",
          cpf: cpf || "",
          endereco: endereco || "",
          numero: numero || "",
          complemento: complemento || "",
          bairro: bairro || "",
          cep: cep || "",
          operadora: operadora || ""
        });
      }
    });

    return data;
  });

  // Constrói a mensagem de resposta
  let messageContent = `🔎 CONSULTA DE CPF 🔎\n\n` +
    `NOME: ${basicData.Nome || ""}\n` +
    `CPF: ${basicData.CPF || ""}\n` +
    `NASCIMENTO: ${basicData.Nascimento || ""}\n` +
    `IDADE: ${basicData.Idade || ""}\n` +
    `SIGNO: ${basicData.Signo || ""}\n` +
    `SITUAÇÃO: ${basicData.Situacao || ""}\n\n` +
    `--- Filiação ---\n` +
    `MÃE: ${basicData.Mae || ""}\n` +
    `PAI: ${basicData.Pai || ""}\n` +
    `RELACIONAMENTO: ${basicData.Relacionamento || ""}\n\n` +
    `--- Score ---\n` +
    `TRABALHO: ${basicData.Trabalho || ""}\n` +
    `RENDA: ${basicData.Renda || ""}\n`;

    messageContent += `\n--- Infor ---\n`; // Adiciona o RG à mensagem
    messageContent += `RG: ${basicData.RG || ""}\n`; // Adiciona o RG à mensagem
    messageContent += `ÓRGÃO EXPEDITOR: ${basicData['Órgão Expeditor'] || ""}\n`; // Adiciona o órgão expedidor do RG à mensagem
    messageContent += `DATA DE EMISSÃO: ${basicData['Data de Emissão'] || ""}\n`; // Adiciona a data de emissão à mensagem
    messageContent += `CNS: ${basicData.CNS || ""}\n`; // Adiciona o CNS à mensagem

  // Adiciona os parentes à mensagem de resposta
  if (relatives.length > 0) {
    messageContent += "\n--- Parentes ---\n";
    relatives.forEach(relative => {
      messageContent += `NOME: ${relative.nome || ""}\n` +
        `CPF: ${relative.cpf || ""}\n` +
        `PARENTESCO: ${relative.parentesco || ""}\n\n`;
    });
  }

  // Adiciona os telefones à mensagem de resposta
  if (phones.length > 0) {
    messageContent += "\n--- Endereços ---\n";
    phones.forEach(phone => {
      messageContent += `TELEFONE: ${phone.telefone || ""}\n` +
        `UF: ${phone.uf || ""}\n` +
        `NOME: ${phone.nome || ""}\n` +
        `CPF: ${phone.cpf || ""}\n` +
        `ENDEREÇO: ${phone.endereco || ""}\n` +
        `NÚMERO: ${phone.numero || ""}\n` +
        `COMPLEMENTO: ${phone.complemento || ""}\n` +
        `BAIRRO: ${phone.bairro || ""}\n` +
        `CEP: ${phone.cep || ""}\n` +
        `OPERADORA: ${phone.operadora || ""}\n\n`;
    });
  }

  if (interests.length > 0) {
    messageContent += "\n--- Interesses ---\n";
    interests.forEach(interest => {
      messageContent += `Interesse: ${interest.interest}\n` +
        `Status: ${interest.status}\n\n`;
    });
  }
  
  // Exibe a mensagem de resposta
  console.log(messageContent);
  conn.reply(m.chat, '\`\`\`'+messageContent+`Dev: @558582385190\nUser: @${m.sender.split("@")[0]}\`\`\``, m, {mentions: [m.sender,'558582385190@s.whatsapp.net']});
  //m.reply(`\`\`\`${messageContent}\`\`\``)

  // Aqui você pode enviar a mensagem de resposta para o destino desejado, como o WhatsApp
  // Exemplo: m.reply(messageContent);

  await browser.close();
})();

}
handler.help = ['checker']
handler.command = ['cpf3']
handler.tags = ['consultas']
handler.fail = null
export default handler