const { MessageType } = require('@adiwajshing/baileys')
const { stickerFinal, addExif } = require('./sticker')
exports.stickerCase  = async (m, reply, conn, args) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) reply('Foto/Video tidak ditemukan')
      stiker = await stickerFinal(img, false, 'test', 'asu')
    } else if (args[0]) stiker = await stickerFinal(false, args[0], 'test', 'asu')
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else reply('Conversion failed')
  }
}
exports.stickerCaseWm  = async (m, reply, conn, author, pack) => {
    let stiker = false
    try {
      let q = m.quoted ? m.quoted : m
      let mime = (q.msg || q).mimetype || ''
      if (/image|video/.test(mime)) {
        let img = await q.download()
        if (!img) reply('Foto/Video tidak ditemukan')
        stiker = await stickerFinal(img, false, author, pack)
      } else if (stickUrl) stiker = await stickerFinal(false, args[0], global.pack, global.author)
    } finally {
      if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
        quoted: m
      })
      else reply('Conversion failed')
    }}
    
exports.takeStick  = async (m, reply, conn, author, pack) => {
    try {
      let q = m.quoted ? m.quoted : m
      let mime = (q.msg || q).mimetype || ''
      if (/webp/.test(mime)) { 
        let img = await q.download()
        if (!img) reply('Sticker tidak ditemukan')
        let dtStick = await addExif(img, author ? author : '', pack ? pack : '')
        conn.sendMessage(m.chat, dtStick, MessageType.sticker, {
        quoted: m
      })
    }else {
        reply('Conversion failed')
    }
} catch {
    
}
}
