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
◪ ${ucselamat} @${ttag}

◪ 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏

𝘾𝙧𝙚𝙖𝙩𝙤𝙧 : Aqul
𝙍𝙚𝙘𝙤𝙙𝙚 : Fajar
𝙇𝙞𝙗𝙧𝙖𝙧𝙮 : Baileys
𝙑𝙚𝙧𝙨𝙞𝙤𝙣 : 5.0
𝙋𝙧𝙚𝙛𝙞𝙭 : ${isprefix}
𝙈𝙤𝙙𝙚 : ${ispublic}
𝙏𝙤𝙩𝙖𝙡 𝙃𝙞𝙩 : ${hit}
𝙂𝙧𝙤𝙪𝙥 𝘾𝙝𝙖𝙩 : ${giid.length}
𝙋𝙚𝙧𝙨𝙤𝙣𝙖𝙡 𝘾𝙝𝙖𝙩 : ${totalchat.length - giid.length}
𝙏𝙤𝙩𝙖𝙡 𝘾𝙝𝙖𝙩 : ${totalchat.length}
𝙎𝙥𝙚𝙚𝙙 : ${latensii.toFixed(4)} Second
𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(run)}
𝙍𝙚𝙨𝙩 𝘼𝙥𝙞'𝙨 : https://beta-restapi.herokuapp.com/

◪ 𝑰𝑵𝑭𝑶 𝑾𝑨𝑲𝑻𝑼

𝑻𝒂𝒏𝒈𝒈𝒂𝒍 : ${date}
𝑻𝒂𝒏𝒈𝒈𝒂𝒍 𝑰𝒔𝒍𝒂𝒎 : ${dateIslamic}
𝑾𝒂𝒌𝒕𝒖 : ${timee} WIB

◪ 𝙄𝙉𝙁𝙊 𝘿𝙀𝙑𝙄𝘾𝙀

𝙑. 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 : ${wa_version}
𝘽𝙖𝙩𝙚𝙧𝙖𝙞 : ${baterai.baterai}%
𝘾𝙝𝙖𝙧𝙜𝙚 : ${baterai.cas === 'true' ? 'Ya' : 'Tidak'}
𝙋𝙤𝙬𝙚𝙧𝙨𝙖𝙫𝙚 : ${ispowersave}
𝙍𝘼𝙈 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
𝙈𝘾𝘾 : ${mcc}
𝙈𝙉𝘾 : ${mnc}
𝙑𝙚𝙧𝙨𝙞 𝙊𝙎 : ${os_version}
𝙈𝙚𝙧𝙠 𝙃𝙋 : ${device_manufacturer}
𝙑𝙚𝙧𝙨𝙞 𝙃𝙋 : ${device_model}

◪ 𝙇𝙄𝙎𝙏 𝙁𝙄𝙏𝙐𝙍

𝙊𝙒𝙉𝙀𝙍
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

𝙎𝙏𝙄𝘾𝙆𝙀𝙍
nomfitur obj ${prefix}toimg
nomfitur obj ${prefix}sticker
nomfitur obj ${prefix}snobg
nomfitur obj ${prefix}ttp <teks>
nomfitur obj ${prefix}attp <teks>
nomfitur obj ${prefix}colong
nomfitur obj ${prefix}takestick <packname|author>
nomfitur obj ${prefix}emoji <emoji|jenis>

𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙀𝙍
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

𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍
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

𝙏𝘼𝙂
nomfitur obj ${prefix}totag
nomfitur obj ${prefix}hidetag <teks>
nomfitur obj ${prefix}kontag <tag|nama>

𝙉𝙐𝙇𝙄𝙎
nomfitur obj ${prefix}nuliskanan <teks>
nomfitur obj ${prefix}nuliskiri <teks>
nomfitur obj ${prefix}foliokanan <teks>
nomfitur obj ${prefix}foliokiri <teks>

𝙎𝙀𝘼𝙍𝘾𝙃
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

𝙆𝙀𝘼𝙂𝘼𝙈𝘼𝘼𝙉
nomfitur obj ${prefix}quranayat <nosurah|ayat>
nomfitur obj ${prefix}quranaudio <nosurah|ayat>
nomfitur obj ${prefix}tafsirayat <nosurah|ayat>
nomfitur obj ${prefix}tafsirsurah <nosurah>
nomfitur obj ${prefix}infosurah <nosurah>
nomfitur obj ${prefix}asmaulhusna <nomor>
nomfitur obj ${prefix}surah <nomor surah>

