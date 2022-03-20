const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");


exports.run = (client, message, params) => {
     if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
      if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor("#290000")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (message.channel.type !== "dm") {
    const CrewCode = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}  Çayını İçti`) //CrewCode
      .setColor("RED")
      .setTimestamp()
      .setDescription("")
      .setURL("")
    
      .setImage(
        `https://cdn.discordapp.com/attachments/921430176456376350/931190077097394236/cay-istanbul-1475368.jpg`
      );
    return message.channel.send(CrewCode);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çay'],
  permLevel: 0,
  kategori: "Menü"
};

exports.help = {
  name: "çay",
  description: "\`》Çay İçersiniz\`",
  usage: "Çay"
}
