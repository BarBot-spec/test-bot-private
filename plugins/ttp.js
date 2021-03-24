const fetch = require('node-fetch')
const uploadImage = require('../lib/uploadImage.js')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {
  if (text) {
    let res = await fetch('https://api.areltiyan.site/sticker_maker?text=' + encodeURIComponent(text))
    let json = await res.json()
    let img = Buffer.from(json.base64.split`,`[1], 'base64')
    if (!img) throw img
    let stiker = await sticker(img, false, packname, author)
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = /^ttp$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