𝙎𝙏𝘼𝙇𝙆𝙄𝙉𝙂
nomfitur obj ${prefix}ytstalk <channel>
nomfitur obj ${prefix}igstalk <username>
nomfitur obj ${prefix}githubstalk <username>
nomfitur obj ${prefix}tiktokstalk <username>

𝙂𝙍𝙊𝙐𝙋
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

𝘼𝙉𝙄𝙈𝙀
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

𝙏𝙀𝙓𝙏𝙈𝘼𝙆𝙀𝙍
nomfitur obj ${prefix}blackpink <teks>
nomfitur obj ${prefix}graffiti <teks>
nomfitur obj ${prefix}neon <teks>
nomfitur obj ${prefix}blood <teks>
nomfitur obj ${prefix}leaves <teks>
nomfitur obj ${prefix}papercut <teks>

𝙍𝘼𝙉𝘿𝙊𝙈
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

𝙄𝙈𝘼𝙂𝙀 𝙀𝙁𝙁𝙀𝘾𝙏
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

𝘼𝘿𝙑𝘼𝙉𝘾𝙀
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

◪ 𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊
${shep} Allah SWT
${shep} Kedua Orang Tua
${shep} Aqul
${shep} Elios
${shep} Hexagon
${shep} Hardianto
${shep} Team
${shep} Ra-api
${shep} Zahir-api
${shep} Dan semua penyedia module`
teks2 = ''
  for(let i=0; i<216; i++){
    text = teks.split('nomfitur')[i]
    //if(teks == undefined) return
    teks2 += text.replace('obj', `*${i}.*`)
    //console.log(teks2)
  }
return teks2
}
exports.help = help
const stickmenu = (shep, prefix) => {
return`
◪ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 

${shep} ${prefix}swasted
${shep} ${prefix}swanted
${shep} ${prefix}sutatoo
${shep} ${prefix}sunsharpen
${shep} ${prefix}stobecontinued
${shep} ${prefix}sthanos
${shep} ${prefix}ssniper
${shep} ${prefix}ssharpen
${shep} ${prefix}ssepia
${shep} ${prefix}sscary
${shep} ${prefix}srip
${shep} ${prefix}sredple
${shep} ${prefix}srejected
${shep} ${prefix}sposterize
${shep} ${prefix}sps4
${shep} ${prefix}spixelize
${shep} ${prefix}smissionpassed
${shep} ${prefix}smoustache
${shep} ${prefix}slookwhatkarenhave
${shep} ${prefix}sjail
${shep} ${prefix}sinvert
${shep} ${prefix}sinstagram
${shep} ${prefix}sgreyscale
${shep} ${prefix}sglitch
${shep} ${prefix}sgay
${shep} ${prefix}sframe
${shep} ${prefix}sfire
${shep} ${prefix}sdistort
${shep} ${prefix}sdictator
${shep} ${prefix}sdeepfry
${shep} ${prefix}sddungeon
${shep} ${prefix}scircle
${shep} ${prefix}schallenger
${shep} ${prefix}sburn
${shep} ${prefix}sbrazzers
${shep} ${prefix}sbeautiful
${shep} ${prefix}sapproved3000years

◪ 𝙕𝘽𝙊𝙏 `
}
exports.stickmenu = stickmenu
const helpb = (ucselamat, ttag, shep, prefix) => { 
  return `
${setting.fake}
   
◪ ${ucselamat} @${ttag}

~ Note : Tidak semua fitur work, Maklum saya noob bang

◪ 𝙊𝙒𝙉𝙀𝙍

${shep} ${prefix}term
${shep} ${prefix}chats
${shep} ${prefix}listpc
${shep} ${prefix}listgroup
${shep} ${prefix}self/public
${shep} ${prefix}block <nomor>
${shep} ${prefix}unblock <nomor>
${shep} ${prefix}setfake <fake>
${shep} ${prefix}setreply <teks>
${shep} ${prefix}setprefix
${shep} ${prefix}setthumb
${shep} ${prefix}join <linkgc>
${shep} ${prefix}get <link>
${shep} ${prefix}adderror <cmd>
${shep} ${prefix}delerror <cmd>


◪ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍

${shep} ${prefix}toimg
${shep} ${prefix}sticker
${shep} ${prefix}snobg
${shep} ${prefix}ttp <teks>
${shep} ${prefix}attp <teks>
${shep} ${prefix}colong
${shep} ${prefix}takestick <packname|author>
${shep} ${prefix}emoji <emoji|jenis>


◪ 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙀𝙍 

