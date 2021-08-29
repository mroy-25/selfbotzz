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
const wa = require('../whatsapp/message')
const ms = require('parse-ms');
const fs = require('fs')
exports.aefka = async(from, mentionUser, dir, tod) => {
const afk = dir
for (let x of mentionUser) {
if(tod.key.fromMe) return
                if (afk.hasOwnProperty(x.split('@')[0])) {
		    afktime = afk[x.split('@')[0]].afktime
                    afkreason = afk[x.split('@')[0]].reason
                    const cekafk = ms(Date.now() - afktime)
                    ini_txt = `@${x.split('@')[0]} sedang afk.\n\n`
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += `${shp} Reason : ${afkreason}\n${shp} Since : _${cekafk.hours} Jam  ${cekafk.minutes} Menit  ${cekafk.seconds} Detik  Yang lalu_`
                    }
wa.Mentions(from, ini_txt, [x], tod)
                }
            }
}
exports.endafk = async(from, orang, dir, reply) => {
const afk = JSON.parse(fs.readFileSync('./src/afk.json'))
	if (afk.hasOwnProperty(orang.split('@')[0])) {
                reply("Anda telah keluar dari mode afk.")
                delete afk[orang.split('@')[0]]
                fs.writeFileSync("./src/afk.json", JSON.stringify(afk))
            }
}
exports.isafk = async(orang, dir) => {
try{
const afk = dir
	return afk.hasOwnProperty(orang.split('@')[0])
}catch{
}
}
