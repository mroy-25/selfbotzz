const { MessageType, WAMessageProto } = require("@adiwajshing/baileys");
const axios = require('axios');
const fs = require("fs");
const encodeUrl = require('encodeurl');
const moment = require("moment-timezone");
const wa = require('../whatsapp/message')
const { color } = require('../lib/color')
fakenomor = '0@s.whatsapp.net'
fake = '</SELFBOTZ'
shp = '▢'
module.exports = zynz = async (zynn, anu) => {
	const setting = JSON.parse(fs.readFileSync('./setting.json'))
	const welkam = JSON.parse(fs.readFileSync('./src/welkam.json'))
	const left = JSON.parse(fs.readFileSync('./src/left.json'))	
	const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
	const tleft = JSON.parse(fs.readFileSync('./src/tleft.json'))
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
 ini_user = await zynn.contacts[anu.participants[0]]
         try{
            if(!ini_user.notify == ''){
	namaewa = ini_user.notify
	}
	else if(!ini_user.name == ''){
	namaewa = ini_user.name
	}
	else{
	namaewa = '+' + anu.participants[0].split('@')[0]
	}}catch{
	namaewa = '+' + anu.participants[0].split('@')[0]
}
	if(setting.picdetec === true){
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
	}
        if (anu.action == 'add') {
	teks = `Halo Saya _ZBOT_\nSaya diInvite oleh Owner Untuk Masuk di Group\nKetik .menu untuk melihat fitur saya`
if(anu.participants[0] === zynn.user.jid) return zynn.sendMessage(anu.jid, teks, MessageType.text)
	if (!welkom.includes(anu.jid)) return
	if(setting.picdetec === true){
	img = `https://pecundang.herokuapp.com/api/canvaswelbg?name=${encodeUrl(namaewa)}&avatar=${shortpc.data}&background=https://www.photohdx.com/images/2016/05/red-blurry-background.jpg&gcname=${encodeUrl(mdata.subject)}&jumlahmem=${mdata.participants.length}`
	}
            num = anu.participants[0]
            user = '@' + num.split('@')[0]
            gcname = mdata.subject
	    desc = mdata.desc
         for(let i of welkam){
         	if(i.idgc.includes(anu.jid)){
         	textwel1 = `${i.textwel.replace("@user",user)}`
             textwel2 = `${textwel1.replace("@subject",gcname)}`
		textwel3 = `${textwel2.replace("@desc", desc)}`
		if(setting.picdetec === true){
		return wa.sendFileFromUrl(mdata.id, img, finvite, textwel3, [num])
         	}
		else{
                return zynn.sendMessage(mdata.id, textwel3, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
		}
		}
         	}
            teks = `Halo ${user} 👋\nSelamat datang di Grup
*${mdata.subject}*

Intro Member Baru

${shp} Nama: 
${shp} Umur:
${shp} Status:
${shp} Askot:

Sering nimbrung dan baca rules grup`
               if(setting.picdetec === true){
                return wa.sendFileFromUrl(mdata.id, img, finvite, teks, [num])
                }
                else{
                zynn.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
                }

         } else if (anu.action == 'remove') {
            if(!left.includes(anu.jid)) return
	if(setting.picdetec === true){
	img = `https://pecundang.herokuapp.com/api/canvasbyebg?name=${encodeUrl(namaewa)}&avatar=${shortpc.data}&background=https://www.photohdx.com/images/2016/05/red-blurry-background.jpg&gcname=${encodeUrl(mdata.subject)}&jumlahmem=${mdata.participants.length}`
	}
            num = anu.participants[0]
            user = '@' + num.split('@')[0]
            gcname = mdata.subject
		desc = mdata.desc
         for(let i of tleft){
         	if(i.idgc.includes(anu.jid)){
         	textleft1 = `${i.textleft.replace("@user",user)}`
             textleft2 = `${textleft1.replace("@gcname",gcname)}`
		textleft3 = `${textleft2.replace("@desc", desc)}`
                if(setting.picdetec === true){
                return wa.sendFileFromUrl(mdata.id, img, finvite, textleft3, [num])
                }
                else{
                return zynn.sendMessage(mdata.id, textleft3, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
                }

         	}
         	}
            teks = `alhamdulillah, beban hilang 1 @${num.split('@')[0]}`
            //zynn.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
                if(setting.picdetec === true){
                return wa.sendFileFromUrl(mdata.id, img, finvite, teks, [num])
                }
                else{
                zynn.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
                }

         }
	else if (anu.action == 'promote') {
	const gchange = JSON.parse(fs.readFileSync('./src/gupdated.json'))
	if(!gchange.includes(mdata.id)) return
             var thu = await zynn.getStatus(anu.participants[0], MessageType.text)
             num = anu.participants[0]
             teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
            zynn.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
         } else if (anu.action == 'demote') {
        const gchange = JSON.parse(fs.readFileSync('./src/gupdated.json'))
	if(!gchange.includes(mdata.id)) return
            thu = await zynn.getStatus(anu.participants[0], MessageType.text)
            num = anu.participants[0]
            teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
            zynn.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: finvite})
}
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
   }
