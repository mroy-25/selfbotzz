const fs = require("fs");
const addCmd = async( id, cmd, reply, db, stik) => {
let anu = null;
  deta = await db.showdata('stickerdb', {id: id})
  try{
  if(deta[0].id === id){
    return reply(`Sticker Sudah terdaftar didatabase dengan command ${deta[0].cmd} sebelumnya!`)
  }
  }catch{
    db.adddata('stickerdb', {
        id: id,
        cmd: cmd,
        sticker: stik
    }).then((error, result) => {
      if(error) return console,log(error)
      console.log(result)
      reply('done')
    })
  }
  if (anu !== null) {
    return anu;
  }
};
const getCmd = async(id, db) => {
return new Promise(async(resolve,reject) => {
deta = await db.showdata('stickerdb', {id: id})
try{
  if(deta[0].id === id){
    resolve(deta[0].cmd)
  }
}catch{
}
})
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

