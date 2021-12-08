let handler = function (m) {
  // this.sendContact(m.chat, '6287775464972', 'Fabzz', m)
  this.sendContact(m.chat, '6287775464972', 'Fabzz', m)
  m.reply('Waitt...')
}
handler.help = ['owner', 'creator', 'pemilikbot']
handler.tags = ['info']

handler.command = /^(owner|creator|pemilikbot)$/i

module.exports = handler
