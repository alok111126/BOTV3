let handler = async m => m.reply(`
*「 LIST HARGA SEWA BOT 」*

❒ Sewa = _1k/grup (1 minggu)_
❒ Sewa = _2k/grup (2 minggu)_
❒ Sewa = _5k/grup (1 bulan)_
❒ Sewa = _10k/grup (MANEN)_
❒ Free = _30 menit Bot Masuk Ke Group Kalian Setelah Itu Bot Akan Keluar_

◪ *PEMBAYARAN BISA MELALUI*

❒ _PULSA_
❒ _GOPAY_
❒ _OVO_
❒ _DANA_

◪ 𝙆𝙀𝙐𝙉𝙏𝙐𝙉𝙂𝘼𝙉 𝙎𝙀𝙒𝘼 𝘽𝙊𝙏

❒ *Fitur Premium Terbuka*
❒ *Limit UNLIMITED*
❒ *Bisa Menyuruh Bot Buka/Tutup Group*
❒ *Kick Orang*
❒ *Add Orang*
❒ *Anti Link On*
❒ *Fitur Game Banyak Sepuas Nya Main*
❒ *Bisa Memasukkan Bot Ke dalam Grup*

Ingin Jadi Bot Seperti ini?
ketik #jadibot
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewabot', 'buypremium']
handler.tags = ['main']
handler.command = /^(sewabot|buypremium)$/i

handler.limit = false

module.exports = handler
