import puppeteer from 'puppeteer-core';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
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
  cooldowns[userId] = Date.now();  let consu = text.replaceAll('.','')
  let texto1 = `🍫 - Este comando é exclusivo apenas para usuários *Premium*!\nAdquira já o seu *ViP* e tenha acesso à todos os comandos *Premium*!\n👤 *Contato:*\nhttps://wa.me/558582385190`.trim()
  if (!isPrems && !m.chat.includes('120363065213506525@g.us')) return conn.sendMessage(m.chat, {"document": { url: "https://wa.me/558582385190" }, "fileName": '🧁 - '+command.toUpperCase(), "mimetype": 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `Comando Exclusivo ❕ `, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch('https://cdn.wallpapersafari.com/88/38/OP8unG.jpg')).buffer(), "mediaUrl": ``, "sourceUrl": `https://instagram.com/david.sousz` }}} , { quoted: m })
  let consul = consu.replaceAll('-','')
  if (!consul || isNaN(consul) || consul.length !== 11) {
return m.reply('⚠️ *DIGITE UM CPF VÁLIDO!*')
  }

  m.reply('Consultando, por favor aguarde...');
  const browser = await puppeteer.launch({
executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
userDataDir: 'C:\\Users\\riskyzin\\AppData\\Local\\Google\\Chrome\\User Data'
  });
  const page = await browser.newPage();

  try {
await page.goto('https://i-find.org/consultar/Completo/?CPF=' + consul);

// Extrair o HTML da tabela
const pageHtml = await page.evaluate(() => {
  return document.documentElement.innerHTML;
});

// Analisar o HTML da página com Cheerio
const $ = cheerio.load(pageHtml);
// Extrai os dados do HTML usando page.evaluate()
const result = await page.evaluate(() => {
  const table = document.querySelector('table.dataframe');
  const rows = table.querySelectorAll('tbody tr');
  let data = {};
  rows.forEach(row => {
const [key, value] = row.querySelectorAll('th, td');
data[key.textContent.trim()] = value.textContent.trim();
  });
  
  return data;
});
 // Extrair parentes
 const parentesTable = $('.titleConsulta:contains("Parentes")').next('.tablOverflow').find('table.dataframe');
 const parentes = parentesTable.length ? parentesTable.find('td').map((_, el) => $(el).text()).get() : ['SEM INFORMAÇÃO'];

 // Extrair telefones
 const telefonesHtml = $('.titleConsulta:contains("Telefones no CPF")').next('.tablOverflow').find('.ConsultaText').html();
 const telefones = telefonesHtml ? telefonesHtml.replace(/<br>/g, '\n').replace(/<\/?[^>]+(>|$)/g, '').trim().replace(/Telefone:/g, '\nTelefone:') : 'Telefones não encontrados';

 // Extrair endereços 
 const enderecosHtml = $('.titleConsulta:contains("Endereços")').next('.tablOverflow').find('.ConsultaText').html();
 const enderecos = enderecosHtml ? enderecosHtml.replace(/<br>/g, '\n').replace(/<\/?[^>]+(>|$)/g, '').trim() : 'Endereços não encontrados';
 
 const enderecoRegex = /Endereco: (.+)[\n\r]+Numero: (.+)[\n\r]+Complemento: (.+)?[\n\r]+Bairro: (.+)[\n\r]+CEP: (.+)[\n\r]+Cidade: (.+)/g;
 let enderecoMatch;
 let enderecoCompleto = '';
 
 while ((enderecoMatch = enderecoRegex.exec(enderecos)) !== null) {
   const endereco = enderecoMatch[1];
   const numero = enderecoMatch[2];
   const complemento = enderecoMatch[3] || '';
   const bairro = enderecoMatch[4];
   const cep = enderecoMatch[5];
   const cidade = enderecoMatch[6];
 
   const enderecoFormatado = `Endereço: ${endereco}\nNúmero: ${numero}\nComplemento: ${complemento}\nBairro: ${bairro}\nCEP: ${cep}\nCidade: ${cidade}\n\n`;
   enderecoCompleto += enderecoFormatado;
 }
 
 if (enderecoCompleto === '') {
   enderecoCompleto = 'Endereços não encontrados';
 }
 
 // Extrair trabalhos
 const trabalhosHtml = $('.titleConsulta:contains("Trabalhos")').next('.tablOverflow').find('.ConsultaText').html();
const trabalhos = trabalhosHtml ? trabalhosHtml.replace(/<br>/g, '\n').replace(/<\/?[^>]+(>|$)/g, '').trim() : 'Trabalhos não encontrados';

 // Extrair vizinhos
 const vizinhosTable = $('.titleConsulta:contains("Vizinhos")').next('.tablOverflow').find('table.dataframe');
 const vizinhos = vizinhosTable.length ? vizinhosTable.find('td').map((_, el) => $(el).text()).get() : ['SEM INFORMAÇÃO'];

 // Extrair escolaridade
 const escolaridade = $('.titleConsulta:contains("Mosaic")').next('.tablOverflow').find('.ConsultaText').eq(0).text();

 // Extrair interesses
 const interessesTable = $('.titleConsulta:contains("Interesses")').next('.tablOverflow').find('table.dataframe');
 const interesses = interessesTable.length ? interessesTable.find('th').map((_, el) => $(el).text()).get() : ['SEM INFORMAÇÃO'];

 // Extrair status de interesses
 const interessesStatus = interessesTable.length ? interessesTable.find('td').map((_, el) => $(el).text()).get() : ['SEM INFORMAÇÃO'];
// Criar a string formatada com os dados
let message = "\`\`\`🔎 CONSULTA DE CPF 🔎:\n\n";
message += `• NOME: ${result.Nome}
• CPF: ${result.CPF}
• NASCIMENTO: ${result.Nascimento}
• IDADE: ${result.Idade}
• SIGNO: ${result.Signo}
• SITUAÇAO: ${result.Situacao}

• MÃE: ${result.Mae}
• PAI: ${result.Pai}
• RELACIONAMENTO: ${result.Relacionamento}

• TRABALHO: ${result.Trabalho}
• RENDA: ${result.Renda}\n\n`;

message += `• RG: ${result.RG || "SEM INFORMAÇÃO"}\n`; // Adiciona o RG à mensagem
message += `• ÓRGÃO EXPEDITOR: ${result['Órgão Expeditor'] || "SEM INFORMAÇÃO"}\n`; // Adiciona o órgão expedidor do RG à mensagem
message += `• DATA DE EMISSÃO: ${result['Data de Emissão'] || "SEM INFORMAÇÃO"}\n`; // Adiciona a data de emissão à mensagem
message += `• CNS: ${result.CNS || "SEM INFORMAÇÃO"}\n\n\n`; // Adiciona o CNS à mensagem

message += "👥 PARENTES 👥:\n\n";
for (let i = 0; i < parentes.length; i += 1) {
  message += `• NOME: ${parentes[i]}\n`;
  message += `• CPF: ${parentes[i + 1]}\n`;
  message += `• PARENTESCO: ${parentes[i + 2]}\n\n`;
}

message += "📞 TELEFONES NO CPF 📞:\n\n";
message += telefones + "\n\n";

message += "🏠 ENDEREÇOS 🏠:\n\n";
message += enderecoCompleto + "\n";

message += "💼 TRABALHOS 💼:\n\n";
message += trabalhos + "\n\n";

message += "👥 VIZINHOS 👥:\n\n";
for (let i = 0; i < vizinhos.length; i += 15) {
  message += `• CPF: ${vizinhos[i]}\n`;
  message += `• NOME: ${vizinhos[i + 1]}\n`;
  message += `• MÃE: ${vizinhos[i + 2]}\n`;
  message += `• PAI: ${vizinhos[i + 3]}\n`;
  message += `• ENDEREÇO MUNICIPAL: ${vizinhos[i + 4]}\n`;
  message += `• LOGRADOURO: ${vizinhos[i + 5]}\n`;
  message += `• NÚMERO: ${vizinhos[i + 6]}\n`;
  message += `• BAIRRO: ${vizinhos[i + 7]}\n`;
  message += `• CEP: ${vizinhos[i + 8]}\n`;
  message += `• TELEFONE: ${vizinhos[i + 9]}\n`;
  message += `• RG: ${vizinhos[i + 10]}\n`;
  message += `• EMISSOR: ${vizinhos[i + 11]}\n`;
  message += `• RG UF: ${vizinhos[i + 12]}\n`;
  message += `• DATA DE EMISSÃO: ${vizinhos[i + 13]}\n`;
  message += `• CNS: ${vizinhos[i + 14]}\n\n`;
}
message += "📚 ESCOLARIDADE 📚:\n\n";
message += escolaridade + "\n\n";

message += "🎯 INTERESSES 🎯:\n\n";
for (let i = 0; i < interesses.length; i++) {
  message += `${interesses[i]}: ${interessesStatus[i]}\n`;
}
await conn.reply(m.chat, message.replaceAll('undefined','SEM INFORMAÇÃO') + `\n-----\nUser: @${m.sender.split("@")[0]}\nBot: @558893673497\`\`\``, m, {
  mentions: [m.sender, '558893673497@s.whatsapp.net']

});
  } catch (error) {
console.log(error);
m.reply('Ocorreu um erro ao realizar a consulta. Tente novamente mais tarde.');
  } finally {
await browser.close();
  }
}

handler.command = /^(cpf2)$/i;
handler.tags = ['consultas'];
handler.limit = true
export default handler;
