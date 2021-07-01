const { MessageType, WAMessageProto } = require("@adiwajshing/baileys");
const axios = require('axios');
const fs = require("fs");
const encodeUrl = require('encodeurl');
const conn = require('../main')
const zynn = conn.zynn
const wa = require('../whatsapp/message')
const { color } = require('../lib/color')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const welkam = JSON.parse(fs.readFileSync('./src/welkam.json'))
const left = JSON.parse(fs.readFileSync('./src/left.json'))
const tleft = JSON.parse(fs.readFileSync('./src/tleft.json'))
fakenomor = '0@s.whatsapp.net'
fake = '</SELFBOTZ'
shp = '>'
module.exports = zynz = async (zynn, anu) => {
      if (!welkom.includes(anu.jid)) return
      try {
         const mdata = await zynn.groupMetadata(anu.jid)
	 finvite = {
  "key": {
    "fromMe": false,
    "participant": "0@s.whatsapp.net",
    "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
  "groupInviteMessage": {
    "groupJid": anu.jid,
    "inviteCode": "NgsCIU2lXKh3VHJT",
    "groupName": mdata.subject,
    "caption": fake,
    "height": 6080,
    "width": 6000
  }
}
}
 ini_user = zynn.contacts[anu.participants[0]]
         try{
            namaewa = ini_user.notify
         }catch(e){
            namaewa = ini_user.name
         }
	try{
	if(ini_user.name === undefined){
	namaewa = ini_user.vname
}}catch{
}
         try {
               ppimg = await zynn.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        try {
               ppgc = await zynn.getProfilePicture(anu.jid)
            } catch {
               ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
        if (anu.action == 'add') {
	img = await wa.getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/welcomer?nama=${namaewa}&namaGb=${encodeUrl(mdata.subject)}&pepeGb=${shortgc.data}&totalMem=${mdata.participants.length}&pepeUser=${shortpc.data}&bege=https://i.ibb.co/WyvDRgy/20210422-044002.jpg&apikey=hardianto`)
            num = anu.participants[0]
            user = '@' + num.split('@')[0]
            gcname = mdata.subject
         for(let i of welkam){
         	if(i.idgc.includes(anu.jid)){
         	textwel1 = `${i.textwel.replace("@user",user)}`
             textwel2 = `${textwel1.replace("@gcname",gcname)}`
         	return zynn.sendMessage(mdata.id, img, MessageType.image, {contextInfo: {"mentionedJid": [num]}, quoted: finvite, caption: textwel2})
         	}
         	}
            teks = `Halo ${user} 👋\nSelamat datang di Grup
*${mdata.subject}*

Intro Member Baru

${shp} 1. Nama: 
${shp} 2. Umur:
${shp} 3. Status:
${shp} 4. Askot:

Sering nimbrung dan baca rules grup`
            zynn.sendMessage(mdata.id, img, MessageType.image, {contextInfo: {"mentionedJid": [num]}, quoted: finvite, caption: teks})
         } else if (anu.action == 'remove') {
            if(!left.includes(anu.jid)) return
	img = await wa.getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/leave?nama=${namaewa}&namaGb=${encodeUrl(mdata.subject)}&pepeGb=${shortgc.data}&totalMem=${mdata.participants.length}&pepeUser=${shortpc.data}&bege=https://i.ibb.co/WyvDRgy/20210422-044002.jpg&apikey=hardianto`)
            num = anu.participants[0]
            user = '@' + num.split('@')[0]
            gcname = mdata.subject
         for(let i of tleft){
         	if(i.idgc.includes(anu.jid)){
         	textleft1 = `${i.textleft.replace("@user",user)}`
             textleft2 = `${textleft1.replace("@gcname",gcname)}`
         	return zynn.sendMessage(mdata.id, img, MessageType.image,  {contextInfo: {"mentionedJid": [num]}, quoted: finvite, caption: textleft2})
         	}
         	}
            teks = `alhamdulillah, beban hilang 1 @${num.split('@')[0]}`
            //zynn.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
            zynn.sendMessage(mdata.id, img, MessageType.image, {contextInfo: {"mentionedJid": [num]}, quoted: finvite, caption: teks})
         }
	else if (anu.action == 'promote') {
             var thu = await zynn.getStatus(anu.participants[0], MessageType.text)
             num = anu.participants[0]
             teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
            zynn.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
         } else if (anu.action == 'demote') {
            thu = await zynn.getStatus(anu.participants[0], MessageType.text)
            num = anu.participants[0]
            teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
            zynn.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
}
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
   }
