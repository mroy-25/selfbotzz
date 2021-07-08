const {
	MessageType,
	Mimetype,
    WAConnection
} = require("@adiwajshing/baileys");
const fs = require('fs');
const conn = require('../main');
const axios = require('axios');
const fetch = require('node-fetch')
const request = require('request');
const { exec } = require('child_process');
fakenomor = '0@s.whatsapp.net'
const zynn = conn.zynn
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
exports.fake = (from, text, rep) => {
	zynn.sendMessage(from, text, MessageType.text, {quoted: rep})
}
exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.sendText = (from, text) => {
    zynn.sendMessage(from, text, MessageType.text)
}
exports.reply = (from, text, tod) => {
    zynn.sendMessage(from, text, MessageType.text, {quoted: tod})
}
exports.sendSticker = (from, filename, tod) => {
	zynn.sendMessage(from, filename, MessageType.sticker, {quoted: tod})
}
exports.sendKontak = (from, nomor, nama, tod) => {
	vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	zynn.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact)
}
exports.sendFakeStatus = (from, text, faketeks) => {
	zynn.sendMessage(from, text, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./media/zynn.jpeg`)} } } })
}
exports.sendFakeStatusWithImg = (from, image, caption, faketeks) => {
	zynn.sendMessage(from, image, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./media/zynn.jpeg`)} } }, caption: caption })
}
exports.Mentions = (from, text, orangnya, tod) => {
	zynn.sendMessage(from, text, MessageType.text, {contextInfo: {mentionedJid: orangnya}, quoted: tod})
}
exports.fakegroup = (from, text, faketeks) => {
         zynn.sendMessage(from, text, MessageType.text, {
            quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: 'ZBOT.SELFBOT'
               }
            }
         })
      }
