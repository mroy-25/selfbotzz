const {
	MessageType,
	Mimetype,
    WAConnection
} = require("@adiwajshing/baileys");
const fs = require('fs');
const axios = require('axios');
const fetch = require('node-fetch')
const request = require('request');
const { exec } = require('child_process');
fakenomor = '0@s.whatsapp.net'
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
exports.fake = (from, conn, text, rep) => {
	conn.sendMessage(from, text, MessageType.text, {quoted: rep})
}
exports.sendText = (from, conn, text) => {
    conn.sendMessage(from, text, MessageType.text)
}
exports.reply = (from, conn, text, tod) => {
    conn.sendMessage(from, text, MessageType.text, {quoted: tod})
}
exports.sendSticker = (from, conn, filename, tod) => {
	conn.sendMessage(from, filename, MessageType.sticker, {quoted: tod})
}
exports.sendKontak = (from, conn, nomor, nama, tod) => {
	vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	conn.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact)
}
exports.sendFakeStatus = (from, conn, text, faketeks) => {
	conn.sendMessage(from, text, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./media/conn.jpeg`)} } } })
}
exports.sendFakeStatusWithImg = (from, conn, image, caption, faketeks) => {
	conn.sendMessage(from, image, MessageType.image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./media/conn.jpeg`)} } }, caption: caption })
}
exports.Mentions = (from, conn, text, orangnya, tod) => {
	conn.sendMessage(from, text, MessageType.text, {contextInfo: {mentionedJid: orangnya}, quoted: tod})
}
exports.fakegroup = (from, conn, text, faketeks) => {
         conn.sendMessage(from, text, MessageType.text, {
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
exports.sendStickerWithFG = (from, conn, filename) => {
	conn.sendMessage(from, filename, MessageType.sticker, {quoted: {
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
exports.hideTag = async function(from, conn, text){
	let anu = await conn.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	conn.sendMessage(from, text, MessageType.text, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagImg = async function(from, conn, image){
	let buff = fs.readFileSync(image)
	let anu = await conn.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	conn.sendMessage(from, buff, MessageType.image, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagSticker = async function(from, conn, sticker){
	let buff = fs.readFileSync(sticker)
	let anu = await conn.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	conn.sendMessage(from, buff, MessageType.sticker, {contextInfo: {"mentionedJid": ane}})
}
exports.hideTagKontak = async function(from, conn, nomor, nama){
	let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	let anu = await conn.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	conn.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
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
exports.sendFakeToko = (from, conn, teks, fake) => {
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
	conn.sendMessage(from, teks, MessageType.text, {quoted: anu})
}
exports.sendFakeThumb = async function(from, conn, url, title, desc, fotonya){
	var anoim = {
		detectLinks: false
	}
	var tod = await conn.generateLinkPreview(url)
	tod.title = title
	tod.description = desc
	tod.jpegThumbnail = fotonya ? fotonya : fs.readFileSync(`./media/aqul.jpeg`)
	tod.canonicaUrl = "http://self-bot.com"
	conn.sendMessage(from, tod, MessageType.extendedText, anoim)
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
		conn.sendMessage(to, media, type, { quoted: tod, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		
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
    const response = await conn.updateProfileName(query)
    return response
}
exports.setBio = async function(query){
    const response = await conn.setStatus(query)
    return response
}
exports.sendImage = (from, conn, filename, tod, teks) => {
	if(teks == ``){
conn.sendMessage(from, filename, MessageType.image, {quoted: tod})
}
else{
conn.sendMessage(from, filename, MessageType.image, {quoted: tod,caption: teks})
}}
exports.sendVideo = (from, conn, filename, tod, teks) => {
	if(teks == ``){
	conn.sendMessage(from, filename, MessageType.video, {mimetype: 'video/mp4', filename: 'video.mp4', quoted: tod, duration: 359996400})
	}
	else{
	conn.sendMessage(from, filename, MessageType.video, {mimetype: 'video/mp4', filename: 'video.mp4', quoted: tod, duration: 359996400,caption: teks})
}
}
exports.sendAudio = (from, conn, filename, tod) => {
	conn.sendMessage(from, filename, MessageType.audio, {mimetype: 'audio/mp4', filename: 'audio.mp3', quoted: tod})
}
exports.sendptt = (from, conn, filename, tod) => {
	conn.sendMessage(from, filename, MessageType.audio, {mimetype: 'audio/mp4', ptt: true, filename: 'audio.mp3', quoted: tod})
}
exports.kick = function(from, conn, orangnya){
	for (let i of orangnya){
		conn.groupRemove(from, [i])
	}
}
exports.add = function(from, conn, orangnya){
	conn.groupAdd(from, orangnya)
}
exports.promote = function(from, conn, orangnya){
	conn.groupMakeAdmin(from, orangnya)
}
exports.demote = function(from, conn, orangnya){
	conn.groupDemoteAdmin(from, orangnya)
}
exports.upTextStatus = function(text){
	conn.sendMessage('status@broadcast', text, MessageType.extendedText)
}
exports.upImgStatus = function(image, text){
	conn.sendMessage('status@broadcast', image, MessageType.image, {caption: text})
}
exports.upVidStatus = function(video, text){
	conn.sendMessage('status@broadcast', video, MessageType.video, {caption: text})
}
exports.createGroup = function(nama, member){
	let a
	conn.groupCreate(nama, member)
	.then((res) => a = res )
	.catch((err) => a = err)
	return a
}
exports.fakethumb = (from, conn, teks, tod, yes) => {
	try{
    conn.sendMessage(from, teks, MessageType.image, {thumbnail:fs.readFileSync('./media/conn.jpeg'),quoted:tod,caption:yes})
}catch(e){
	conn.sendMessage(from, teks, MessageType.image, {thumbnail:fs.readFileSync('./media/conn.jpeg'),quoted:tod})
}
}
exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
exports.sendStickerFromUrl = async(from, conn, url, tod) => {
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
                        conn.sendMessage(from, media, MessageType.sticker,{quoted:tod})
                        fs.unlinkSync(asw)
                        fs.unlinkSync(filess)
                    });
                });
            }
exports.sendStickerFromUrlWithWM = async(from, conn, url, tod) => {
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
		pushnama = conn.contacts[orangnya] != undefined ? conn.contacts[orangnya].vname || conn.contacts[orangnya].notify : undefined
	}
	else{
	conts = tod.key.fromMe ? conn.user.jid : conn.contacts[orangnya] || {notify: jid.replace(/@.+/, '')}
	pushnama = tod.key.fromMe ? conn.user.name : conts.notify || conts.vname || conts.name || '-'
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
      let ingfo = await conn.groupMetadata(e)
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
