import { exec } from 'child_process';

const handler = async (m, { conn, text }) => {
  // Executa o comando para listar todos os processos do Google Chrome
  exec('tasklist /fi "imagename eq chrome.exe"', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao listar os processos: ${error.message}`);
      m.reply('Erro ao listar os processos\nRetorno: ' + error.message);
      return;
    }
    if (stderr) {
      console.error(`Erro ao listar os processos: ${stderr}`);
      m.reply('Erro ao listar os processos\nRetorno: ' + stderr);
      return;
    }
    console.log(`Processos do Google Chrome abertos: ${stdout}`);
    m.reply('Processos do Google Chrome abertos:\n' + stdout);
  });
}

handler.command = ['listgg'];
handler.tags = ['tools'];
handler.help = ['listgg', 'Lista todos os processos do Google Chrome abertos.'];
handler.owner = true;

export default handler;
