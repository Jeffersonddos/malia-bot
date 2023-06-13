import fetch from 'node-fetch'
import fs from 'fs';
import uploadImage from '../lib/uploadImage.js';
let user = a => '@' + a.split('@')[0]
let handler = async (m, { conn, args, text, command, usedPrefix,  participants, isPrems }) => {
let ppimg;
let mentioned = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender;
try {
  ppimg = await conn.profilePictureUrl(mentioned, 'image');
} catch (error) {
  console.log('Erro ao obter a imagem do perfil:', error);
  ppimg = 'https://crn10.org.br/wp-content/uploads/2021/09/perfil-300x300-4.jpg';
}
var palavras = ["*Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos. – James Cameron, Cineastra*", "*O sucesso normalmente vem para quem está ocupado demais para procurar por ele – Henry David Thoreau, filósofo*", "*A vida é melhor para aqueles que fazem o possível para ter o melhor – John Wooden, jogador e treinador de basquete*", "*Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência – Lisa M. Amos, executiva*", "*Se você não está disposto a arriscar, esteja disposto a uma vida comum – Jim Rohn, empreendedor*", "*Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso – Swami Vivekananda, pensador hindu*", "*Para de perseguir o dinheiro e comece a perseguir o sucesso – Tony Hsieh, empreendedor*", "*Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los – Walt Disney, desenhista e empreendedor", "*Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo – Winston Churchill, político*", "*Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali – Vaibhav Shah, pensador*", "*Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa Para mim, sucesso é paz anterior – Denzel Washington, ator*", "*Oportunidades não surgem. É você que as cria – Chris Grosser, fotógrafo*", "*Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor – Albert Einstein, físico*", "*Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança – Charles Darwin, biólogo*", "*A melhor vingança é um sucesso estrondoso – Frank Sinatra, cantor*", "*Eu não falhei. Só descobri 10 mil caminhos que não eram o certo – Thomas Edison, inventor*", "*Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele – David Brinkley, jornalista*", "*Ninguém pode fazer você se sentir inferior sem o seu consentimento – Eleanor Roosevelt, primeira-dama dos EUA", "*O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo – Henry Ford, empreendedor*", "*Se você está atravessando um inferno, continue atravessando – Churchill*", "*O que nos parece uma provação amarga pode ser uma bênção disfarçada – Oscar Wilde, escritor*", "A distância entre a insanidade e a genialidade é medida pelo sucesso – Bruce Feirstein, roteirista", "*Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor*", "*Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor*", "*A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro – Nathaniel Hawthorne, escritor*", "*Se você não pode explicar algo de forma simples, então você não entendeu muito bem o que tem a dizer – Einstein*", "*Há dois tipos de pessoa que vão te dizer que você não pode fazer a diferença neste mundo: as que têm medo de tentar e as que têm medo de que você se dê bem – Ray Goforth, executivo*", "*Comece de onde você está. Use o que você tiver. Faça o que você puder – Arthur Ashe, tenista*","*As pessoas me perguntam qual é o papel que mais gostei de interpretar. Eu sempre respondo: o próximo – Kevin Kline, ator*","*Descobri que, quanto mais eu trabalho, mais sorte eu pareço ter – Thomas Jefferson, político*","*O ponto de partida de qualquer conquista é o desejo – Napoleon Hill, assessor político*"]

var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nome = ['Putona','Gatona','Rei da putaria','Prostituta','Sem buceta','Adestrador de cadela','Comedor de buceta','Comedor de puta','Desgustador de piroca','Desgustador de buceta'] 
const nomekk = nome[Math.floor(Math.random() * (nome.length))]
const nomerisky = ['Rei da putaria','Adestrador de buceta','Rei da putaria','Empurra xereca','Comedor de buceta','Comedor de puta','Desgustador de buceta'] 
const riskykk = nomerisky[Math.floor(Math.random() * (nomerisky.length))]
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
let nivelgador;
if (mentioned === '558582385190@s.whatsapp.net') {
  nivelgador = Math.floor(Math.random() * 3) + 1;
} else {
  nivelgador = Math.floor(Math.random() * 9) + 1;
}
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
let putar;
if (mentioned === '558582385190@s.whatsapp.net') {
  putar = Math.floor(Math.random() * 2) + 1;
} else {
  putar = Math.floor(Math.random() * 9) + 1;
}
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
let gostosurar;
if (mentioned === '558582385190@s.whatsapp.net') {
  gostosurar = Math.floor(Math.random() * 7) + 1;
} else {
  gostosurar = Math.floor(Math.random() * 9) + 1;
}
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
const programa = Math.ceil(Math.random() * 10000)
const dptr = ` 「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Vulgo*: *${mentioned.pushName || (mentioned === '558582385190@s.whatsapp.net' ? riskykk : nomekk)}*
🪀 *Número* : @${mentioned.split("@")[0]}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
📱 *Seu Celular* : ${m.key.id.length > 21 ? 'Android 🤣' : m.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*

➻ *~_CONSELHO_~* :
${conselho}
`
conn.sendMessage(m.chat, { image: { url: ppimg }, caption: dptr }, { quoted: m })
}
handler.command = /^(perfil)$/i;
handler.tags = ['perfil'];
export default handler;

