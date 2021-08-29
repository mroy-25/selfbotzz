const fs = require("fs");
stickerdb = JSON.parse(fs.readFileSync('./src/stickerdb.json'))
const addCmd = ( id, cmd, kode, reply) => {
let anu = null;
  Object.keys(stickerdb).forEach(nganu => {
    if (stickerdb[nganu].id === id) return reply('Sticker tersebut sudah ada didatabase')
  });
  if (anu !== null) {
    return anu;
  }
  const scmd = {
        id: id,
        cmd: cmd,
        sticker: kode
};
  stickerdb.push(scmd);
  fs.writeFileSync("./src/stickerdb.json", JSON.stringify(stickerdb));
  reply('Done')
};
const getCommandPosition = id => {
stickerdb = JSON.parse(fs.readFileSync('./src/stickerdb.json'))
  let anu = null;
  Object.keys(stickerdb).forEach(nganu => {
    if (stickerdb[nganu].id === id) {
      anu = nganu;
    }
  });
  if (anu !== null) {
    return anu;
  }
};
const getCmd = id => {
stickerdb = JSON.parse(fs.readFileSync('./src/stickerdb.json'))
  let anu = null;
  Object.keys(stickerdb).forEach(nganu => {
    if (stickerdb[nganu].id === id) {
      anu = nganu;
    }
  });
  if (anu !== null) {
    return stickerdb[anu].chats;
  }
};
const checkSCommand = id => {
  let anuu = false;
  Object.keys(stickerdb).forEach(nganu => {
    if (stickerdb[nganu].id === id) {
      anuu = true;
    }
  });
  return anuu;
};
module.exports.addcmd = addCmd;
module.exports.getcmd = getCmd;
module.exports.getcmdpos = getCommandPosition

