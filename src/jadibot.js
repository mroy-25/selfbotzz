
const { MessageType } = require('@adiwajshing/baileys')
const { WAConnection } = require('@adiwajshing/baileys')
const qrcode = require('qrcode');
const fs = require('fs')
const base64ToImage = require('base64-to-image');
const djadibot = JSON.parse(fs.readFileSync('./src/djadibot.json'))
exports.jadibot = async function(kon,zynn,from,sender) {  
  kon.on('qr' ,async qr => {
  url = await qrcode.toDataURL(qr)
        console.log(url)
        buff = await Buffer.from(url.split('data:image/png;base64,')[1], 'base64')
        await fs.writeFileSync('./jadibot.jpg', buff)
    let scen = await zynn.sendMessage(from, fs.readFileSync('./jadibot.jpg'), MessageType.image, {caption: 'Scan qrcode ini untuk jadi bot sementara!'})
  setTimeout(() => {
       zynn.deleteMessage(from, scen.key)
  }, 30000);
  })
kon.on ('open',() => {
  console.log ('credentials update')
  const authInfo = kon.base64EncodedAuthInfo()
  fs.writeFileSync(`./jadibot/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
/*const databot = {
        jid : conn.user.jid,
        name : conn.user.name,
        wa_version : conn.user.phone.wa_version,
        mcc : conn.user.phone.mcc,
        mnc : conn.user.phone.mnc,
        os_version : conn.user.phone.os_version,
        device_m : conn.user.phone.device_manufacturer,
        device_model : conn.user.phone.device_model,
        os_build_number : conn.user.phone.os_build_number,
        public : false
}
djadibot.push(databot)
  fs.writeFileSync('./src/djadibot.json', JSON.stringify(djadibot))
*/
zynn.sendMessage(from, JSON.stringify(kon.user), MessageType.text)
})
    kon.on('chat-update', async (chat) => {
        require('../index.js')(kon, chat) 
    })
   exports.conn = kon 
    await kon.connect()
    }
exports.stopjadibot = async function(conn, from, sender){
  await fs.unlinkSync(`./jadibot/${sender}.json`)
  conn.close()
}
