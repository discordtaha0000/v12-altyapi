const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
  let animEmotes = [],
    staticEmotes = [];
  var guild = msg.guild;

  guild.emojis.cache.forEach(e => {
    e.animated
      ? animEmotes.push(`<a:${e.name}:${e.id}>`)
      : staticEmotes.push(`<:${e.name}:${e.id}>`);
  });
  staticEmotes =
    staticEmotes.length !== 0
      ? `__**[${staticEmotes.length}] Normal Emoji**__\n${staticEmotes.join(
          ""
        )}`
      : "\n**Sunucuda Normal Emoji Bulunamadı :x:**";
  animEmotes =
    animEmotes.length !== 0
      ? `\n\n__**[${animEmotes.length}] Hareketli Emoji**__\n${animEmotes.join(
          ""
        )}`
      : "\n**Sunucuda Hareketli Emoji Bulununamadı :x:**";
  try {
    let botembed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setDescription(staticEmotes + animEmotes)
      .setAuthor(`${msg.guild.name} Sunucusu Emojileri`, msg.guild.iconURL())
      .setFooter(
        "Bu komutu kullanan kullanıcı " + msg.author.tag,
        msg.author.avatarURL()
      )
      .setTimestamp();
    return msg.channel.send(botembed);
  } catch (err) {
    const embed = new Discord.MessageEmbed()
      .addField(
        `Sunucuda Bulunan Emojiler`,
        "Üzgünüm Ama Sunucunuzda Ya Hiç Emoji Bulunmuyor,Bunları Gösteremiyorum Ya Da Discord Buna İzin Vermiyor."
      )
      .setColor("#fff300")
      .setFooter(
        "Bu komutu kullanan kullanıcı " + msg.author.tag,
        msg.author.avatarURL()
      )
      .setTimestamp();
    msg.channel.send(embed);
  }
};
//GOLDEN BOT ALTYAPISIN'DAN BU DOSYAYA AKTARILMIŞTIR!
exports.conf = {
  aliases: ["emoji-liste"],
  permLevel: 0,
  kategori: "Sunucu"
};

exports.help = {
  name: "Emojiler",
  description: "\`》Sunucdaki Bütün Emojileri Gösterir\`",
  usage: "Emojiler"
};
