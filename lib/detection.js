const {
    MessageType,
    WAMessageProto
} = require("@adiwajshing/baileys");
const axios = require('axios');
const fs = require("fs");
const encodeUrl = require('encodeurl');
const moment = require("moment-timezone");
const wa = require('../whatsapp/message')
const {
    color
} = require('../lib/color')
const set = JSON.parse(fs.readFileSync('./setting.json'))
fakenomor = '0@s.whatsapp.net'
fake = set.fake
shp = set.shp
exports.sprefix = async (pref) => {
    var prefix = pref
}
module.exports = zynz = async (zynn, anu, db) => {
    const set = await db.showdata('setting')
    const setting = set[0]
    const asu = await wa.getRandom()
    const asi = asu.replace('undefined', '')
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
        try {
            if (!ini_user.notify == '') {
                namaewa = ini_user.notify
            } else if (!ini_user.name == '') {
                namaewa = ini_user.name
            } else {
                namaewa = '+' + anu.participants[0].split('@')[0]
            }
        } catch {
            namaewa = '+' + anu.participants[0].split('@')[0]
        }
        if (setting.picdetec === true) {
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
            //shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
        }
        if (anu.action == 'add') {
            teks = `Halo Saya _ZBOT_\nSaya diInvite oleh Owner Untuk Masuk di Group\nKetik .menu untuk melihat fitur saya`
            //if (anu.participants[0] === zynn.user.jid) return zynn.sendMessage(anu.jid, teks, MessageType.text)
            deta = await db.showdata('antiluar', {
                id: anu.jid
            })
            try {
                if (deta[0].id === from) {
                    if (!anu.participants[0].startsWith('62')) {
                        teks = `Sorry @${anu.participants[0].split('@')[0]}, this group is only for Indonesians, The bot will kick you out`
                        await wa.Mentions(anu.jid, teks, [anu.participants[0]])
                        await wa.sleep(3000)
                        wa.kick(anu.jid, [anu.participants[0]])
                    }
                }
            } catch {}
            add = await db.showdata('welcome', {
                id: anu.jid
            })
            try {
                if (add[0].id === anu.jid) {
                    ''
                }
            } catch {
                return
            }
            console.log('welcome')
            if (setting.picdetec === true) {
              img = `https://beta-restapi.herokuapp.com/api/canvas/welcome?username=${encodeUrl(namaewa)}&memcount=${mdata.participants.length}&groupname=${encodeUrl(mdata.subject)}&ppurl=${shortpc}&bgurl=https://wallpaperaccess.com/full/33231.jpg&apikey=noapi`
            }
            num = anu.participants[0]
            user = '@' + num.split('@')[0]
            gcname = mdata.subject
            console.log('Member Join ' + num)
            desc = mdata.desc
            welteks = await db.showdata('welcome_mess', {id: anu.jid})
            try{
              if (welteks[0].id === anu.jid) {
                        textwel1 = `${welteks[0].teks.replace("@user",user)}`
                        textwel2 = `${textwel1.replace("@gcname",gcname)}`
              }
                    textwel3 = `${textwel2.replace("@desc", desc)}`
                    if (setting.picdetec === true) {
                        return wa.sendButtonWithloc(mdata.id, textwel3, 'Welcome Message', await wa.getBuffer(img), ['THANK YOU'], [`THANK YOU`], num, finvite)
                        //return zynn.sendMessage(mdata.id, buff, MessageType.image, {quoted: finvite, caption: textwel3, contextInfo: {mentionedJid: [num]}})
                    } else {
                        return wa.sendButton(mdata.id, textwel3, 'Welcome Message', ['THANK YOU'], [`THANK YOU`], num, finvite)
                    }
            }catch{
            teks = `Halo ${user} 👋\nSelamat datang di Grup
*${mdata.subject}*

Intro Member Baru

${shp} Nama: 
${shp} Umur:
${shp} Status:
${shp} Askot:

Sering nimbrung dan baca rules grup`
            if (setting.picdetec === true) {
                return wa.sendButtonWithloc(mdata.id, teks, 'Welcome Message', await wa.getBuffer(img), ['THANK YOU'], [`THANK YOU`], num, finvite)
            } else {
                return wa.sendButton(mdata.id, teks, 'Welcome Message', ['THANK YOU'], [`THANK YOU`], num, finvite)
            }
        }
        } else if (anu.action == 'remove') {
            lef = await db.showdata('left', {
                id: anu.jid
            })
            try {
                if (lef[0].id === anu.jid) {
                    ''
                }
            } catch {
                return
            }
            if (setting.picdetec === true) {
                img = `https://beta-restapi.herokuapp.com/api/canvas/goodbye?username=${encodeUrl(namaewa)}&memcount=${mdata.participants.length}&groupname=${encodeUrl(mdata.subject)}&ppurl=${shortpc}&bgurl=https://wallpaperaccess.com/full/33231.jpg&apikey=noapi`
              }
            num = anu.participants[0]
            user = '@' + num.split('@')[0]
            gcname = mdata.subject
            desc = mdata.desc
            console.log('Member keluar/remove' + num)
            out = await db.showdata('left_mess', {id: anu.jid})
            try{
              if(out[0].id === anu.jid){
                    textleft1 = `${out[0].teks.replace("@user",user)}`
                    textleft2 = `${textleft1.replace("@gcname",gcname)}`
                    textleft3 = `${textleft2.replace("@desc", desc)}`
              }
                    if (setting.picdetec === true) {
                        return wa.sendButtonWithloc(mdata.id, textleft3, 'Leave Message', await wa.getBuffer(img), ['BYE BYE'], [`BYE BYE`], num, finvite)
                        //return zynn.sendMessage(mdata.id, buff, MessageType.image, {quoted: finvite, caption: textleft3, contextInfo: {mentionedJid: [num]}})
                    } else {
                        return wa.sendButton(mdata.id, textleft3, 'Leave Message', ['BYE BYE'], [`BYE BYE`], num, finvite)
                    }

                }catch{
            teks = `alhamdulillah, beban hilang 1 @${num.split('@')[0]}`
            //zynn.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
            if (setting.picdetec === true) {
                return wa.sendButtonWithloc(mdata.id, teks, 'Leave Message', await wa.getBuffer(img), ['BYE BYE'], [`BYE BYE`], num, finvite)
            } else {
                return wa.sendButton(mdata.id, teks, 'Leave Message', ['BYE BYE'], [`BYE BYE`], num, finvite)
            }
            }
        } else if (anu.action == 'promote') {
            detec = await db.showdata('detector', {
                id: mdata.id
            })
            try {
                if (detec[0].id === anu.jid) {
                    ''
                }
            } catch {
                return
            }
            var thu = await zynn.getStatus(anu.participants[0], MessageType.text)
            num = anu.participants[0]
            teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
            wa.sendButton(mdata.id, teks, 'Promote Detector', ['CONGRATULATION'], [`.`], num, finvite)
        } else if (anu.action == 'demote') {
            detec = await db.showdata('detector', {
                id: mdata.id
            })
            try {
                if (detec[0].id === anu.jid) {
                    ''
                }
            } catch {
                return
            }
            thu = await zynn.getStatus(anu.participants[0], MessageType.text)
            num = anu.participants[0]
            teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
            wa.sendButton(mdata.id, teks, 'Demote Detector', ['MAMPUS DIDEMOTE'], [`.`], num, finvite)
        }
    } catch (e) {
        console.log('Error : %s', color(e, 'red'))
    }
}
