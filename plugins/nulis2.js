let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(`https://recoders-area.herokuapp.com/api/nulis?text=${args.join(' ')}&apikey=FreeApi`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'nulis.jpg', `Males Nulis Kan :v`, m, false)
}
handler.help = ['nulis2'].map(v => v + ' <teks>')
handler.tags = ['nulis']

handler.command = /^(nulis2)$/i

module.exports = handler
