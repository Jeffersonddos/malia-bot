import fs from 'fs';

let addKeyCommand = async (m, { conn, args, command, text }) => {
  // Adicionar uma nova chave
  if (command === 'addchave' || command === 'addkey') {
    if (args.length < 1) {
      return m.reply('Você precisa fornecer uma chave para adicionar.');
    }

    // Carregar as chaves existentes do arquivo JSON
    let chaves = JSON.parse(fs.readFileSync('./src/chaves.json'));

    // Verificar se a chave já existe
    if (chaves.includes(args[0])) {
      return m.reply('Essa chave já existe!');
    }

    // Adicionar a nova chave ao array
    chaves.push(args[0]);

    // Escrever o novo array no arquivo JSON
    fs.writeFileSync('./src/chaves.json', JSON.stringify(chaves));

    // Enviar uma mensagem de sucesso
    m.reply('Chave adicionada com sucesso!');
  }

  // Deletar uma chave específica
  if (command === 'delchave' || command === 'delkey') {
    // Carregar as chaves existentes do arquivo JSON
    let chaves = JSON.parse(fs.readFileSync('./src/chaves.json'));

    // Verificar se o número da chave foi fornecido como argumento
    if (args.length < 1 || isNaN(args[0])) {
      return m.reply('Você precisa fornecer o número da chave para excluir.');
    }

    // Converter o número da chave para um índice válido
    let index = parseInt(args[0]) - 1;

    // Verificar se o índice é válido
    if (index < 0 || index >= chaves.length) {
      return m.reply('O número da chave fornecido é inválido.');
    }

    // Obter a chave a ser excluída
    let chave = chaves[index];

    // Remover a chave do array
    chaves.splice(index, 1);

    // Escrever o novo array no arquivo JSON
    fs.writeFileSync('./src/chaves.json', JSON.stringify(chaves));

    // Enviar uma mensagem de sucesso
    m.reply(`Chave "${chave}" excluída com sucesso!`);
  }

  // MOSTRAR TODAS AS CHAVES
  if (command === 'chaves') {
    // Carregar as chaves existentes do arquivo JSON
    let chaves = JSON.parse(fs.readFileSync('./src/chaves.json'));

    // Verificar se existem chaves
    if (chaves.length < 1) {
      return m.reply('Não há chaves salvas no momento.');
    }

    // Construir a mensagem com as chaves
    let message = 'Chaves salvas:\n\n';
    chaves.forEach((chave, index) => {
      message += `${index + 1}. ${chave}\n`;
    });

    // Enviar a mensagem com as chaves
    m.reply(message);
  }
};

addKeyCommand.command = ['addkey', 'addchave', 'delkey', 'delchave','chaves'];
addKeyCommand.rowner = true;
export default addKeyCommand;
