const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const sharpen = new Discord.MessageEmbed()

    .setColor("")
     .setURL("BOTUNUZUN DAVET LİNKİ")
    .setTitle("BOT U SUNUCUNA EKLEMEK İÇİN TIKLA");
  message.channel.send(sharpen);
};

exports.conf = {
  enabled: true,
  aliases: ["davet", "davet-et"],
  kategori: 'Genel'
};

exports.help = {
  name: "davet",
  description: "》\`Bot Davet Linkini Gönderir.\`",
  usage: "davet"
};
