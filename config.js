global.owner = ['6282198571732'] // Put your number here
global.mods = ['628198571732','628989031500'] // Want some help?
global.prems = ['6282198571732','628989031500'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'a72abb5d0420ef3e'
}
global.packname = 'NodeJs WhatsApp Bot'
global.author = 'Ig @barxnl'



let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
