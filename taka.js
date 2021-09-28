
/*BY FAJAR thx to aqul hexagon */
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
const wa = require('./whatsapp/message')
const fakereply = require('./lib/fake')
const { msgFilter } = require('./lib/antispam.js')
const skrep = require('./skrep')
const moment = require("moment-timezone");
const fs = require("fs");
const { exec, spawn } = require('child_process');
const speed = require('performance-now');
const ffmpeg = require('fluent-ffmpeg');
const { fromBuffer } = require('file-type');
const FormData = require('form-data');
const encodeUrl = require('encodeurl');
const imgbb = require('imgbb-uploader')
const request = require('request');
const conn = require('./main');
const {color} = require('./lib/color');
const {help, stickmenu, helpb} = require('./lib/help');
const mess = JSON.parse(fs.readFileSync('./whatsapp/mess.json'));
const axios = require('axios');
const ms = require('parse-ms');
const { removeBackgroundFromImageFile } = require('remove.bg')
const tiktod = require('tiktok-scraper')
const hx = require('hxz-api')
const akaneko = require('akaneko')
const ame = require('amethyste-api')
const ameapi = new ame('4e5ede2d81e0aee98dec15ee01500d63171662b8ddc3b0dc99bdbd41a4324c945a46e04d80771dc1019560cd4a7fe82b2e3de77d156dca9e88f8bc58a7f5ed05')
const google = require('google-it')
const yts = require('yt-search')
const gis = require('g-i-s')
const zrapi = require('zrapi')
const Ra = require('ra-api')
const zahir = require('zahir-api')
const brainly = require('brainly-scraper-v2')
const qrcode = require("qrcode-terminal")
const infotlp = require('no-telp')
const express = require('express')
const app = express()
const simple = require('./lib/simple')
const PORT = process.env.PORT || 3000
const imageToBase64 = require('image-to-base64')
const translate = require('@vitalets/google-translate-api')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const fetch = require('node-fetch');
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const base64Img = require('base64-img')
const fakeUa = require('fake-useragent');
const SocketIO = require('socket.io')
const Exif = require('./lib/exif');
const exif = new Exif();
const tovid = require('./lib/tovideo')
setting = JSON.parse(fs.readFileSync('./setting.json'))
const { uploadimg } = require('./lib/uploadimg');
const asupann = JSON.parse(fs.readFileSync('./lib/asupan.json'))
const { addcmd, getcmd } = require('./lib/setcmd')
const vcard = async(nomor, nama, bio) => {
        kon = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nama}\n`
            + `ORG:${bio.status};\n`
            + `TEL;type=CELL;type=VOICE;waid=${nomor}:${nomor}\n`
            + 'END:VCARD'
return kon
}
const stickermetadata = {
   type: 'full',
        pack: setting.packname,
        author: setting.author,
        categories: [
            '🌹'
        ]
}
const {createSticker} = require('wa-sticker-formatter')
fakecap = setting.fakecap
fakeimage = fs.readFileSync(`./media/zynn.jpeg`)
fakeimage2 = fs.readFileSync('./media/zynn2.jpeg')
publicc = setting.public
fakec = setting.fake
nopref = 'multi'
shp = setting.shp
fakenomor = '0@s.whatsapp.net'
autoread = setting.autoread
fakerep = setting.fakerep
baterai = {
    baterai: 0,
    cas: false,
    powersave: false
}
tmp_hit = []
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
//welkam/left
app.use('/', (req, res) => {  
conn.connects()
console.log("on bang bot nya")
})
const tzy = conn.zynn
tzy.on('CB:action,,battery', json => {
const a = json[2][0][1].value
    const b = json[2][0][1].live
    const c = json[2][0][1].powersave
    baterai.baterai = a
    baterai.cas = b
    baterai.powersave = c
})
let server = app.listen(PORT, () => console.log(`Listening On Port ${PORT}`))
module.exports = zynn = async (zynn, tod, db) => {
    try {
        if (!tod.hasNewMessage) return
        tod = tod.messages.all()[0]
        if (!tod.message) return
        if (tod.key && tod.key.remoteJid == 'status@broadcast') return
            global.Prefix
        global.wa
        if ((Object.keys(tod.message)[0] === 'ephemeralMessage' && JSON.stringify(tod.message).includes('EPHEMERAL_SETTING')) && tod.message.ephemeralMessage.message.protocolMessage.type === 3 && !tod.key.fromMe) {
                teks = 'Tandai Telah Dibaca\nSeseorang mengirim bug'
                teks += '\n'.repeat(100)
                teks += JSON.stringify(tod, null, 2)
        try{
            zynn.groupRemove(from, [tod.participant])
        }catch{
        }
        zynn.sendMessage(tod.key.remoteJid, teks, MessageType.text)
                zynn.sendMessage(tod.key.remoteJid, teks, MessageType.text)
}
        tod.message = (Object.keys(tod.message)[0] === 'ephemeralMessage') ? tod.message.ephemeralMessage.message : tod.message
        const content = JSON.stringify(tod.message)
        const from = tod.key.remoteJid
        global.from
        const isGroup = from.endsWith('@g.us')
        const m = simple.smsg(zynn, tod)
        const type = Object.keys(tod.message)[0]
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
        const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const cmd = (type === 'buttonsResponseMessage' && tod.message.buttonsResponseMessage.selectedButtonId && m.quoted.sender === zynn.user.jid) ? tod.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && tod.message.listResponseMessage.singleSelectReply.selectedRowId && m.quoted.sender === zynn.user.jid) ? tod.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && tod.message.conversation) ? tod.message.conversation : (type == 'imageMessage') && tod.message.imageMessage.caption ? tod.message.imageMessage.caption : (type == 'videoMessage') && tod.message.videoMessage.caption ? tod.message.videoMessage.caption : (type == 'extendedTextMessage') && tod.message.extendedTextMessage.text ? tod.message.extendedTextMessage.text : (type == 'stickerMessage') && (getcmd(tod.message.stickerMessage.fileSha256.toString('hex'), db) !== null && getcmd(tod.message.stickerMessage.fileSha256.toString('hex'), db) !== undefined) ? getcmd(tod.message.stickerMessage.fileSha256.toString('hex'), db) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        const aprefix = /^[°${}π÷×¶∆£¢€¥®™✓=|~zZ+×!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°${}π÷×¶∆£¢€¥®™✓=|~zZ+×!#$%^&./\\©^]/gi) : '.'
        noprefix = ''
        if(nopref == 'no'){
            prefix = noprefix
            slc = 0
            slc2 = 1
        }
        else if(nopref == 'multi'){
            prefix = aprefix
            slc = 1
            slc2 = 2
        }
        else{
            prefix = nopref
            slc = 1
            slc2 = 2
            }
var gprefix = prefix
if(isGroup){
try{
pref = await db.showdata('prefix', {id: from})
if(pref[0].id === from){
var prefa = pref[0].prefix == 'noprefix' ? '' : pref[0].prefix
var prefix = prefa
}
if(prefa == undefined){
var prefix = gprefix
}
}catch{
}
}
if(type === 'buttonsResponseMessage'){
    var prefix = ''
}
else if(type === 'stickerMessage'){
   var prefix = ''
}

        body = (type === 'buttonsResponseMessage' && tod.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && m.quoted.sender === zynn.user.jid) ? tod.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && tod.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && m.quoted.sender === zynn.user.jid) ? tod.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && tod.message.conversation.startsWith(prefix)) ? tod.message.conversation : (type == 'imageMessage') && tod.message.imageMessage.caption.startsWith(prefix) ? tod.message.imageMessage.caption : (type == 'videoMessage') && tod.message.videoMessage.caption.startsWith(prefix) ? tod.message.videoMessage.caption : (type == 'extendedTextMessage') && tod.message.extendedTextMessage.text.startsWith(prefix) ? tod.message.extendedTextMessage.text : (type == 'stickerMessage') && (await getcmd(tod.message.stickerMessage.fileSha256.toString('hex'), db) !== null && await getcmd(tod.message.stickerMessage.fileSha256.toString('hex'), db) !== undefined) ? (await getcmd(tod.message.stickerMessage.fileSha256.toString('hex'), db) ? await getcmd(tod.message.stickerMessage.fileSha256.toString('hex'), db) : '') : ""
        chats = (type === 'conversation') ? tod.message.conversation : (type === 'extendedTextMessage') ? tod.message.extendedTextMessage.text : ''
        //const command = body.slice(slc).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        //const q = args.join(' ')
        const run = process.uptime()
        const arg = chats.slice(command.length + 1, chats.length)
        //asus = await wa.random(asupann.length)
        //asupan = 'http://sansekai.my.id/ptl_repost/' + asupann[asus]

        //function
        const sendText = (text) => {
    zynn.sendMessage(from, text, MessageType.text)
}
function monospace(string) {
                    return '```' + string + '```'
                }
function bold(string) {
                    return '*' + string + '*'
                }
function italic(string) {
                    return '_' + string + '_'
                }

function today(i) {
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
return today;
 }
function getHeader() {
  var headers = {
    "User-Agent": fakeUa()
  };
  //console.log('headers', headers);
  return headers;
}
let localee = 'id'
let e = new Date(new Date + 3600000)
let dateIslamic = Intl.DateTimeFormat(localee + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(e)
 let datee = e.toLocaleDateString(localee, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
let timee = moment.tz('Asia/Jakarta').format('HH:mm:ss')
function formatDate(n, localee) {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
function parseMention(text) {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
function GenerateRandomNumber(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // Generates a random alphanumberic character
function GenerateRandomChar() {
            var chars = "1234567890ABCDEFGIJKLMNOPQRSTUVWXYZ";
            var randomNumber = GenerateRandomNumber(0,chars.length - 1);
            return chars[randomNumber];
        }
        // Generates a Serial Number, based on a certain mask
function GenerateSerialNumber(mask){
            var serialNumber = "";
            if(mask != null){
                for(var i=0; i < mask.length; i++){
                    var maskChar = mask[i];
                    serialNumber += maskChar == "0" ? GenerateRandomChar() : maskChar;
                }
            }
            return serialNumber;
        }
function torupiah(angka)
        {
            var rupiah = '';        
            var angkarev = angka.toString().split('').reverse().join('');
            for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
            return rupiah.split('',rupiah.length-1).reverse().join('');
        }
const SN = GenerateSerialNumber("0000")
const runtime = function(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}
            const botNumber = zynn.user.jid
        const Owner = ['13345183054@s.whatsapp.net', '6281990498472@s.whatsapp.net', zynn.user.jid]
        const sender = tod.key.fromMe ? zynn.user.jid : isGroup ? tod.participant : tod.key.remoteJid
        const totalchat = await zynn.chats.all()
        const groupMetadata = isGroup ? await zynn.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupId = isGroup ? groupMetadata.jid : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupDesc = isGroup ? groupMetadata.desc : ''
        const groupAdmins = isGroup ? wa.getGroupAdmins(groupMembers) : ''
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        //const isGroupAdmins = groupAdmins.includes(sender) || 
        const groupOwner = isGroup ? groupMetadata.owner : ''
        const itsMe = Owner.includes(m.sender)
        const isGroupAdmins = groupAdmins.includes(m.sender) || false
      //if(itsMe) return zynn.sendMessage("994407878439-1617840325@g.us", JSON.stringify(tod),MessageType.text)
const fdocu = await fakereply.fdocu(from, tod)
const troli = await fakereply.troli(from, tod)
const faudio = await fakereply.faudio(from, tod)
const fvn = await fakereply.fvn(from, tod)
const fkontak = await fakereply.fkontak(from, tod)
const fkontak2 = await fakereply.fkontak2(from, tod)
const fkontak3 =  await fakereply.fkontak3(from, tod, command)
const floc = await fakereply.floc(from, tod)
const fliveloc = await fakereply.fliveloc(from, tod)
const fakegroup = await fakereply.fakegroup(from, tod, command)
const finvite = await fakereply.finvite(from, tod)
const ftoko = await fakereply.ftoko(from, tod)

//
var reply = async(text) => {
tunggu = type === 'buttonsResponseMessage' && text == mess.wait ? '' : zynn.sendMessage(from, text, MessageType.text, {quoted: tod})
}
if (isGroup && m.mtype == 'viewOnceMessage'){
  viewo = await db.showdata('antiviewonce', {id: from})
  try{
    if(viewo[0].id === from){
      ''
    }
  }catch{
    return
  }
                var msg = {...tod}
                msg.message = tod.message.viewOnceMessage.message
                msg.message[Object.keys(msg.message)[0]].viewOnce = false
                reply('ViewOnce detected!')
                zynn.copyNForward(from, msg)
            }
// error
try{
error = await db.showdata('error', {cmd: command})
if(error[0].cmd === command){
    return
}
}catch{
}
// const q
const que = args.join(' ')
if(que.startsWith('=>') && itsMe){
        console.log('q v2')
        try{
                var qq =  JSON.stringify(await eval(que.split('=>')[1]), null, 2)
                try{
                var q = qq.replace(/"/g, '')
                }catch{
                var q = qq
                }
        }catch(err){
                ee = String(err)
                return wa.reply(from, ee, tod)
        }
        }
else{
        var q = args.join(' ')
}

if(fakerep == "ftoko"){
   var rep = ftoko
}
else if(fakerep == "fgrup"){
   var rep = fakegroup
}
else if(fakerep == "reply"){
   var rep = tod
}
else if(fakerep == "loc"){
   var rep = floc
}
else if(fakerep == "liveloc"){
   var rep = fliveloc
}
else if(fakerep == "invite"){
  var rep = finvite
}
else if(fakerep == "fdocu"){
   var rep = fdocu
}
else if(fakerep == "troli"){
   var rep = troli
}
else if(fakerep == "audio"){
   var rep = faudio
}
else if(fakerep == "vn"){
   var rep = fvn
}
else if(fakerep == "kontak"){
   var rep = fkontak
}
else if(fakerep == 'kontak2'){
    var rep = fkontak2
}
else if(fakerep == 'kontak3'){
    var rep = fkontak3
}
const flink2 = (teks, title, body, img, url) => {
     zynn.sendMessage(from, img, image, {
    contextInfo: {
        mentionedJid: [tag],
        externalAdReply: {
            "title": title,
            "body": body,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "mediaUrl": url
        }
    },
caption: teks,
quoted: rep
})
}
const flink3 = (img1, img2, url, teks) => {
     zynn.sendMessage(from, img1, MessageType.image, {
        thumbnail: img1,
        caption: teks,
        "contextInfo": {
"mentionedJid": [sender],
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "externalAdReply": {
                "title": fakec,
                "body": "𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡",
                "previewType": "PHOTO",
                "thumbnailUrl": "",
                "thumbnail": img2,
                "sourceUrl": url
            }},
            quoted: rep
})
}
const fek = (buff, thumb, url, title) => {
if(!rep === tod){
     zynn.sendMessage(from, buff, MessageType.audio, {mimetype: Mimetype.mp4Audio,
        "contextInfo": {
    mentionedJid: [sender],
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "externalAdReply": {
                "title": title,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "",
                "thumbnail": thumb,
                "sourceUrl": url
            }},
            quoted: rep
})
}
else{
    zynn.sendMessage(from, buff, MessageType.audio, {
        "contextInfo": {
mimetype: 'audio/mp4',
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "externalAdReply": {
                "title": title,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "",
                "thumbnail": thumb,
                "sourceUrl": url
            }},
            quoted: rep
})
}
}
const fake = async(text) =>{
if(!rep === tod){
    zynn.sendMessage(from, text, MessageType.text, {quoted: rep, contextInfo:{mentionedJid: [sender], forwardingScore: 508, isForwarded: true}, sendEphemeral: true})
    zynn.updatePresence(from, Presence.composing)
}
else{
    zynn.sendMessage(from, text, MessageType.text, {quoted: rep, contextInfo:{forwardingScore: 508, isForwarded: true}, sendEphemeral: true})
    zynn.updatePresence(from, Presence.composing)
}
}
const csticker = async(path) => {
ran = wa.getRandom('.webp')
                        await ffmpeg(`${path}`)
                            .input(path)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(path)
                                reply(mess.error.stick)
                            })
                            .on('end', function () {
                                console.log('Finish')
                                wa.sendSticker(from, fs.readFileSync(ran), tod)
                                fs.unlinkSync(path)
                                fs.unlinkSync(ran)
                            })
                            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
}
const bypasephe = async(anu) => {
anu.message = (Object.keys(anu.message)[0] === 'ephemeralMessage') ? anu.message.ephemeralMessage.message : anu.message
return anu.message
}
const isBusiness = async(orangnya) => {
bus = await zynn.query({json: ['query', 'exist', orangnya], requiresPhoneConnection: false})
try{
    if(bus.biz === true){
    var busines = true
    }
}catch{
    var busines = false
}
return busines
}
const sendStickerFromUrlWithWM = async(url) => {
   ranp = wa.getRandom('.gif')
   rano = wa.getRandom('.webp')
   exec(`wget ${url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
 //fs.unlinkSync(ranp)
 if (err) return reply(`Error: ${err}`)
 exec(`webpmux -set exif ./sticker/data.exif ${rano} -o ${rano}`, async (error) => {
    if (error) return reply(`Error: ${error}`)
    await wa.sendSticker(from, fs.readFileSync(rano), tod)
    fs.unlinkSync(rano)
    fs.unlinkSync(ranp)
 })
 })
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    zynn.sendMessage(to, media, type, { quoted: tod, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }

        const time2 = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
      let d = new Date
         let locale = 'id'
         let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
         let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
         let week = d.toLocaleDateString(locale, { weekday: 'long' })
         let date = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
         })
         var waktu = moment().tz('Asia/Jakarta').format("HH : mm : ss")

        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedlocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        var pes = (type === 'conversation' && tod.message.conversation) ? tod.message.conversation : (type == 'imageMessage') && tod.message.imageMessage.caption ? tod.message.imageMessage.caption : (type == 'videoMessage') && tod.message.videoMessage.caption ? tod.message.videoMessage.caption : (type == 'extendedTextMessage') && tod.message.extendedTextMessage.text ? tod.message.extendedTextMessage.text : ''
        const messagesC = pes.slice(0).trim()
      const messagesCC = pes.slice(0).trim().split(/ +/).shift()
      const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = zynn.user.phone
        //Selamat
        const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
       fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}
if(time2 < "23:59:00"){
            var sselamat = 'Selamat Malam'
         }
         if(time2 < "19:00:00"){
            var sselamat = 'Selamat Petang'
         }
         if(time2 < "18:00:00"){
            var sselamat = 'Selamat Sore'
         }
         if(time2 < "15:00:00"){
            var sselamat = 'Selamat Siang'
         }
         if(time2 < "10:00:00"){
            var sselamat = 'Selamat Pagi'
         }
         if(time2 <= "05:00:00"){
            var sselamat = 'Jangan Lupa Tidur'
         }
         const ucselamat = sselamat
      if(autoread){
      zynn.chatRead(tod.key.remoteJid)
   }
// antihidetag
/*if(isGroup){
    if(m.isBaileys === true){
    try{
    if(!tod.key.fromMe && m.mentionedJid.length === groupMembers.length){
    console.log('tembus 1')
        if (chats.match(`@${m.mentionedJid[0].split('@')[0]}`)) return 
    console.log('tembus 2')
        if(isGroupAdmins) return reply('Admin mah bebas')
        if(!isBotGroupAdmins){
            return reply('Jangan Main Hidetag Woy\nUntung Bot bukan admin')
        }
        else{
            reply(`Dilarang Main hidetag digroup ${groupName}\n\nKarena melanggar aturan, Anda akan dikick!`)
            wa.kick(from, [m.sender])
        }
    }
}catch{
}
}
}*/
//afk
if(!tod.key.fromMe && !m.isBaileys){
  mentionByTag = type == "extendedTextMessage" && tod.message.extendedTextMessage.contextInfo != null ? tod.message.extendedTextMessage.contextInfo.mentionedJid : []
  mentionByReply = type == "extendedTextMessage" && tod.message.extendedTextMessage.contextInfo != null ? tod.message.extendedTextMessage.contextInfo.participant || "" : ""
  mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
  mention != undefined ? mention.push(mentionByReply) : []
  mentionUser = mention != undefined ? mention.filter(n => n) : []
  for (let x of mentionUser) {
  deta = await db.showdata('afk', {user: x})
  try{
    if (deta[0].user === x) {
    afktime = deta[0].afktime
    afkreason = deta[0].reason
    const cekafk = ms(Date.now() - afktime)
    ini_txt = `@${x.split('@')[0]} sedang afk.\n\n`
    ini_txt += `${shp} Reason : ${afkreason == '' ? 'Nothing' : afkreason}\n${shp} Since : _${cekafk.hours} Jam  ${cekafk.minutes} Menit  ${cekafk.seconds} Detik  Yang lalu_`
  wa.Mentions(from, ini_txt, [x], tod)
  }
}catch{
}
}

efk = await db.showdata('afk', {user: sender})
try{
if (efk[0].user === sender) {
  reply("Anda telah keluar dari mode afk.")
  db.delete('afk', {user: sender})
  }
}catch{
}
}
if (!publicc){
    if (!itsMe) return
}
if(!isGroup && !itsMe) return
if(sender.startsWith('92')) return
if(m.isBaileys === true) return
senjid = sender.split('@')[0] + '@c.us'
for(let i of zynn.blocklist){
if(i === senjid) return
}
if(isGroup && !itsMe){
mute = await db.showdata('mute', {id: from})
try{
  if(mute[0].id === from) return
}catch{
}
}
//simi pc
if(!isGroup && !tod.key.fromMe && !isCmd && !chats.startsWith('<')){
try{
if(type === 'stickerMessage') return
if(type === 'imageMessage') return
if(type === 'audioMessage') return
if(type === 'videoMessage') return
console.log(sender + ' : ' + chats)
data = await wa.fetchJson(`https://api.zeks.xyz/api/simi?apikey=iloveyou3000&text=${chats}`)
console.log('Simi : ' + data.result)
await zynn.updatePresence(from, Presence.composing)
return reply(`Bot : _${data.result}_`)
}catch{
}
}
if(isGroup){
    try{
if(!tod.message.extendedTextMessage.contextInfo.expiration == ''){
var isephe = false
}
}catch(e){
var isephe = true
}
}
isephemeral = isephe == false ? true : false
if(isCmd && !m.isBaileys){
if(!command == ''){
db.adddata('hit', {cmd: command})
}
}
if(isCmd && !m.isBaileys){
try{
 pendaftar = await db.showdata('user', {id: sender})
if(pendaftar[0].id === sender){
 ''
}
}catch{
db.adddata('user', {username: await zynn.getName(sender), id: sender})
}
}
 /*if (!itsMe && !tod.key.fromMe && isCmd && msgFilter.isFiltered(from) && !isGroup) {
        return console.log('[', color('SPAM', 'red'), ']', time, color(`${command}`), 'from', color(sender.split('@')[0]), 'args :', color(args.length)),
        reply('[ SPAM ] Tunggu 3 detik!')}
        if (!itsMe && !tod.key.fromMe && isCmd && msgFilter.isFiltered(from) && isGroup) {
        return console.log('[', color('SPAM', 'red'), ']', time, color(`${command}`), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length)),
        reply('[ SPAM ] Tunggu 3 detik!')}
        // [BETA] Avoid Spam Message
        msgFilter.addFilter(from)
}
*/
        //if(content.includes('stickerMessage','imageMessage','videoMessage','audioMessage')) return
