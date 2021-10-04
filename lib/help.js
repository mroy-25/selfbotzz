const fs = require('fs')
const speed = require('performance-now');
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const wa = require('../whatsapp/message')
exports.help = (ispublic, timee, date, dateIslamic, ucselamat, prefix, ttag, isprefix) => { 
const shape = '*›*'
let timestampi = speed();
let latensii = speed() - timestampi
return `
${ucselamat} @${ttag.split('@')[0]}

*I N F O  B O T*

› Creator : Aqul
› Recode : Fajar
› Library : Baileys
› Version : 5.0
› Prefix : ${isprefix}
› Mode : ${ispublic}

*I N F O  W A K T U*

› Tanggal : ${date}
› Tanggal Islam : ${dateIslamic}
› Waktu : ${timee} WIB

*L I S T  F I T U R*

*O W N E R*

${shape} ${prefix}term
${shape} ${prefix}chats
${shape} ${prefix}listpc
${shape} ${prefix}listgroup
${shape} ${prefix}self/public
${shape} ${prefix}block <nomor>
${shape} ${prefix}unblock <nomor>
${shape} ${prefix}setfake <fake>
${shape} ${prefix}setreply <teks>
${shape} ${prefix}setprefix
${shape} ${prefix}setthumb
${shape} ${prefix}join <linkgc>
${shape} ${prefix}get <link>
${shape} ${prefix}adderror <cmd>
${shape} ${prefix}delerror <cmd>

*S T I C K E R*

${shape} ${prefix}toimg
${shape} ${prefix}sticker
${shape} ${prefix}snobg
${shape} ${prefix}ttp <teks>
${shape} ${prefix}attp <teks>
${shape} ${prefix}colong
${shape} ${prefix}takestick <packname|author>
${shape} ${prefix}emoji <emoji|jenis>

*C O N V E R T E R*

${shape} ${prefix}tomp3
${shape} ${prefix}toptt
${shape} ${prefix}tovideo
${shape} ${prefix}togif
${shape} ${prefix}toaudio
${shape} ${prefix}bass <angka>
${shape} ${prefix}slow
${shape} ${prefix}gemuk
${shape} ${prefix}tupai
${shape} ${prefix}nightcore
${shape} ${prefix}ghost
${shape} ${prefix}blub

*D O W N L O A D E R*

${shape} ${prefix}play <query>
${shape} ${prefix}video <query>
${shape} ${prefix}ytdown <link>
${shape} ${prefix}ytmp3 <link>
${shape} ${prefix}ytmp4 <link>
${shape} ${prefix}tiktok <link>
${shape} ${prefix}mediafire <link>
${shape} ${prefix}sfiledirect <link>
${shape} ${prefix}ig <link>
${shape} ${prefix}igstory <username|jumlah>
${shape} ${prefix}twittervideo <link>
${shape} ${prefix}soundcloud <link>
${shape} ${prefix}getmusic <reply hasil pencarian yt>
${shape} ${prefix}getvideo <reply hasil pencarian yt>

*N U L I S*

${shape} ${prefix}nuliskanan <teks>
${shape} ${prefix}nuliskiri <teks>
${shape} ${prefix}foliokanan <teks>
${shape} ${prefix}foliokiri <teks>

*S E A R C H*

${shape} ${prefix}ytsearch <query>
${shape} ${prefix}google <query>
${shape} ${prefix}wiki <query>
${shape} ${prefix}kbbi <query>
${shape} ${prefix}film <query>
${shape} ${prefix}drakor <query>
${shape} ${prefix}lirik <query>
${shape} ${prefix}wall <query>
${shape} ${prefix}image <query>
${shape} ${prefix}wattpad <query>
${shape} ${prefix}mangatoon <query>
${shape} ${prefix}palingmurah <query>
${shape} ${prefix}infonomor <nomor +62>
${shape} ${prefix}pinterest <query>
${shape} ${prefix}githubrepo <query>
${shape} ${prefix}githubuser <query>
${shape} ${prefix}ghfollowers <query>
${shape} ${prefix}findsticker <query>
${shape} ${prefix}sfilesearch <query>
${shape} ${prefix}playstore <query>
${shape} ${prefix}apkmody <query>
${shape} ${prefix}happymod <query>
${shape} ${prefix}android1 <query>
${shape} ${prefix}resep <query>
${shape} ${prefix}infocovid <country>
${shape} ${prefix}job <query>

*K E A G A M A A N*

${shape} ${prefix}quranayat <nosurah|ayat>
${shape} ${prefix}quranaudio <nosurah|ayat>
${shape} ${prefix}tafsirayat <nosurah|ayat>
${shape} ${prefix}tafsirsurah <nosurah>
${shape} ${prefix}infosurah <nosurah>
${shape} ${prefix}asmaulhusna <nomor>
${shape} ${prefix}surah <nomor surah>

*S T A L K I N G*

${shape} ${prefix}ytstalk <channel>
${shape} ${prefix}igstalk <username>
${shape} ${prefix}githubstalk <username>

*G R O U P*

${shape} ${prefix}mute
${shape} ${prefix}unmute
${shape} ${prefix}open
${shape} ${prefix}close
${shape} ${prefix}add
${shape} ${prefix}kick
${shape} ${prefix}promote
${shape} ${prefix}demote
${shape} ${prefix}ownergc
${shape} ${prefix}link
${shape} ${prefix}resetlink
${shape} ${prefix}sider
${shape} ${prefix}listmem
${shape} ${prefix}sampah
${shape} ${prefix}infogc
${shape} ${prefix}revokelink
${shape} ${prefix}welcome <on/off>
${shape} ${prefix}setwelcome
${shape} ${prefix}delwelcome
${shape} ${prefix}cekwelcome
${shape} ${prefix}left <on/off>
${shape} ${prefix}setleft
${shape} ${prefix}delleft
${shape} ${prefix}cekleft
${shape} ${prefix}setname <nama baru>
${shape} ${prefix}setdesk <desk baru>
${shape} ${prefix}chatscount
${shape} ${prefix}caripesan <query>
${shape} ${prefix}detector <on/off>
${shape} ${prefix}antidelete <on/off>
${shape} ${prefix}antiviewonce <on/off>
${shape} ${prefix}setprefixgc <prefix>
${shape} ${prefix}resetprefix
${shape} ${prefix}pesansementara <on/off>
${shape} ${prefix}addnote <namanote|note>
${shape} ${prefix}delnote <namanote>
${shape} ${prefix}getnote <namanote>
${shape} ${prefix}listnotes

*A N I M E*

${shape} ${prefix}loli
${shape} ${prefix}waifu
${shape} ${prefix}husbu
${shape} ${prefix}shota
${shape} ${prefix}randomanime
${shape} ${prefix}nekonime
${shape} ${prefix}foxnime
${shape} ${prefix}wallanime
${shape} ${prefix}mobilewallanime
${shape} ${prefix}manga <query>
${shape} ${prefix}anime <query>
${shape} ${prefix}anoboy <query>
${shape} ${prefix}kiryu <query>
${shape} ${prefix}konachan <query>
${shape} ${prefix}zerochan <query>

*T E X T M A K E R*

${shape} ${prefix}blackpink <teks>
${shape} ${prefix}graffiti <teks>
${shape} ${prefix}neon <teks>
${shape} ${prefix}blood <teks>
${shape} ${prefix}leaves <teks>
${shape} ${prefix}papercut <teks>

*R A N D O M*

${shape} ${prefix}fakta
${shape} ${prefix}meme
${shape} ${prefix}cat
${shape} ${prefix}dog
${shape} ${prefix}panda
${shape} ${prefix}fox
${shape} ${prefix}darkjoke
${shape} ${prefix}cerpen
${shape} ${prefix}quotes
${shape} ${prefix}ppcouple
${shape} ${prefix}katabijak
${shape} ${prefix}artinama <nama>
${shape} ${prefix}qrcode <teks>
${shape} ${prefix}tourl
${shape} ${prefix}tourl2

*I M A G E  E F F E C T*

${shape} ${prefix}wasted
${shape} ${prefix}wanted
${shape} ${prefix}utatoo
${shape} ${prefix}unsharpen
${shape} ${prefix}tobecontinued
${shape} ${prefix}thanos
${shape} ${prefix}sniper
${shape} ${prefix}sharpen
${shape} ${prefix}sepia
${shape} ${prefix}scary
${shape} ${prefix}rip
${shape} ${prefix}redple
${shape} ${prefix}rejected
${shape} ${prefix}posterize
${shape} ${prefix}ps4
${shape} ${prefix}pixelize
${shape} ${prefix}missionpassed
${shape} ${prefix}moustache
${shape} ${prefix}lookwhatkarenhave
${shape} ${prefix}jail
${shape} ${prefix}invert
${shape} ${prefix}greyscale
${shape} ${prefix}glitch
${shape} ${prefix}gay
${shape} ${prefix}frame
${shape} ${prefix}fire
${shape} ${prefix}distort
${shape} ${prefix}dictator
${shape} ${prefix}deepfry
${shape} ${prefix}ddungeon
${shape} ${prefix}circle
${shape} ${prefix}challenger
${shape} ${prefix}burn
${shape} ${prefix}brazzers
${shape} ${prefix}beautiful
${shape} ${prefix}approved3000years

*A D V A N C E*

${shape} ${prefix}ping
${shape} ${prefix}dashboard
${shape} ${prefix}bugreport <bugnya>
${shape} ${prefix}hidetag <teks>
${shape} ${prefix}totag <treply pesan>
${shape} ${prefix}afk <alesan>
${shape} ${prefix}listerror
${shape} ${prefix}addcmd/setcmd <reply sticker>
${shape} ${prefix}delcmd <reply sticker>
${shape} ${prefix}listcmd
${shape} ${prefix}tagme
${shape} ${prefix}wa.me
${shape} ${prefix}cekchat
${shape} ${prefix}baterai
${shape} ${prefix}inspect <linkgc>
${shape} ${prefix}tts <kodebahasa teks>
${shape} ${prefix}getpic
${shape} ${prefix}getstatus
${shape} ${prefix}tr
${shape} ${prefix}getexif
${shape} ${prefix}q
${shape} $ <term>
${shape} > <kode>
${shape} < <kode>

*T H AN K S  T O*

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
}
