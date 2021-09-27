const { MessageType, WAMessageProto } = require("@adiwajshing/baileys");
const axios = require('axios');
const fs = require("fs");
const encodeUrl = require('encodeurl');
const moment = require("moment-timezone");
const wa = require('../whatsapp/message')
const { color } = require('../lib/color')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
fakenomor = '0@s.whatsapp.net'
fake = '</SELFBOTZ'
shp = setting.shp

module.exports = zynn = async (zynn, anu, db) => {
deta = await db.showdata('detector', {id: anu.jid})
try{
  if(deta[0].id === anu.jid){
    ''
  }
}catch{
return
}
console.log(anu)
fkontakk = { key: {
                  fromMe: false,
                  participant: fakenomor, ...(anu.jid ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  "contactMessage":{"displayName":fake,"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Fajar;;;\nFN:Fajar 2\nitem1.TEL;waid=6281223546913:+62 812-2354-6913\nitem1.X-ABLabel:Mobile\nEND:VCARD"
               }}}
  metdata = await zynn.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    zynn.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Opened ] - In ${metdata.subject}`)
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    zynn.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Closed ] - In ${metdata.subject}`)
  }
  else if(!anu.desc == ''){
fkontakq = { key: {
                  fromMe: false,
                  participant: fakenomor, ...(anu.jid ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  "contactMessage":{"displayName":'[ Group Description Change ]',"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Fajar;;;\nFN:Fajar 2\nitem1.TEL;waid=${anu.descOwner.split('@')[0]}:+62 812-2354-6913\nitem1.X-ABLabel:Mobile\nEND:VCARD`
               }}}
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n${shp} Deskripsi Baru : ${anu.desc}`
    zynn.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakq})
    console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    zynn.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    zynn.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
}
