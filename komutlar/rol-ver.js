const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) return;
  if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply('Bunun için gerekli iznin yok');
  let guild = message.guild
  let rol = message.mentions.roles.first()  
  let user = message.mentions.members.first() 

  if (!user) return message.reply('**Kime Rol Verceğimi Yazmadın!**').catch(console.error);
  if (rol.length < 1) return message.reply('**Rol idsini belirtmedin**');
user.roles.add(rol)
const embed = new Discord.MessageEmbed()
        .setDescription(`${user} kullanıcısından başarıyla ${rol} rolü verildi!`)
        .setFooter('GOLDEN BOT', client.user.avatarURL())
        .setColor(rol.hexColor)
        .setTimestamp()
    message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rol-ver'],
  permLevel: 0,
  kategori: "Moderasyon"
};

exports.help = {
  name: 'rol-ver',
  description: '\`》İstediğiniz Kişiye İstediğiniz Rolü Verir.\`',
  usage: 'rol-ver [kullanıcı] [@rol]'
};
