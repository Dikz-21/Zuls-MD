let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0858-3981-4393]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