${shep} ${prefix}tomp3
${shep} ${prefix}toptt
${shep} ${prefix}tovideo
${shep} ${prefix}togif
${shep} ${prefix}toaudio
${shep} ${prefix}bass <angka>
${shep} ${prefix}slow
${shep} ${prefix}gemuk
${shep} ${prefix}tupai
${shep} ${prefix}nightcore
${shep} ${prefix}ghost
${shep} ${prefix}blub


◪ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍

${shep} ${prefix}play <query>
${shep} ${prefix}video <query>
${shep} ${prefix}ytdl <query>
${shep} ${prefix}ytdown <link>
${shep} ${prefix}ytmp3 <link>
${shep} ${prefix}ytmp4 <link>
${shep} ${prefix}tiktok <link>
${shep} ${prefix}mediafire <link>
${shep} ${prefix}sfiledirect <link>
${shep} ${prefix}ig <link>
${shep} ${prefix}igstory <username|jumlah>
${shep} ${prefix}twittervideo <link>
${shep} ${prefix}getmusic <reply hasil pencarian yt>
${shep} ${prefix}getvideo <reply hasil pencarian yt>


◪ 𝙏𝘼𝙂

${shep} ${prefix}totag
${shep} ${prefix}hidetag <teks>
${shep} ${prefix}kontag <tag|nama>


◪ 𝙉𝙐𝙇𝙄𝙎 

${shep} ${prefix}nuliskanan <teks>
${shep} ${prefix}nuliskiri <teks>
${shep} ${prefix}foliokanan <teks>
${shep} ${prefix}foliokiri <teks>


◪ 𝙎𝙀𝘼𝙍𝘾𝙃

${shep} ${prefix}ytsearch <query>
${shep} ${prefix}brainly <query>
${shep} ${prefix}google <query>
${shep} ${prefix}wiki <query>
${shep} ${prefix}kbbi <query>
${shep} ${prefix}film <query>
${shep} ${prefix}drakor <query>
${shep} ${prefix}lirik <query>
${shep} ${prefix}wall <query>
${shep} ${prefix}image <query>

${shep} ${prefix}wattpad <query>
${shep} ${prefix}dewabatch <query>
${shep} ${prefix}mangatoon <query>
${shep} ${prefix}palingmurah <query>
${shep} ${prefix}infonomor <nomor +62>
${shep} ${prefix}pinterest <query>
${shep} ${prefix}githubrepo <query>
${shep} ${prefix}githubuser <query>
${shep} ${prefix}ghfollowers <query>
${shep} ${prefix}otakudesu <query>
${shep} ${prefix}findsticker <query>
${shep} ${prefix}sfilesearch <query>
${shep} ${prefix}playstore <query>
${shep} ${prefix}apkmody <query>
${shep} ${prefix}happymod <query>
${shep} ${prefix}android1 <query>
${shep} ${prefix}infocovid <country>


◪ 𝙆𝙀𝘼𝙂𝘼𝙈𝘼𝘼𝙉

${shep} ${prefix}quranayat <nosurah|ayat>
${shep} ${prefix}quranaudio <nosurah|ayat>
${shep} ${prefix}tafsirayat <nosurah|ayat>
${shep} ${prefix}tafsirsurah <nosurah>
${shep} ${prefix}infosurah <nosurah>
${shep} ${prefix}asmaulhusna <nomor>
${shep} ${prefix}surah <nomor surah>


◪ 𝙎𝙏𝘼𝙇𝙆𝙄𝙉𝙂

${shep} ${prefix}ytstalk <channel>
${shep} ${prefix}igstalk <username>
${shep} ${prefix}githubstalk <username>
${shep} ${prefix}tiktokstalk <username>


◪ 𝙂𝙍𝙊𝙐𝙋

${shep} ${prefix}mute
${shep} ${prefix}unmute
${shep} ${prefix}open
${shep} ${prefix}close
${shep} ${prefix}add
${shep} ${prefix}kick
${shep} ${prefix}promote
${shep} ${prefix}demote
${shep} ${prefix}ownergc
${shep} ${prefix}link
${shep} ${prefix}resetlink
${shep} ${prefix}sider
${shep} ${prefix}listmem
${shep} ${prefix}sampah
${shep} ${prefix}infogc
${shep} ${prefix}revokelink
${shep} ${prefix}welcome <on/off>
${shep} ${prefix}setwelcome
${shep} ${prefix}delwelcome
${shep} ${prefix}cekwelcome
${shep} ${prefix}left <on/off>
${shep} ${prefix}setleft
${shep} ${prefix}delleft
${shep} ${prefix}cekleft
${shep} ${prefix}setname <nama baru>
${shep} ${prefix}setdesk <desk baru>
${shep} ${prefix}chatscount
${shep} ${prefix}caripesan <query>
${shep} ${prefix}detector <on/off>
${shep} ${prefix}addnote <nama note|caption>
${shep} ${prefix}getnote <nama note>
${shep} ${prefix}listnotes
${shep} ${prefix}delnotes <nama note>
${shep} ${prefix}groupsetting
${shep} ${prefix}antidelete <on/off>
${shep} ${prefix}setprefixgc <prefix>
${shep} ${prefix}resetprefix
${shep} ${prefix}pesansementara <on/off>