//if(command == '') return
        if (isCmd && !isGroup) {console.log(color('[CMD]'), color(moment(tod.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`))}
        if (isCmd && isGroup) {console.log(color('[CMD]'), color(moment(tod.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(sender.split('@')[0]), 'in', color(groupName))}

switch (command) {
case 'listuser':
if(!itsMe) return
teks = 'List User\n\n'
for(let i of pendaftar){
namaewa = await wa.getPushname(i, tod)
teks += `${shp} Nama : ${namaewa}\n${shp} Tag : @${i.split('@')[0]}\n\n-------------------------\n\n`
}
wa.Mentions(from, teks, pendaftar, tod)
break
case 'help':
tothit = await db.showdata('hit')
hit = tothit.length
reg = await db.showdata('user')
ispublic = publicc === true ? 'Public' : 'Self'
shep = shp
if(nopref == 'no'){
    isprefix = 'Noprefix'
}
else if(nopref == 'multi'){
    isprefix = 'Multiprefix'
}
else{
    isprefix = nopref
}
    let i = []
                let giid = []
                for (mem of totalchat){
                    i.push(mem.jid)
                }
                for (id of i){
                    if (id && id.includes('g.us')){
                        giid.push(id)
                    }
                }
                timestampi = speed();
                latensii = speed() - timestampi
teks = `${fakec}

Halo ${await wa.getPushname(sender, tod)}👋
Saya ZBOT, Bot yang dibuat untuk memudahkan dalam berbagai hal
Silahkan klik menu untuk melihat fitur bot

Note : Tidak semua fitur work, Maklum saya noob

*I N F O  B O T*

*› Creator* : Aqul
*› Recode* : Fajar
*› Library* : Baileys
*› Version* : 5.0
*› Prefix* : ${isprefix}
*› Mode* : ${ispublic}
*› Total Hit* : ${hit}
*› Group Chat* : ${giid.length}
*› Personal Chat* : ${totalchat.length - giid.length}
*› Total Chat* : ${totalchat.length}
*› Speed* : ${latensii.toFixed(4)} Second
*› Runtime* : ${runtime(run)}
*› Rest Api's* : https://beta-restapi.herokuapp.com/

*I N F O  D E V I C E*

*› V. WHATSAPP* : ${wa_version}
*› Baterai* : ${baterai.baterai}%
*› Charge* : ${baterai.cas === 'true' ? 'Ya' : 'Tidak'}
*› Powersave* : ${baterai.powersave === true ? 'Aktif' : 'Nonaktif'}
*› RAM* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*› MCC* : ${mcc}
*› MNC* : ${mnc}
*› Versi OS* : ${os_version}
*› Merk HP* : ${device_manufacturer}
*› Versi HP* : ${device_model}`
wa.sendButtonWithloc(from, teks, fakec + ' || ' + reg.length + ' Registered User\nRuntime : ' + runtime(run), fakeimage, [`⋮☰ MENU`, `🤴🏻 OWNER`, '🧾 SCRIPT'], [`menu`, `owner`, 'sc'], sender, tod)
break
case 'menu':
tothit = await db.showdata('hit')
hit = tothit.length
reg = await db.showdata('user')
ispublic = publicc === true ? 'Public' : 'Self'
var shep = shp
           if(nopref == 'no'){
            isprefix = 'Noprefix'
           }
           else if(nopref == 'multi'){
            isprefix = 'Multiprefix'
           }
           else{
            isprefix = nopref
           }
if(setting.menu == 'polos'){
    wa.sendButton(from, help(totalchat, ispublic, timee, date, dateIslamic, hit, ucselamat, runtime, run, prefix, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, process, baterai, sender, isprefix, shep), fakec + ' || ' + reg.length + ' Registered User\nRuntime : ' + runtime(run), [`🤴🏻 OWNER`, '🧾 SCRIPT', '📈 STAT'], ['owner', 'sc', 'mystat'], sender, tod)
}
else if(setting.menu == 'button'){
    teks = help(totalchat, ispublic, timee, date, dateIslamic, hit, ucselamat, runtime, run, prefix, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, process, baterai, sender, isprefix, shep)
    wa.sendButtonWithloc(from, teks, fakec + ' || ' + reg.length + ' Registered User\nRuntime : ' + runtime(run), fakeimage, [`🤴🏻 OWNER`, '🧾 SCRIPT', '📈 STAT'], ['owner', 'sc', 'mystat'], sender, rep)
}
else{
            wa.sendButton(from, help(totalchat, ispublic, timee, date, dateIslamic, hit, ucselamat, runtime, run, prefix, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, process, baterai, sender, isprefix, shep), fakec + ' || ' + reg.length + ' Registered User\nRuntime : ' + runtime(run), [`🤴🏻 OWNER`, '🧾 SCRIPT', '📈 STAT'], ['owner', 'sc', 'mystat'], sender, rep)
}
break
case 'sc':
reply(`Bot ini menggunakan Script bot\n${shp} https://github.com/zennn08/BaseSelfBot\n${shp} https://github.com/Hexagonz/SELF-HX`)
break
case 'stickmenu':
case 'stickermenu':
reply(stickmenu(shp, prefix))
break
case 'groupbot':
reply('https://chat.whatsapp.com/Dt8Icyz3eIK4m1bUm593sR')
break
case 'mystat':
tothit = await db.showdata('hit')
reg = await db.showdata('user')
    u = []
                gid = []
                for (mem of totalchat){
                    u.push(mem.jid)
                }
                for (id of u){
                    if (id && id.includes('g.us')){
                        gid.push(id)
                    }
                }
                timestampi = speed();
                latensii = speed() - timestampi
unread = await zynn.loadAllUnreadMessages()
if(nopref == 'no'){
    isprefix = 'Noprefix'
}
else if(nopref == 'multi'){
    isprefix = 'Multiprefix'
}
else{
    isprefix = nopref
}
teks = `*B O T  S T A T*

*› Prefix* : ${isprefix}
*› Mode* : ${publicc === true ? 'PUBLIC' : 'SELF'}
*› Total Hit* : ${tothit.length}
*› Group Chat* : ${gid.length}
*› Personal Chat* : ${totalchat.length - gid.length}
*› Total Chat* : ${totalchat.length}
*› Unread Message* : ${unread.length.toString()}
*› Total User* : ${reg.length} Registered User
*› Speed* : ${latensii.toFixed(4)} Second
*› Runtime* : ${runtime(run)}

*I N F O  D E V I C E*

*› V. WHATSAPP* : ${wa_version}
*› Baterai* : ${baterai.baterai}%
*› Charge* : ${baterai.cas === 'true' ? 'Ya' : 'Tidak'}
*› Powersave* : ${baterai.powersave === true ? 'Aktif' : 'Nonaktif'}
*› RAM* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*› MCC* : ${mcc}
*› MNC* : ${mnc}
*› Versi OS* : ${os_version}
*› Merk HP* : ${device_manufacturer}
*› Versi HP* : ${device_model}`
reply(teks)
break
case 's':
case 'stiker':
        case 'sticker':
        const stickerdata = {
        type: 'full',
        pack: setting.packname,
        author: 'wa.me/' + sender.split('@')[0],
        categories: [
            '🌹'
        ]
        }
          if ((isMedia && !tod.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
            const media = await zynn.downloadMediaMessage(encmedia)
            stik = await createSticker(media, stickerdata)
            await wa.sendSticker(from, stik, tod)
          } else if ((isMedia && tod.message.videoMessage.seconds < 11 || isQuotedVideo && tod.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
            const media = await zynn.downloadAndSaveMediaMessage(encmedia)
            ran = wa.getRandom('.webp')
            reply(mess.wait)
            await ffmpeg(`./${media}`)
              .inputFormat(media.split('.')[1])
              .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
              })
              .on('end', function async() {
                console.log('Finish')
                zynn.prepareMessage(from, fs.readFileSync(ran), sticker).then(res => {
                  zynn.downloadMediaMessage(res).then(stik => {
                    createSticker(stik, stickerdata).then(asu => {
                      wa.sendSticker(from, asu, tod)
                    })
                  })
                })
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
              })
              .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(ran)
          } else {
            reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
          }
            break
case 'colong':
if(isQuotedSticker){
  boij = isQuotedSticker ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
  owgi = await zynn.downloadMediaMessage(boij)
  try{
    const sticker = await createSticker(owgi, stickermetadata)
    wa.sendSticker(from, sticker, tod)
  }catch{
    reply(mess.error.api)
  }
}
else{
reply(`reply sticker dengan caption ${prefix}${command}`)
}
break
case 'take':
case 'takestick':
if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
  const takestik = {
    type: 'full',
        pack: q.split('|')[0],
        author: q.split('|')[1],
        categories: [
            '🌹'
        ] 
  }
if(isQuotedSticker){
  boij = isQuotedSticker ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
  owgi = await zynn.downloadMediaMessage(boij)
  try{
    const sticker = await createSticker(owgi, takestik)
    wa.sendSticker(from, sticker, tod)
  }catch{
    reply(mess.error.api)
  }
}else{
  reply(`reply sticker dengan caption ${prefix}${command} packname|author`)
}
break
case 'tovideo':
case 'tomp4':
if (isQuotedSticker) {
    encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(tod).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : tod
    const savedFilename = await zynn.downloadAndSaveMediaMessage(encmedia, `./media/${sender}`)
    await tovid.webpToMp4(savedFilename)
        .then(async (rest) => {
            await axios({
            method: "GET",
            url: rest.result,
            responseType: "stream",
            }).then(({ data }) => {
                const saving = data.pipe(
                    fs.createWriteStream(`./media/${sender}-done.mp4`)
                 )
                saving.on("finish", () => {
                    zynn.sendMessage(from,
                    fs.readFileSync(`./media/${sender}-done.mp4`),
                    MessageType.video, {
                    mimetype: Mimetype.mp4,
                    caption: `*Nih*`,
                    quoted: tod,
                    }
                    )
        if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
        if (fs.existsSync(`./media/${sender}-done.mp4`)) fs.unlinkSync(`./media/${sender}-done.mp4`)
             })
             })
             })
             .catch((e) => {
            console.log(e)
            reply(`Error gan`)
            if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
             })
          }
break
case 'togif':
if (isQuotedSticker) {
    encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(tod).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : tod
    const savedFilename = await zynn.downloadAndSaveMediaMessage(encmedia, `./media/${sender}`)
    await tovid.webpToMp4(savedFilename)
        .then(async (rest) => {
            await axios({
            method: "GET",
            url: rest.result,
            responseType: "stream",
            }).then(({ data }) => {
                const saving = data.pipe(
                    fs.createWriteStream(`./media/${sender}-done.mp4`)
                 )
                saving.on("finish", () => {
                    zynn.sendMessage(from,
                    fs.readFileSync(`./media/${sender}-done.mp4`),
                    MessageType.video, {
                    mimetype: Mimetype.gif,
                    caption: `*Nih*`,
                    quoted: tod,
                    }
                    )
        if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
        if (fs.existsSync(`./media/${sender}-done.mp4`)) fs.unlinkSync(`./media/${sender}-done.mp4`)
             })
             })
             })
             .catch((e) => {
            console.log(e)
            reply(`Error gan`)
            if (fs.existsSync(savedFilename)) fs.unlinkSync(savedFilename)
             })
          }
break
case 'nowm':
if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}nowm*`)
var encmedia = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await zynn.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create('', '', `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
wa.sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), tod)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
break
case 'toimg':
if (!isQuotedSticker) return reply('Reply stiker nya')
if (tod.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
    reply(`Maaf tidak mendukung sticker gif`)
} else {
    const encmedia = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
    const media = await zynn.downloadAndSaveMediaMessage(encmedia)
    ran = wa.getRandom('.png')
    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media)
        if (err) {
            reply(`gagal`)
            fs.unlinkSync(ran)
        } else {
            buffer = fs.readFileSync(ran)
            wa.fakethumb(from, buffer, tod, 'NIH ngab')
            fs.unlinkSync(ran)
        }
})
}
break
/*case 'exif':
if(!itsMe) return
if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|author`)
if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
exif.create(arg.split('|')[0], arg.split('|')[1])
reply('sukses')
break*/
case 'exif':
if(!itsMe) return
if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|author`)
if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
setting.packname = q.split('|')[0]
setting.author = q.split('|')[1]
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
reply('sukses')
break
case 'public':
if(!itsMe) return
    setting.public = true
        fs.writeFileSync('./setting.json', JSON.stringify(setting))
        setting = await JSON.parse(fs.readFileSync('./setting.json'))
        publicc = setting.public
    reply(`Status: PUBLIC`)
    break
case 'self':
if(!itsMe) return
    setting.public = false
    fs.writeFileSync('./setting.json', JSON.stringify(setting))
    setting = await JSON.parse(fs.readFileSync('./setting.json'))
    publicc = setting.public
    reply(`Status: SELF`)
break
case 'setthumb':
if(!itsMe && !isOwner) return reply('Only Owner!')
boij = JSON.parse(JSON.stringify(tod).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await zynn.downloadMediaMessage(boij)
fs.writeFileSync(`./media/zynn.jpeg`, delb)
fakeimage = await fs.readFileSync('./media/zynn.jpeg')
reply(`Sukses`)
break
case 'setreply':
if(!itsMe) return
if (!arg) return reply(`Penggunaan ${prefix}setreply teks`)
setting.fakecap = q
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
setting = await JSON.parse(fs.readFileSync('./setting.json'))
fakecap = setting.fakecap
reply(`Sukses`)
break
case 'setfaketext':
if(!itsMe) return
if (!arg) return reply(`Penggunaan ${prefix}setfaketext teks`)
setting.fake = q
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
setting = await JSON.parse(fs.readFileSync('./setting.json'))
fakec = setting.fake
reply(`Sukses Mengubah Text fake ke ` + q)
break
case 'setmenu':
if(!itsMe) return
if (!arg) return reply(`Penggunaan ${prefix}setmenu jenis`)
if(args[0] == 'catalog'){
setting.menu = 'catalog'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
setting = await JSON.parse(fs.readFileSync('./setting.json'))
reply(`Sukses`)
}
else if(args[0] == 'flink'){
setting.menu = 'flink'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
setting = await JSON.parse(fs.readFileSync('./setting.json'))
reply(`Sukses`)
}else if(args[0] == 'flink2'){
setting.menu = 'flink2'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
setting = await JSON.parse(fs.readFileSync('./setting.json'))
reply(`Sukses`)
}
else if(args[0] == 'flink2'){
setting.menu = 'flink2'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
setting = await JSON.parse(fs.readFileSync('./setting.json'))
reply(`Sukses`)
}
else if(args[0] == 'polos'){
setting.menu = 'polos'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
setting = await JSON.parse(fs.readFileSync('./setting.json'))
reply(`Sukses`)
}
else if(args[0] == 'button'){
setting.menu = 'button'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
setting = await JSON.parse(fs.readFileSync('./setting.json'))
reply(`Sukses`)
}

else{
setting.menu = 'biasa'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
setting = await JSON.parse(fs.readFileSync('./setting.json'))
reply(`Sukses`)
}
break
case 'setprefix':
if(!itsMe) return
    if(!args[0]){
        if(nopref == 'no') return reply('No prefix sudah diaktifkan sebelumnya!')
        nopref = 'no'
        reply('Sukses Mengubah prefix ke noprefix')
        }
    else if(args[0] == 'multi'){
        if(nopref == 'multi') return reply('Multiprefix sudah diaktifkan sebelumnya!')
        nopref = 'multi'
        reply('Sukses Mengubah prefix ke multiprefix')
        }
    else{
        nopref = args[0]
        reply(`Sukses mengubah prefix ke ${args[0]}`)
        }
break
case 'term':
    if(!itsMe) return
    if (!q) return
        exec(q, (err, stdout) => {
        if (err) return reply(String(err))
        if (stdout) reply(stdout)
                })
break
case 'speed':
case 'ping':
const { speedz } = require('./lib/speed.js')
speedz(zynn, reply)
break
case 'block':
if(!itsMe) return reply(mess.only.Bowner)
try{
if(m.quoted){
zynn.blockUser(m.quoted.sender, 'add')
reply('Sukses Block User')
}
else{
if(!args[0]) return reply(`Example : ${prefix}block 6281xxxxxx`)
if(!args[0].includes('@') && isNaN(args[0])) return reply('Input harus berupa Nomor')
if(chats.length <= 13) return reply('Masukkan nomor dengan benar!')
if(args[0].includes('@')){          
nom = args[0].split('@')[1] + '@s.whatsapp.net'
}
else if(!args[0].startsWith('0')){
nom = args[0] + '@s.whatsapp.net'
}
else if(args[0].startsWith('0')) return reply('Awali nomor dengan kode negara\nContoh : 628199xxxxx')
zynn.blockUser(nom, 'add')
reply('Sukses Block User')
}
}catch(e){
o = String(e)
reply(o)
}
break
case 'unblock':
if(!itsMe) return reply(mess.only.Bowner)
try{
if(m.quoted){
zynn.blockUser(m.quoted.sender, 'remove')
reply('Sukses Unblock User')
}
else{
if(!args[0]) return reply(`Example : ${prefix}unblock 6281xxxxxx`)
if(!args[0].includes('@') && isNaN(args[0])) return reply('Input harus berupa Nomor')
if(chats.length <= 13) return reply('Masukkan nomor dengan benar!')
if(args[0].includes('@')){          
nom = args[0].split('@')[1] + '@s.whatsapp.net'
}
else if(!args[0].startsWith('0')){
nom = args[0] + '@s.whatsapp.net'
}
else if(args[0].startsWith('0')) return reply('Awali nomor dengan kode negara\nContoh : 628199xxxxx')
zynn.blockUser(nom, 'remove')
reply('Sukses Unblock User')
}
}catch(e){
o = String(e)
reply(o)
}
break
case 'listblock':
tag = [];
teks = shp + ` List Blocked Number : \nTotal : ${zynn.blocklist.length}\n\n`
for(let i of zynn.blocklist){
teks += `> @` + i.split('@')[0] + '\n'
tag.push(i.split('@')[0] + '@s.whatsapp.net')
}
wa.Mentions(from, teks, tag, tod)
break
case 'runtime':
reply(runtime(run))
break
case 'promote':
if(!isGroupAdmins) return reply(mess.only.admin)
if(!isBotGroupAdmins) return reply(mess.only.Badmin)
if(m.quoted){
wa.promote(from, [m.quoted.sender])
reply('sukses')
}
else{
if (!arg) return reply(`Penggunaan ${prefix}promote @tag atau nomor`)
if(m.mentionedJid == '') return reply(`Penggunaan ${prefix}promote @tag atau nomor`)
wa.promote(from, [m.mentionedJid[0]])
reply('sukses')
}
break
case 'demote':
if(!isGroupAdmins) return reply(mess.only.admin)
if(!isBotGroupAdmins) return reply(mess.only.Badmin)                                      
if(m.quoted){                                                                             
wa.demote(from, [m.quoted.sender])                                                        
reply('sukses')
}
else{
if (!arg) return reply(`Penggunaan ${prefix}demote @tag atau nomor`)
if(m.mentionedJid === undefined) return reply(`Penggunaan ${prefix}demote @tag atau nomor`)
wa.demote(from, [m.mentionedJid[0]])
reply('sukses')
}
break
case 'kick':
if(!isGroupAdmins) return reply(mess.only.admin)
if(!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!arg) return reply(`Penggunaan ${prefix}kick @tag atau nomor`)
if (tod.message.extendedTextMessage != undefined){
    mentioned = tod.message.extendedTextMessage.contextInfo.mentionedJid
    await reply(`Otw...`)
    wa.kick(from, mentioned)
} else {
    await reply(`Otw...`)
    wa.kick(from, [args[0] + '@s.whatsapp.net'])
}
break
case 'add':
if(!isGroupAdmins) return reply(mess.only.admin)
if(!isBotGroupAdmins) return reply(mess.only.Badmin)
if(m.quoted){
reply('otw')
wa.add2(from, m.quoted.sender, tod, reply)
}
else{
if (!arg) return reply(`Penggunaan ${prefix}add 62xxxxx atau reply pesan`)
reply('otw')
wa.add2(from, args[0], tod, reply)
}
break
case 'fakethumb':
if ((isMedia && !tod.message.videoMessage || isQuotedImage)) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
let media = await zynn.downloadMediaMessage(encmedia)
var b = fs.readFileSync(`./media/zynn.jpeg`)
option = {
    "thumbnail": b, quoted: rep}
zynn.sendMessage(from, media, "imageMessage", option)
}
else{
    reply('Reply gambarnya!')
}
break
case 'open':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins) return reply(mess.only.admin)
if(!q){
    await zynn.groupSettingChange(from, GroupSettingChange.messageSend, false)
    reply(`_Berhasil Membuka Group_`)
}
else{
    zynn.updatePresence(from, Presence.composing) 

    if (args[1]=="s") {var timer = args[0]+"000"
        } else if (args[1]=="m") {var timer = args[0]+"0000"
        } else if (args[1]=="h") {var timer = args[0]+"00000"
        } else {return fakestatus(`*pilih:*\ns = second\nm = minute\nh = hour\n\n*contoh*\n${prefix}open 10 s`)}
                setTimeout( () => {

                teks = `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪʙᴜᴋᴀ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${sender.split("@")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ᴍᴇᴍʙᴇʀ* ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`
                zynn.groupSettingChange (from, GroupSettingChange.messageSend, false);
                setTimeout( () => {
                    wa.Mentions(from, teks, [sender], tod)
                    }, 2000)
                }, timer)
                        }
break
case 'close':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroupAdmins) return reply(mess.only.admin)
if(!q){
    await zynn.groupSettingChange(from, GroupSettingChange.messageSend, true)
    reply(`_Berhasil Menutup Group_`)
}
else{
    zynn.updatePresence(from, Presence.composing) 

    if (args[1]=="s") {var timer = args[0]+"000"
        } else if (args[1]=="m") {var timer = args[0]+"0000"
        } else if (args[1]=="h") {var timer = args[0]+"00000"
        } else {return fakestatus(`*pilih:*\ns = second\nm = minute\nh = hour\n\n*contoh*\n${prefix}open 10 s`)}
                setTimeout( () => {

                teks = `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪᴛᴜᴛᴜᴘ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${sender.split("@")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ʜᴀɴʏᴀ ᴀᴅᴍɪɴ* ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`
                zynn.groupSettingChange (from, GroupSettingChange.messageSend, true);
                setTimeout( () => {
                    wa.Mentions(from, teks, [sender], tod)
                    }, 2000)
                }, timer)
                        }
break
case 'githubstalk':
if(!q) return reply('Masukkan username githubnya!')
reply(mess.wait)
try{
    data = await zahir.Github.searchUser(q)
    hdata = data.user
    console.log(hdata)
    teks = `*G I T H U B  S T A L K*\n\n${shp} Username : ${hdata.username}\n${shp} IdUser : ${hdata.idUser}\n${shp} Public Repo : ${hdata.publicRepos}\n${shp} Public Gists : ${hdata.publicGists}\n${shp} Followers : ${hdata.followers}\n${shp} Following : ${hdata.following}\n${shp} Github Url : ${hdata.githubUrl}`
    sendMediaURL(from, hdata.avatarUrl, teks)
}catch(e){
    reply(mess.error.api)
}
break
case 'covidindo':
try{
    data = await zahir.Edukasi.CovidIndo()
    teks = `*C O V I D  I N D O N E S I A*\n\n`
    for(let i of data){
        hdata = i.attributes
        teks += shp + ' Provinsi : ' + hdata.Provinsi + '\n'
        teks += shp + ' Kode Provinsi : ' + hdata.Kode_Provi + '\n'
        teks += shp + ' Positif : ' + hdata.Kasus_Posi + '\n'
        teks += shp + ' Sembuh : ' + hdata.Kasus_Semb + '\n'
        teks += shp + ' Meninggal : ' + hdata.Kasus_Meni + '\n\n'
        teks += '----------------------------------------\n\n'
    }
    reply(teks)
}catch(e){
    reply(mess.error.api)
}
break
case 'kbbi':
if(!q) return reply('Masukkan kata yang ingin dicari!')
reply(mess.wait)
try{
    data = await zahir.Edukasi.KBBI(q)
    teks = `*K B B I*\n${shp} Query : ${q}\n\n`
    for(let i of data.arti){
        teks += i + '\n'
    }
    reply(teks)
}catch(e){
    reply(mess.error.api)
}
break
case 'setname':
if(!isGroupAdmins) return reply(mess.only.admin)
if(!isBotGroupAdmins) return reply(mess.only.Badmin)
if(!q) return reply('Nama groupnya apa?')
await zynn.groupUpdateSubject(from, q)
reply(`Nama Group berhasil diubah menjadi '_${q}_'`)
break
case 'setdesk':
if(!isGroupAdmins) return reply(mess.only.admin)
if(!isBotGroupAdmins) return reply(mess.only.Badmin)
if(!q) return reply('Masukkan teksnya!')
await zynn.groupUpdateDescription(from, q)
reply(`Deskripsi Group berhasil diubah menjadi\n\n'_${q}_'`)
break
case 'listgroup':
if(!itsMe) return
ingfo = await wa.getGroup(totalchat)
   teks = `*L I S T  G R O U P*\nJumlah Grup: ${ingfo.length}\n\n`
   for (let i = 0; i < ingfo.length; i++){
   teks += `${shp} Nama grup : ${ingfo[i].subject}\n${shp} ID grup : ${ingfo[i].id}\n${shp} Dibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${shp} Jumlah Peserta : ${ingfo[i].participants.length}\n\n`
   }
   reply(teks)
   break
case 'inspect':
if(!itsMe) return
if(!q) return reply('Masukkan link groupnya!')
    codee = q.split('https://chat.whatsapp.com/')[1]
    var res = await zynn.query({
    json: ["query", "invite", codee],
    expect200: true
})
var caption = `*G R O U P  L I N K  I N S P E C T O R* 


${shp} Id: ${res.id}

${shp} Judul: ${res.subject}

${shp} Dibuat oleh @${res.id.split('-')[0]}
pada ${formatDate(res.creation * 1000)}${res.subjectOwner ? `

${shp} Judul diubah oleh @${res.subjectOwner.split(`@`)[0]}
pada ${formatDate(res.subjectTime * 1000)}`: ''}${res.descOwner ? `

${shp} Deskripsi diubah oleh @${res.descOwner.split(`@`)[0]}
pada ${formatDate(res.descTime * 1000)}` : ''}

${shp} Jumlah Member: ${res.size}

${shp} Teman yang diketahui join: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split(`@`)[0]).join('\n').trim() : 'Tidak ada'}
${res.desc ? `\n${shp} Deskripsi:\n
${res.desc}` : '\n*Tidak ada Deskripsi*'}
`
await zynn.sendMessage(from, caption, text, { quoted: tod, contextInfo: { mentionedJid: parseMention(caption)}})
break
case 'get':
if(!itsMe) return
if(!q) return reply('linknya?')
    fetch(`${q}`).then(res => res.text())  
    .then(bu =>{
    reply(bu)
})   
break
case 'chatscount':
if(!isGroupAdmins && !itsMe) return reoky(mess.only.admin)
id = from
mCount = {}
totalM = 0
await zynn.loadAllMessages(id, tod => {
user = tod.key.fromMe ? zynn.user.jid : tod.participant ? tod.participant : id.includes('g.us') ? '' : id
if (!user) return
if (user in mCount) mCount[user]++
else mCount[user] = 1
totalM++
}, 1000)
sorted = Object.entries(mCount).sort((a,b)=>b[1]-a[1])
pesan = shp+ ' ' + sorted.map(v=>`${v[0].replace(/(\d+)@.+/, '@$1')}: ${v[1]} pesan`).join(`\n${shp} `)
zynn.sendMessage(from, `Ditemukan ${totalM} pesan terakhir\n\n${pesan}`, MessageType.text,{contextInfo: {mentionedJid: sorted.map(v=>v[0])}, quoted: tod})
break
case 'sampah':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
id = from
mCount = {}
totalM = 0
tagg = []
await zynn.loadAllMessages(id, tod => {
user = tod.key.fromMe ? zynn.user.jid : tod.participant ? tod.participant : id.includes('g.us') ? '' : id
if (!user) return
if (user in mCount) mCount[user]++
else mCount[user] = 1
totalM++
}, 1000)
sorted = Object.entries(mCount).sort((a,b)=>b[1]-a[1])
teks = `*L I S T  M E M B E R  J A R A N G  N I M B R U N G*\n\n`
for(let i of groupMembers){
if(!sorted.map(v=> v[0]).includes(i.jid)){
teks += shp + ' ' + '@' + i.jid.split('@')[0] + '\n'
tagg.push(i.jid)
}
}
wa.Mentions(from,teks, tagg, tod)
break
case 'sider':
if(!isGroupAdmins && !itsMe) return
if(!tod.message.extendedTextMessage.contextInfo.participant === zynn.user.jid) return reply('Reply pesan bot!')
try{
infom = await zynn.messageInfo(from, tod.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `⬣ Telah dibaca oleh\n`
for(let i of infom.reads){
pushnama = await wa.getPushname(i.jid, tod)
teks += '\n'
teks += shp+' ' + pushnama + '\n'
teks += shp+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ${shp} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n'
tagg.push(i.jid)
}
wa.Mentions(from,teks, tagg, tod)
}catch(e){
    reply('Reply Pesan Botnya!')
    }
break
case 'infogc':
teks = `*I N F O  G R O U P*\n\n${shp} Nama Group : ${groupName}\n${shp} Dibuat : ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${shp} Jumlah Member : ${groupMembers.length}\n${shp} Jumlah Admin : ${groupAdmins.length}\n${shp} Pesan Sementara : ${isephemeral}\n${shp} Deskripsi Group :\n${groupDesc}`
try{
pp = await zynn.getProfilePicture(from)
}catch(e){
   pp = await fs.readFileSync('./media/aqul.jpeg')
   return sendImage(pp, teks)
}
sendMediaURL(from, pp, teks)
break
case 'ownergc':
own = groupMetadata.owner
ownjid = own.replace("@c.us","@s.whatsapp.net")
pushnama = await wa.getPushname(ownjid, tod)
zynn.sendMessage(from, `Mau ngapain minta nomor owner\nNih nomornya wa.me/${own.split("@")[0]}`, MessageType.text, {quoted: {
  "key": {
    "fromMe": false,
"participant":"0@s.whatsapp.net",
    "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
    "contactMessage": {
      "displayName": pushnama,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushnama},;;;\nFN:${pushnama},\nitem1.TEL;waid=${own.split('@')[0]}:+${own.split('@')[1]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
    }
  }
}})
break
case 'owner':
 kont = [];
for(let i of Owner){
  kont.push({
    displayName: await zynn.getName(i),
    vcard: await vcard(i.split('@')[0], await zynn.getName(i), await zynn.getStatus(i))
  })
}
hehex = await zynn.sendMessage(from, {
        "displayName": `3 kontak`,
        "contacts": kont
        }, 'contactsArrayMessage', { quoted: tod })
        zynn.sendMessage(from,'Ini Nomor Owner Saya ><',text,{quoted: hehex})
break
case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await zynn.searchMessages(q,from,15,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
//console.log(el)
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await wa.sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await zynn.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
case 'listpc':
if(!itsMe) return
cpc = await wa.getpc(totalchat)
teks = `*L I S T  P E R S O N A L  C H A T*\nJumlah PC: ${cpc.length}\n\n`
for(let i=0; i<cpc.length; i++){
    pushnama = await wa.getPushname(cpc[i], tod)
    teks += `${shp} Nama : ${pushnama}\n${shp} Tag : @${cpc[i].split("@")[0]}\n${shp} Wa.me : wa.me/${cpc[i].split("@")[0]}\n${shp} Id : ${cpc[i].split("@")[0]}@c.us\n${shp} Jid : ${cpc[i]}\n\n----------------------------------\n\n`
}
wa.Mentions(from, teks, cpc, tod)
break
case 'chats':
if(!itsMe) return
ingfo = await wa.getGroup(totalchat)
cpc = await wa.getpc(totalchat)
   teks1 = `*⬣ L I S T  G R O U P*\nJumlah Grup: ${ingfo.length}\n\n`
   for (let i = 0; i < ingfo.length; i++){
   teks1 += `${shp} Nama grup : ${ingfo[i].subject}\n${shp} ID grup : ${ingfo[i].id}\n${shp} Dibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${shp} Jumlah Peserta : ${ingfo[i].participants.length}\n\n`
   }
teks2 = `*⬣ L I S T  P E R S O N A L  C H A T*\nJumlah PC: ${cpc.length}\n\n`
for(let i=0; i<cpc.length; i++){
    pushnama = await wa.getPushname(cpc[i], tod)
    teks2 += `${shp} Nama : ${pushnama}\n${shp} Tag : @${cpc[i].split("@")[0]}\n${shp} Wa.me : wa.me/${cpc[i].split("@")[0]}\n${shp} Id : ${cpc[i].split("@")[0]}@c.us\n${shp} Jid : ${cpc[i]}\n\n----------------------------------\n\n`
}
wa.Mentions(from, teks1 +'\n\n'+ teks2, cpc, tod)
break
case 'stickmeme':
if ((isMedia && !zynn.message.videoMessage || isQuotedImage || isQuotedSticker)) {
reply(mess.wait)
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod                           
if(!q) return reply('teksnya mana?')
owgi = await zynn.downloadMediaMessage(ger)
if(isQuotedSticker){
    await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
    var imgbb = require('imgbb-uploader')
    anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
    const res = `${anu.display_url}`
    await wa.sendStickerFromUrl(from, `https://pecundang.herokuapp.com/api/stickermeme?url=${res}&teks=${q}`, tod)
    fs.unlinkSync('./stickmeme.jpeg')
}
else{
    const res2 = await uploadImages(owgi, false)
console.log(res2)
    await wa.sendStickerFromUrl(from, `https://pecundang.herokuapp.com/api/stickermeme?url=${res2}&teks=${q}`, tod)
}
}
else{
    reply(`Reply gambar/sticker dengan caption ${prefix}stickmeme <teks>`)
}
break
case 'wasted':
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'tobecontinued':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
case 'approved3000years':
try{
    if(isMedia && !zynn.message.videoMessage || isQuotedImage){
    reply(mess.wait)
        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
        const media = await zynn.downloadMediaMessage(encmedia)
        res = await uploadImages(media, false)
        data = await ameapi.generate(command, {url: res})
        wa.sendImage(from, data, tod)
    }
    else if(m.quoted){
    reply(mess.wait)
        try{
            pp = await zynn.getProfilePicture(m.quoted.sender)
        }catch{
            return reply('Foto profil tidak ada/private')
        }
        data = await ameapi.generate(command, {url: pp})
        wa.sendImage(from, data, tod)
    }
    else if(!m.mentionedJid == ''){
    if(m.mentionedJid == '') return reply(`Tag orang/reply gambar dengan caption ${prefix}${command}`)
    reply(mess.wait)
        try{
            pp = await zynn.getProfilePicture(m.mentionedJid[0])
        }catch{
            return reply('Foto profil tidak ada/private')
        }
        data = await ameapi.generate(command, {url: pp})
        wa.sendImage(from, data, tod)
    }
    else{
        reply(`Tag orang/reply gambar dengan caption ${prefix}${command}`)
    }
}catch{
    reply(mess.error.api)
}
break
case 'pinterest':
if(!q) return reply('Mau cari apa dipinterest?')
reply(mess.wait)
try{
    data = await skrep.pinterest(q)
    media = await data[Math.floor(Math.random() * data.length)]
    wa.sendButtonWithImage(from, bold('Hasil pencarian ' + q), 'Next ga nih?', await wa.getBuffer(media), ['NEXT ▶️'], [`${command} ${q}`], sender, tod)
}catch(e){
    reply('Gambar tidak ditemukan/error')
}
break

