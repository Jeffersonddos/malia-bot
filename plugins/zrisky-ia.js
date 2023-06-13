import axios from 'axios';

let handler = async (m, { conn, usedPrefix, command, text, args, isPrems }) => {
const config = {
  method: 'post',
  url: 'https://api.openai.com/v1/chat/completions',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + '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'
  },
  data: JSON.stringify({
    'model': 'gpt-3.5-turbo',
    'messages': [
      { role: 'system', content: 'Seu nome é malia' },
      { role: 'user', content: text }
    ]
  })
};
try {
  //conn.reply(m.chat, `_${command}_`.trim(), m, { mentions: [who] })}
  const response = await axios(config);
  const assistantMessage = response.data.choices[0].message.content;
  // Faça algo com a mensagem do assistente, como enviá-la de volta ao usuário
  console.log('Resposta do assistente:', assistantMessage);
  m.react('✨')
  m.reply(assistantMessage.trim())
} catch (error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
    console.log(`${error.response.status}\n\n${error.response.data}`);
    m.reply("Desculpe, ocorreu um erro na solicitação da API.");
  } else {
    console.log(error);
    m.reply("Desculpe, ocorreu um erro interno.");
  }
}

}
handler.command = /^ia3$/i
export default handler