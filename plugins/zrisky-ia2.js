
import { Configuration, OpenAIApi } from "openai"
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
    if (!text) return reply(`Você deve digitar algo.`);
    try {
    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
    m.reply('❲⏰❳ Aguarde um instante. Isso pode levar até 5 segundos.')
    const response = await openai.createImage({
      prompt: text,
      n: 1,
      size: "512x512",
    });
    //console.log(response.data.data[0].url)
    m.react('✨')
    conn.sendButton(m.chat, 'Imagem gerada com sucesso!', 'Malia Robot', response.data.data[0].url, [['Deletar', `#del`]], m)
    } catch (error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
    console.log(`${error.response.status}\n\n${error.response.data}`);
  } else {
    console.log(error);
    m.reply("Desculpe, ocorreu um erro :"+ error.message);
  }
}
}
handler.command = /^ia4$/i
export default handler