case 'nulis':
reply(`*Pilihan*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
break
case 'nuliskiri':{
if (!q) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
reply(mess.wait)
const splitText = q.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
    './media/nulis/images/buku/sebelumkiri.jpg',
    '-font',
    './media/nulis/font/Indie-Flower.ttf',
    '-size',
    '960x1280',
    '-pointsize',
    '22',
    '-interline-spacing',
    '2',
    '-annotate',
    '+140+153',
    fixHeight,
    './media/nulis/images/buku/setelahkiri.jpg'
])
.on(mess.error.api, () => reply(mess.error.api))
.on('exit', () => {
    wa.sendImage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'),tod,`Jangan malas ngab..!`)
})
            }
break
case 'nuliskanan':{
if (!q) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
reply(mess.wait)
const splitText = q.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
    './media/nulis/images/buku/sebelumkanan.jpg',
    '-font',
    './media/nulis/font/Indie-Flower.ttf',
    '-size',
    '960x1280',
    '-pointsize',
    '23',
    '-interline-spacing',
    '2',
    '-annotate',
    '+128+129',
    fixHeight,
    './media/nulis/images/buku/setelahkanan.jpg'
])
.on(mess.error.api, () => reply(mess.error.api))
.on('exit', () => {
    wa.sendImage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'),tod,`Jangan malas ngab..!`)
})
}
break
case 'foliokiri':{
if (!q) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
reply(mess.wait)
const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
    './media/nulis/images/folio/sebelumkiri.jpg',
    '-font',
    './media/nulis/font/Indie-Flower.ttf',
    '-size',
    '1720x1280',
    '-pointsize',
    '23',
    '-interline-spacing',
    '4',
    '-annotate',
    '+48+185',
    fixHeight,
    './media/nulis/images/folio/setelahkiri.jpg'
])
.on(mess.error.api, () => reply(mess.error.api))
.on('exit', () => {
    wa.sendImage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'),tod,`Jangan malas ngab..!`)
})
}
break
case 'foliokanan':{
if (!q) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
reply(mess.wait)
const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
    './media/nulis/images/folio/sebelumkanan.jpg',
    '-font',
    './media/nulis/font/Indie-Flower.ttf',
    '-size',
    '960x1280',
    '-pointsize',
    '23',
    '-interline-spacing',
    '3',
    '-annotate',
    '+89+190',
    fixHeight,
    './media/nulis/images/folio/setelahkanan.jpg'
])
.on(mess.error.api, () => reply(mess.error.api))
.on('exit', () => {
    wa.sendImage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'),tod,`Jangan malas ngab..!`)
})
}
break
case 'infonomor':
if(!q) return reply('Nomornya mana?')
if (args[0].includes('-')) return fakestatus(`Block nih contoh: ${prefix}infonomor 6289636006352`)
    reply(mess.wait)
nom = q.replace('@','')
if (!Number(nom)) return reply('Nomor harus berupa angka!')
exists = await zynn.isOnWhatsApp(nom)       
imni = await infotlp.getOperator(nom)
teks = `*I N F O  N O M O R*\n\n${shp} Operator : ${imni.operator}\n${shp} Kartu : ${imni.card}\n\n`
if(exists){
    teks += `Info : Nomor ini Terdaftar di Whatsapp dengan Jid : ${exists.jid}`
}
else{
    teks += `Info : Nomor ini Tidak terdaftar di Whatsapp!`
}
reply(teks)
break
case 'githubrepo':
if(!q) return reply('Masukkan username githubnya!')
reply(mess.wait)
try{
    data = await zahir.Github.searchRepo(q)
    hdata = data.items
teks = `REPOSITORY SEARCH\n\n`
for(let i of hdata){
    teks += `${shp} Nama Repo : ${i.nameRepo}\n${shp} Fullname Repo : ${i.fullNameRepo}\n${shp} Url Repo : ${i.url_repo}\n\n--------------------------\n\n`
}
    reply(teks)
}catch(e){
    reply(mess.error.api)
}
break
case 'test':
if(!itsMe) return
const downloadM = async(save) => {

encmedia = isQuotedImage ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod

encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
encmedia = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
if (save) return await zynn.downloadAndSaveMediaMessage(encmedia)
return await zynn.downloadMediaMessage(encmedia)
  }

buf = await downloadM() 
imeu = await zynn.prepareMessage('0@s.whatsapp.net', buf, image) 

imeg = imeu.message.imageMessage
res = await zynn.prepareMessageFromContent(from,{
  "orderMessage": {
            "orderId": "501374481143681",
            "thumbnail": imeg,
            "itemCount": 9999,
            "status": "INQUIRY",
            "surface": 404,
            "message": "Selfbot",
            "orderTitle": "</ Hanya Orang Biasa",
            "sellerJid": "6281990498472@s.whatsapp.net",
            "token": "AR6eHHZTvi8k3qMfxWHBCvAXO+vG5VW/1QtpiPpxL3Tfyg=="
            }
}, {quoted: imeu, contextInfo:{}}) 

zynn.relayWAMessage(res)
break
case 'product':
if(!itsMe) return
const downloadMM = async(save) => {

encmedia = isQuotedImage ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod

encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
encmedia = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
if (save) return await zynn.downloadAndSaveMediaMessage(encmedia)
return await zynn.downloadMediaMessage(encmedia)
  }

buf = await downloadMM() 
imeu = await zynn.prepareMessage('0@s.whatsapp.net', buf, image) 

imeg = imeu.message.imageMessage
res = await zynn.prepareMessageFromContent(from,{
  "productMessage": {
    "product": {
      "productImage": imeg,
      "productId": "3656809567780692",
      "title": "Selfbot",
      "currencyCode": "IDR",
      "priceAmount1000": "999999990",
      "productImageCount": 1
    },
    "businessOwnerJid": zynn.user.jid,
    "contextInfo": {
      "forwardingScore": 3,
      "isForwarded": true
    }
  }
}, {quoted:imeu, contextInfo:{}}) 

zynn.relayWAMessage(res)
break
/*case 'loli':
try{
    data = await loli.getSFWLoli()
    sendMediaURL(from, data.url, 'LOLI')
}catch(e){
    reply(mess.error.api)
}
break
case 'shota':
try{
    data = await loli.getSFWShota()
    sendMediaURL(from, data.url, 'SHOTA')
}catch(e){
    reply(mess.error.api)
}
break
*/
case 'toptt':
if(isQuotedAudio){
reply(mess.wait)
   boij = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   media = await zynn.downloadMediaMessage(boij)
   await fs.writeFileSync(`./src/audio/toptt.mp3`, media)
   buffer = fs.readFileSync(`./src/audio/toptt.mp3`)
   await wa.sendptt(from, buffer, tod)
   fs.unlinkSync('./src/audio/toptt.mp3')
}
break
case 'toaudio':
if(isQuotedAudio){
reply(mess.wait)
   boij = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   media = await zynn.downloadMediaMessage(boij)
   await fs.writeFileSync(`./src/audio/toaudio.mp3`, media)
   buffer = fs.readFileSync(`./src/audio/toaudio.mp3`)
   await wa.sendAudio(from, buffer, tod)
   fs.unlinkSync('./src/audio/toaudio.mp3')
}
break
case 'tomp3':
zynn.updatePresence(from, Presence.composing) 
if (!isQuotedVideo) return reply('reply videonya um')
reply('tunggu sebentar')
encmedia = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zynn.downloadAndSaveMediaMessage(encmedia)
ran = wa.getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
    fs.unlinkSync(media)
    if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
    buffer = fs.readFileSync(ran)
    zynn.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: tod})
    fs.unlinkSync(ran)
})
break
case 'slow':
encmedia = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zynn.downloadAndSaveMediaMessage(encmedia)
ran = wa.getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
    fs.unlinkSync(media)
    if (err) return reply('Error!')
    hah = fs.readFileSync(ran)
    wa.sendptt(from, hah, tod)
    fs.unlinkSync(ran)
})
break
case 'bass':  
encmedia = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zynn.downloadAndSaveMediaMessage(encmedia)
ran = wa.getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=${body.slice(6)}:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
    fs.unlinkSync(media)
    if (err) return reply('Error!')
    hah = fs.readFileSync(ran)
    wa.sendptt(from, hah, tod)
    fs.unlinkSync(ran)
})
break
case 'ghost':
     if (!isQuotedAudio) return reply('Reply audio nya om')
encmedia = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zynn.downloadAndSaveMediaMessage(encmedia)
ran = wa.getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
   if (err) return reply('Error!')
   hah = fs.readFileSync(ran)
   wa.sendptt(from, hah, tod)
   fs.unlinkSync(ran)
    })
break
case 'tupai':
     if (!isQuotedAudio) return reply('Reply audio nya om')
encmedia = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zynn.downloadAndSaveMediaMessage(encmedia)
ran = wa.getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
   if (err) return reply('Error!')
   hah = fs.readFileSync(ran)
   wa.sendptt(from, hah, tod)
   fs.unlinkSync(ran)
    })
break
case 'blub':
     if (!isQuotedAudio) return reply('Reply audio nya om')
encmedia = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zynn.downloadAndSaveMediaMessage(encmedia)
ran = wa.getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
   if (err) return reply('Error!')
   hah = fs.readFileSync(ran)
   wa.sendptt(from, hah, tod)
   fs.unlinkSync(ran)
    })
break
case 'gemuk':
     if (!isQuotedAudio) return reply('Reply audio nya om')
encmedia = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zynn.downloadAndSaveMediaMessage(encmedia)
ran = wa.getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
   if (err) return reply('Error!')
   hah = fs.readFileSync(ran)
   wa.sendptt(from, hah, tod)
   fs.unlinkSync(ran)
    })
break
case 'nightcore':
     if (isQuotedAudio){
encmedia = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zynn.downloadAndSaveMediaMessage(encmedia)
ran = wa.getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
   if (err) return reply('Error!')
   hah = fs.readFileSync(ran)
   wa.sendptt(from, hah, tod)
   fs.unlinkSync(ran)
   })}
break
case 'baterai':
const batree = JSON.parse(fs.readFileSync('./src/batre.json'))
const bateraii = batree[1].value
ischarge = batree[1].live == 'true' ? "Charging ⚡" : "Not Charged"
ispsave = batree[1].powersave == 'true' ? "Aktif" : "Nonaktif"
reply(`${shp} Baterai : ${bateraii}%\n${shp} Status Baterai : ${ischarge}\n${shp} Penghemat Baterai : ${ispsave}`)
break
case 'cekchat':
var chats = await zynn.chats.all()
let j = []
let giidd = []
for (mem of totalchat){
    j.push(mem.jid)
}
for (id of j){
    if (id && id.includes('g.us')){
    giidd.push(id)
    }
}
teks = `Total chat : ${chats.length} chat\n\n${shp} Group Chat : ${giidd.length}\n${shp} Personal Chat : ${totalchat.length - giidd.length}`
reply(teks)
break
case 'emoji':
if(!q) return reply(`Silahkan pilih salah satu : \n${shp} apple\n${shp} google\n${shp} samsung\n${shp} microsoft\n${shp} whatsapp\n${shp} twitter\n${shp} facebook\n${shp} joypixels\n${shp} openmoji\n${shp} emojidex\n${shp} lg\n${shp} htc\n\nContoh : ${prefix}emoji ☹️|whatsapp`)
emot = q.split('|')[0]
jemot = q.split('|')[1]
if(jemot == 'apple'){
    idemot = 0
}
else if(jemot == 'google'){
    idemot = 1
}
else if(jemot == 'samsung'){
    idemot = 2
}
else if(jemot == 'microsoft'){
    idemot = 3
}
else if(jemot == 'whatsapp'){
    idemot = 4
}
else if(jemot == 'twitter'){
    idemot = 5
}
else if(jemot == 'facebook'){
    idemot = 6
}
else if(jemot == 'joypixels'){
    idemot = 7
}
else if(jemot == 'openmoji'){
    idemot = 8
}
else if(jemot == 'emojidex'){
    idemot = 9
}
else if(jemot == 'lg'){
    idemot = 10
}
else if(jemot == 'htc'){
    idemot = 11
}
else if(!jemot){
    idemot = 4
}
else{
    return reply(`Silahkan pilih salah satu : \n${shp} apple\n${shp} google\n${shp} samsung\n${shp} microsoft\n${shp} whatsapp\n${shp} twitter\n${shp} facebook\n${shp} joypixels\n${shp} openmoji\n${shp} emojidex\n${shp} lg\n${shp} htc\n\nContoh : ${prefix}emoji ☹️|whatsapp`)
}
if(idemot == undefined) return
emoji.get(emot)
    .then(emoji => {
        console.log(emoji.images[idemot]);
wa.sendStickerFromUrl(from,emoji.images[idemot].url, tod)
    })
break
case 'totag':
  if (!itsMe) return
   if(!q) return reply('Ingfonya apa?')
var group = await zynn.groupMetadata(from)
   var member = group['participants']
   var mem = []
   member.map(async adm => {
   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
   })
var itsme = fakenomor
               var split = fake
               var selfbotz = {
                  contextInfo: {
                     mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
                        }
                              }
                      }
               }
if(!tod.message.extendedTextMessage.contextInfo.quotedMessage.conversation == ''){
    zynn.sendMessage(from, tod.message.extendedTextMessage.contextInfo.quotedMessage.conversation, MessageType.text, {contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
                }
else if (isQuotedSticker){
   boij = JSON.parse(JSON.stringify(tod).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
   delb = await zynn.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/stctagg.webp`, delb)
   result = fs.readFileSync(`./media/stctagg.webp`)
   zynn.sendMessage(from, result, MessageType.sticker, {contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/stctagg.webp`)
}
else if(isQuotedImage){
   boij = isQuotedImage ? JSON.parse(JSON.stringify(tod).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : tod
   delb = await zynn.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/imgtag.jpg`, delb)
   result = fs.readFileSync(`./media/imgtag.jpg`)
   zynn.sendMessage(from, result, MessageType.image, {contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/imgtag.jpg`)
}
else if(isQuotedAudio){
   boij = JSON.parse(JSON.stringify(tod).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
   delb = await zynn.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/vntag.mp3`, delb)
   result = fs.readFileSync(`./media/vntag.mp3`)
   if(tod.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage.ptt == true){
                pett = true
            }
            else{
                pett = false
            }
            zynn.sendMessage(from, result, MessageType.audio, {mimetype: 'audio/mp4', ptt: pett, contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/vntag.mp3`)
}
else if(isQuotedVideo){
   boij = JSON.parse(JSON.stringify(tod).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
   delb = await zynn.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/videotag.mp4`, delb)
   result = fs.readFileSync(`./media/videotag.mp4`)
   try{
   if(tod.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.gifPlayback == true){
    try{
        zynn.sendMessage(from, result, video, {mimetype: Mimetype.gif, contextInfo: {mentionedJid: mem}, caption:tod.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.caption, quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
})
        await fs.unlinkSync(`./media/videotag.mp4`)
    }catch(e){
        zynn.sendMessage(from, result, video, {mimetype: Mimetype.gif, contextInfo: {mentionedJid: mem}, quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
})
        await fs.unlinkSync(`./media/videotag.mp4`)
    }
   }
}catch(e){
    try{
   zynn.sendMessage(from, result, MessageType.video, {mimetype: 'video/mp4', contextInfo: {mentionedJid: mem}, caption: tod.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.caption,
            quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/videotag.mp4`)

}catch(e){
zynn.sendMessage(from, result, MessageType.video, {mimetype: 'video/mp4', contextInfo: {mentionedJid: mem}, caption: tod.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.caption,
            quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/videotag.mp4`)
}
}}
else if(isQuotedDocument){
  boij = JSON.parse(JSON.stringify(tod).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
   delb = await zynn.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/doctag`, delb)
   result = fs.readFileSync(`./media/doctag`)
   zynn.sendMessage(from, result, MessageType.document, {mimetype: tod.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage.mimetype,filename: `${tod.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage.fileName}`, contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/doctag`)
}
else if(isQuotedlocation){
sloc = tod.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage
            try{
            zynn.sendMessage(from,  {degreesLatitude: sloc.degreesLatitude, degreesLongitude: sloc.degreesLongitude, name: sloc.name , address: sloc.address}, MessageType.location, {contextInfo: {mentionedJid: mem}, 
        quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
})
        }catch(e){
            zynn.sendMessage(from,  {degreesLatitude: sloc.degreesLatitude, degreesLongitude: sloc.degreesLongitude}, MessageType.location, {contextInfo: {mentionedJid: mem},
        quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
})
        }
}
else{
   return reply('Reply sticker/image/video/vn/document!')
}
   break
case 'resend':
if(!m.quoted) return reply('Reply pesannya!')
try{
po = await zynn.prepareMessageFromContent(from, tod.message.extendedTextMessage.contextInfo.quotedMessage, {})
zynn.relayWAMessage(po)
}catch{
reply(mess.error.api)
}
break
case 'image':
if (args.length < 1) return reply('Masukan teks!')
reply(mess.wait)
try{
gis(q, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
wa.sendButtonWithImage(from, bold('Hasil pencarian ' + q), 'Next ga nih?', await wa.getBuffer(images), ['NEXT ▶️'], [`${command} ${q}`], sender, tod)
});
}catch(e){
    reply('Gambar tidak ditemukan')
}
break
case 'ytdl':
if(!q) return reply('Mau cari apa diyoutube?')
reply(mess.wait)
datai = [];
try{
        ysearch = await yts(q)
        hdata = ysearch.all
}catch(e){
        return reply(mess.error.api)
}
num = 1
for(let i=0; i<hdata.length; i++){
        datai.push({
                        "rows": [
                           {
                              "title": "MP3",
                                                          description: `Title: ${hdata[i].title}\n\nUploader: ${hdata[i].author.name}`,
                              "rowId": `${prefix}ytmp3 ${hdata[i].url}`
                           },
                                                   {
                              "title": "MP4",
                                                          description: `Title: ${hdata[i].title}\n\nUploader: ${hdata[i].author.name}`,
                              "rowId": `${prefix}ytmp4 ${hdata[i].url}`
                           }
                        ], title: num})
        num += 1
}
po = zynn.prepareMessageFromContent(from, {
         "listMessage":{
                  "title": "*YOUTUBE DOWNLOAD*",
                  "description": `Request By : ${await wa.getPushname(sender, tod)}\n*Hasil Pencarian : ${q}*\n*Download dengan klik tombol dibawah*`,
                  "buttonText": "Result",
                  "listType": "SINGLE_SELECT",
                  "sections": datai}}, {}) 
            zynn.relayWAMessage(po, {waitForAck: true})
break
case 'ytdown':
if(!q) return reply('Masukkan link youtube!')
Links = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!Links) return reply(mess.error.Iv)
reply(mess.wait)
butt = [
    {buttonId: `ytmp4 ${q}`, buttonText: {displayText: 'MP4'}, type: 1},
    {buttonId: `ytmp3 ${q}`, buttonText: {displayText: 'MP3'}, type: 1}
]
try{
yutup = await yta(q.replace('shorts', 'embed'))
buff = await wa.getBuffer(yutup.thumb)
teks = 'Y O U T U B E  D O W N L O A D E R\n\n'
teks += shp + ' Judul : ' + yutup.title
po = await zynn.prepareMessage(from, buff, image)
await bypasephe(po)
buttonmes= {
imageMessage: po.message.imageMessage,
contentText: teks,
footerText: "Silahkan Pilih MP4/MP3",
buttons: butt,
headerType: 4
}
zynn.sendMessage(from, buttonmes, MessageType.buttonsMessage, {
quoted: tod
})
}catch{
reply(mess.error.api)
}
break
case 'ytsearch':
if(!q) return reply('Mau cari apa diyoutube?')
try{
    ysearch = await yts(q)
}catch(e){
    return reply(mess.error.api)
}
teks = `*Y O U T U B E  S E A R C H*\nTotal : ${ysearch.all.length}\n\nReply pesan ini Menggunakan ${prefix}getvideo/getmusic <no urut>\nExample : \n${shp} ${prefix}getmusic 1\n${shp} ${prefix}getvideo 1\n\n`
num = 1
for(let i of ysearch.all){
    teks += num + '\n'
    teks += shp +` Title :` + i.title + '\n'
    teks += shp +` Url :` + i.url + '\n'
    teks += shp +` Durasi :` + i.timestamp + '\n'
    teks += shp +` Upload :` + i.ago + '\n\n-----------------------------\n\n'
    num += 1
}
sendMediaURL(from, ysearch.all[0].thumbnail, teks)
break
case 'getmusic':
if(!q) return reply('Masukkan nomo urutnya!')
if(!m.quoted) return reply('Reply pesan hasil pencarian youtube!')
if(m.quoted.sender === zynn.user.jid){
console.log(m.quoted.sender + ' ' + zynn.user.jid)
quee = '*Y O U T U B E  S E A R C H*'
qteks = m.quoted.text
if(qteks.includes(quee)){
jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
if(isNaN(args[0])) return reply('Input harus berupa nomor!')
reply(mess.wait)
if(Number(args[0]) > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
    try{
    pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2)    
    downm = await yta(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
    const { dl_link, thumb, title, filesizeF, filesize } = downm
    if(Number(filesize) >= 50000){
        short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
        return sendMediaURL(from, thumb, `*P L A Y  M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
    }
    teks = `*P L A Y  M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n\nTunggu sebentar\nMusic segera dikirim`
    wa.sendFileFromUrl(from, thumb, tod, teks)
    wa.sendFileFromUrl(from, dl_link, tod)
    }catch(e){
    reply(mess.error.api)
}
}
else{
    return reply('Reply pesan hasil pencarian youtube!')
}
}
break
case 'getvideo':
if(!q) return reply('Masukkan nomo urutnya!')
if(!m.quoted) return reply('Reply pesan hasil pencarian youtube!')
if(m.quoted.sender === zynn.user.jid){
quee = '*Y O U T U B E  S E A R C H*'
qteks = m.quoted.text
if(qteks.includes(quee)){
jmlh = m.quoted.text.split('Total : ')[1].split('\n')[0]
if(isNaN(args[0])) return reply('Input harus berupa nomor!')
reply(mess.wait)
if(Number(args[0]) > jmlh) return reply(`Hanya Tersedia ${jmlh} Pilihan\nSilahkan coba pilih lagi dibawah angka ${jmlh}`)
    try{
    pilih = JSON.stringify(await eval(`${args[0]}-1`), null, 2)    
    downm = await ytv(m.quoted.text.split('-----------------------------')[pilih].split('Url :')[1].split('\n')[0])
    const { dl_link, thumb, title, filesizeF, filesize } = downm
    if(Number(filesize) >= 50000){
        short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
        return sendMediaURL(from, thumb, `*P L A Y  V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
    }
    teks = `*P L A Y  V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n\nTunggu sebentar\nMusic segera dikirim`
    wa.sendFileFromUrl(from, thumb, tod, teks)
    wa.sendFileFromUrl(from, dl_link, tod)
    }catch(e){
    reply(mess.error.api)
}
}
else{
    return reply('Reply pesan hasil pencarian youtube!')
}
}
break
/*case 'tiktoknowm':
if(!q) return reply('Masukkan linknya!')
if(!isUrl(q)) return reply(mess.error.Iv)
reply(mess.wait)
try{
    //data = await wa.fetchJson(`https://dapuhy-api.herokuapp.com/api/socialmedia/tiktoknowm?url=${q}&apikey=2OcDMwvZ1Uc2S5V`)
    wa.sendFileFromUrl(from, `https://dapuhy-api.herokuapp.com/api/socialmedia/tiktoknowm?url=${q}&apikey=2OcDMwvZ1Uc2S5V`, tod, '*T I K T O K  N O  W A T E R M A R K*')
}catch{
    reply(mess.error.api)
}
break
case 'tiktok':
if(!q) return reply('Masukkan linknya!')
if(!isUrl(q)) return reply(mess.error.Iv)
reply(mess.wait)
try{
    wa.sendFileFromUrl(from, `https://dapuhy-api.herokuapp.com/api/socialmedia/tiktokwithwm?url=${q}&apikey=2OcDMwvZ1Uc2S5V`, tod, '*T I K T O K  W A T E R M A R K*')
}catch{
    reply(mess.error.api)
}
break*/
case 'tiktok':
if(!q) return reply('Masukkan linknya!')
reply(mess.wait)
try{
if(args[0] == 'wm'){
    lapi = await wa.fetchJson(`https://api.dhnjing.xyz/downloader/tiktok/watermark?url=${args[1]}&apikey=8e315a11fae412`)
    buff = await wa.getBuffer(lapi.result.media_resources.video.videoUrl)
    wa.sendVideo(from, buff, tod, monospace('T I K T O K  W I T H  W A T E R M A R K'))
}
else if(args[0] == 'nowm'){
    buff = await wa.getBuffer(args[1])
    wa.sendVideo(from, buff, tod, monospace('T I K T O K  N O W A T E R M A R K'))
}
else if(args[0] == 'music'){
    wa.sendFileFromUrl(from, args[1], tod)
}
else{
data = await wa.fetchJson(`https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${q}&apikey=8e315a11fae412`)
buff = await wa.getBuffer(data.result.media_resources.image.contentUrl)
cap = monospace(`T I K T O K  D O W N L O A D E R`) + '\n\n'
cap += shp + ' Username : ' + data.result.author_metadata.username + '\n'
cap += shp + ' Judul : ' + data.result.media_metadata.title.split(' |')[0] + '\n'
cap += '\n\n'
cap += monospace('V I D E O  I N F O') + '\n\n'
cap += shp + ' Durasi : ' + data.result.media_resources.video.duration + 'Detik \n'
cap += shp + ' Kualitas : ' + data.result.media_resources.video.quality + '\n'
cap += shp + ' Width : ' + data.result.media_resources.video.width + '\n'
cap += shp + ' Height : ' + data.result.media_resources.video.height + '\n'
cap += shp + ' Ratio : ' + data.result.media_resources.video.ratio + '\n'
cap += '\n\n'
cap += monospace('S O U N D  I N F O') + '\n\n'
cap += shp + ' Judul : ' + data.result.media_resources.music.title + '\n'
cap += shp + ' Author : ' + data.result.media_resources.music.authorName + '\n'
cap += shp + ' Durasi : ' + data.result.media_resources.music.duration + 'Detik \n'
return wa.sendButtonWithImage(from, cap, 'Silahkan pilih WM / NOWM / MUSIC', buff, ['WM', 'NOWM', 'MUSIC'], [`tiktok wm ${q}`, `tiktok nowm ${data.result.media_resources.video.videoUrl}`, `tiktok music ${data.result.media_resources.music.playUrl}`], sender, tod)
}
}catch{
    reply(mess.error.api)
}
break
case 'play':
if(!q) return reply('Masukkan judulnya!')
reply(mess.wait)
try{
searchm = await yts(q)
}catch(e){
    return reply('Lagu tidak ditemukan/error!')
}
datam = searchm.all[0]
try{
    downm = await yta(datam.url)
filesizeF = downm.filesizeF
    const { dl_link, thumb, title, filesize } = downm
    if(filesizeF == ' <a href=\"javascript:void(0)\" rel=\"nofollow\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#progress\" data-ftype=\"3gp\" data-fquality=\"144p\"> <i class=\"glyphicon glyphicon-download-alt\"></i>&nbsp; Download </a> '){
        filesizeF = 'Tidak Terbaca'
    }
    if(Number(filesize) >= 50000){
        short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
        return sendMediaURL(from, thumb, `*P L A Y  M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
    }
    teks = `*P L A Y  M U S I C*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n\nTunggu sebentar\nMusic segera dikirim`
    wa.sendFileFromUrl(from, thumb, tod, teks)
    wa.sendFileFromUrl(from, dl_link, tod)
    }catch(e){
    reply(mess.error.api)
}
break
case 'ytmp3':
try{
    var mp3 = async(link, nama) => {
        reply(mess.wait)
        wa.sendFileFromUrl(from, link, tod)
    }
    var doc = async(link, nama) => {
        reply(mess.wait)
        zynn.sendFile(from, link, nama + '.mp3', nama, m, true, { fakeimage, asDocument: true})
    }
    if(args[0] == 'mp3'){
        downm = await yta(q.replace('shorts', 'embed'))
    const { dl_link, title } = downm
    return mp3(dl_link, title)
    }
    else if(args[0] == 'doc'){
        downm = await yta(q.replace('shorts', 'embed'))
    const { dl_link, title } = downm
    return doc(dl_link, title)
    }
    if(!q) return reply('Masukkan link Youtube!')
    Links = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
    if (!Links) return reply(mess.error.Iv)
    reply(mess.wait)
    downm = await yta(q.replace('shorts', 'embed'))
    filesizeF = downm.filesizeF
    const { dl_link, thumb, title, filesize } = downm
if(filesizeF == ' <a href=\"javascript:void(0)\" rel=\"nofollow\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#progress\" data-ftype=\"3gp\" data-fquality=\"144p\"> <i class=\"glyphicon glyphicon-download-alt\"></i>&nbsp; Download </a> '){
        filesizeF = 'Tidak Terbaca'
    }
    if(Number(filesize) >= 50000){
        short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
        return sendMediaURL(from, thumb, `*Y T M P 3  D O W N L O A D E R*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
    }
    teks = `*Y T M P 3  D O W N L O A D E R*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}`
    buff = await wa.getBuffer(thumb)
    wa.sendButtonWithImage(from, teks, 'Mau dikirim dalam bentuk Audio/Document?', buff, ['Audio', 'DOCUMENT'], [`ytmp3 mp3 ${q}`, `ytmp3 doc ${q}`], sender, tod)
}catch(e){
    reply(mess.error.api)
}
break
case 'video':
if(!q) return reply('Masukkan judulnya!')
reply(mess.wait)
try{
searchm = await yts(q)
}catch(e){
    return reply('Lagu tidak ditemukan/error!')
}datam = searchm.all[0]
try{
    downm = await ytv(datam.url)
filesizeF = downm.filesizeF
    const { dl_link, thumb, title, filesize } = downm
    if(filesizeF == ' <a href=\"javascript:void(0)\" rel=\"nofollow\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#progress\" data-ftype=\"3gp\" data-fquality=\"144p\"> <i class=\"glyphicon glyphicon-download-alt\"></i>&nbsp; Download </a> '){
        filesizeF = 'Tidak Terbaca'
    }
    if(Number(filesize) >= 50000){
        short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
        return sendMediaURL(from, thumb, `*P L A Y  V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
    }
    teks = `*P L A Y  V I D E O*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n\nTunggu sebentar\nVideo segera dikirim`
    await sendMediaURL(from, thumb, teks)
    sendMediaURL(from, dl_link)
    }catch(e){
    reply(mess.error.api)
}
break
case 'ytmp4':
try{
    var mp4 = async(link) => {
        reply(mess.wait)
        wa.sendFileFromUrl(from, link, tod)
    }
    var doc = async(link, nama) => {
        reply(mess.wait)
        zynn.sendFile(from, link, nama + '.mp4', nama, m, true, { fakeimage, asDocument: true})
    }
    if(args[0] == 'mp4'){
        downm = await ytv(q.replace('shorts', 'embed'))
    const { dl_link } = downm
    return mp4(dl_link)
    }
    else if(args[0] == 'doc'){
        downm = await ytv(q.replace('shorts', 'embed'))
    const { dl_link, title } = downm
    return doc(dl_link, title)
    }
    if(!q) return reply('Masukkan link Youtube!')
    Links = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
    if (!Links) return reply(mess.error.Iv)
    reply(mess.wait)
    downm = await ytv(q.replace('shorts', 'embed'))
filesizeF = downm.filesizeF
    const { dl_link, thumb, title, filesize } = downm
    if(filesizeF == ' <a href=\"javascript:void(0)\" rel=\"nofollow\" type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#progress\" data-ftype=\"3gp\" data-fquality=\"144p\"> <i class=\"glyphicon glyphicon-download-alt\"></i>&nbsp; Download </a> '){
        filesizeF = 'Tidak Terbaca'
    }
    if(Number(filesize) >= 50000){
        short = await axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
        return sendMediaURL(from, thumb, `*Y T M P 4  D O W N L O A D E R*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}\n${shp} Link : ${short.data}\n\n${mess.oversize}`)
    }
    teks = `*Y T M P 4  D O W N L O A D E R*\n\n${shp} Judul : ${title}\n${shp} Size : ${filesizeF}`
    buff = await wa.getBuffer(thumb)
    wa.sendButtonWithImage(from, teks, 'Mau dikirim dalam bentuk Video/Document?', buff, ['VIDEO', 'DOCUMENT'], [`ytmp4 mp4 ${q}`, `ytmp4 doc ${q}`], sender, tod)
}catch(e){
    reply(mess.error.api)
}
break
case 'google':
if(!q) return reply('Masukkan kata kunci!')
if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
reply(mess.wait)
google({ 'query': q }).then(results => {
    let vars = `_*Hasil Pencarian : ${q}*_\n`
    for (let i = 0; i < results.length; i++) {
    vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
    }
        reply(vars)
    }).catch(e => {
    console.log(e)
    reply('Google Error')
})
break
case 'brainly':
if(!q) return reply('Apa yang mau anda cari?')
   reply(mess.wait)
try{
jwbn = await brainly(q)
hdata = jwbn.data
console.log(jwbn)
teks = `*B R A I N L Y*\n${shp} Query : ${q}\n${shp} Jumlah Jawaban : ${hdata.length}\n\n`
for(let i of hdata){
   console.log(i.jawaban[0].text)
   teks += `${shp} Pertanyaan : ${i.pertanyaan}\n\n${shp} Jawaban : ${i.jawaban[0].text}\n\n-----------------------------\n\n`
}
reply(teks)
}catch(e){
   reply(mess.error.api)
}
break
case 'infogempa':
reply(mess.wait)
try{
    data = await skrep.gempa()
    teks = 'INFO GEMPA\n\n'
    teks = shp + ' Lokasi: ' + data.data.wilayah + '\n'
    teks += shp + ' Magnitude: ' + data.data.magnitude + '\n'
    teks += shp + ' Kedalaman: ' + data.data.kedalaman + '\n'
    teks += shp + ' Lintang - Bujur: ' + data.data.lintang_bujur + '\n'
    teks += shp + ' Waktu: ' + data.data.waktu + '\n'
    teks += shp + ' Dirasakan (Skala MMI):\n' + data.data.dirasakan
    wa.sendFileFromUrl(from, data.data.imagemap, tod, teks)
}catch{
    reply(mess.error.api)
}
break
case 'wiki':
case 'wikipedia':
case 'wikisearch':
if(!q) return reply('Mau cari apa diwikipedia?')
reply(mess.wait)
try{
    data = await skrep.wikisearch(q)
    teks = `*W I K I P E D I A*\n${shp} Query : ${data[0].judul}\n\n${data[0].wiki}`
    wa.sendFileFromUrl(from, data[0].thumb, tod, teks)
}catch(e){
    reply(mess.error.api)
}
break
case 'lirik':
if(!q) return reply('Mau cari lirik lagu apa?')
try{
    data = await Ra.Musikmatch(q)
    hdata = data.result
    teks = `*L I R I K  L A G U*\n\n${shp} Judul : ${hdata.judul}\n${shp} Penyanyi : ${hdata.penyanyi}\n${shp} Lirik : \n${hdata.lirik}`
    reply(teks)
}catch(e){
    reply(mess.error.api)
}
break
case 'ig':
case 'instagram':
if(!q) return reply('Masukkan link instagram!')
if(!isUrl(q)) return reply('Masukkan url dengan benar!')
reply(mess.wait)
try{
    data = await hx.igdl(q)
    teks = `*I N S T A G R A M  D O W N L O A D E R*\n\n${shp} Username : ${data.user.username}\n${shp} Fullname : ${data.user.fullName}\n${shp} Jumlah Media : ${data.medias.length}\n\ntunggu Sebentar\nMedia akan segera dikirim...`
    await wa.sendFileFromUrl(from, data.user.profilePicUrl, tod, teks)
    for(let i of data.medias){
        wa.sendFileFromUrl(from, i.url, tod, monospace(`INSTAGRAM DOWNLOADER\n\n${shp} Username : ${data.user.username}\n${shp} Type Media : ${i.type}`))
}
}catch(e){
    reply('Server 1 error\nTunggu sebentar, mencoba menggunakan server 2...')
    try{
     data = await skrep.igdl(q)
     for(let i of data){
     wa.sendFileFromUrl(from, i, tod, fakec)
      await wa.sleep(3000)
     }
    }catch(e){
     return reply('Server 2 error!\nOperasi dihentikan')
    }
}
break
case 'igstalk':
if(!q) return reply('Masukkan usernamenya!')
reply(mess.wait)
try{
    data = await skrep.igstalk(q)
    verify = data.verified == false ? '' : '✓'
    teks = `*I N S T A G R A M  S T A L K*\n\n${shp} Username : ${data.username} ${verify}\n${shp} Fullname : ${data.fullname}\n${shp} Followers : ${torupiah(data.followers)}\n${shp} Following : ${torupiah(data.follow)}\n${shp} Url : https://www.instagram.com/${data.username}/\n${shp} Bio : ${data.bio}`
    sendMediaURL(from, data.thumbnail, teks)
}catch{
    reply(mess.error.api)
}
break
case 'tiktokstalk':
try {
    if (args.length < 1) return reply('Masukkan username!')
    let { user, stats } = await tiktod.getUserProfileInfo(q)
    teks = `*T I K T O K  S T A L K*\n\n${shp} *ID* : ${user.id}\n${shp} *Username* : ${user.uniqueId}\n${shp} *Nickname* : ${user.nickname}\n${shp} *Followers* : ${torupiah(stats.followerCount)}\n${shp} *Followings* : ${torupiah(stats.followingCount)}\n${shp} *Posts* : ${torupiah(stats.videoCount)}\n${shp} *Luv* : ${torupiah(stats.heart)}`
    buffer = await wa.getBuffer(user.avatarLarger)
    wa.sendImage(from, buffer, tod, teks)
} catch (e) {
    console.log(`Error :`, color(e,'red'))
    reply(mess.error.api)
}
break
case 'ytstalk':
if(!q) return reply('masukkan nama channel youtube!')
reply(mess.wait)
try{
    data = await wa.fetchJson(`https://x-restapi.herokuapp.com/api/yt-stalk?username=${q}&apikey=BETA`)
    teks = `*Y O U T U B E  S T A L K*\n\n${shp} Nama Channel : ${data.channel}\n${shp} Subscribers : ${data.subscriberCount}\n${shp} Deskripsi : ${data.description}\n${shp} Link Channel : ${data.link}`
    sendMediaURL(from, data.thumb, teks)
}catch(e){
    reply('Channel tidak ditemukan/error!')
}
break
case 'findsticker':
if(!q) return reply('Mau cari sticker apa?')
reply(mess.wait)
try{
    data = await Ra.StickerSearch(q)
    for(let i=0; i<10; i++){
        if(data.data.sticker[i] === undefined) return console.log('Sticker habis, pengiriman diberhentikan')
        wa.getBuffer(data.data.sticker[i]).then(res => {
         createSticker(res, stickermetadata).then(stik => {
          wa.sendSticker(from, stik, tod)
          })
         })
        await wa.sleep(3000)
    }
}catch(e){
    reply('Sticker tidak ditemukan')
}
break
case 'facebook':
case 'fb':
if(!q) return reply('Masukkan link facebook')
if(!isUrl(q)) return reply(mess.error.Iv)
reply(mess.wait)
try{
    data = await wa.fetchJson(`https://leyscoders-api.herokuapp.com/api/facebook-dl?url=` + q + `&apikey=dappakntlll`)
console.log(data)
    wa.sendFileFromUrl(from, data.result.urlDownload, tod, monospace('FACEBOOK DOWNLOADER'))
}catch(e){
    reply(mess.error.api)
}
break
case 'facebookaudio':
case 'fbaudio':
if(!q) return reply('Masukkan link facebook')
if(!isUrl(q)) return reply(mess.error.Iv)
reply(mess.wait)
//try{
    data = await wa.fetchJson(`https://x-restapi.herokuapp.com/api/fbdl?url=${q}&apikey=BETA`)
console.log(data)
    teks = `*F A C E B O O K  A U D I O  D O W N L O A D E R*\n\n${shp} Judul : ${data.title}]\n\nTunggu Sebentar\nAudio akan segera dikirim`
    await reply(teks)
    media = './media/fb.mp4'
    headers = getHeader()
    var writeStream = await fs.createWriteStream(media)
    request({
        uri: data.urlmp3,
        headers: headers,
        method: 'GET'
      })
      .pipe(writeStream);
    ran = wa.getRandom('.mp4')
                    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                        fs.unlinkSync(media)
                        if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
                        buffer = fs.readFileSync(ran)
                        wa.sendAudio(from, buffer, tod)
                        fs.unlinkSync(ran)
                    })

/*}catch(e){
    reply(mess.error.api)
}*/
break
case 'tts':
if (args.length < 1) return reply(`Cara Penggunaan : ${prefix}tts kodebahasa text\nexample : ${prefix}tts id halo`)
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return
try{
dtt = body.slice(8)
ranm = wa.getRandom('.mp3')
rano = wa.getRandom('.ogg')
dtt.length > 300
? reply('𝘁𝗲𝗸𝘀𝗻𝘆𝗮 𝗷𝗮𝗻𝗴𝗮𝗻 𝗸𝗲𝗽𝗮𝗻𝗷𝗮𝗻𝗴𝗮𝗻')
: gtts.save(ranm, dtt, function() {
    exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
    fs.unlinkSync(ranm)
    buff = fs.readFileSync(rano)
    if (err) return reply('𝗬𝗮𝗵 𝗴𝗮𝗴𝗮𝗹, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮 𝘀𝗮𝘆𝗮𝗻𝗴')
    wa.sendptt(from, buff, tod)
    fs.unlinkSync(rano)
    })
})
}catch(e){
}
break
case 'mobilewallanime':
try{
    akaneko.mobileWallpapers().then(res => {
        sendMediaURL(from, res, 'Nih wallpapernya')
    })
}catch(e){
    reply(mess.error.api)
}
break
case 'wallanime':
try{
    akaneko.wallpapers().then(res => {
        sendMediaURL(from, res, 'Nih wallpapernya')
    })
}catch(e){
    reply(mess.error.api)
}
break
case 'nekonime':
try{
    akaneko.neko().then(res => {
        sendMediaURL(from, res, 'neko')
    })
}catch(e){
    reply(mess.error.api)
}
break
case 'foxnime':
try{
    akaneko.foxgirl().then(res => {
        sendMediaURL(from, res, 'Fox')
    })
}catch(e){
    reply(mess.error.api)
}
break
/*case 'ig':
case 'instagram':
if(!q) return reply('Linknya mana?')
if(!isUrl(q)) return reply('Tolong masukkan link/url dengan benar')
try{
    data = await wa.fetchJson(`https://api.zeks.xyz/api/ig?url=${q}&apikey=apivinz`)
    burn = data.result
    teks = '*「 I N S T A G R A M  D O W N L O A D E R 」*\n\n'
    for (let i of burn){
        if ( i.type == "mp4"){
            buff = await wa.getBuffer(i.url)
            wa.sendVideo(from, buff, tod, `${shp} Username : ${data.owner}\n${shp} Caption ; ${data.caption}`)
        }
        else{
            buff = await getBuffer(i.url)
            wa.sendImage(from, buff, tod, `${shp} Username : ${data.owner}\n${shp} Caption ; ${data.caption}`)
        }
    }
}catch(e){
    reply(mess.error.api)
}
break*/
case 'igstalk':
if(!q) return reply('Masukkan username instagram!')
reply(mess.wait)
try{
    data = await ig.fetchUser(q)
    console.log(data)
    teks = `*I N S T A G R A M  S T A L K*\n\n${shp} Username : ${data.username}\n${shp} Fullname : ${data.full_name}\n${shp} Followers : ${data.following}\n${shp} Following : ${data.followers}\n${shp} Verified : ${data.is_verified}\n${shp} Private : ${data.is_private}\n${shp} Biografi : ${data.biography}`
    sendMediaURL(from, data.profile_pic_url_hd, teks)
}catch(e){
    return reply(mess.error.api)
}
break
case 'tr':
if(!q) return reply(`Cara Penggunaan ${prefix}tr [kodebahasa teks]/reply pesan dengan ${prefix}tr kodebahasa\nExample : ${prefix}tr id I Love you`)
if(!args[0]) return reply(`Masukkan kode bahasanya om`)
try{
if(!args[1]){
   if(tod.message.conversation) return reply(`Cara Penggunaan ${prefix}tr [kodebahasa teks]/reply pesan dengan ${prefix}tr kodebahasa\nExample : ${prefix}tr id I Love you`)
   tra = await translate(tod.message.extendedTextMessage.contextInfo.quotedMessage.conversation, {to:args[0]})
   console.log(tra)
   reply(tra.text)
}
else{
   codelang = args[0]
   tra = await translate(body.slice(4+codelang.length), {to:codelang})
   console.log(tra)
   reply(tra.text)
}
}catch(e){
   reply(mess.error.api)
}
break
case 'asmaulhusna':
if(!q) return reply('masukkan nomor asmaul-husna!')
if(isNaN(q)) return reply('Harus berupa angka 1-99!')
if(q > 99) return reply('Harus berupa angka 1-99!')
try{
    data = await zahir.Islamic.AsmaulHusna()
    urut = q - 1
    hdata = data.data[urut]
    teks = `*AsmaulHusna*\n\n${shp} Latin : ${hdata.latin}\n${shp} Arabic : ${hdata.arabic}\n${shp} Id : ${hdata.translation_id}\n${shp} En : ${hdata.translation_en}`
    reply(teks)
}catch(e){
    reply(mess.error.api)
}
break
case 'quranayat':
if(!q) return reply(`Penggunaan : ${prefix}quranayat nosurah|ayat\nExample : ${prefix}quranayat 1|2`)
surah = q.split('|')[0]
ayat = q.split('|')[1]
if(!ayat) return reply('Format salah!')
if(isNaN(surah)) return reply('Input harus berupa nomor surah')
if(isNaN(ayat)) return reply('Input harus berupa nomor ayat')
if(surah > 114) return reply('Al-Quran hanya terdiri dari 114 surah\nJadi surah ke ' + surah +' itu tidak ada')
try{
data2 = await zahir.Islamic.Quran(surah, 1)
data = await zahir.Islamic.Quran(surah, ayat)
hdata = data.data
hdata2 = data2.data
if(ayat > hdata2.surah.numberOfVerses) return reply(`Surah ${hdata2.surah.name.transliteration.id} hanya terdiri dari ${hdata2.surah.numberOfVerses} ayat!`)
teks = 'Surah ' + hdata.surah.name.transliteration.id + ' ayat ke ' + ayat + '\n\n' +  hdata.text.arab + '\n\n' + 'Artinya : _' + hdata.translation.id + '_'
reply(teks)
}catch{
reply('Error!, silahkan isi dengan format yang benar!')
}
break
case 'quranaudio':
if(!q) return reply(`Penggunaan : ${prefix}quranaudio nosurah|ayat\nExample : ${prefix}quranaudio 1|2`)
surah = q.split('|')[0]
ayat = q.split('|')[1]
if(!ayat) return reply('Format salah!')
if(isNaN(surah)) return reply('Input harus berupa nomor surah')
if(isNaN(ayat)) return reply('Input harus berupa nomor ayat')
if(surah > 114) return reply('Al-Quran hanya terdiri dari 114 surah\nJadi surah ke ' + surah +' itu tidak ada')
try{
data = await zahir.Islamic.Quran(surah, ayat)
data2 = await zahir.Islamic.Quran(surah, 1)
hdata2 = data2.data
if(ayat > hdata2.surah.numberOfVerses) return reply(`Surah ${hdata2.surah.name.transliteration.id} hanya terdiri dari ${hdata2.surah.numberOfVerses} ayat!`)
wa.sendFileFromUrl(from, data.data.audio.secondary[0], tod)
}catch{
reply('Error!, silahkan isi dengan format yang benar!')
}
break
case 'tafsirayat':
if(!q) return reply(`Penggunaan : ${prefix}tafsirayat nosurah|ayat\nExample : ${prefix}tafsirayat 1|2`)
surah = q.split('|')[0]
ayat = q.split('|')[1]
if(!ayat) return reply('Format salah!')
if(isNaN(surah)) return reply('Input harus berupa nomor surah')
if(isNaN(ayat)) return reply('Input harus berupa nomor ayat')
if(surah > 114) return reply('Al-Quran hanya terdiri dari 114 surah\nJadi surah ke ' + surah +' itu tidak ada')
try{
data = await zahir.Islamic.Quran(surah, ayat)
data2 = await zahir.Islamic.Quran(surah, 1)
hdata2 = data2.data
hdata = data.data
if(ayat > hdata2.surah.numberOfVerses) return reply(`Surah ${hdata2.surah.name.transliteration.id} hanya terdiri dari ${hdata2.surah.numberOfVerses} ayat!`)
teks = `T A F S I R  A Y A T\nSurah ` + hdata.surah.name.transliteration.id + ' ayat ke ' + ayat + '\n\nTAFSIR :\n' + hdata.tafsir.id.long
reply(teks)
}catch{
reply('Error!, silahkan isi dengan format yang benar!')
}
break

case 'tafsirsurah':
if(!q) return reply(`Penggunaan : ${prefix}tafsirsurah nosurah\nExample : ${prefix}tafsirsurah 1`)
surah = q.split('|')[0]
ayat = '1'
if(isNaN(surah)) return reply('Input harus berupa nomor surah')
if(surah > 114) return reply('Al-Quran hanya terdiri dari 114 surah\nJadi surah ke ' + surah +' itu tidak ada')
try{
data = await zahir.Islamic.Quran(surah, ayat)
hdata = data.data
teks = `T A F S I R  S U R A H\nSurah ` + hdata.surah.name.transliteration.id + '\n\nTAFSIR :\n' + hdata.surah.tafsir.id
reply(teks)
}catch{
reply('Error!, silahkan isi dengan format yang benar!')
}
break
case 'infosurah':
if(!q) return reply(`Penggunaan : ${prefix}infosurah nosurah\nExample : ${prefix}infosurah 1`)
if(isNaN(q)) return reply('Input harus berupa nomor surah')
if(q > 114) return reply('Al-Quran hanya terdiri dari 114 surah\nJadi surah ke ' + q +' itu tidak ada')
try{
data = await zahir.Islamic.Quran(q, 1)
hdata = data.data.surah
teks = `I N F O  S U R A H\n\n`
teks += shp + ' Nama Surah : ' + hdata.name.transliteration.id + '\n'
teks += shp + ' Arti : ' + hdata.name.translation.id + '\n'
teks += shp + ' Surah Ke : ' + hdata.number + '\n'
teks += shp + ' Jumlah Ayat : ' + hdata.numberOfVerses + '\n'
teks += shp + ' Tipe Surah : ' + hdata.revelation.id
reply(teks)
}catch{
reply(mess.error.api)
}
break
case 'kisahnabi':
if(!q) return reply('Masukkan nama nabi!')
try{
data = await zahir.Islamic.KisahNabi(q)
teks = `*K I S A H  N A B I*\n\n`
teks += shp + ' Nama : ' + data.name + '\n'
teks += shp + ' Tahun Kelahiran : ' + data.thn_kelahiran + '\n'
teks += shp + ' Usia : ' + data.usia + '\n'
teks += shp + ' Tempat : ' + data.tmp + '\n\n'
teks += data.description
wa.sendFileFromUrl(from, data.image_url, tod, teks)
}catch{
reply('Error\nPastikan input sudah benar!')
}
break
case 'hidetag':
if (!isGroupAdmins && !itsMe) return reply(mess.only.admin)
if (!arg) return reply(`Penggunaan ${prefix}hidetag teks`)
wa.hideTag(from, arg)
break
case 'tagall':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
members_id = []
teks = `┏━⬣ Tagall By @${sender.split("@")[0]}\n┃\n`
if(q){
teks += `┃ ⬣ INFO : ${q}\n┃\n`
}
for (let mem of groupMembers) {
    teks += `┣ ${shp} @${mem.jid.split('@')[0]}\n`
    members_id.push(mem.jid)
}
teks += `┃\n`
teks += `┗━⬣ ZBOT SELFBOT`
wa.Mentions(from, teks, members_id, tod)
break
case 'stourl':
boij = isQuotedSticker ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
        owgi = await zynn.downloadMediaMessage(boij)
        datae = await imageToBase64(JSON.stringify(owgi).replace(/\"/gi, ''))
        await fs.writeFileSync(`./tourl.jpeg`,datae, 'base64')
        var imgbb = require('imgbb-uploader')
        anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './tourl.jpeg')
        res = `${anu.display_url}`
        reply(res)
break
case 'tourl':
if(isQuotedSticker){
    boij = isQuotedSticker ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
    owgi = await zynn.downloadMediaMessage(boij)
    await fs.writeFileSync(`./tourl.jpeg`, owgi)
    var imgbb = require('imgbb-uploader')
    anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './tourl.jpeg')
    res = `${anu.display_url}`
    reply(res)
}
else if ((isMedia && !zynn.message.videoMessage || isQuotedImage || isQuotedVideo || isQuotedSticker) && args.length == 0) {
    reply(mess.wait)
            boij = isQuotedImage || isQuotedVideo || isQuotedSticker ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
            owgi = await zynn.downloadMediaMessage(boij)
            res = await uploadImages(owgi, false)
            reply(res)
  }
  break
case 'getpic':
if(m.quoted){
  try{
    buff = await wa.getBuffer(await zynn.getProfilePicture(m.quoted.sender))
    wa.sendImage(from, buff, tod)
  }catch{
    return reply('foto profil tidak ada/private')
  }
}
else if(!m.mentionedJid == ''){
  try{
    buff = await wa.getBuffer(await zynn.getProfilePicture(m.mentionedJid[0]))
    wa.sendImage(from, buff, tod)
  }catch{
    return reply('foto profil tidak ada/private')
  }
}
else{
  reply(`tag orangnya/reply pesan dengan caption ${prefix}getpic`)
}
break
case 'getstatus':
if(m.quoted){
  try{
    data = await zynn.getStatus(m.quoted.sender)
    reply(`${shp} Status : ${data.status == 401 ? 'Private' : data.status}`)
  }catch{
  }
}
else if(!m.mentionedJid == ''){
  try{
    data = await zynn.getStatus(m.mentionedJid[0])
    reply(`${shp} Status : ${data.status == 401 ? 'Private' : data.status}`)
  }catch{
  }
}
else{
  reply(`tag orangnya/reply pesan dengan caption ${prefix}getpic`)
}
break
case 'setfake':
if(!itsMe) return
   teks = `Silahkan pilih salah satu\n\n${shp} image\n${shp} group\n${shp} loc\n${shp} liveloc\n${shp} toko\n${shp} troli\n${shp} vn\n${shp} audio\n${shp} kontak\n\nContoh : ${prefix}setfake image`
if(!q) return reply(teks)
/*if(args[0] == 'image'){
   setting.fakerep = 'freply'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   reply('Sukses')
}*/
if(args[0] == 'document'){
   setting.fakerep = 'fdocu'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   reply('Sukses')
}
else if(args[0] == 'troli'){
   setting.fakerep = 'troli'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   reply('Sukses')
}
else if(args[0] == 'group'){
   setting.fakerep = 'fgrup'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   reply('Sukses')
}
else if(args[0] == 'reply'){
   setting.fakerep = 'reply' 
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   reply('Sukses')
}
else if(args[0] == 'vn'){
   setting.fakerep = 'vn'
   await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   reply('Sukses')
}
else if(args[0] == 'audio'){
   setting.fakerep = 'audio'
   await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   reply('Sukses')
}
else if(args[0] == 'kontak'){
   setting.fakerep = 'kontak'
   await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   reply('Sukses')
}
else if(args[0] == 'kontak2'){
   setting.fakerep = 'kontak2'
   await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   reply('Sukses')
}
else if(args[0] == 'kontak3'){
   setting.fakerep = 'kontak3'
   await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   reply('Sukses')
}
else if(args[0] == 'loc'){
   setting.fakerep = 'loc'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   reply('Sukses')
}
else if(args[0] == 'liveloc'){
   setting.fakerep = 'liveloc'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   reply('Sukses')
}
else if(args[0] == 'toko'){
   setting.fakerep = 'ftoko'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   reply('Sukses')
}
else if(args[0] == 'invite'){
   setting.fakerep = 'invite'
await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   reply('Sukses')
}
else{
    reply(teks)
    }
setting = await JSON.parse(fs.readFileSync('./setting.json'))
fakerep = setting.fakerep
break
case 'link':
case 'linkgc':
if(!isBotGroupAdmins) return reply(mess.only.Badmin)
gclink = await zynn.groupInviteCode(from)
reply(`https://chat.whatsapp.com/${gclink}\n\nLink Group ${groupName}`)
break
case 'join':
if(!itsMe) return
if (!q) return reply('Masukan link group')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
try {
    hen = args[0]
    var codeInvite = hen.split('https://chat.whatsapp.com/')[1] 
    if (!codeInvite) return reply('pastikan link sudah benar!')
    var response = await zynn.query({
    json: ["action", "invite", codeInvite],
    expect200: true
})
    reply('SUKSES JOIN GROUP')
} catch(e) {
    reply(mess.Iv)
}
break
case 'kontak':
if(!itsMe) return reply(mess.only.ownerB)
asu = q.split('|')[0]
asu2 = q.split('|')[1]
if (!asu) return reply(`Penggunaan ${prefix}kontak @tag atau nomor|nama`)
if (tod.message.extendedTextMessage != undefined){
    mentioned = tod.message.extendedTextMessage.contextInfo.mentionedJid
    wa.sendKontak(from,mentioned[0].split('@')[0], asu2, tod)
} else {
    wa.sendKontak(from,asu, asu2, tod)
}
break
case 'kontag':
if(!itsMe) return reply(mess.only.ownerB)
argz = arg.split('|')
if (!argz) return reply(`Penggunaan ${prefix}kontak @tag atau nomor|nama`)
if (tod.message.extendedTextMessage != undefined){
    mentioned = tod.message.extendedTextMessage.contextInfo.mentionedJid
    wa.hideTagKontak(from,mentioned[0].split('@')[0], argz[1])
} else {
    wa.hideTagKontak(from,argz[0], argz[1])
}
break
case 'graffiti':
if(!q) return reply('Masukkan teks!')
reply(mess.wait)
try{
    data = await zrapi.textpro('https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html', [q])
    sendMediaURL(from, data)
}catch(e){
    reply(mess.error.api)
}
break
case 'neon':
if(!q) return reply('Masukkan teks!')
reply(mess.wait)
try{
    data = await zrapi.textpro('https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html', [q])
    sendMediaURL(from, data)
}catch(e){
    reply(mess.error.api)
}
break
case 'blackpink':
if(!q) return reply('Masukkan teks!')
reply(mess.wait)
try{
    data = await zrapi.textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', [q])
    sendMediaURL(from, data)
}catch(e){
    reply(mess.error.api)
}
break
case 'blood':
if(!q) return reply('Masukkan teks!')
reply(mess.wait)
try{
    data = await zrapi.textpro('https://textpro.me/blood-text-on-the-frosted-glass-941.html', [q])
    sendMediaURL(from, data)
}catch(e){
    reply(mess.error.api)
}
break
case 'papercut':
if(!q) return reply('Masukkan teks!')
reply(mess.wait)
try{
    data = await zrapi.textpro('https://textpro.me/create-art-paper-cut-text-effect-online-1022.html', [q])
    sendMediaURL(from, data)
}catch(e){
    reply(mess.error.api)
}
break
case 'leaves':
if(!q) return reply('Masukkan teks!')
reply(mess.wait)
try{
        data = await zrapi.textpro('https://textpro.me/natural-leaves-text-effect-931.html', [q])
        sendMediaURL(from, data)
}catch(e){
        reply(mess.error.api)
}
break
case 'poly':
if(!q) return reply('Masukkan teks')
if(q.length > 10) return reply('Maksimal 10 huruf')
reply(mess.wait)
try{
    data = await skrep.textmakervid(q, 'poly')
    sendMediaURL(from, data.url, 'Nih udah jadi')
}catch{
    reply(mess.error.api)
}
break
case 'bold':
if(!q) return reply('Masukkan teks')
if(q.length > 10) return reply('Maksimal 10 huruf')
reply(mess.wait)
try{
    data = await skrep.textmakervid(q, 'bold')
    sendMediaURL(from, data.url, 'Nih udah jadi')
}catch{
    reply(mess.error.api)
}
break
case 'glowing':
if(!q) return reply('Masukkan teks')
if(q.length > 10) return reply('Maksimal 10 huruf')
reply(mess.wait)
try{
    data = await skrep.textmakervid(q, 'glowing')
    sendMediaURL(from, data.url, 'Nih udah jadi')
}catch{
    reply(mess.error.api)
}
break
case 'colorful':
if(!q) return reply('Masukkan teks')
if(q.length > 10) return reply('Maksimal 10 huruf')
reply(mess.wait)
try{
    data = await skrep.textmakervid(q, 'colorful')
    sendMediaURL(from, data.url, 'Nih udah jadi')
}catch{
    reply(mess.error.api)
}
break
case 'army':
if(!q) return reply('Masukkan teks')
if(q.length > 10) return reply('Maksimal 10 huruf')
reply(mess.wait)
try{
    data = await skrep.textmakervid(q, 'army')
    sendMediaURL(from, data.url, 'Nih udah jadi')
}catch{
    reply(mess.error.api)
}
break
case 'retro':
if(!q) return reply('Masukkan teks')
if(q.length > 10) return reply('Maksimal 10 huruf')
reply(mess.wait)
try{
    data = await skrep.textmakervid(q, 'retro')
    sendMediaURL(from, data.url, 'Nih udah jadi')
}catch{
    reply(mess.error.api)
}
break
case 'ttp':
if(!q) return reply('Masukkan teksnya!')
try{
    wa.getBuffer(`https://xteam.xyz/ttp?file&text=${encodeUrl(q)}`).then(res => {
     createSticker(res, stickermetadata).then(stik => {
      wa.sendSticker(from, stik, tod)
     })
    })
}catch(e){
    reply(mess.error.api)
}
break
case 'attp':
if(!q) return reply('Masukkan teksnya!')
try{
    wa.getBuffer(`https://xteam.xyz/attp?file&text=${encodeUrl(q)}`).then(res => {
     createSticker(res, stickermetadata).then(stik => {
      wa.sendSticker(from, stik, tod)
     })
    })
}catch(e){
    reply(mess.error.api)
}
break
case 'welcome':
if (!isGroup) return reply(mess.OnlyGrup)
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
if (q == 'on') {
  wel = await db.showdata('welcome', {id: from})
try{
  if(wel[0].id === from) return reply('Sudah Aktif')
}catch{
}
    db.adddata('welcome', {id: from})
    reply('_Sukses mengaktifkan Welcome digroup ini_')
} else if (q == 'off') {
    wel = await db.showdata('welcome', {id: from})
try{
  if(wel[0].id === from){
    db.delete('welcome', {id: from})
  }
}catch{
  return reply('Welcome tidak diaktifkan!')
}
    reply('_Sukses menonaktifkan Welcome digroup ini_')
} else {
    reply(`_Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan_\nContoh ${prefix}welcome on`)
}
break
case 'left':
if(!itsMe && !isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.OnlyGrup)
if (q == 'on') {
  lep = await db.showdata('left', {id: from})
try{
  if(lep[0].id === from) return reply('Sudah Aktif')
}catch{
}
    db.adddata('left', {id: from})
    reply('_Sukses mengaktifkan Left digroup ini_')
} else if (q == 'off') {
    lep = await db.showdata('left', {id: from})
try{
  if(lep[0].id === from){
    db.delete('left', {id: from})
        reply('_Sukses menonaktifkan Left digroup ini_')
  }
}catch{
  return reply('Left tidak diaktifkan!')
}

} else {
    reply(`_Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan_\nContoh ${prefix}left on`)
}
break
case 'antiluar':
if (!isGroup) return reply(mess.OnlyGrup)
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
if(!q){
isluar = enable['antiluar'].includes(from) ? 'Aktif' : 'Nonaktif'
return wa.sendButton(from, bold('ANTILUAR') + '\n' + bold(`Status : ${isluar}`), 'Pilih Enable / Disable', ['ENABLE', 'DISABLE'], [`${command} on`, `${command} off`], sender, tod)
}
if (q == 'on') {
deta = await db.showdata('antiluar', {id: from})
try{
  if(deta[0].id === from) return reply('Sudah Aktif')
}catch{
}
db.adddata('antiluar', {id: from})
    reply('_Sukses mengaktifkan Antiluar digroup ini_')
} else if (q == 'off') {
deta = await db.showdata('antiluar', {id: from})
try{
  if(deta[0].id === from){
    db.delete('antiluar', {id: from})
    reply('_Sukses menonaktifkan Antiluar digroup ini_')
  }
}catch{
}
} else {
    reply(`_Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan_\nContoh ${prefix}antiluar on`)
}
break
case 'antidelete':
if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
const groupId = isGroup ? groupMetadata.jid : ''
if (q == 'on') {
        deta = await db.showdata('antidelete', {id: from})
try{
  if(deta[0].id === from) return reply('Sudah Aktif')
}catch{
}
        db.adddata('antidelete', {id: from})
        reply(`Succes Enable Antidelete Grup!`)
} else if (q == 'off') {
        deta = await db.showdata('antidelete', {id: from})
try{
  if(deta[0].id === from){
    db.delete('antidelete', {id:from})
    reply('Sukses disable antidelete Group')
  }
}catch{
  reply('Antidelete tidak diaktifkan!')
}
}
break
case 'antiviewonce':
if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
if (q == 'on') {
        deta = await db.showdata('antiviewonce', {id: from})
try{
  if(deta[0].id === from) return reply('Sudah Aktif')
}catch{
}
        db.adddata('antiviewonce', {id: from})
        reply(`Succes Enable Antiviewonce!`)
} else if (q == 'off') {
        deta = await db.showdata('antiviewonce', {id: from})
try{
  if(deta[0].id === from){
    db.delete('antiviewonce', {id:from})
    reply('Sukses disable antiviewonce')
  }
}catch{
  reply('Antiviewonce tidak diaktifkan!')
}
}
break
case 'detector':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('𝗜𝘆𝗮 𝘀𝗮𝘆𝗮𝗻𝗴')
if (args[0] == 'on') {
    deta = await db.showdata('detector', {id: from})
try{
  if(deta[0].id === from) return reply('Sudah Aktif')
}catch{
}
        db.adddata('detector', {id: from})
        reply('_Sukses mengaktifkan Group Update Detector digroup ini_')
    } else if (args[0] == 'off') {
        deta = await db.showdata('detector', {id: from})
try{
  if(deta[0].id === from) {
    db.delete('detector', {id: from})
    reply('_Sukses menonaktifkan Group Update Detector digroup ini_')
  }
}catch{
  reply('Detector tidak diaktifkan!')
}
    } else {
        reply(`_Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan_\nContoh ${prefix}detector on`)
    }
break
case 'picdetec':
if(!itsMe) return
if(args[0] == 'on'){
setting.picdetec = true
await fs.writeFileSync('./setting.json',JSON.stringify(setting))
reply('Sukses')
}
else if(args[0] == 'off'){
setting.picdetec = false
await fs.writeFileSync('./setting.json',JSON.stringify(setting))
reply('Sukses')
}
else{
reply('Format salah')
}
break
case 'surah':
if(!q) return reply('Masukkan nomor surah!')
if(isNaN(q)) return reply('Input harus berupa angka!')
try{
    data = await hx.surah(q)
    data2 = await zahir.Islamic.Quran(q, 1)
    hdata = data2.data
    teks = shp + ` *Surah ${hdata.surah.name.transliteration.id} Ayat 1 - ${data.length}\n\n`
    num = 1
    for(let i of data){
        teks += num + '.  ' + i.arab + '\n\n'
        teks += '_Artinya : ' + i.indo + '_\n\n------------------------------\n\n'
        num += 1
    }
    reply(teks)
}catch{
    reply(mess.error.api)
}
break
case 'playstore':
if(!q) return reply('Masukkan kata kuncinya!')
reply(mess.wait)
try{
    data = await hx.playstore(q)
    teks = `*P L A Y S T O R E  S E A R C H*\n${shp} Query : ${q}\n\n`
    for(let i of data){
        teks += shp + ' Nama : ' + i.name + '\n'
        teks += shp + ' Link : ' + i.link + '\n'
        teks += shp + ' Developer : ' + i.developer + '\n'
        teks += shp + ' Link Developer : ' + i.link_dev + '\n\n------------------------------\n\n'
    }
    reply(teks)
}catch{
    reply(mess.error.api)
}
break
case 'igstory':
if(!q) return reply(`Cara penggunaan : ${prefix}igstory username|jumlah\nContoh ; ${prefix}igstory n.lidiawaty|2`)
usrnm = q.split('|')[0]
jmlh = q.split('|')[1]
if(!jmlh) return reply('Format salah')
if(isNaN(jmlh)) return reply('Jumlah harus berupa angka!')
reply(mess.wait)
try{
    data = await hx.igstory(usrnm)
    if(jmlh > data.medias.length) return reply(`Jumlah yang anda minta terlalu berlebihan!\nStory ${usrnm} hanya berjumlah ${data.medias.length}`)
    num = 1
    for(let i=0; i<jmlh; i++){
        teks = `Igstory ${usrnm} ${num}`
        num += 1
        await wa.sendFileFromUrl(from, data.medias[i].url, tod, teks)
        await wa.sleep(3000)
    }
}catch{
    reply(mess.error.api)
}
break
case 'twittervideo':
if(!q) return reply('Masukkan linknya!')
if(!isUrl(q)) return reply(mess.error.Iv)
reply(mess.wait)
try{
    data = await hx.twitter(q)
    await wa.sendFileFromUrl(from, data.SD, tod, data.desc)
}catch{
    reply(mess.error.api)
}
break
/*case 'tiktok2':
if(!q) return reply('Masukkan linknya!')
if(!isUrl(q)) return reply(mess.error.Iv)
reply(mess.wait)
try{
    data = await hx.ttdownloader(q)
    await wa.sendFileFromUrl(from, data.wm, tod, '*T I K T O K  W A T E R M A R K*')
}catch{
    reply(mess.error.api)
}
break
case 'tiktoknowm2':
if(!q) return reply('Masukkan linknya!')
if(!isUrl(q)) return reply(mess.error.Iv)
reply(mess.wait)
try{
    data = await hx.ttdownloader(q)
    await wa.sendFileFromUrl(from, data.nowm, tod, '*T I K T O K  N O  W A T E R M A R K*')
}catch{
    reply(mess.error.api)
}
break
*/
case 'konachan':
if(!q) return reply('Masukkan kata kuncinya!')
reply(mess.wait)
try{
    data = await skrep.konachan(q)
    if(data == '') return reply(`Gambar ${q} tidak ditemukan`)
    rand = data[Math.floor(Math.random() * data.length)]
    wa.sendButtonWithImage(from, bold('Hasil pencarian ' + q), 'Next ga nih?', await wa.getBuffer(rand), ['NEXT ▶️'], [`${command} ${q}`], sender, tod)
}catch{
    reply(mess.error.api)
}
break
case 'zerochan':
if(!q) return reply('Masukkan kata kuncinya!')
reply(mess.wait)
try{
    data = await skrep.zerochan(q)
    if(data == '') return reply(`Gambar ${q} tidak ditemukan`)
    rand = data.result[Math.floor(Math.random() * data.result.length)]
    wa.sendButtonWithImage(from, bold('Hasil pencarian ' + q), 'Next ga nih?', await wa.getBuffer(rand), ['NEXT ▶️'], [`${command} ${q}`], sender, tod)
}catch{
    reply(mess.error.api)
}
break
case 'ghuser':
case 'githubuser':
if(!q) return reply('Masukkan username githubnya!')
reply(mess.wait)
try{
    data = await skrep.ghuser(q)
    teks = `*G I T H U B  U S E R  S E A R C H*\n${shp} Query : ${q}\n\n`
    for(let i of data){
        teks += shp + ' Username : ' + i.name + '\n'
        teks += shp + ' Link : ' + i.link + '\n\n------------------------------\n\n' 
    }
    wa.sendFileFromUrl(from, data[0].thumb, tod, teks)
}catch{
    reply(mess.error.api)
}
break
case 'ghfollowers':
case 'ghfol':
if(!q) return reply('Masukkan username githubnya!')
reply(mess.wait)
try{
    data = await skrep.ghfollower(q)
    teks = `*F O L L O W E R S  G I T H U B*\n\n${shp} Username : ${data.username}\n${shp} Followers : ${data.followers}\n\n*L I S T  F O L L O W E R S* : \n\n`
    for(let i of data.listfollowers){
        teks += shp + ' Username : ' + i.username + '\n'
        teks += shp + ' Link : ' + i.link + '\n\n------------------------------\n\n' 
    }
    wa.sendFileFromUrl(from, data.avatar, tod, teks)
}catch{
    reply(mess.error.api)
}
break
case 'speedtest':
if(!itsMe) return
reply(mess.wait)
try{
    exec('speedtest', async(err, stdout) => {
        if (err) return reply(String(err))
        if (stdout){
server = stdout.split('Server: ')[1].split('\n')[0]
isp = stdout.split('ISP: ')[1].split('\n')[0]
latency = stdout.split('Latency:     ')[1].split('\n')[0]
down= stdout.split('Download:  ')[1].split('\n')[0]
uploadd = stdout.split('Upload:  ')[1].split('\n')[0]
url = stdout.split('Result URL: ')[1]
teks = 'SPEEDTEST\n\n'
teks += shp + ' Server : ' + server + '\n'
teks += shp + ' Isp : ' + isp + '\n'
teks += shp + ' Latensi : ' + latency + '\n'
teks += shp + ' Download : ' + down + '\n'
teks += shp + ' Upload : ' + uploadd + '\n'
teks += shp + ' Url : ' + url + '\n'
wa.sendFileFromUrl(from, 'https://api.apiflash.com/v1/urltoimage?access_key=5608da775fec43ccab391d3ed75484ba&url=' + url, tod, teks)
}
})
}catch{
    reply(mess.error.api)
}
break
case 'resep':
if(!q) return reply('Mau cari resep apa?')
reply(mess.wait)
try{
    data = await skrep.cariresep(q)
    dataa = await skrep.bacaresep(data.data[0].link)
    hdata = dataa.data
    teks = monospace('RESEP MASAKAN\n\n')
    teks += shp + ' Nama Masakan : ' + hdata.judul + '\n'
    teks += shp + ' Waktu Masak : ' + hdata.waktu_masak + '\n'
    teks += shp + ' Porsi : ' + hdata.hasil + '\n'
    teks += shp + ' Tingkat Kesulitan : ' + hdata.tingkat_kesulitan + '\n'
    teks += shp + ' Bahan Bahan :\n\n' + hdata.bahan + '\n\n'
    teks += shp + ' Langkah - Langkah :\n\n' + hdata.langkah_langkah
    wa.sendFileFromUrl(from, hdata.thumb, tod, teks)
}catch{
    reply('Resep tidak ditemukan')
}
break
/*case 'ptl':
if(!q) return reply('Username tiktoknya apa?')
reply(mess.wait)
try{
    data = await skrep.asupantiktok(q)
    hdata = data.media
    teks = 'PTL TIKTOK\n\n'
    teks += shp + ' Username : ' + data.username + '\n'
    teks += shp + ' Caption : ' + hdata.caption + '\n'
    teks += shp + ' Likes : ' + hdata.likes + '\n'
    teks += shp + ' Comments : ' + hdata.comments + '\n'
    teks += shp + ' Share : ' + hdata.share + '\n'
    wa.sendFileFromUrl(from, hdata.videourl, tod, teks)
}catch{
    reply(mess.error.api)
}
break
*/
case 'asupan':
if(!q){
        po = zynn.prepareMessageFromContent(from, {
                                        "listMessage":{
                  "title": "*ASUPAN*",
                  "description": "Silahkan dipilih kak asupannya:v",
                  "buttonText": "Asupannya Disini",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "ASUPAN +62",
                              "rowId": `${prefix}asupan +62`
                           },
                           {
                              "title": "ASUPAN SANTUY",
                              "rowId": `${prefix}asupan santuy`
                           },
                           {
                              "title": "ASUPAN BOCIL",
                              "rowId": `${prefix}asupan bocil`
                           },
                           {
                              "title": "ASUPAN UKHTI",
                              "rowId": `${prefix}asupan ukhti`
                           },
                           {
                              "title": "ASUPAN RIKA GUSTIANI",
                              "rowId": `${prefix}asupan rikagustiani`
                           },
                           {
                              "title": "ASUPAN GHEA",
                              "rowId": `${prefix}asupan ghea`
                           },
                        ]
                     }]}}, {}) 
            zynn.relayWAMessage(po, {waitForAck: true})
}
if(q == '+62'){
reply(mess.wait)
sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupan?apikey=2OcDMwvZ1Uc2S5V`)
}else
if(q == 'santuy'){
reply(mess.wait)
sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupansantuy?apikey=2OcDMwvZ1Uc2S5V`)
}else
if(q == 'bocil'){
reply(mess.wait)
sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=2OcDMwvZ1Uc2S5V`)
}else
if(q == 'ukhti'){
reply(mess.wait)
sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=2OcDMwvZ1Uc2S5V`)
}else
if(q == 'rikagustiani'){
reply(mess.wait)
sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=2OcDMwvZ1Uc2S5V`)
}else
if(q == 'ghea'){
reply(mess.wait)
sendMediaURL(from,`https://dapuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=2OcDMwvZ1Uc2S5V`)
}/*else{
reply(`Cara Penggunaan : ${prefix + command} ghea\n\nTersedia\n• +62\n• santuy\n• bocil\n• ukhti\n• rikagusriani\n• ghea`)
}*/
break
case 'setprefixgc':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
//if(!q) return reply(`Contoh penggunaan : ${prefix}setprefixgc prefix\nContoh : ${prefix}setprefixgc !`)
if(!args[0]){
var gcpref = 'noprefix'
heh = 'Noprefix'
}
else{
var gcpref = args[0]
heh = args[0]
}
deta = await db.showdata('prefix', {id: from})
try{
  if(deta[0].id === from){
    db.uprefix(from, gcpref)
  }
}catch{
  db.adddata('prefix', {id: from, prefix: gcpref})
}
return reply(`Prefix Bot di Group ini diubah menjadi ${heh}`)
break
case 'resetprefix':
try{
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
deta = await db.showdata('prefix', {id: from})
if(deta[0].id === from){
  db.delete('prefix', {id: from})
  return reply('Prefix berhasil direset')
}
}catch{
  reply('Prefix tidak diset digroup ini')
}
break
    case 'listmem':
    if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
