import axios from 'axios'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
const { prepareWAMessageMedia, proto, generateWAMessageFromContent, getLastMessageInChat } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!text) throw `*[ ❗ ] EXEMPLO DO USO: ${usedPrefix + command} 400289?*`
try {
let ress = await fetch(`https://payment.smart-glocal.com/api/apm/card/${text}/eyJib3RJZCI6NTMxNDY1MzQ4MSwiYm90QWNjb3VudCI6IjhmMDgyY2NhZDFjNGY2OWRiYzY3OGZhNDA5OTI0ZmI2Y2RlNWNjMTAiLCJjdXN0b21lcklkIjo5NzAzMzA5NjgsImN1c3RvbWVyTG9jYWxlIjoicHQtYnIiLCJwdWJsaWNUb2tlbiI6IjQ0MTNiYmIyY2FmZjlkNmE4N2YwZTY5MGRhZDEzMmFiMDg5NDMyNGYxY2Y3OTlmMTRiYjY1MzczNTNkMDJmOWEifQ==/5ae114adb28210b6a512292dd22d77e72e2714cec7f9b2f11db8a25ea1586811`)
let res = await ress.json()
console.log(text)
let risos = `✅ *| BIN ENCONTRADA!*

*• PAÍS:* ${res.cardInfo.country.toUpperCase() || 'Não Encontrado'}
*• TIPO:* ${res.cardInfo.cardType.toUpperCase() || 'Não Encontrado'}
*• BANDEIRA:* ${res.cardInfo.cardCategorySlug.toUpperCase() || 'Não Encontrado'}
*• NÍVEL:* ${res.cardInfo.cardCategory.toUpperCase() || 'Não Encontrado'}
*• BANCO:* ${res.cardInfo.bankName.toUpperCase() || 'Não Encontrado'}

*• CRIADOR:* @558582385190
*• USUÁRIO:* @${m.sender.split('@')[0]}`
m.reply(risos.replace('DEBIT','DÉBITO').replace('CREDIT','CRÉDITO'), false, {mentions: [m.sender,'558582385190@s.whatsapp.net']})
} catch (e) {
    console.log(e)
m.reply('*🦓 - Ocorreu um erro.*\n*Tente novamente mais tarde!*')
}}
handler.command = /^bin$/i
export default handler

