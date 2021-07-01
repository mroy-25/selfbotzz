const
	{
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
      ChatModification
} = require("@adiwajshing/baileys");
const moment = require("moment-timezone");
const fs = require("fs");
const { color } = require('./lib/color');
fakenomor = '0@s.whatsapp.net'
module.exports = zynn = async (zynn, tod) => {
   try{
      const from = tod.key.remoteJid
      const messageStubType = WA_MESSAGE_STUB_TYPES[tod.messageStubType] || 'MESSAGE'
      const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
      const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
      const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
      let sender = tod.key.fromMe ? zynn.user.jid : tod.key.remoteJid.endsWith('@g.us') ? tod.participant : tod.key.remoteJid
      const isRevoke = tod.key.remoteJid.endsWith('@s.whatsapp.net') ? true : tod.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
      const isCtRevoke = tod.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
      const isBanCtRevoke = tod.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
      if(sender == zynn.user.jid) return
      if (messageStubType == 'REVOKE') {   
         console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
         if(tod.key.remoteJid == 'status@broadcast'){
		console.log('tembus status')
		teks = `Terdeteksi Penghapusan Status`
		zynn.sendMessage(tod.participant, teks, MessageType.text)
		}
         if (!isRevoke) return
         if (!isCtRevoke) return
         if (!isBanCtRevoke) return
         const from = tod.key.remoteJid
         const isGroup = tod.key.remoteJid.endsWith('@g.us') ? true : false
         let int
         let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
         const id_deleted = tod.key.id
         const conts = tod.key.fromMe ? zynn.user.jid : zynn.contacts[sender] || { notify: jid.replace(/@.+/, '') }
         const pushname = tod.key.fromMe ? zynn.user.name : conts.notify || conts.vname || conts.name || '-'
         const opt4tag = {
            contextInfo: { mentionedJid: [sender] }
         }
         for (let i = 0; i < infoMSG.length; i++) {
            if (infoMSG[i].key.id == id_deleted) {
               const dataInfo = infoMSG[i]
               var type = Object.keys(infoMSG[i].message)[0]
               const timestamp = infoMSG[i].messageTimestamp
               int = {
                  no: i,
                  type: type,
                  timestamp: timestamp,
                  data: dataInfo
               }
            }
         }
         const index = Number(int.no)
         console.log(int.data)
         const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
         const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
         if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
            const strConversation = `「 *ANTI-DELETE* 」

${shp} Number: @${sender.replace('@s.whatsapp.net', '')}
${shp} Tipe: Text
${shp} Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
${shp} Pesan: ${body ? body : '-'}
`
         zynn.sendMessage(from, strConversation, MessageType.text, {contextInfo: {mentionedJid: [sender], forwardingScore: 508, isForwarded: true}, quoted: int.data})
         } else if (int.type == 'stickerMessage') {
            const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
            const savedFilename = await zynn.downloadAndSaveMediaMessage(int.data, `./media/revoke/sticker/${filename}`);
            const rsticker = {
    "key": {
      "remoteJid": int.data.key.remoteJid,
      "fromMe": int.data.key.fromMe,
      "id": int.data.key.id
    },
    "message": {
      "stickerMessage": {
        "url": int.data.message.stickerMessage.url,
        "fileSha256": int.data.message.stickerMessage.fileSha256,
        "fileEncSha256": int.data.message.stickerMessage.fileEncSha256,
        "mediaKey": int.data.message.stickerMessage.mediaKey,
        "mimetype": "image/webp",
        "height": int.data.message.stickerMessage.height,
        "width": int.data.message.stickerMessage.width,
        "directPath": int.data.message.stickerMessage.directPath,
        //"fileLength": int.data.message.stickerMessage.fileLength,
        //"mediaKeyTimestamp": int.data.message.stickerMessage.mediaKeyTimestamp,
        "isAnimated": int.data.message.stickerMessage.isAnimated,
    }
    },
    "messageTimestamp": int.data.messageTimestamp,
    "participant": int.data.participant,
    "ephemeralOutOfSync": int.data.ephemeralOutOfSync
  }
            const strConversation = `「 *ANTI-DELETE* 」

${shp} Number: @${sender.replace('@s.whatsapp.net', '')}
${shp} Tipe: Sticker
${shp} Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
`

            const buff = fs.readFileSync(savedFilename)
            zynn.sendMessage(from, strConversation, MessageType.text, {contextInfo: {mentionedJid: [sender], forwardingScore: 508, isForwarded: true}, quoted: rsticker})
            zynn.sendMessage(from, buff, MessageType.sticker, {contextInfo: {forwardingScore: 508, isForwarded: true},
            quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `Revoked Sticker`
               }
            }
         })
            // console.log(stdout)
            fs.unlinkSync(savedFilename)

         } 
         else if (int.type == 'audioMessage') {
         	if(int.data.message.audioMessage.ptt == true){
         		pett = true
         	}
         	else{
         		pett = false
         	}
         	const raudio = {
  key: {
    remoteJid: int.data.key.remoteJid,
    fromMe: int.data.key.fromMe,
    id: int.data.key.id
  },
  message: {
    audioMessage: {
      url: int.data.message.audioMessage.url,
      mimetype: 'audio/ogg; codecs=opus',
      fileSha256: int.data.message.audioMessage.fileSha256,
      //fileLength: int.data.message.audioMessage.fileLength,
      seconds: int.data.message.audioMessage.seconds,
      ptt: int.data.message.audioMessage.ptt,
      mediaKey: int.data.message.audioMessage.mediaKey,
      fileEncSha256: int.data.message.audioMessage.fileEncSha256,
      directPath: int.data.message.audioMessage.directPath,
      //mediaKeyTimestamp: int.data.message.audioMessage.mediaKeyTimestamp
    }
  },
  messageTimestamp: int.data.messageTimestamp,
  participant: int.data.participant,
  ephemeralOutOfSync: int.data.ephemeralOutOfSync
}

            const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
            const savedFilename = await zynn.downloadAndSaveMediaMessage(int.data, `./media/revoke/audio/${filename}`);
            const buff = fs.readFileSync(savedFilename)
            isptt = pett == true ? "VN" : "AUDIO"
            const strConversation = `「 *ANTI-DELETE* 」

${shp} Number: @${sender.replace('@s.whatsapp.net', '')}
${shp} Tipe: ${isptt}
${shp} Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
`           
            zynn.sendMessage(from, strConversation, MessageType.text, {contextInfo: {mentionedJid: [sender], forwardingScore: 508, isForwarded: true}, quoted: raudio})
            zynn.sendMessage(from, buff, MessageType.audio, {mimetype: 'audio/mp4', ptt: pett,contextInfo: {forwardingScore: 508, isForwarded: true},
            quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `Revoked ${isptt}`
               }
            }
         })
            fs.unlinkSync(savedFilename)
         }
            else if (int.type == 'imageMessage') {
            const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
            const savedFilename = await zynn.downloadAndSaveMediaMessage(int.data, `./media/revoke/image/${filename}`);
            const buff = fs.readFileSync(savedFilename)
            const strConversation = `「 *ANTI-DELETE* 」

${shp} Number: @${sender.replace('@s.whatsapp.net', '')}
${shp} Tipe: Image
${shp} Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
${shp} Pesan: ${body ? body : '-'}\`\`\`
`
			zynn.sendMessage(from, buff, MessageType.image, {contextInfo: {mentionedJid: [sender]}, caption: strConversation,
            quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `Revoked Image`
               }
            }
         })
            fs.unlinkSync(savedFilename)
         }
        else if(int.type == 'contactMessage'){
        	qntk = int.data.message.contactMessage
        	const strConversation = `「 *ANTI-DELETE* 」

${shp} Number: @${sender.replace('@s.whatsapp.net', '')}
${shp} Tipe: Kontak
${shp} Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
`
	zynn.sendMessage(from, strConversation, MessageType.text, {contextInfo: {mentionedJid: [sender], forwardingScore: 508, isForwarded: true}, quoted: int.data})
            zynn.sendMessage(from, {displayname: qntk.displayname, vcard: qntk.vcard}, MessageType.contact, {contextInfo: {forwardingScore: 508, isForwarded: true},
            quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `Revoked Contact`
               }
            }
         })
        }
    else if(int.type == 'documentMessage'){
    	const rdocu = {
  key: {
    remoteJid: int.data.key.remoteJid,
    fromMe: int.data.key.fromMe,
    id: int.data.key.id
  },
  message: {
    documentMessage: {
      url: int.data.message.documentMessage.url,
      mimetype: int.data.message.documentMessage.mimetype,
      title: int.data.message.documentMessage.title,
      fileSha256: int.data.message.documentMessage.fileSha256,
      //fileLength: int.data.message.documentMessage.fileLength,
      pageCount: int.data.message.documentMessage.pageCount,
      mediaKey: int.data.message.documentMessage.mediaKey,
      fileName: int.data.message.documentMessage.filename,
      fileEncSha256: int.data.message.documentMessage.fileEncSha256,
      directPath: int.data.message.documentMessage.directPath,
      //mediaKeyTimestamp: int.data.message.documentMessage.mediaKeyTimestamp
    }
  },
  messageTimestamp: int.data.messageTimestamp,
  participant: int.data.participant,
  ephemeralOutOfSync: int.data.ephemeralOutOfSync
}
    	const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
            const savedFilename = await zynn.downloadAndSaveMediaMessage(int.data, `./media/revoke/document/${filename}`);
            const buff = fs.readFileSync(savedFilename)
            const strConversation = `「 *ANTI-DELETE* 」

${shp} Number: @${sender.replace('@s.whatsapp.net', '')}
${shp} Tipe: Document
${shp} Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
`
	zynn.sendMessage(from, strConversation, MessageType.text, {contextInfo: {mentionedJid: [sender], forwardingScore: 508, isForwarded: true}, quoted: rdocu})
	zynn.sendMessage(from, buff, MessageType.document, {mimetype:int.data.message.documentMessage.mimetype, filename: `${int.data.message.documentMessage.fileName}`, contextInfo: {forwardingScore: 508, isForwarded: true},
            quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `Revoked Document`
               }
            }
         })
	fs.unlinkSync(savedFilename)
    }