if(!q){
    members_id = []
teks = `⬣ All Member Group ${groupName}\n\n`
for (let mem of groupMembers) {
teks += `  ${shp} @${mem.jid.split('@')[0]}\n`
teks += `  ┗━ ${shp} wa.me/${mem.jid.split('@')[0]}\n\n`
members_id.push(mem.jid)
}
teks += `\n`
teks += `⬣ ${fakec}`
return wa.Mentions(from, teks, members_id, tod)
}
if(q == 'luar'){
      members_id = []
teks = `⬣ All Non Indonesian Member in Group ${groupName}\n\n`
for (let mem of groupMembers) {
if(!mem.jid.startsWith('62')){
teks += `  ${shp} @${mem.jid.split('@')[0]}\n`
teks += `  ┗━ ${shp} wa.me/${mem.jid.split('@')[0]}\n\n`
members_id.push(mem.jid)
var y = mem.jid.length
}
}
teks += `\n`
teks += `⬣ ${fakec}`
wa.Mentions(from, teks, members_id, tod)
}
else{
      members_id = []
teks = `⬣ All Member Group ${groupName}\n⬣ Kode Negara : ${args[0]}\n\n`
for (let mem of groupMembers) {
if(mem.jid.startsWith(`${args[0]}`)){
teks += `  ${shp} @${mem.jid.split('@')[0]}\n`
teks += `  ┗━ ${shp} wa.me/${mem.jid.split('@')[0]}\n\n`
members_id.push(mem.jid)
var y = mem.jid.length
}
}
teks += `\n`
teks += `⬣ ${fakec}`
if(members_id == '') return reply('Tidak ditemukan')
wa.Mentions(from, teks, members_id, tod)
}
break
case 'autoread':
if(!itsMe) return reply('Only Owner bruh!')
if(!q){
aread = autoread === true ? 'Aktif' : 'Nonaktif'
return wa.sendButton(from, bold('AUTOREAD') + '\n' + bold(`Status : ${aread}`), 'Pilih Enable / Disable', ['ENABLE', 'DISABLE'], [`${command} on`, `${command} off`], sender, tod)
}
if(q == 'on'){
   if(autoread) return reply('Autoread telah diaktifkan sebelumnya!')
   setting.autoread = true
   await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   setting = await JSON.parse(fs.readFileSync('./setting.json'))
   autoread = setting.autoread
reply('Autoread berhasil diaktifkan')
}
else if(q == 'off'){
   if(!autoread) return reply('Autoread telah dinonaktifkan sebelumnya!')
   setting.autoread = false
   await fs.writeFileSync('./setting.json', JSON.stringify(setting))
   setting = await JSON.parse(fs.readFileSync('./setting.json'))
   autoread = setting.autoread
   reply('Autoread berhasil dinonaktifkan!')
}
else{
   reply('Pilih on/off bruh!')
}
break
case 'pesansementara':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
if(!isBotGroupAdmins) return reply(mess.only.Badmin)
if(!q) return reply(' Pilih on atau off')
if(q == 'on'){
    const { WA_DEFAULT_EPHEMERAL } = require('@adiwajshing/baileys')
    if(isephemeral) return reply('Pesan Sementara telah diaktifkan sebelumnya')
    await zynn.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL)
    reply('Pesan Sementara berhasil diaktifkan')
}
else if(q == 'off'){
    const { WA_DEFAULT_EPHEMERAL } = require('@adiwajshing/baileys')
    if(!isephemeral) return reply('Pesan Sementara tidak diaktifkan digroup ini!')
    await zynn.toggleDisappearingMessages(from, 0)
    reply('Pesan Sementara berhasil dinonaktifkan')
}
else{
    reply(' Pilih on atau off')
}
break
case 'jadibot':
if(!itsMe) return
if(tod.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
if(q){
jadibot(reply, zynn, from, q)
}
else{
jadibot(reply, zynn,from)
}
break
case 'stopjadibot':
    if(tod.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
case 'adderror':
if(!itsMe) return
if(!q) return reply('Masukkan nama fitur yang error!')
deta = await db.showdata('error', {cmd: q})
try{
  if(deta[0].cmd === q) return reply(`Fitur ${q} telah ditambahkan ke daftar error sebelumnya!`)
}catch{
db.adddata('error', {cmd: q})
reply('Done')
}
break

case 'delerror':
if(!itsMe) return
if(!q) return reply('Masukkan nama fiturnya!')
deta = await db.showdata('error', {cmd: q})
try{
if(deta[0].cmd === q){
  db.delete('error', {cmd: q})
  return reply('Done')
}
}catch{
  reply('Fitur tidak terdaftar di listerror')
}
break

case 'listerror':
deta = await db.showdata('error')
teks = monospace(`List Fitur Error\n${shp} Total : ${deta.length}\n\n`)
for(let i of deta){
    teks += shp + ' ' + i.cmd + '\n'
}
reply(teks)
break
case 'read':
if(!itsMe) return
if(!isQuotedDocument) return reply('reply dokumennya!')
data = await m.quoted.download()
await fs.writeFileSync(`./media/read.${args[0]}`, data)
exec(`cd media && cat read.${args[0]}`, (err, stdout) => {
                if (err) return reply(String(err))
                if (stdout) reply(stdout)
                                })
break
case 'cuaca':
if(!q) return reply('Masukkan nama daerahnya!')
reply(mess.wait)
try{
    data = await wa.fetchJson('http://zekais-api.herokuapp.com/cuaca?daerah=' + q + '&apikey=zekais')
    teks = `INFO CUACA\n\n`
    teks += shp + ' Tempat : ' + data.Nama + '\n'
    teks += shp + ' Suhu : ' + data.Suhu + '\n'
    teks += shp + ' Angin : ' + data.Angin + '\n'
    teks += shp + ' Kelembaban : ' + data.Kelembaban + '\n'
    teks += shp + ' Cuaca : ' + data.Cuaca + ` (${data.Keterangan})\n`
    teks += shp + ' Udara : ' + data.Udara
    po = await zynn.prepareMessageFromContent(from, {
  "liveLocationMessage": {
    "degreesLatitude": data.latitude,
    "degreesLongitude": data.longitude,
    "sequenceNumber": "1628773614877001",
caption: teks
}
}, {quoted: tod})
zynn.relayWAMessage(po)
}catch{
    reply(mess.error.api)
}
break
case 'setwelcome':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
if(!q) return reply(`Contoh penggunaan : ${prefix}setwelcome Halo @user, Selamat datang di Group @subject\n\nInfo : \n${shp} @user = Tag Member\n${shp} @subject = Nama Group\n${shp} @desc = deskripsi group`)
deta = await db.showdata('welcome_mess', {id: from})
try{
  if(deta[0].id === from){
    db.update('welcome_mess', from, q)
  }
}catch(error) {
  console.log('baru')
  db.adddata('welcome_mess', {id: from, teks: q})
}
reply(`Welcome berhasil diubah menjadi\n${q}`)
break
case 'delwelcome':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
deta = await db.showdata('welcome_mess', {id: from})
try{
if(deta[0].id === from){
  db.delete('welcome_mess', {id: from})
  reply('Sukses Menghapus Welcome di group ini')
}
}catch(error) {
  return reply('Welcome tidak diset digroup ini!')
}
break
case 'setleft':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
if(!q) return reply(`Contoh penggunaan : ${prefix}setleft Sayonara @user, Semoga Tenang dialam sana\n\nInfo : \n${shp} @user = Tag Member\n${shp} @subject = Nama Group\n${shp} @desc = deskripsi group`)
deta = await db.showdata('left_mess', {id: from})
try{
  if(deta[0].id === from){
    db.update('left_mess', from, q)
  }
}catch(error) {
  console.log('baru')
  db.adddata('left_mess', {id: from, teks: q})
}
reply(`Left Group diubah menjadi ${q}`)
break
case 'delleft':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
deta = await db.showdata('left_mess', {id: from})
try{
if(deta[0].id === from){
  db.delete('left_mess', {id: from})
  reply('Sukses Menghapus Left di group ini')
}
}catch(error) {
  return reply('Left tidak diset digroup ini!')
}
break
case 'cekwelcome':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
deta = await db.showdata('welcome_mess', {id: from})
try{
  if(deta[0].id === from){
    var wel = deta[0].teks
  }
}catch{
  var wel = 'Default Bot'
}
teks = `${shp} Nama Group : ${groupName}\n${shp} Id : ${from}\n${shp} Text Welcome : ${wel}`
reply(teks)
break
case 'cekleft':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
deta = await db.showdata('left_mess', {id: from})
try{
  if(deta[0].id === from){
    var wel = deta[0].teks
  }
}catch{
  var wel = 'Default Bot'
}
teks = `${shp} Nama Group : ${groupName}\n${shp} Id : ${from}\n${shp} Text Left : ${wel}`
reply(teks)
break
case 'ssweb':
if(!q) return reply('Masukkan urlnya!')
reply(mess.wait)
try{
    sendMediaURL(from, `https://api.apiflash.com/v1/urltoimage?access_key=5608da775fec43ccab391d3ed75484ba&url=${q}`, `SSWEB : ${q}`)
}catch(e){
    reply(mess.error.api)
}
break
case 'revokelink':
case 'resetlink':
if(!itsMe && !isGroupAdmins) return reply(mess.only.admin)
if(!isBotGroupAdmins) return reply(mess.only.Badmin)
y = await zynn.query({json: ["action", "inviteReset", from],expect200: true})
reply('sukses revoke link')
break
case 'otakudesu':
if(!q) return reply('Masukkan judulnya!')
reply(mess.wait)
try{
    data = await Ra.OtakudesuSearch(q)
    data2 = await Ra.InfoOtakudesu(data.result[0].url)
    teks = `*I N F O  A N I M E*\n\n${shp} Bio : \n${data2.result.bio}\n${shp} Sinopsis : ${data2.result.sinopsis}\n${shp} Url : ${data.result[0].url}`
    sendMediaURL(from, data2.result.thumb, teks)
}catch(e){
    reply(mess.error.api)
}
break
    case 'tourl2':
 if ((isMedia && !zynn.message.videoMessage || isQuotedImage || isQuotedVideo || isQuotedSticker || isQuotedAudio || isQuotedDocument) && args.length == 0) {
    reply(mess.wait)
    boij = isQuotedImage || isQuotedVideo || isQuotedSticker || isQuotedAudio || isQuotedDocument? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
owgi = await zynn.downloadMediaMessage(boij)
rname = await GenerateSerialNumber('000000')
        if(isQuotedImage){
        await fs.writeFileSync(`./media/${rname}.jpg`, owgi)
        path = `./media/${rname}.jpg`
        uplod = await Ra.UploadFile(path)
        console.log(uplod)
    teks = `M E D I A  T O  U R L\n\n${shp} Nama File : ${uplod.result.url}\n${shp} Type : Image/jpg\n${shp} Url : ${uplod.result.namaFile}\n${shp} Size : ${uplod.result.size}\n${shp} Hash : ${uplod.result.hash}`
    reply(teks)
    fs.unlinkSync(path)
        }
        else if(isQuotedVideo){
        await fs.writeFileSync(`./media/${rname}.mp4`, owgi)
        path = `./media/${rname}.mp4`
        uplod = await Ra.UploadFile(path)
        console.log(uplod)
        teks = `M E D I A  T O  U R L\n\n${shp} Nama File : ${uplod.result.url}\n${shp} Type : Video/mp4\n${shp} Url : ${uplod.result.namaFile}\n${shp} Size : ${uplod.result.size}\n${shp} Hash : ${uplod.result.hash}`
        reply(teks)
        fs.unlinkSync(`./media/${rname}.mp4`)
        }
        else if(isQuotedSticker){
        await fs.writeFileSync(`./media/${rname}.webp`, owgi)
        path = `./media/${rname}.webp`
        uplod = await Ra.UploadFile(path)
        console.log(uplod)
        teks = `M E D I A  T O  U R L\n\n${shp} Nama File : ${uplod.result.url}\n${shp} Type : Sticker/webp\n${shp} Url : ${uplod.result.namaFile}\n${shp} Size : ${uplod.result.size}\n${shp} Hash : ${uplod.result.hash}`
        reply(teks)
        fs.unlinkSync(path)
        }
        else if(isQuotedAudio){
        await fs.writeFileSync(`./media/${rname}.mp3`, owgi)
        path = `./media/${rname}.mp3`
        uplod = await Ra.UploadFile(path)
        console.log(uplod)
        teks = `M E D I A  T O  U R L\n\n${shp} Nama File : ${uplod.result.url}\n${shp} Type : Audio/mp3\n${shp} Url : ${uplod.result.namaFile}\n${shp} Size : ${uplod.result.size}\n${shp} Hash : ${uplod.result.hash}`
        reply(teks)
        fs.unlinkSync(path)
        }
    else{
    reply(`Reply Image/Sticker/Video/Audio dengan caption ${prefix}tourl2`)
    }
}
 break
case 'qrcode':
if(!q) return reply('Masukkan teksnya!')
await reply(mess.wait)
try{
qrcod = require('qrcode')
data = await qrcod.toDataURL(q)
//console.log(y)
buff = await Buffer.from(data.split('data:image/png;base64,')[1], 'base64')
wa.sendImage(from, buff, tod)
}catch{
reply(mess.error.api)
}
break
case 'qrreader':
if(isQuotedImage){
boij = isQuotedImage ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
        owgi = await zynn.downloadMediaMessage(boij)
        await fs.writeFileSync(`./media/qr.jpeg`, owgi)
        var imgbb = require('imgbb-uploader')
        anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './media/qr.jpeg')
        res = `${anu.display_url}`
        data = await wa.fetchJson(`https://docs-jojo.herokuapp.com/api/qr_read?image_url=${res}`)
    teks = `Q R  R E A D E R\n\n${shp} Result : ${data.result.raw_text}`
    reply(teks)
    //fs.unlinkSync('./media/qr.jpeg')
}else{
reply('Reply qrcodenya')
}
break
case 'carigc':
if(!q) return reply('Mau cari grup apa?')
reply(mess.wait)
try{
    data = await skrep.carigc(q)
    teks = `C A R I  G R O U P\n${shp} Query : ${q}\n\n`
    for(let i of data){
        teks += shp + ` Nama Group : ` + i.nama + '\n'
        teks += shp + ` Link Group : ` + i.link + '\n\n-------------------------------\n\n'
    }
    reply(teks)
}catch(e){
    reply(mess.error.api)
}
break
case 'wall':
case 'wallpaper':
if(!q) return reply('Masukkan kata kunci!')
reply(mess.wait)
try{
    data = await skrep.wallpapercave(q)
    rand = Math.floor(Math.random() * data.length) + 1
    wa.sendButtonWithImage(from, bold('Hasil pencarian Wallpaper ' + q), 'Next ga nih?', await wa.getBuffer(data[rand]), ['NEXT ▶️'], [`wall ${q}`], sender, tod)
}catch{
    reply(mess.error.api)
}
break
case 'wattpad':
if(!q) return reply('Masukkan kata kunci!')
reply(mess.wait)
try{
    data = await skrep.wattpad(q)
    teks = `W A T T P A D  S E A R C H\n${shp} Query : ${q}\n\n`
    for(let i of data){
        teks += shp + ' Judul : ' + i.creator + '\n'
        teks += shp + ' Link : ' + i.link + '\n\n------------------------------\n\n'
    }
    wa.sendFileFromUrl(from, data[0].thumb, tod, teks)
}catch{
    reply(mess.error.notfound)
}
break
case 'sfilesearch':
case 'sfile':
if(!q) return reply('Masukkan kata kunci')
reply(mess.wait)
try{
    data = await skrep.sfilesearch(q)
    teks = `S F I L E  S E A R C H\n${shp} Query : ${q}\n\n`
    for(let i of data){
        teks += shp + ' Judul : ' + i.nama + '\n'
        teks += shp + ' Size : ' + i.size + '\n'
        teks += shp + ' Link : ' + i.link + '\n\n------------------------------\n\n'
    }
    reply(teks)
}catch{
    reply(mess.error.notfound)
}
break
case 'apkmody':
if(!q) return reply('Masukkan kata kunci')
reply(mess.wait)
try{
    data = await skrep.apkmody(q)
    teks = `APKMODY SEARCH\n${shp} Query : ${q}\n\n`
    for(let i of data.data){
        teks += shp +' Judul : ' + i.judul + '\n'
        teks += shp +' Info Mod : ' + i.infomod + '\n'
        teks += shp +' Link : ' + i.link + '\n\n------------------------------\n\n'
    }
    await wa.sendFileFromUrl(from, data.data[0].thumb, tod, teks)
}catch{
    reply(mess.error.api)
}
break
case 'happymod':
if(!q) return reply('Masukkan kata kunci')
reply(mess.wait)
try{
    data = await skrep.happymod(q)
    teks = `HAPPYMOD SEARCH\n${shp} Query : ${q}\n\n`
    for(let i of data.data){
        teks += shp +' Judul : ' + i.judul + '\n'
        teks += shp +' Rating : ' + i.rating + '\n'
        teks += shp +' Link : ' + i.link + '\n\n------------------------------\n\n'
    }
    await wa.sendFileFromUrl(from, data.data[0].thumb, tod, teks)
}catch{
    reply(mess.error.api)
}
break
case 'android1':
if(!q) return reply('Masukkan kata kunci')
reply(mess.wait)
try{
    data = await skrep.android1(q)
    teks = `ANDROID ONE SEARCH\n${shp} Query : ${q}\n\n`
    for(let i of data.data){
        teks += shp +' Judul : ' + i.judul + '\n'
        teks += shp +' Developer : ' + i.dev + '\n'
        teks += shp +' Rating : ' + i.rating + '\n'
        teks += shp +' Link : ' + i.link + '\n\n------------------------------\n\n'
    }
    await wa.sendFileFromUrl(from, data.data[0].thumb, tod, teks)
}catch{
    reply(mess.error.api)
}
break
case 'sfiledirect':
if(!q) return reply('Masukkan linknya!')
if(!isUrl(q)) return reply(mess.error.Iv)
reply(mess.wait)
try{
    data = await skrep.sfiledown(q)
    teks = `SFILE DIRECT\n\n`
    teks += shp + ' Judul : ' + data.data.judul + '\n'
    teks += shp + ' Size : ' + data.data.size + '\n'
    teks += shp + ' Type : ' + data.data.type + '\n'
    teks += shp + ' Uploader : ' + data.data.uploader + '\n'
    teks += shp + ' Tanggal Upload : ' + data.data.uploaded + '\n'
    teks += shp + ' Link Direct : ' + data.data.link
    reply(teks)
}catch{
    reply(mess.error.api)
}
break
case 'dewabatch':
if(!q) return reply('Masukkan kata kunci!')
reply(mess.wait)
try{
    data = await skrep.dewabatch(q)
    teks = `D E W A B A T C H  S E A R C H\n${shp} Query : ${q}\n\n`
    for(let i of data){
        teks += shp + ' Judul : ' + i.judul + '\n'
        teks += shp + ' Rating : ' + i.rating + '\n'
        teks += shp + ' Link : ' + i.link + '\n\n------------------------------\n\n'
    }
    wa.sendFileFromUrl(from, data[0].thumb, tod, teks)
}catch{
    reply(mess.error.notfound)
}
break
case 'kiryu':
if(!q) return reply('Masukkan kata kunci!')
reply(mess.wait)
try{
    data = await skrep.kiryu(q)
    teks = `K I R Y U  S E A R C H\n${shp} Query : ${q}\n\n`
    for(let i of data){
        teks += shp + ' Judul : ' + i.judul + '\n'
        teks += shp + ' Rating : ' + i.rating + '\n'
        teks += shp + ' Link : ' + i.link + '\n\n------------------------------\n\n'
    }
    wa.sendFileFromUrl(from, data[0].thumb, tod, teks)
}catch{
    reply(mess.error.notfound)
}
break
case 'manga':
if(!q) return reply('Masukkan query!')
reply(mess.wait)
try{
  data = await skrep.manga(q)
  teks = bold('Manga Search') + '\n\n'
  for(let i of data){
    teks += shp + ' Judul : ' + i.judul + '\n'
    teks += shp + ' Link : ' + i.link + '\n\n-----------------------------\n\n'
  }
  wa.sendFileFromUrl(from, data[0].thumb, tod, teks)
}catch{
  reply(`${command} tidak ditemukan/error`)
}
break
case 'anime':
if(!q) return reply('Masukkan query!')
reply(mess.wait)
try{
  data = await skrep.anime(q)
  teks = bold('Anime Search') + '\n\n'
  for(let i of data){
    teks += shp + ' Judul : ' + i.judul + '\n'
    teks += shp + ' Link : ' + i.link + '\n\n-----------------------------\n\n'
  }
  wa.sendFileFromUrl(from, data[0].thumb, tod, teks)
}catch{
  reply(`${command} tidak ditemukan/error`)
}
break
case 'job':
if(!q) return reply('Masukkan bidang pekerjaan!')
reply(mess.wait)
try{
  data = await skrep.job(q)
  teks = bold('Job Search') + '\n\n'
  for(let i of data){
    teks += shp + ' Job : ' + i.job + '\n'
    teks += shp + ' Perusahaan : ' + i.perusahaan + '\n'
    teks += shp + ' Daerah : ' + i.daerah + '\n'
    teks += shp + ' Upload Date : ' + i.upload + '\n'
    teks += shp + ' Detail : ' + i.link_Detail + '\n\n-----------------------------\n\n'
  }
reply(teks)
}catch{
  reply(`${command} tidak ditemukan/error`)
}
break
case 'anoboy':
if(!q) return reply('Masukkan query')
reply(mess.wait)
try{
  data = await skrep.anoboys(q)
  teks = bold('Anoboy Search') + '\n\n'
  for(let i of data.data){
    dl = await skrep.anoboydl(i.link)
    teks += shp + ' Judul : ' + i.judul + '\n'
    teks += shp + ' Detail : ' + i.link + '\n'
    teks += shp + ' Link Download : ' + JSON.stringify(dl.mirror, null, 2) + '\n\n-----------------------------\n\n'
  }
 wa.sendFileFromUrl(from, data.data[0].thumb, tod, teks)
}catch{
  reply(`${command} tidak ditemukan/error`)
}
break
case 'palingmurah':
if(!q) return reply('Masukkan kata kuncinya!')
reply(mess.wait)
try{
    data = await skrep.palingmurah(q)
    teks = `*P A L I N G  M U R A H*\n${shp} Query : ${q}\n\n`
    for(let i of data){
        teks += shp + ' Produk : ' + i.product + '\n'
        teks += shp + ' Harga : ' + i.price + '\n'
        teks += shp + ' Deskripsi : ' + i.product_desc + '\n'
        teks += shp + ' Url : ' + i.product_url + '\n\n----------------------------------\n\n'
    }
    wa.sendFileFromUrl(from, data[0].product_image, tod, teks)
}catch{
    reply('Produk tidak ditemukan/error!')
}
break
case 'mangatoon':
if(!q) return reply('Masukkan kata kuncinya!')
reply(mess.wait)
try{
    data = await skrep.mangatoon(q)
    teks = `*M A N G A T O O N*\n${shp} Query : ${q}\n\n`
    for(let i of data){
        teks += shp + ' Judul : ' + i.comic_name + '\n'
        teks += shp + ' Genre : ' + i.comic_type + '\n'
        teks += shp + ' Url : ' + i.comic_url + '\n\n----------------------------------\n\n'
    }
    wa.sendFileFromUrl(from, data[0].comic_thumb, tod, teks)
}catch{
    reply('Komik tidak ditemukan/error!')
}
break
case 'infocovid':
if(!q){
data = await skrep.corona('indonesia')
}
else{
data = await skrep.corona(q)
}
console.log(data.status)
if(data.status == 'error') return reply('Negara tidak ditemukan!')
teks = `*I N F O  C O V I D*\n${shp} Negara : ${data.negara}\n\n`
teks += shp + ` Total Kasus : ` + data.total_kasus + '\n'
teks += shp + ` Total Meninggal : ` + data.total_kematian + '\n'
teks += shp + ` Total Sembuh : ` + data.total_sembuh + '\n'
reply(teks)
break
case 'snobg':
 if (isQuotedSticker) {
    reply(mess.wait)
const encmedia = JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const media = await zynn.downloadAndSaveMediaMessage(encmedia)
ran = await wa.getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`,async (err) => {
    fs.unlinkSync(media)
    if (err) {
    reply(`gagal`)
    //fs.unlinkSync(ran)
} else {
    console.log('sukses')
path = ran
rbg = await removeBackgroundFromImageFile({
  path: path,
  apiKey: "85oSX1CSwzBXmiHBY9dgNczi",
  size: "regular",
  type: "auto",
  scale: "100%",
  path 
})
console.log(rbg)
await fs.unlinkSync(path)
buff = await Buffer.from(rbg.base64img, 'base64')
await fs.writeFileSync(path, buff)
await csticker(path, sender, command)
}
})
}
break
case 'tagme':
zynn.sendMessage(from, `@${sender.replace("@s.whatsapp.net","")}`, MessageType.text, {contextInfo: {mentionedJid: [sender]}, quoted: tod})
break
case 'film':
if(!q) return reply('Mau cari film apa?')
reply(mess.wait)
try{
    data = await Ra.SearchFilm(q)
    teks = `C A R I  F I L M\n\n`
    for(let i of data){
        teks += shp + ' Judul : ' + i.judul + '\n'
        teks += shp + ' Kualitas : ' + i.quality + '\n'
        teks += shp + ' Link : ' + i.link + '\n\n-----------------------------\n\n'
    }
wa.sendFileFromUrl(from, data[0].thumb, tod, teks)
}catch(e){
reply(mess.error.api)
}
break
case 'wa.me':
teks = `wa.me/${sender.replace("@s.whatsapp.net","")}`
reply(teks)
break
case 'mute':
if(!itsMe && !isGroupAdmins) return
if(!isGroup) return
mut = await db.showdata('mute', {id: from})
try{
  if(mut[0].id === from) return reply('Bot telah dimute di Group ini sebelumnya!')
}catch{
}
db.adddata('mute', {id: from})
reply('Sukses Mute Bot')
break
case 'unmute':
if(!itsMe && !isGroupAdmins) return
if(!isGroup) return
mut = await db.showdata('mute', {id: from})
try{
  if(mut[0].id === from){
    db.delete('mute', {id: from})
reply('Sukses Unmute Bot')
  }
}catch{
  return reply('Bot tidak dimute di Group ini!')
}
break
case 'randomanime':
reply(mess.wait)
try{
    data = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/anime/random.txt')
    rand = Math.floor(Math.random() * 1585) + 1
    img = data.data.split('\n')[rand]
    wa.sendButtonWithImage(from, bold('RANDOM ANIME'), 'Next ga nih?', await wa.getBuffer(img), ['NEXT ▶️'], [`${command} ${q}`], sender, tod)
}catch{
    reply(mess.error.api)
}
break
case 'husbu':
reply(mess.wait)
try{
    data = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/anime/husbu.txt')
    rand = Math.floor(Math.random() * 100) + 1
    img = data.data.split('\n')[rand]
    wa.sendButtonWithImage(from, bold('RANDOM HUSBU'), 'Next ga nih?', await wa.getBuffer(img), ['NEXT ▶️'], [`${command} ${q}`], sender, tod)
}catch{
    reply(mess.error.api)
}
break
case 'waifu':
reply(mess.wait)
try{
    rand = Math.floor(Math.random() * 100) + 1
console.log(rand)
    if(rand < 100){
        rand = '0' + rand
    }
    wa.sendButtonWithImage(from, bold('RANDOM WAIFU'), 'Next ga nih?', await wa.getBuffer('http://randomwaifu.altervista.org/images/0' + rand + '.png'), ['NEXT ▶️'], [`${command} ${q}`], sender, tod)
}catch{
    reply(mess.error.api)
}
break
case 'loli':
reply(mess.wait)
try{
data = await axios.get('https://raw.githubusercontent.com/Caliph71/txt/main/loli.json')
rand = Math.floor(Math.random() * data.data.length) + 1
loli = data.data[rand]
wa.sendButtonWithImage(from, bold('RANDOM LOLI'), 'Next ga nih?', await wa.getBuffer(loli), ['NEXT ▶️'], [`${command} ${q}`], sender, tod)
}catch{
    reply(mess.error.api)
}
break
case 'shota':
reply(mess.wait)
try{
data = await axios.get('https://raw.githubusercontent.com/Caliph71/txt/main/shota.json')
rand = Math.floor(Math.random() * data.data.length) + 1
img = data.data[rand]
wa.sendButtonWithImage(from, bold('RANDOM SHOTA'), 'Next ga nih?', await wa.getBuffer(img), ['NEXT ▶️'], [`${command} ${q}`], sender, tod)
}catch{
    reply(mess.error.api)
}
break
case 'darkjoke':
try{
data = await axios.get('https://raw.githubusercontent.com/Caliph71/txt/main/darkjokes.txt')
rand = Math.floor(Math.random() * 249) + 1
img = data.data.split('\n')[rand]
wa.sendButtonWithImage(from, bold('DARKJOKE'), 'Next ga nih?', await wa.getBuffer(img), ['NEXT ▶️'], [`${command} ${q}`], sender, tod)
}catch{
    reply(mess.error.api)
}
break
case 'cerpen':
try{
    data = await axios.get('https://raw.githubusercontent.com/Caliph71/txt/main/cerpen.json')
    rand = Math.floor(Math.random() * data.data.length) + 1
    teks = data.data[rand]
    reply(teks)
}catch{
    reply(mess.error.api)
}
break
case 'katabijak':
try{
    data = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/faktaunix.txt')
    rand = Math.floor(Math.random() * 445) + 1
    teks = data.data.split('\n')[rand]
    reply(teks)
}catch{
    reply(mess.error.api)
}
break
case 'fakta':
try{
    data = await axios.get('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/random/faktaunix.txt')
    rand = Math.floor(Math.random() * 445) + 1
    teks = data.data.split('\n')[rand]
    reply(teks)
}catch{
    reply(mess.error.api)
}
break
case 'ppcouple':
reply(mess.wait)
try{
    data = await axios.get('https://raw.githubusercontent.com/Caliph71/txt/main/couple.json')
    var rand = Math.floor(Math.random() * data.data.length) + 1
    await wa.sendFileFromUrl(from, data.data[rand].male, tod, 'MALE')
    wa.sendFileFromUrl(from, data.data[rand].female, tod, 'FEMALE')
}catch{
    reply(mess.error.api)
}
break
case 'quotes':
try{
    data = await axios.get('https://raw.githubusercontent.com/Caliph71/txt/main/quotes.json')
    rand = Math.floor(Math.random() * data.data.length) + 1
    teks = italic(data.data[rand].quotes) + '\n\n'
    teks += '~ ' + italic(data.data[rand].author)
    reply(teks)
}catch{
    reply(mess.error.api)
}
break
case 'drakor':
if(!q) return reply('Masukkan kata kuncinya!')
reply(mess.wait)
try{
    data = await skrep.drakor(q)
    teks = `D R A K O R  S E A R C H\n${shp} Query : ${q}\n\n`
    for(let i of data){
        teks += shp + ' Judul : ' + i.judul + '\n'
        teks += shp + ' Link : ' + i.link + '\n\n------------------------------\n\n'
    }
    wa.sendFileFromUrl(from, data[0].thumb, tod, teks)
}catch{
    reply('Drakor tidak ditemukan/error!')
}
break
case 'artinama':
if(!q) return reply('Namanya siapa?')
try{
    data = await skrep.artinama(q)
    reply(data)
}catch{
    reply(mess.error.api)
}
break
case 'mediafire':
if(!q) return reply('Masukkan linknya!')
if(!isUrl(q)) return reply(mess.error.Iv)
reply(mess.wait)
try{
    data = await skrep.mediafire(q)
    teks = `M E D I A F I R E  D I R E C T\n\n`
    teks += shp + ' Nama : ' + data.judul + '\n'
        teks += shp + ' Size : ' + data.size + '\n'
    teks += shp + ' Tanggal Upload : ' + data.upload_date + '\n'
    teks += shp + ' Link Direct : ' + data.link
    reply(teks)
}catch{
    reply(mess.error.api)
}
break
case 'addnote':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
try{
if(tod.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage && tod.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage) return
}catch(e){
}
nmanote = []
nnote = q.split('|')[0]
isi = q.split('|')[1]
for(let i of note){
    if(from.includes(i.groupId)){
        nmanote.push(i.namanote)
}
}
console.log(nmanote)
for(let j of nmanote){
    if(nnote.includes(j)) return reply(`Note dengan nama ${q} sudah ada didatabase`)
}
if ((isMedia && !zynn.message.videoMessage || isQuotedImage || isQuotedVideo || isQuotedAudio)) {
reply(mess.wait)
boij = isQuotedImage || isQuotedVideo || isQuotedAudio ? JSON.parse(JSON.stringify(tod).replace('quotedM','m')).message.extendedTextMessage.contextInfo : tod
owgi = await zynn.downloadMediaMessage(boij)
rname = await GenerateSerialNumber('000000')
if(isQuotedImage){
await fs.writeFileSync(`./media/${rname}.jpg`, owgi)
path = `./media/${rname}.jpg`
uplod = await Ra.UploadFile(path)
fs.unlinkSync(path)
console.log(uplod)
    const addnote = {
        groupId : from,
        creator : sender,
        namanote : nnote,
        date : date,
        type : 'image',
        media : uplod.result.namaFile,
        caption : isi
    }
note.push(addnote)
fs.writeFileSync('./src/notes.json', JSON.stringify(note))
reply(`Sukses Menambahkan Note\nKetik ${prefix}listnotes untuk mengecek`)
}
else if(isQuotedVideo){
    await fs.writeFileSync(`./media/${rname}.mp4`, owgi)
path = `./media/${rname}.mp4`
uplod = await Ra.UploadFile(path)
fs.unlinkSync(path)
console.log(uplod)
    const addnote = {
        groupId : from,
        creator : sender,
        namanote : nnote,
        date : date,
        type : 'video',
        media : uplod.result.namaFile,
        caption : isi
    }
note.push(addnote)
fs.writeFileSync('./src/notes.json', JSON.stringify(note))
reply(`Sukses Menambahkan Note\nKetik ${prefix}listnotes untuk mengecek`)
}
else if(isQuotedAudio){
    await fs.writeFileSync(`./media/${rname}.mp3`, owgi)
path = `./media/${rname}.mp3`
uplod = await Ra.UploadFile(path)
fs.unlinkSync(path)
console.log(uplod)
    const addnote = {
        groupId : from,
        creator : sender,
        namanote : nnote,
        date : date,
        type : 'audio',
        media : uplod.result.namaFile,
        caption : isi
    }
note.push(addnote)
fs.writeFileSync('./src/notes.json', JSON.stringify(note))
reply(`Sukses Menambahkan Note\nKetik ${prefix}listnotes untuk mengecek`)
}
}
else{
    const addnote = {
        groupId : from,
        creator : sender,
        namanote : nnote,
        date : date,
        type : 'teks',
        media : '',
        caption : isi
    }
note.push(addnote)
fs.writeFileSync('./src/notes.json', JSON.stringify(note))
reply(`Sukses Menambahkan Note\nKetik ${prefix}listnotes untuk mengecek`)
}
break
case 'listnotes':
if(!isGroupAdmins && !itsMe) return reply(mess.only.admin)
idgc = []
tag = []
teks = `L I S T  N O T E  G R O U P\n\n`
for(let i of note){
idgc.push(i.groupId)
    if(from.includes(i.groupId)){
        teks += shp + ` Nama Note : ` + i.namanote + '\n'
        teks += shp + ` Creator : @` + i.creator.split('@')[0] + '\n'
        teks += shp + ` Tanggal : ` + i.date + '\n'
        teks += shp + ` Type Note : ` + i.type + '\n'
        teks += shp + ` Media : ` + i.media + '\n\n---------------------------------\n\n'
        tag.push(i.creator)
    }
}
if(!idgc.includes(from)){
return reply('Tidak ada notes digroup ini')
}
else{
wa.Mentions(from, teks, tag, tod)
}
break
case 'getnote':
nnote = [];
for(let i of note){
    if(from.includes(i.groupId)){
        nnote.push(i.namanote)
        if(q.includes(i.namanote)){
            teks = `N O T E\n\n`
            teks += shp + ' Nama Note : ' + i.namanote + '\n'
            teks += shp + ' Pembuat : @' + i.creator.split('@')[0] + '\n'
            teks += shp + ' Tanggal dibuat : ' + i.date + '\n'
            teks += shp + ' Type Note : ' + i.type + '\n\n'
            teks += `Note akan dikirim setelah pesan ini\nMohon tunggu...`
            await wa.Mentions(from, teks, [i.creator], tod)
            if(i.type == 'teks'){
                reply(i.caption)
            }
            else if(i.type == 'audio'){
                await reply('Caption Note : ' + i.caption)
                wa.sendFileFromUrl(from, i.media, tod)
            }
            else{
                wa.sendFileFromUrl(from, i.media, tod, i.caption, [i.creator])
            }
        }
    }
}
break
case 'delnote':
if(!itsMe && !isGroupAdmins) return reply(mess.only.admin)
nnote = [];
for(let i of note){
    if(from.includes(i.groupId)){
    nnote.push(i.namanote)
        if(q.includes(i.namanote)){
            let del = note.indexOf(i)
            note.splice(del, 1)
            fs.writeFileSync('./src/notes.json', JSON.stringify(note))
            reply(`Sukses Menghapus Note ${q}`)
            }
    }
}
break
case 'addcmd': 
case 'setcmd':
if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
if (isQuotedSticker) {
    if (!q) return reply(`Cara Penggunaan : Reply sticker dengan caption ${command} commandnya\nContoh : ${command} .help`)
    var kodenya = tod.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
    addcmd(kodenya, q.startsWith(prefix) ? q.replace(prefix, ''): q, reply, db)
} else {
    reply('tag stickernya')
}
break
case 'delcmd':{
if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
//if (!isQuotedSticker) return reply(`reply stickernya`)
var kodenya = tod.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
db.delete('stickerdb', {id: kodenya}).then((res) => {
  if(res.deletedCount === 0) return reply('Sticker tidak terdaftar didatabase')
  reply('Sticker berhasil dihapus')
})
}
break
case 'listcmd':
let teksnyee = monospace(`\`\`\`「 LIST STICKER CMD 」\`\`\``)
let cemde = [];
deta = await db.showdata('stickerdb')
for (let i of deta) {
teksnyee += `\n\n*${shp} ID :* ${i.id}\n*${shp} Cmd* : ${i.cmd}`
}
reply(teksnyee)
break
case 'delete':
case 'del':
case 'd':
if (!isGroup)return reply(mess.only.group)
if(!tod.message.extendedTextMessage.contextInfo.participant === zynn.user.jid) return
zynn.deleteMessage(from, { id: tod.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'afk':
alasan = args.join(" ")
afktime = Date.now()
deta = await db.showdata('afk', {user: sender})
try{
  if(deta[0].user === sender){
    db.delete('afk', {user: sender})
  }
}catch{
  db.adddata('afk', {user: sender, reason: q, afktime: afktime})
}
ini_txt = "Anda telah afk. "
if (alasan != "") {
  ini_txt += "Dengan alasan " + alasan
}
reply(ini_txt)
break
case 'infobisnis':
if(!q) return reply(`Cara penggunaan : ${prefix}infobisnis tag orang/masukkan nomor whatsapp/n/nContoh : ${prefix}infobisnis 6281990498472\n\nNote : Nomor harus diawali dengan kode negara`)
if(isNaN(body.slice(13))) return reply('Input harus berupa nomor whatsapp!')
mentioned = args[0].replace('@', '') + '@s.whatsapp.net'
data = await isBusiness(mentioned)
console.log(data)
if(data == false) return reply('Nomor yang anda masukkan bukan akun bisnis!')
data2 = await wa.getbusinessprof(mentioned)
reply(JSON.stringify(data2, null, 2))
break
case 'q':
    if (!m.quoted) reply('reply pesan!')
    let o = zynn.serializeM(await m.getQuotedObj())
    if (!o.quoted) throw 'pesan yang anda reply tidak mengandung reply!'
    await o.quoted.copyNForward(m.chat, true)
    break
case 'getexif':
let webpv = require('node-webpmux')
const util = require('util')
        let imguy = new webpv.Image()
        await imguy.load(await m.quoted.download())
        reply(util.format(JSON.parse(imguy.exif.slice(22).toString())))
break
default:
    if (chats.startsWith('>')){
    if(!itsMe) return
        exec(chats.slice(2), (err, stdout) => {
        if (err) return reply(String(err))
        if (stdout) reply(stdout)
                })
        }
if (chats.startsWith('<')){
if(!itsMe) return
const util = require('util')
console.log(color('[EVAL]'), color(moment(tod.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = chats.slice(2)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{q
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
break
   // console.log(e)

       /* }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
}*/
if (isGroup && budy != undefined) {
    } else {
    console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
    }
}       
    } catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("undefined")){
    console.log('Message : %s', color(e, 'green'))
        }}}
