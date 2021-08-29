const fs = require('fs')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const help = (ispublic, timee, date, dateIslamic, hit, ucselamat, runtime, run, prefix, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, process, baterai, isday, ttag, ispowersave, isprefix, shep) => { 
  return `
${setting.fake}
   
◪ ${ucselamat} @${ttag}

◪ 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 
+ 
+ ${shep} Library : Baileys
+ ${shep} Version : 5.0
+ ${shep} Prefix : ${isprefix}
+ ${shep} Runtime : ${runtime(run)}
+ ${shep} Mode : ${ispublic}
+ ${shep} Total Hit : ${hit}
+ 
+
◪ 𝙄𝙉𝙁𝙊 𝙒𝘼𝙆𝙏𝙐
+ 
+ ${shep} Tanggal : ${date}
+ ${shep} Tanggal Islam : ${dateIslamic}
+ ${shep} Waktu : ${timee} WIB
+ 
+  
◪ 𝙄𝙉𝙁𝙊 𝘿𝙀𝙑𝙄𝘾𝙀
+ 
+ ${shep} Versi Whatsapp : ${wa_version}
+ ${shep} Versi OS : ${os_version}
+ ${shep} Versi Hp : ${device_model}
+ ${shep} Merek Device : ${device_manufacturer}
+ ${shep} Ram : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
+ ${shep} Mcc : ${mcc}
+ ${shep} Mnc : ${mnc}
+ ${shep} Baterai : ${baterai}%
+ ${shep} Status Baterai : ${isday}
+ ${shep} Penghemat Baterai : ${ispowersave}
+ 
+ 
◪ 𝙊𝙒𝙉𝙀𝙍
+ 
+ ${shep} ${prefix}term
+ ${shep} ${prefix}chats
+ ${shep} ${prefix}listpc
+ ${shep} ${prefix}listgroup
+ ${shep} ${prefix}self/public
+ ${shep} ${prefix}block <nomor>
+ ${shep} ${prefix}unblock <nomor>
+ ${shep} ${prefix}setfake <fake>
+ ${shep} ${prefix}setreply <teks>
+ ${shep} ${prefix}setprefix
+ ${shep} ${prefix}setthumb
+ ${shep} ${prefix}join <linkgc>
+ ${shep} ${prefix}get <link>
+ ${shep} ${prefix}adderror <cmd>
+ ${shep} ${prefix}delerror <cmd>
+ 
+ 
◪ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍
+ 
+ ${shep} ${prefix}toimg
+ ${shep} ${prefix}sticker
+ ${shep} ${prefix}snobg
+ ${shep} ${prefix}ttp <teks>
+ ${shep} ${prefix}attp <teks>
+ ${shep} ${prefix}colong
+ ${shep} ${prefix}takestick <packname|author>
+ ${shep} ${prefix}emoji <emoji|jenis>
+ 
+ 
◪ 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙀𝙍 
+ 
+ ${shep} ${prefix}tomp3
+ ${shep} ${prefix}toptt
+ ${shep} ${prefix}tovideo
+ ${shep} ${prefix}togif
+ ${shep} ${prefix}toaudio
+ ${shep} ${prefix}bass <angka>
+ ${shep} ${prefix}slow
+ ${shep} ${prefix}gemuk
+ ${shep} ${prefix}tupai
+ ${shep} ${prefix}nightcore
+ ${shep} ${prefix}ghost
+ ${shep} ${prefix}blub
+ 
+ 
◪ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍
+ 
+ ${shep} ${prefix}play <query>
+ ${shep} ${prefix}video <query>
+ ${shep} ${prefix}ytdl <query>
+ ${shep} ${prefix}ytdown <link>
+ ${shep} ${prefix}ytmp3 <link>
+ ${shep} ${prefix}ytmp4 <link>
+ ${shep} ${prefix}tiktok <link>
+ ${shep} ${prefix}mediafire <link>
+ ${shep} ${prefix}sfiledirect <link>
+ ${shep} ${prefix}ig <link>
+ ${shep} ${prefix}igstory <username|jumlah>
+ ${shep} ${prefix}twittervideo <link>
+ ${shep} ${prefix}getmusic <reply hasil pencarian yt>
+ ${shep} ${prefix}getvideo <reply hasil pencarian yt>
+ 
+ 
◪ 𝙏𝘼𝙂
+ 
+ ${shep} ${prefix}totag
+ ${shep} ${prefix}hidetag <teks>
+ ${shep} ${prefix}kontag <tag|nama>
+ 
+ 
◪ 𝙉𝙐𝙇𝙄𝙎 
+ 
+ ${shep} ${prefix}nuliskanan <teks>
+ ${shep} ${prefix}nuliskiri <teks>
+ ${shep} ${prefix}foliokanan <teks>
+ ${shep} ${prefix}foliokiri <teks>
+ 
+ 
◪ 𝙎𝙀𝘼𝙍𝘾𝙃
+ 
+ ${shep} ${prefix}ytsearch <query>
+ ${shep} ${prefix}brainly <query>
+ ${shep} ${prefix}google <query>
+ ${shep} ${prefix}wiki <query>
+ ${shep} ${prefix}kbbi <query>
+ ${shep} ${prefix}film <query>
+ ${shep} ${prefix}drakor <query>
+ ${shep} ${prefix}lirik <query>
+ ${shep} ${prefix}wall <query>
+ ${shep} ${prefix}image <query>
+ ${shep} ${prefix}kiryu <query>
+ ${shep} ${prefix}wattpad <query>
+ ${shep} ${prefix}dewabatch <query>
+ ${shep} ${prefix}mangatoon <query>
+ ${shep} ${prefix}palingmurah <query>
+ ${shep} ${prefix}infonomor <nomor +62>
+ ${shep} ${prefix}pinterest <query>
+ ${shep} ${prefix}githubrepo <query>
+ ${shep} ${prefix}githubuser <query>
+ ${shep} ${prefix}ghfollowers <query>
+ ${shep} ${prefix}otakudesu <query>
+ ${shep} ${prefix}findsticker <query>
+ ${shep} ${prefix}sfilesearch <query>
+ ${shep} ${prefix}konachan <query>
+ ${shep} ${prefix}playstore <query>
+ ${shep} ${prefix}apkmody <query>
+ ${shep} ${prefix}happymod <query>
+ ${shep} ${prefix}android1 <query>
+ ${shep} ${prefix}resep <query>
+ ${shep} ${prefix}ptl <username tiktok>
+ ${shep} ${prefix}infocovid <country>
+ 
+ 
◪ 𝙆𝙀𝘼𝙂𝘼𝙈𝘼𝘼𝙉
+ 
+ ${shep} ${prefix}quranayat <nosurah|ayat>
+ ${shep} ${prefix}quranaudio <nosurah|ayat>
+ ${shep} ${prefix}tafsirayat <nosurah|ayat>
+ ${shep} ${prefix}tafsirsurah <nosurah>
+ ${shep} ${prefix}infosurah <nosurah>
+ ${shep} ${prefix}asmaulhusna <nomor>
+ ${shep} ${prefix}surah <nomor surah>
+ 
+ 
◪ 𝙎𝙏𝘼𝙇𝙆𝙄𝙉𝙂
+ 
+ ${shep} ${prefix}ytstalk <channel>
+ ${shep} ${prefix}igstalk <username>
+ ${shep} ${prefix}githubstalk <username>
+ ${shep} ${prefix}tiktokstalk <username>
+ 
+ 
◪ 𝙂𝙍𝙊𝙐𝙋
+ 
+ ${shep} ${prefix}mute
+ ${shep} ${prefix}unmute
+ ${shep} ${prefix}open
+ ${shep} ${prefix}close
+ ${shep} ${prefix}add
+ ${shep} ${prefix}kick
+ ${shep} ${prefix}promote
+ ${shep} ${prefix}demote
+ ${shep} ${prefix}ownergc
+ ${shep} ${prefix}link
+ ${shep} ${prefix}resetlink
+ ${shep} ${prefix}sider
+ ${shep} ${prefix}listmem
+ ${shep} ${prefix}sampah
+ ${shep} ${prefix}infogc
+ ${shep} ${prefix}revokelink
+ ${shep} ${prefix}welcome <on/off>
+ ${shep} ${prefix}setwelcome
+ ${shep} ${prefix}delwelcome
+ ${shep} ${prefix}cekwelcome
+ ${shep} ${prefix}left <on/off>
+ ${shep} ${prefix}setleft
+ ${shep} ${prefix}delleft
+ ${shep} ${prefix}cekleft
+ ${shep} ${prefix}setname <nama baru>
+ ${shep} ${prefix}setdesk <desk baru>
+ ${shep} ${prefix}chatscount
+ ${shep} ${prefix}caripesan <query>
+ ${shep} ${prefix}detector <on/off>
+ ${shep} ${prefix}addnote <nama note|caption>
+ ${shep} ${prefix}getnote <nama note>
+ ${shep} ${prefix}listnotes
+ ${shep} ${prefix}delnotes <nama note>
+ ${shep} ${prefix}groupsetting
+ ${shep} ${prefix}antidelete <on/off>
+ ${shep} ${prefix}setprefixgc <prefix>
+ ${shep} ${prefix}resetprefix
+ ${shep} ${prefix}pesansementara <on/off>
+ 
+ 
◪ 𝘼𝙉𝙄𝙈𝙀
+ 
+ ${shep} ${prefix}loli
+ ${shep} ${prefix}waifu
+ ${shep} ${prefix}husbu
+ ${shep} ${prefix}shota
+ ${shep} ${prefix}randomanime
+ ${shep} ${prefix}nekonime
+ ${shep} ${prefix}foxnime
+ ${shep} ${prefix}wallanime
+ ${shep} ${prefix}mobilewallanime
+ 
+ 
◪ 𝙏𝙀𝙓𝙏𝙈𝘼𝙆𝙀𝙍
+ 
+ ${shep} ${prefix}blackpink <teks>
+ ${shep} ${prefix}graffiti <teks>
+ ${shep} ${prefix}neon <teks>
+ ${shep} ${prefix}blood <teks>
+ ${shep} ${prefix}leaves <teks>
+ ${shep} ${prefix}papercut <teks>
+ 
+ 
◪ 𝙍𝘼𝙉𝘿𝙊𝙈
+ 
+ ${shep} ${prefix}fakta
+ ${shep} ${prefix}darkjoke
+ ${shep} ${prefix}cerpen
+ ${shep} ${prefix}quotes
+ ${shep} ${prefix}ppcouple
+ ${shep} ${prefix}katabijak
+ ${shep} ${prefix}artinama <nama>
+ ${shep} ${prefix}qrcode <teks>
+ ${shep} ${prefix}tourl
+ ${shep} ${prefix}tourl2
+ 
+ 
◪ 𝙄𝙈𝘼𝙂𝙀 𝙀𝙁𝙁𝙀𝘾𝙏
+ 
+ ${shep} ${prefix}wasted
+ ${shep} ${prefix}wanted
+ ${shep} ${prefix}utatoo
+ ${shep} ${prefix}unsharpen
+ ${shep} ${prefix}tobecontinued
+ ${shep} ${prefix}thanos
+ ${shep} ${prefix}sniper
+ ${shep} ${prefix}sharpen
+ ${shep} ${prefix}sepia
+ ${shep} ${prefix}scary
+ ${shep} ${prefix}rip
+ ${shep} ${prefix}redple
+ ${shep} ${prefix}rejected
+ ${shep} ${prefix}posterize
+ ${shep} ${prefix}ps4
+ ${shep} ${prefix}pixelize
+ ${shep} ${prefix}missionpassed
+ ${shep} ${prefix}moustache
+ ${shep} ${prefix}lookwhatkarenhave
+ ${shep} ${prefix}jail
+ ${shep} ${prefix}invert
+ ${shep} ${prefix}greyscale
+ ${shep} ${prefix}glitch
+ ${shep} ${prefix}gay
+ ${shep} ${prefix}frame
+ ${shep} ${prefix}fire
+ ${shep} ${prefix}distort
+ ${shep} ${prefix}dictator
+ ${shep} ${prefix}deepfry
+ ${shep} ${prefix}ddungeon
+ ${shep} ${prefix}circle
+ ${shep} ${prefix}challenger
+ ${shep} ${prefix}burn
+ ${shep} ${prefix}brazzers
+ ${shep} ${prefix}beautiful
+ ${shep} ${prefix}approved3000years
+ 
+ 
◪ 𝘼𝘿𝙑𝘼𝙉𝘾𝙀
+ 
+ ${shep} ${prefix}ping
+ ${shep} ${prefix}afk <alesan>
+ ${shep} ${prefix}listerror
+ ${shep} ${prefix}addcmd/setcmd <reply sticker>
+ ${shep} ${prefix}delcmd <reply sticker>
+ ${shep} ${prefix}listcmd
+ ${shep} ${prefix}getsticker <cmd>
+ ${shep} ${prefix}tagme
+ ${shep} ${prefix}wa.me
+ ${shep} ${prefix}cekchat
+ ${shep} ${prefix}baterai
+ ${shep} ${prefix}inspect <linkgc>
+ ${shep} ${prefix}tts <kodebahasa teks>
+ ${shep} ${prefix}getpic
+ ${shep} ${prefix}getstatus
+ ${shep} ${prefix}tr
+ ${shep} ${prefix}getexif
+ ${shep} ${prefix}q
+ ${shep} x <kode>
+ ${shep} > <kode>
+ 
+ 
◪ 𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊
+ 
+ ${shep} Allah SWT
+ ${shep} Kedua Orang Tua
+ ${shep} Aqul
+ ${shep} Elios
+ ${shep} Hexagon
+ ${shep} Hardianto
+ ${shep} Team
+ ${shep} Ra-api
+ ${shep} Zahir-api
+ ${shep} Dan semua penyedia module
+ 
◪ 𝙕𝘽𝙊𝙏`
}
exports.help = help
const stickmenu = (shep, prefix) => {
return`
◪ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 
+ 
+ ${shep} ${prefix}swasted
+ ${shep} ${prefix}swanted
+ ${shep} ${prefix}sutatoo
+ ${shep} ${prefix}sunsharpen
+ ${shep} ${prefix}stobecontinued
+ ${shep} ${prefix}sthanos
+ ${shep} ${prefix}ssniper
+ ${shep} ${prefix}ssharpen
+ ${shep} ${prefix}ssepia
+ ${shep} ${prefix}sscary
+ ${shep} ${prefix}srip
+ ${shep} ${prefix}sredple
+ ${shep} ${prefix}srejected
+ ${shep} ${prefix}sposterize
+ ${shep} ${prefix}sps4
+ ${shep} ${prefix}spixelize
+ ${shep} ${prefix}smissionpassed
+ ${shep} ${prefix}smoustache
+ ${shep} ${prefix}slookwhatkarenhave
+ ${shep} ${prefix}sjail
+ ${shep} ${prefix}sinvert
+ ${shep} ${prefix}sinstagram
+ ${shep} ${prefix}sgreyscale
+ ${shep} ${prefix}sglitch
+ ${shep} ${prefix}sgay
+ ${shep} ${prefix}sframe
+ ${shep} ${prefix}sfire
+ ${shep} ${prefix}sdistort
+ ${shep} ${prefix}sdictator
+ ${shep} ${prefix}sdeepfry
+ ${shep} ${prefix}sddungeon
+ ${shep} ${prefix}scircle
+ ${shep} ${prefix}schallenger
+ ${shep} ${prefix}sburn
+ ${shep} ${prefix}sbrazzers
+ ${shep} ${prefix}sbeautiful
+ ${shep} ${prefix}sapproved3000years
+ 
◪ 𝙕𝘽𝙊𝙏 `
}
exports.stickmenu = stickmenu
const helpb = (ucselamat, ttag, shep, prefix) => { 
  return `
${setting.fake}
   
◪ ${ucselamat} @${ttag}

~ Note : Tidak semua fitur work, Maklum saya noob bang

◪ 𝙊𝙒𝙉𝙀𝙍
+ 
+ ${shep} ${prefix}term
+ ${shep} ${prefix}chats
+ ${shep} ${prefix}listpc
+ ${shep} ${prefix}listgroup
+ ${shep} ${prefix}self/public
+ ${shep} ${prefix}block <nomor>
+ ${shep} ${prefix}unblock <nomor>
+ ${shep} ${prefix}setfake <fake>
+ ${shep} ${prefix}setreply <teks>
+ ${shep} ${prefix}setprefix
+ ${shep} ${prefix}setthumb
+ ${shep} ${prefix}join <linkgc>
+ ${shep} ${prefix}get <link>
+ ${shep} ${prefix}adderror <cmd>
+ ${shep} ${prefix}delerror <cmd>
+ 
+ 
◪ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍
+ 
+ ${shep} ${prefix}toimg
+ ${shep} ${prefix}sticker
+ ${shep} ${prefix}snobg
+ ${shep} ${prefix}ttp <teks>
+ ${shep} ${prefix}attp <teks>
+ ${shep} ${prefix}colong
+ ${shep} ${prefix}takestick <packname|author>
+ ${shep} ${prefix}emoji <emoji|jenis>
+ 
+ 
◪ 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙀𝙍 
+ 
+ ${shep} ${prefix}tomp3
+ ${shep} ${prefix}toptt
+ ${shep} ${prefix}tovideo
+ ${shep} ${prefix}togif
+ ${shep} ${prefix}toaudio
+ ${shep} ${prefix}bass <angka>
+ ${shep} ${prefix}slow
+ ${shep} ${prefix}gemuk
+ ${shep} ${prefix}tupai
+ ${shep} ${prefix}nightcore
+ ${shep} ${prefix}ghost
+ ${shep} ${prefix}blub
+ 
+ 
◪ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍
+ 
+ ${shep} ${prefix}play <query>
+ ${shep} ${prefix}video <query>
+ ${shep} ${prefix}ytdl <query>
+ ${shep} ${prefix}ytdown <link>
+ ${shep} ${prefix}ytmp3 <link>
+ ${shep} ${prefix}ytmp4 <link>
+ ${shep} ${prefix}tiktok <link>
+ ${shep} ${prefix}mediafire <link>
+ ${shep} ${prefix}sfiledirect <link>
+ ${shep} ${prefix}ig <link>
+ ${shep} ${prefix}igstory <username|jumlah>
+ ${shep} ${prefix}twittervideo <link>
+ ${shep} ${prefix}getmusic <reply hasil pencarian yt>
+ ${shep} ${prefix}getvideo <reply hasil pencarian yt>
+ 
+ 
◪ 𝙏𝘼𝙂
+ 
+ ${shep} ${prefix}totag
+ ${shep} ${prefix}hidetag <teks>
+ ${shep} ${prefix}kontag <tag|nama>
+ 
+ 
◪ 𝙉𝙐𝙇𝙄𝙎 
+ 
+ ${shep} ${prefix}nuliskanan <teks>
+ ${shep} ${prefix}nuliskiri <teks>
+ ${shep} ${prefix}foliokanan <teks>
+ ${shep} ${prefix}foliokiri <teks>
+ 
+ 
◪ 𝙎𝙀𝘼𝙍𝘾𝙃
+ 
+ ${shep} ${prefix}ytsearch <query>
+ ${shep} ${prefix}brainly <query>
+ ${shep} ${prefix}google <query>
+ ${shep} ${prefix}wiki <query>
+ ${shep} ${prefix}kbbi <query>
+ ${shep} ${prefix}film <query>
+ ${shep} ${prefix}drakor <query>
+ ${shep} ${prefix}lirik <query>
+ ${shep} ${prefix}wall <query>
+ ${shep} ${prefix}image <query>
+ ${shep} ${prefix}kiryu <query>
+ ${shep} ${prefix}wattpad <query>
+ ${shep} ${prefix}dewabatch <query>
+ ${shep} ${prefix}mangatoon <query>
+ ${shep} ${prefix}palingmurah <query>
+ ${shep} ${prefix}infonomor <nomor +62>
+ ${shep} ${prefix}pinterest <query>
+ ${shep} ${prefix}githubrepo <query>
+ ${shep} ${prefix}githubuser <query>
+ ${shep} ${prefix}ghfollowers <query>
+ ${shep} ${prefix}otakudesu <query>
+ ${shep} ${prefix}findsticker <query>
+ ${shep} ${prefix}sfilesearch <query>
+ ${shep} ${prefix}konachan <query>
+ ${shep} ${prefix}playstore <query>
+ ${shep} ${prefix}apkmody <query>
+ ${shep} ${prefix}happymod <query>
+ ${shep} ${prefix}android1 <query>
+ ${shep} ${prefix}infocovid <country>
+ 
+ 
◪ 𝙆𝙀𝘼𝙂𝘼𝙈𝘼𝘼𝙉
+ 
+ ${shep} ${prefix}quranayat <nosurah|ayat>
+ ${shep} ${prefix}quranaudio <nosurah|ayat>
+ ${shep} ${prefix}tafsirayat <nosurah|ayat>
+ ${shep} ${prefix}tafsirsurah <nosurah>
+ ${shep} ${prefix}infosurah <nosurah>
+ ${shep} ${prefix}asmaulhusna <nomor>
+ ${shep} ${prefix}surah <nomor surah>
+ 
+ 
◪ 𝙎𝙏𝘼𝙇𝙆𝙄𝙉𝙂
+ 
+ ${shep} ${prefix}ytstalk <channel>
+ ${shep} ${prefix}igstalk <username>
+ ${shep} ${prefix}githubstalk <username>
+ ${shep} ${prefix}tiktokstalk <username>
+ 
+ 
◪ 𝙂𝙍𝙊𝙐𝙋
+ 
+ ${shep} ${prefix}mute
+ ${shep} ${prefix}unmute
+ ${shep} ${prefix}open
+ ${shep} ${prefix}close
+ ${shep} ${prefix}add
+ ${shep} ${prefix}kick
+ ${shep} ${prefix}promote
+ ${shep} ${prefix}demote
+ ${shep} ${prefix}ownergc
+ ${shep} ${prefix}link
+ ${shep} ${prefix}resetlink
+ ${shep} ${prefix}sider
+ ${shep} ${prefix}listmem
+ ${shep} ${prefix}sampah
+ ${shep} ${prefix}infogc
+ ${shep} ${prefix}revokelink
+ ${shep} ${prefix}welcome <on/off>
+ ${shep} ${prefix}setwelcome
+ ${shep} ${prefix}delwelcome
+ ${shep} ${prefix}cekwelcome
+ ${shep} ${prefix}left <on/off>
+ ${shep} ${prefix}setleft
+ ${shep} ${prefix}delleft
+ ${shep} ${prefix}cekleft
+ ${shep} ${prefix}setname <nama baru>
+ ${shep} ${prefix}setdesk <desk baru>
+ ${shep} ${prefix}chatscount
+ ${shep} ${prefix}caripesan <query>
+ ${shep} ${prefix}detector <on/off>
+ ${shep} ${prefix}addnote <nama note|caption>
+ ${shep} ${prefix}getnote <nama note>
+ ${shep} ${prefix}listnotes
+ ${shep} ${prefix}delnotes <nama note>
+ ${shep} ${prefix}groupsetting
+ ${shep} ${prefix}antidelete <on/off>
+ ${shep} ${prefix}setprefixgc <prefix>
+ ${shep} ${prefix}resetprefix
+ ${shep} ${prefix}pesansementara <on/off>
+ 
+ 
◪ 𝘼𝙉𝙄𝙈𝙀
+ 
+ ${shep} ${prefix}loli
+ ${shep} ${prefix}waifu
+ ${shep} ${prefix}husbu
+ ${shep} ${prefix}shota
+ ${shep} ${prefix}randomanime
+ ${shep} ${prefix}nekonime
+ ${shep} ${prefix}foxnime
+ ${shep} ${prefix}wallanime
+ ${shep} ${prefix}mobilewallanime
+ 
+ 
◪ 𝙏𝙀𝙓𝙏𝙈𝘼𝙆𝙀𝙍
+ 
+ ${shep} ${prefix}blackpink <teks>
+ ${shep} ${prefix}graffiti <teks>
+ ${shep} ${prefix}neon <teks>
+ ${shep} ${prefix}blood <teks>
+ ${shep} ${prefix}leaves <teks>
+ ${shep} ${prefix}papercut <teks>
+ 
+ 
◪ 𝙍𝘼𝙉𝘿𝙊𝙈
+ 
+ ${shep} ${prefix}fakta
+ ${shep} ${prefix}darkjoke
+ ${shep} ${prefix}cerpen
+ ${shep} ${prefix}quotes
+ ${shep} ${prefix}ppcouple
+ ${shep} ${prefix}katabijak
+ ${shep} ${prefix}artinama <nama>
+ ${shep} ${prefix}qrcode <teks>
+ ${shep} ${prefix}tourl
+ ${shep} ${prefix}tourl2
+ 
+ 
◪ 𝙄𝙈𝘼𝙂𝙀 𝙀𝙁𝙁𝙀𝘾𝙏
+ 
+ ${shep} ${prefix}wasted
+ ${shep} ${prefix}wanted
+ ${shep} ${prefix}utatoo
+ ${shep} ${prefix}unsharpen
+ ${shep} ${prefix}tobecontinued
+ ${shep} ${prefix}thanos
+ ${shep} ${prefix}sniper
+ ${shep} ${prefix}sharpen
+ ${shep} ${prefix}sepia
+ ${shep} ${prefix}scary
+ ${shep} ${prefix}rip
+ ${shep} ${prefix}redple
+ ${shep} ${prefix}rejected
+ ${shep} ${prefix}posterize
+ ${shep} ${prefix}ps4
+ ${shep} ${prefix}pixelize
+ ${shep} ${prefix}missionpassed
+ ${shep} ${prefix}moustache
+ ${shep} ${prefix}lookwhatkarenhave
+ ${shep} ${prefix}jail
+ ${shep} ${prefix}invert
+ ${shep} ${prefix}greyscale
+ ${shep} ${prefix}glitch
+ ${shep} ${prefix}gay
+ ${shep} ${prefix}frame
+ ${shep} ${prefix}fire
+ ${shep} ${prefix}distort
+ ${shep} ${prefix}dictator
+ ${shep} ${prefix}deepfry
+ ${shep} ${prefix}ddungeon
+ ${shep} ${prefix}circle
+ ${shep} ${prefix}challenger
+ ${shep} ${prefix}burn
+ ${shep} ${prefix}brazzers
+ ${shep} ${prefix}beautiful
+ ${shep} ${prefix}approved3000years
+ 
+ 
◪ 𝘼𝘿𝙑𝘼𝙉𝘾𝙀
+ 
+ ${shep} ${prefix}ping
+ ${shep} ${prefix}afk <alesan>
+ ${shep} ${prefix}listerror
+ ${shep} ${prefix}addcmd/setcmd <reply sticker>
+ ${shep} ${prefix}delcmd <reply sticker>
+ ${shep} ${prefix}listcmd
+ ${shep} ${prefix}getsticker <cmd>
+ ${shep} ${prefix}tagme
+ ${shep} ${prefix}wa.me
+ ${shep} ${prefix}cekchat
+ ${shep} ${prefix}baterai
+ ${shep} ${prefix}inspect <linkgc>
+ ${shep} ${prefix}tts <kodebahasa teks>
+ ${shep} ${prefix}getpic
+ ${shep} ${prefix}getstatus
+ ${shep} ${prefix}tr
+ ${shep} ${prefix}getexif
+ ${shep} ${prefix}q
+ ${shep} x <kode>
+ ${shep} > <kode>
+ 
+ 
◪ 𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊
+ 
+ ${shep} Allah SWT
+ ${shep} Kedua Orang Tua
+ ${shep} Aqul
+ ${shep} Elios
+ ${shep} Hexagon
+ ${shep} Hardianto
+ ${shep} Team
+ ${shep} Ra-api
+ ${shep} Zahir-api
+ ${shep} Dan semua penyedia module
+ 
◪ 𝙕𝘽𝙊𝙏`
}
exports.helpb = helpb