◪ 𝘼𝙉𝙄𝙈𝙀

${shep} ${prefix}loli
${shep} ${prefix}waifu
${shep} ${prefix}husbu
${shep} ${prefix}shota
${shep} ${prefix}randomanime
${shep} ${prefix}nekonime
${shep} ${prefix}foxnime
${shep} ${prefix}wallanime
${shep} ${prefix}mobilewallanime


◪ 𝙏𝙀𝙓𝙏𝙈𝘼𝙆𝙀𝙍

${shep} ${prefix}blackpink <teks>
${shep} ${prefix}graffiti <teks>
${shep} ${prefix}neon <teks>
${shep} ${prefix}blood <teks>
${shep} ${prefix}leaves <teks>
${shep} ${prefix}papercut <teks>


◪ 𝙍𝘼𝙉𝘿𝙊𝙈

${shep} ${prefix}fakta
${shep} ${prefix}darkjoke
${shep} ${prefix}cerpen
${shep} ${prefix}quotes
${shep} ${prefix}ppcouple
${shep} ${prefix}katabijak
${shep} ${prefix}artinama <nama>
${shep} ${prefix}qrcode <teks>
${shep} ${prefix}tourl
${shep} ${prefix}tourl2


◪ 𝙄𝙈𝘼𝙂𝙀 𝙀𝙁𝙁𝙀𝘾𝙏

${shep} ${prefix}wasted
${shep} ${prefix}wanted
${shep} ${prefix}utatoo
${shep} ${prefix}unsharpen
${shep} ${prefix}tobecontinued
${shep} ${prefix}thanos
${shep} ${prefix}sniper
${shep} ${prefix}sharpen
${shep} ${prefix}sepia
${shep} ${prefix}scary
${shep} ${prefix}rip
${shep} ${prefix}redple
${shep} ${prefix}rejected
${shep} ${prefix}posterize
${shep} ${prefix}ps4
${shep} ${prefix}pixelize
${shep} ${prefix}missionpassed
${shep} ${prefix}moustache
${shep} ${prefix}lookwhatkarenhave
${shep} ${prefix}jail
${shep} ${prefix}invert
${shep} ${prefix}greyscale
${shep} ${prefix}glitch
${shep} ${prefix}gay
${shep} ${prefix}frame
${shep} ${prefix}fire
${shep} ${prefix}distort
${shep} ${prefix}dictator
${shep} ${prefix}deepfry
${shep} ${prefix}ddungeon
${shep} ${prefix}circle
${shep} ${prefix}challenger
${shep} ${prefix}burn
${shep} ${prefix}brazzers
${shep} ${prefix}beautiful
${shep} ${prefix}approved3000years


◪ 𝘼𝘿𝙑𝘼𝙉𝘾𝙀

${shep} ${prefix}ping
${shep} ${prefix}afk <alesan>
${shep} ${prefix}listerror
${shep} ${prefix}addcmd/setcmd <reply sticker>
${shep} ${prefix}delcmd <reply sticker>
${shep} ${prefix}listcmd
${shep} ${prefix}getsticker <cmd>
${shep} ${prefix}tagme
${shep} ${prefix}wa.me
${shep} ${prefix}cekchat
${shep} ${prefix}baterai
${shep} ${prefix}inspect <linkgc>
${shep} ${prefix}tts <kodebahasa teks>
${shep} ${prefix}getpic
${shep} ${prefix}getstatus
${shep} ${prefix}tr
${shep} ${prefix}getexif
${shep} ${prefix}q
${shep} x <kode>
${shep} > <kode>


◪ 𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊

${shep} Allah SWT
${shep} Kedua Orang Tua
${shep} Aqul
${shep} Elios
${shep} Hexagon
${shep} Hardianto
${shep} Team
${shep} Ra-api
${shep} Zahir-api
${shep} Dan semua penyedia module

◪ 𝙕𝘽𝙊𝙏`
}
exports.helpb = helpb
