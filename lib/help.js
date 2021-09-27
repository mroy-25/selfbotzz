const fs = require('fs')
const speed = require('performance-now');
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const help = (totalchat, ispublic, timee, date, dateIslamic, hit, ucselamat, runtime, run, prefix, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, process, baterai, ttag, isprefix, shep) => { 
batre = baterai.baterai
isday = baterai.cas == true ? "Charging ⚡" : "Not Charged"
ispowersave = baterai.powersave == true ? "Aktif" : "Nonaktif"
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
let timestampi = speed();
let latensii = speed() - timestampi
  teks = `
❒ ${ucselamat} @${ttag}

❒ *INFO BOT*

› Creator : Aqul
› Recode : Fajar
› Library : Baileys
› Version : 5.0
› Prefix : ${isprefix}
› Mode : ${ispublic}
› Total Hit : ${hit}
› Group Chat : ${giid.length}
› Personal Chat : ${totalchat.length - giid.length}
› Total Chat : ${totalchat.length}
› Speed : ${latensii.toFixed(4)} Second
› Runtime : ${runtime(run)}
› Rest Api's : https://beta-restapi.herokuapp.com/

❒ *INFO WAKTU*

› Tanggal : ${date}
› Tanggal Islam : ${dateIslamic}
› Waktu : ${timee} WIB

❒ *INFO DEVICE*

› V. WHATSAPP : ${wa_version}
› Baterai : ${baterai.baterai}%
› Charge : ${baterai.cas === 'true' ? 'Ya' : 'Tidak'}
› Powersave : ${ispowersave}
› RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
› MCC : ${mcc}
› MNC : ${mnc}
› Versi OS : ${os_version}
› Merk HP : ${device_manufacturer}
› Versi HP : ${device_model}

❒ *LIST FITUR*

❒ *OWNER*

nomfitur obj ${prefix}term
nomfitur obj ${prefix}chats
nomfitur obj ${prefix}listpc
nomfitur obj ${prefix}listgroup
nomfitur obj ${prefix}self/public
nomfitur obj ${prefix}block <nomor>
nomfitur obj ${prefix}unblock <nomor>
nomfitur obj ${prefix}setfake <fake>
nomfitur obj ${prefix}setreply <teks>
nomfitur obj ${prefix}setprefix
nomfitur obj ${prefix}setthumb
nomfitur obj ${prefix}join <linkgc>
nomfitur obj ${prefix}get <link>
nomfitur obj ${prefix}adderror <cmd>
nomfitur obj ${prefix}delerror <cmd>

❒ *STICKER*

nomfitur obj ${prefix}toimg
nomfitur obj ${prefix}sticker
nomfitur obj ${prefix}snobg
nomfitur obj ${prefix}ttp <teks>
nomfitur obj ${prefix}attp <teks>
nomfitur obj ${prefix}colong
nomfitur obj ${prefix}takestick <packname|author>
nomfitur obj ${prefix}emoji <emoji|jenis>

❒ *CONVERTER*

nomfitur obj ${prefix}tomp3
nomfitur obj ${prefix}toptt
nomfitur obj ${prefix}tovideo
nomfitur obj ${prefix}togif
nomfitur obj ${prefix}toaudio
nomfitur obj ${prefix}bass <angka>
nomfitur obj ${prefix}slow
nomfitur obj ${prefix}gemuk
nomfitur obj ${prefix}tupai
nomfitur obj ${prefix}nightcore
nomfitur obj ${prefix}ghost
nomfitur obj ${prefix}blub

❒ *DOWNLOADER*

nomfitur obj ${prefix}play <query>
nomfitur obj ${prefix}video <query>
nomfitur obj ${prefix}ytdl <query>
nomfitur obj ${prefix}ytdown <link>
nomfitur obj ${prefix}ytmp3 <link>
nomfitur obj ${prefix}ytmp4 <link>
nomfitur obj ${prefix}tiktok <link>
nomfitur obj ${prefix}mediafire <link>
nomfitur obj ${prefix}sfiledirect <link>
nomfitur obj ${prefix}ig <link>
nomfitur obj ${prefix}igstory <username|jumlah>
nomfitur obj ${prefix}twittervideo <link>
nomfitur obj ${prefix}getmusic <reply hasil pencarian yt>
nomfitur obj ${prefix}getvideo <reply hasil pencarian yt>

❒ *TAG*

nomfitur obj ${prefix}totag
nomfitur obj ${prefix}hidetag <teks>
nomfitur obj ${prefix}kontag <tag|nama>

❒ *NULIS*

nomfitur obj ${prefix}nuliskanan <teks>
nomfitur obj ${prefix}nuliskiri <teks>
nomfitur obj ${prefix}foliokanan <teks>
nomfitur obj ${prefix}foliokiri <teks>

❒ *SEARCH*

nomfitur obj ${prefix}ytsearch <query>
nomfitur obj ${prefix}brainly <query>
nomfitur obj ${prefix}google <query>
nomfitur obj ${prefix}wiki <query>
nomfitur obj ${prefix}kbbi <query>
nomfitur obj ${prefix}film <query>
nomfitur obj ${prefix}drakor <query>
nomfitur obj ${prefix}lirik <query>
nomfitur obj ${prefix}wall <query>
nomfitur obj ${prefix}image <query>
nomfitur obj ${prefix}wattpad <query>
nomfitur obj ${prefix}mangatoon <query>
nomfitur obj ${prefix}palingmurah <query>
nomfitur obj ${prefix}infonomor <nomor +62>
nomfitur obj ${prefix}pinterest <query>
nomfitur obj ${prefix}githubrepo <query>
nomfitur obj ${prefix}githubuser <query>
nomfitur obj ${prefix}ghfollowers <query>
nomfitur obj ${prefix}findsticker <query>
nomfitur obj ${prefix}sfilesearch <query>
nomfitur obj ${prefix}playstore <query>
nomfitur obj ${prefix}apkmody <query>
nomfitur obj ${prefix}happymod <query>
nomfitur obj ${prefix}android1 <query>
nomfitur obj ${prefix}resep <query>
nomfitur obj ${prefix}infocovid <country>
nomfitur obj ${prefix}job <query>

❒ *KEAGAMAAN*

nomfitur obj ${prefix}quranayat <nosurah|ayat>
nomfitur obj ${prefix}quranaudio <nosurah|ayat>
nomfitur obj ${prefix}tafsirayat <nosurah|ayat>
nomfitur obj ${prefix}tafsirsurah <nosurah>
nomfitur obj ${prefix}infosurah <nosurah>
nomfitur obj ${prefix}asmaulhusna <nomor>
nomfitur obj ${prefix}surah <nomor surah>

❒ *STALKING*

nomfitur obj ${prefix}ytstalk <channel>
nomfitur obj ${prefix}igstalk <username>
nomfitur obj ${prefix}githubstalk <username>
nomfitur obj ${prefix}tiktokstalk <username>

❒ *GROUP*

nomfitur obj ${prefix}mute
nomfitur obj ${prefix}unmute
nomfitur obj ${prefix}open
nomfitur obj ${prefix}close
nomfitur obj ${prefix}add
nomfitur obj ${prefix}kick
nomfitur obj ${prefix}promote
nomfitur obj ${prefix}demote
nomfitur obj ${prefix}ownergc
nomfitur obj ${prefix}link
nomfitur obj ${prefix}resetlink
nomfitur obj ${prefix}sider
nomfitur obj ${prefix}listmem
nomfitur obj ${prefix}sampah
nomfitur obj ${prefix}infogc
nomfitur obj ${prefix}revokelink
nomfitur obj ${prefix}welcome <on/off>
nomfitur obj ${prefix}setwelcome
nomfitur obj ${prefix}delwelcome
nomfitur obj ${prefix}cekwelcome
nomfitur obj ${prefix}left <on/off>
nomfitur obj ${prefix}setleft
nomfitur obj ${prefix}delleft
nomfitur obj ${prefix}cekleft
nomfitur obj ${prefix}setname <nama baru>
nomfitur obj ${prefix}setdesk <desk baru>
nomfitur obj ${prefix}chatscount
nomfitur obj ${prefix}caripesan <query>
nomfitur obj ${prefix}detector <on/off>
nomfitur obj ${prefix}groupsetting
nomfitur obj ${prefix}antidelete <on/off>
nomfitur obj ${prefix}antiviewonce <on/off>
nomfitur obj ${prefix}setprefixgc <prefix>
nomfitur obj ${prefix}resetprefix
nomfitur obj ${prefix}pesansementara <on/off>

❒ *ANIME*

nomfitur obj ${prefix}loli
nomfitur obj ${prefix}waifu
nomfitur obj ${prefix}husbu
nomfitur obj ${prefix}shota
nomfitur obj ${prefix}randomanime
nomfitur obj ${prefix}nekonime
nomfitur obj ${prefix}foxnime
nomfitur obj ${prefix}wallanime
nomfitur obj ${prefix}mobilewallanime
nomfitur obj ${prefix}manga <query>
nomfitur obj ${prefix}anime <query>
nomfitur obj ${prefix}anoboy <query>
nomfitur obj ${prefix}kiryu <query>
nomfitur obj ${prefix}konachan <query>
nomfitur obj ${prefix}zerochan <query>

❒ *TEXTMAKER*

nomfitur obj ${prefix}blackpink <teks>
nomfitur obj ${prefix}graffiti <teks>
nomfitur obj ${prefix}neon <teks>
nomfitur obj ${prefix}blood <teks>
nomfitur obj ${prefix}leaves <teks>
nomfitur obj ${prefix}papercut <teks>

❒ *RANDOM*

nomfitur obj ${prefix}fakta
nomfitur obj ${prefix}darkjoke
nomfitur obj ${prefix}cerpen
nomfitur obj ${prefix}quotes
nomfitur obj ${prefix}ppcouple
nomfitur obj ${prefix}katabijak
nomfitur obj ${prefix}artinama <nama>
nomfitur obj ${prefix}qrcode <teks>
nomfitur obj ${prefix}tourl
nomfitur obj ${prefix}tourl2

❒ *IMAGE EFFECT*

nomfitur obj ${prefix}wasted
nomfitur obj ${prefix}wanted
nomfitur obj ${prefix}utatoo
nomfitur obj ${prefix}unsharpen
nomfitur obj ${prefix}tobecontinued
nomfitur obj ${prefix}thanos
nomfitur obj ${prefix}sniper
nomfitur obj ${prefix}sharpen
nomfitur obj ${prefix}sepia
nomfitur obj ${prefix}scary
nomfitur obj ${prefix}rip
nomfitur obj ${prefix}redple
nomfitur obj ${prefix}rejected
nomfitur obj ${prefix}posterize
nomfitur obj ${prefix}ps4
nomfitur obj ${prefix}pixelize
nomfitur obj ${prefix}missionpassed
nomfitur obj ${prefix}moustache
nomfitur obj ${prefix}lookwhatkarenhave
nomfitur obj ${prefix}jail
nomfitur obj ${prefix}invert
nomfitur obj ${prefix}greyscale
nomfitur obj ${prefix}glitch
nomfitur obj ${prefix}gay
nomfitur obj ${prefix}frame
nomfitur obj ${prefix}fire
nomfitur obj ${prefix}distort
nomfitur obj ${prefix}dictator
nomfitur obj ${prefix}deepfry
nomfitur obj ${prefix}ddungeon
nomfitur obj ${prefix}circle
nomfitur obj ${prefix}challenger
nomfitur obj ${prefix}burn
nomfitur obj ${prefix}brazzers
nomfitur obj ${prefix}beautiful
nomfitur obj ${prefix}approved3000years

❒ *ADVANCE*

nomfitur obj ${prefix}ping
nomfitur obj ${prefix}afk <alesan>
nomfitur obj ${prefix}listerror
nomfitur obj ${prefix}addcmd/setcmd <reply sticker>
nomfitur obj ${prefix}delcmd <reply sticker>
nomfitur obj ${prefix}listcmd
nomfitur obj ${prefix}tagme
nomfitur obj ${prefix}wa.me
nomfitur obj ${prefix}cekchat
nomfitur obj ${prefix}baterai
nomfitur obj ${prefix}inspect <linkgc>
nomfitur obj ${prefix}tts <kodebahasa teks>
nomfitur obj ${prefix}getpic
nomfitur obj ${prefix}getstatus
nomfitur obj ${prefix}tr
nomfitur obj ${prefix}getexif
nomfitur obj ${prefix}q
nomfitur obj x <kode>
nomfitur obj > <kode>

❒ THANKS TO

› Allah SWT
› Kedua Orang Tua
› Aqul
› Elios
› Hexagon
› Hardianto
› Team
› Ra-api
› Zahir-api
› Dan semua penyedia module`
teks2 = ''
  for(let i=0; i<216; i++){
    text = teks.split('nomfitur')[i]
    //if(teks == undefined) return
    teks2 += text.replace('obj', `   *› ${i}*.`)
    //console.log(teks2)
  }
return teks2
}
exports.help = help
