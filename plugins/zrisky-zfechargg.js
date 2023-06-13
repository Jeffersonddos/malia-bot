import { exec } from 'child_process';

const handler = async (m, { conn, text }) => {

  // Executa o comando para listar todos os processos do Google Chrome
  exec('taskkill /im chrome.exe /f', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao finalizar o processo: ${error.message}`);
      m.reply('Erro ao finalizar o processo\nRetorno: '+error.message);
      return;
    }
    if (stderr) {
      m.reply('Erro ao finalizar o processo\nRetorno: '+stderr);
      return;
    }
    console.log(`Processo finalizado: ${stdout}`);
    m.reply('Processo finalizado\nRetorno: '+stdout)
  });

}

handler.command = ['killgg'];
handler.tags = ['tools'];
handler.help = ['screenshot', 'Tira uma screenshot da página atual do navegador.'];
handler.owner = true;

export default handler;