else if(int.type == 'contactsArrayMessage'){
	qntk = int.data.message.contactsArrayMessage
	const strConversation = `「 *ANTI-DELETE* 」

${shp} Number: @${sender.replace('@s.whatsapp.net', '')}
${shp} Tipe: Kontak [ ${qntk.displayName} ]
${shp} Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
`
	zynn.sendMessage(from, strConversation, MessageType.text, {contextInfo: {mentionedJid:[sender], forwardingScore: 508, isForwarded: true},quoted: int.data})
	num = 0
	for(let i of qntk.contacts){
		num += 1
	zynn.sendMessage(from, {displayname: i.displayname, vcard: i.vcard}, MessageType.contact, {contextInfo: {forwardingScore: 508, isForwarded: true},
            quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `Revoked Contact ${num}`
               }
            }
         })
         }}
else if(int.type == 'locationMessage'){
	locmes = int.data.message.locationMessage
	const strConversation = `「 *ANTI-DELETE* 」

${shp} Number: @${sender.replace('@s.whatsapp.net', '')}
${shp} Tipe: Lokasi
${shp} Waktu: ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
`
zynn.sendMessage(from, strConversation, MessageType.text, {contextInfo: {mentionedJid:[sender], forwardingScore: 508, isForwarded: true},quoted: int.data})
zynn.sendMessage(from,  { "degreesLatitude": locmes.degreesLatitude, "degreesLongitude": locmes.degreesLongitude, " jpegThumbnail": locmes.jpegThumbnail}, MessageType.location, {quoted: {
               key: {
                  fromMe: false,
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `Revoked Location`
               }
            }
         })
	}
	
      }}
       catch (e) {
      console.log('Message : %s', color(e, 'green'))
      // console.log(e)
   }
}
