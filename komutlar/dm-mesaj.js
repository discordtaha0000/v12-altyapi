const Discord = require('discord.js');
exports.run = (client, message, args) => {
        if (message.author.id != "BOTUN SAHİP İD Sİ") return message.reply('Bunu Sadece Sahibim Kullanabilir!');
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Kime Mesaj Göndereceğim yaz veya etiketle.')
  if (reason.length < 1) return message.reply('Ne Göndereceksin?').catch(console.error);
  message.delete();
  message.reply('Mesajını Başarıyla Gönderdim ✅.')
  const embed = new Discord.MessageEmbed()
  .setColor('')
  .setTitle('Bir Mesajın Var')
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dm-at','dm'],
  permlevel: 4
};

exports.help = {
  name: 'mesaj-at',
  description: 'Bir kullanıcıya özelden mesaj yollar.',
  usage: 'mesaj-at'
};
