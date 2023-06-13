let handler = async (m, { conn, usedPrefix }) => {
let command = 'phmaker'
m.reply(`*[ ❗ ] Como usar o comando?*
—◉ #phmaker (opção) <responder / marcar a uma imagem>

*Exemplo:*
—◉ #phmaker artist_in_the_dark <responder / marcar uma imagen>

*< Lista de opções />*
° ඬ⃟💫 ${usedPrefix + command} xpro2
° ඬ⃟💫 ${usedPrefix + command} cartoon
° ඬ⃟💫 ${usedPrefix + command} affect
° ඬ⃟💫 ${usedPrefix + command} lofi
° ඬ⃟💫 ${usedPrefix + command} moon
° ඬ⃟💫 ${usedPrefix + command} beautiful
° ඬ⃟💫 ${usedPrefix + command} upscale
° ඬ⃟💫 ${usedPrefix + command} rainbow
° ඬ⃟💫 ${usedPrefix + command} removebg
° ඬ⃟💫 ${usedPrefix + command} pixelate
° ඬ⃟💫 ${usedPrefix + command} triggered
° ඬ⃟💫 ${usedPrefix + command} triggered2
° ඬ⃟💫 ${usedPrefix + command} kelvin
° ඬ⃟💫 ${usedPrefix + command} wanted
° ඬ⃟💫 ${usedPrefix + command} wasted`)}
handler.command = /^(phmakerlist)$/i
export default handler
