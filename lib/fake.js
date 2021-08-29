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

exports.vo = (from, tod) => {
  return { key: {
                  fromMe: false,
  id: generateMessageID(),
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  "viewOnceMessage": {
            "message": {
              "imageMessage": {
                "url": "https://mmg.whatsapp.net/d/f/Aq24hwHcav8WTFqKsaDJ5IyHFP-aus-GeXHoKp5Cp8qt.enc",
                "mimetype": "image/jpeg",
                "fileSha256": "q8na5DeFisNezhH6mRH0E2NOqGXW1X01sQaHT4lFzAU=",
                "fileLength": "66405",
                "mediaKey": "GtLIGx5ddQAaOyXWJ6Sg1pujn9bwnK7shL6PRBamoEI=",
                "fileEncSha256": "CRtRZLEwB9W7bLIFsJYGnqdboBi6eoeHjTgb6trEVvs=",
                "jpegThumbnail": fs.readFileSync('./media/zynn.jpeg'),
                "viewOnce": true
              }
            }
          }
             }}
}
exports.fdocu = (from, tod ) => {
  return { key: {
                  fromMe: false,
	id: generateMessageID(),
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fakec, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./media/zynn.jpeg')}}}
}

exports.troli = (from, tod ) => {
  return { key: {
                  fromMe: false,
	id: generateMessageID(),
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               }, message: {orderMessage: {itemCount: 0, status: 200, thumbnail: fakeimage, surface: 200, message: fakec, orderTitle: 'zynn', sellerJid: fakenomor} } } 
}
exports.faudio = (from, tod ) => {
  return { key: {
                  fromMe: false,
	id: generateMessageID(),
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  "audioMessage":{"url":"https://mmg.whatsapp.net/d/f/AlFv-IaZTgOgxOdf-RqhVZK75eFaPs10IqE-7NV0tmeT.enc","mimetype":"audio/mp4","fileSha256":"wRodpKmEuSoaYw4n5UjHFls9fyKBuI50KJgikNAqm4Y=","seconds":359996400,"ptt":false,"mediaKey":"KX0tCJKisn9VbW65/768NkKc/JgFGEZ9Y+U3Ayw3q6E=","fileEncSha256":"5tnRGEGhOzKhB4GsGOz3ypaBrkPJOcpT57CrdaFtog4="
               }}}
             }
exports.fvn = (from, tod ) => {
  return { key: {
                  fromMe: false,
	id: generateMessageID(),
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  "audioMessage":{"url":"https://mmg.whatsapp.net/d/f/AlFv-IaZTgOgxOdf-RqhVZK75eFaPs10IqE-7NV0tmeT.enc","mimetype":"audio/mp4","fileSha256":"wRodpKmEuSoaYw4n5UjHFls9fyKBuI50KJgikNAqm4Y=","seconds":359996400,"ptt":true,"mediaKey":"KX0tCJKisn9VbW65/768NkKc/JgFGEZ9Y+U3Ayw3q6E=","fileEncSha256":"5tnRGEGhOzKhB4GsGOz3ypaBrkPJOcpT57CrdaFtog4="
               }}}
             }
exports.fkontak = (from, tod ) => {
  return { key: {
                  fromMe: false,
	id: generateMessageID(),
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  "contactMessage":{"displayName":fakec,"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Fajar;;;\nFN:Fajar 2\nitem1.TEL;waid=6281223546913:+62 812-2354-6913\nitem1.X-ABLabel:Mobile\nEND:VCARD"
               }}}
             }
exports.fkontak2 = (from, tod ) => {
  return { key: {
                  fromMe: false,
	id: generateMessageID(),
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                   "contactsArrayMessage": {
    "displayName": "100 contacts",
    "contacts": [
      {
        "displayName": "9",
        "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;9;;;\nFN:9\nEND:VCARD"
      },
      {
        "displayName": "Admin",
        "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Admin;;;\nFN:Admin\nitem1.TEL:+994 40 619 86 91\nitem1.X-ABLabel:Mobile\nEND:VCARD"
      }
    ]
    
               }}}
             }
exports.fkontak3 = (from, tod, command) => { 
  return {
  "key": {
    "fromMe": false,
"id": generateMessageID(),
"participant":"0@s.whatsapp.net",
    "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
    "contactMessage": {
      "displayName": command,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${command},;;;\nFN:${command},\nitem1.TEL;waid=${tod.participant.split('@')[0]}:+${tod.participant.split('@')[1]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
    }
  }
}
}
exports.floc = (from, tod ) => {
  return { key: { fromMe: false, id: generateMessageID(), participant: fakenomor, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "locationMessage": { "name":fakec}}}
}
exports.fliveloc = (from, tod ) => {
  return { key: { fromMe: false, id: generateMessageID(), participant: fakenomor, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": fakec}}}
}
exports.fakegroup = (from, tod, command, prefix) => {
  return { key: {
                  fromMe: false,
	id: generateMessageID(),
                  participant: fakenomor, ...(from ? { remoteJid: '6289523258649-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${fakec} : ${prefix}${command}`
               }}
}
exports.finvite = (from, tod, groupName) => {
  return {
  "key": {
    "fromMe": false,
    "participant": "0@s.whatsapp.net",
    "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
  "groupInviteMessage": {
    "groupJid": from,
    "inviteCode": "NgsCIU2lXKh3VHJT",
    "groupName": groupName,
    "caption": fakec,
    "jpegThumbnail": fakeimage,
    "height": 6080,
    "width": 6000
  }
}
}
}
exports.ftoko = (from, tod ) => {
  return {
            "key": {
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": generateMessageID(),
                "participant": "0@s.whatsapp.net"
            },
            message: {
                "productMessage": {
                    "product": {
                        "productImage": {
                            "mimetype": "image/jpeg",
                            "jpegThumbnail": ''
                        },
                        "title": fakec,
                        "description": fakec,
                        "currencyCode": "IDR",
                        "priceAmount1000": "0",
                        "retailerId": "𝗕𝗢𝗧",
                        "productImageCount": 1
                    },
                    "businessOwnerJid": `0@s.whatsapp.net`
                }}}
              }