exports.sendStickerWithFG = (from, filename) => {
	zynn.sendMessage(from, filename, MessageType.sticker, {quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: 'ZBOT.SELFBOT'
               }
           }
            })
}
exports.hideTag = async function(from, text){
	let anu = await zynn.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	zynn.sendMessage(from, text, MessageType.text, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagImg = async function(from, image){
	let buff = fs.readFileSync(image)
	let anu = await zynn.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	zynn.sendMessage(from, buff, MessageType.image, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagSticker = async function(from, sticker){
	let buff = fs.readFileSync(sticker)
	let anu = await zynn.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	zynn.sendMessage(from, buff, MessageType.sticker, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagKontak = async function(from, nomor, nama){
	let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	let anu = await zynn.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	zynn.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
exports.sendFakeToko = (from, teks, fake) => {
	anu = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/aqul.jpeg`)
					},
					"title": fake,
					"description": "Self Atodzz nih Boss",
					"currencyCode": "IDR",
					"priceAmount1000": "50000000",
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	zynn.sendMessage(from, teks, MessageType.text, {quoted: anu})
}
exports.sendFakeThumb = async function(from, url, title, desc, fotonya){
	var anoim = {
		detectLinks: false
	}
	var tod = await zynn.generateLinkPreview(url)
	tod.title = title
	tod.description = desc
	tod.jpegThumbnail = fotonya ? fotonya : fs.readFileSync(`./media/aqul.jpeg`)
	tod.canonicaUrl = "http://self-bot.com"
	zynn.sendMessage(from, tod, MessageType.extendedText, anoim)
}
exports.sendMediaURL = async(to, url, text="", tod, mids=[]) =>{
	if(mids.length > 0){
		text = normalizeMention(to, text, mids)
	}
	exports.fn = Date.now() / 10000;
	exports.filename = fn.toString()
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
exports.getGroupAdmins = function(participants){
    admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
exports.setName = async function(query){
    const response = await zynn.updateProfileName(query)
    return response
}
exports.setBio = async function(query){
    const response = await zynn.setStatus(query)
    return response
}
exports.sendImage = (from, filename, tod, teks, tag) => {
	if(teks == ``){
zynn.sendMessage(from, filename, MessageType.image, {quoted: tod, contextInfo: {mentionedJid: tag}})
}
else{
zynn.sendMessage(from, filename, MessageType.image, {quoted: tod,caption: teks, contextInfo: {mentionedJid: tag}})
}}
exports.sendVideo = (from, filename, tod, teks) => {
	if(teks == ``){
	zynn.sendMessage(from, filename, MessageType.video, {mimetype: 'video/mp4', filename: 'video.mp4', quoted: tod, duration: 359996400})
	}
	else{
	zynn.sendMessage(from, filename, MessageType.video, {mimetype: 'video/mp4', filename: 'video.mp4', quoted: tod, duration: 359996400,caption: teks})
}
}
exports.sendAudio = (from, filename, tod) => {
	zynn.sendMessage(from, filename, MessageType.audio, {mimetype: 'audio/mp4', filename: 'audio.mp3', quoted: tod})
}
exports.sendptt = (from, filename, tod) => {
	zynn.sendMessage(from, filename, MessageType.audio, {mimetype: 'audio/mp4', ptt: true, filename: 'audio.mp3', quoted: tod})
}
exports.kick = function(from, orangnya){
	for (let i of orangnya){
		zynn.groupRemove(from, [i])
	}
}
exports.add = function(from, orangnya){
	zynn.groupAdd(from, orangnya)
}
exports.promote = function(from, orangnya){
	zynn.groupMakeAdmin(from, orangnya)
}
exports.demote = function(from, orangnya){
	zynn.groupDemoteAdmin(from, orangnya)
}
exports.upTextStatus = function(text){
	zynn.sendMessage('status@broadcast', text, MessageType.extendedText)
}
exports.upImgStatus = function(image, text){
	zynn.sendMessage('status@broadcast', image, MessageType.image, {caption: text})
}
exports.upVidStatus = function(video, text){
	zynn.sendMessage('status@broadcast', video, MessageType.video, {caption: text})
}
exports.createGroup = function(nama, member){
	let a
	zynn.groupCreate(nama, member)
	.then((res) => a = res )
	.catch((err) => a = err)
	return a
}
exports.fakethumb = (from, teks, tod, yes) => {
	try{
    zynn.sendMessage(from, teks, MessageType.image, {thumbnail:fs.readFileSync('./media/zynn.jpeg'),quoted:tod,caption:yes})
}catch(e){
	zynn.sendMessage(from, teks, MessageType.image, {thumbnail:fs.readFileSync('./media/zynn.jpeg'),quoted:tod})
}
}
exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
exports.sendStickerFromUrl = async(from, url, tod) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        zynn.sendMessage(from, media, MessageType.sticker,{quoted:tod})
                        fs.unlinkSync(asw)
                        fs.unlinkSync(filess)
                    });
                });
            }
exports.sendStickerFromUrlWithWM = async(from, url, tod) => {
   ranp = getRandom('.gif')
   rano = getRandom('.webp')
   exec(`wget ${url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                     //fs.unlinkSync(ranp)
                     if (err) return fake(`Error: ${err}`)
                     exec(`webpmux -set exif ./sticker/data.exif ${rano} -o ${rano}`, async (error) => {
                        if (error) return fake(`Error: ${error}`)
                        await sendSticker(fs.readFileSync(rano))
                        fs.unlinkSync(rano)
                        fs.unlinkSync(ranp)
                     })
                  })
}
exports.getPushname = async(orangnya, tod) => {
	if(tod.key.fromMe){
		pushnama = zynn.contacts[orangnya] != undefined ? zynn.contacts[orangnya].vname || zynn.contacts[orangnya].notify : undefined
	}
	else{
	conts = tod.key.fromMe ? zynn.user.jid : zynn.contacts[orangnya] || {notify: jid.replace(/@.+/, '')}
	pushnama = tod.key.fromMe ? zynn.user.name : conts.notify || conts.vname || conts.name || '-'
	}
	return pushnama
}
exports.getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await zynn.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}
exports.getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
exports.parseMention = async(text) =>  {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
exports.fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})
const getBuffer = async (url, options) => {
        try {
                options ? options : {}
                const res = await axios({
                        method: "get",
                        url,
                        headers: {
                                'DNT': 1,
                                'Upgrade-Insecure-Request': 1
                        },
                        ...options,
                        responseType: 'arraybuffer'
                })
                return res.data
        } catch (e) {
                console.log(`Error : ${e}`)
        }
}
exports.sendFileFromUrl = async (from, url, tod, msg, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return zynn.sendMessage(from, await getBuffer(url), type, {caption: msg, quoted: tod, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
exports.getbusinessprof = async(jid) => {
        const {
            profiles: [{
                profile,
                wid 
            }]
        } = await zynn.query({
            json: ["query", "businessProfile", [
                {
                    "wid": jid.replace('@s.whatsapp.net', '@c.us')
                }
            ], 84],
            expect200: true,
            requiresPhoneConnection: false,
        })
        return {
            profile,
            jid: wid,
        }
    }
exports.add = async(from, orangnya, tod) => {
if(orangnya.match('@s.whatsapp.net')){
orang = orangnya
}
else{
orang = orangnya + '@s.whatsapp.net'
}
response = await zynn.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
zynn.sendMessage(from, 'Mengirim Undangan Group Ke ${orangnya}' MesssageType.text, {quoted: tod, contextInfo: {mentionedJid: [orang]}})
zynn.sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp, false ,`Invitation to join my WhatsApp group`)
}
}
