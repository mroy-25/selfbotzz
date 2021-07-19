 const {
        WAConnection,
         MessageType,
        Presence,
        MessageOptions,
        Mimetype,
         WALocationMessage,
        WA_MESSAGE_STUB_TYPES,
        ReconnectMode,
        ProxyAgent,
        GroupSettingChange,
        waChatKey,
        mentionedJid,
        processTime,
        generateMessageID,
        ChatModification
} = require('@adiwajshing/baileys');
const fs = require("fs");
const moment = require("moment-timezone");
module.exports = zynn = async (zynn, tod) => {
const from = tod.key.remoteJid
const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
const isRevoke = tod.key.remoteJid.endsWith('@s.whatsapp.net') ? true : tod.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
const isCtRevoke = tod.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
const setting = JSON.parse(fs.readFileSync('./setting.json'))
if (tod.key.remoteJid == 'status@broadcast') return
if (tod.key.fromMe && tod.key.fromMe) return
if(!isRevoke) return
if(!isCtRevoke) return
tod.message = (Object.keys(tod.message)[0] === 'ephemeralMessage') ? tod.message.ephemeralMessage.message : tod.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
zynn.sendMessage(tod.key.remoteJid, `\`\`\`「 Anti Delete 」\`\`\`
${setting.shp} Nama : @${tod.participant.split("@")[0]}
${setting.shp} Waktu : ${jam} ${week} ${calender}
${setting.shp} Type : ${Object.keys(tod.message)[0]}`, MessageType.text, {quoted: tod.message, contextInfo: {"mentionedJid": [tod.participant]}})
zynn.copyNForward(tod.key.remoteJid, tod.message)
}
