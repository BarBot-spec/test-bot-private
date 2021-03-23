const fetch = require('node-fetch')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')
const fs = require('fs')
async function upimg(buffer) {
  const { ext } = await fromBuffer(buffer)
  let form = new FormData
  form.append('file', buffer, 'tmp.' + ext)
  let res = await fetch('https://telegra.ph/upload', {
    method: 'POST',
    body: form
  })
  let img = await res.json()
  if (img.error) throw img.error
  return 'https://telegra.ph' + img[0].src
}

 let handler  = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m
      let img = await q.download()
      if (!img) throw 'Foto/Video tidak ditemukan'
      try {
      urlfile = await upimg(fs.readFileSync(img))
      m.reply(urlfile)
      } catch (e) {
      m.reply(`${e}`)
     }
}
handler.help = ['upimg']
handler.tags = ['quotes']
handler.command = /^(upimg)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
