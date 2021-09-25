const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const client = require('./lib/database')
const simple = require('./lib/simple')
let WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require("qrcode-terminal")
const fs = require('fs')
const { color } = require('./lib/color')
let zynn = new WAConnection()
exports.zynn = zynn
require('./taka.js')
require('./skrep.js')
nocache('./skrep.js', module => console.log(`${module} is now updated!`))
nocache('./taka.js', module => console.log(`${module} is now updated!`))
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
const connects = async(zynn) => {
    let authofile = './session.json'
    //zynn.version = [2, 2119, 6]
    zynn.logger.level = 'warn'
	zynn.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(`QR Siap, Scan Pack`)
    })
    /*
	zynn.on('credentials-updated', () => {
		fs.writeFileSync(authofile, JSON.stringify(zynn.base64EncodedAuthInfo(), null, '\t'))
		console.log(color('Wait....'))
	})
    */
	fs.existsSync(authofile) && zynn.loadAuthInfo(authofile)
	zynn.on('connecting', () => {
		console.log(color('Connecting...'))
	})
	zynn.on('open', () => {
		console.log(color('Welcome Owner'))
	})
	await zynn.connect({timeoutMs: 30*1000})
    fs.writeFileSync(authofile, JSON.stringify(zynn.base64EncodedAuthInfo(), null, '\t'))
zynn.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
fs.writeFileSync('./src/batre.json' , JSON.stringify(json[2][0], null , 2))
})
zynn.on('group-participants-update', async (msg) => {
if(setting.canvas == 'swiftcord'){
    require('./lib/swiftcord.js')(zynn, msg, client)    
}
else{
require('./lib/detection.js')(zynn, msg, client)
}
})
zynn.on('group-update', async (msg) => {
require('./lib/gupdate.js')(zynn, msg, client)
})
zynn.on('chat-update', async (message) => {
require('./taka.js')(zynn, message, client)
})
zynn.on('message-delete', async (message) => {
require('./lib/antidelete.js')(zynn, message, client)
})


/*    zynn.on('message-update', async (message) => {
        require('./antidelete.js')(zynn, message)
    })*/
    return zynn
}
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */


/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
connects(zynn)
module.exports.connects = connects;
