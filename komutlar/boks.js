const Discord = require('discord.js')
exports.run = async(client, message, args) => {
     const rating = Math.floor(Math.random() * 1000) + 1
     const kisi = message.mentions.users.first()  || message.author
     const d = new Discord.MessageEmbed()
     .setDescription(`Makine Çalıştı!
     
     Boks Makinesi **${rating}** Gösteriyor!  
      
     `)
    .setAuthor(`GOLDEN BOT`, client.user.avatarURL({ dynamic: true}))
  message.channel.send(new Discord.MessageEmbed()
                      .setTitle("Boks Makinesi Çalıştırılıyor...")
                      ).then((msg)=> {
  setTimeout(function(){
    msg.edit(d);
  }, 2000)
  })
                             
     //fiber
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['boks','Boks'],
  permLevel: 0,
  kategori: "Eğlence"
};
exports.help = {
name: 'boks-makinesi',
description: '\`》Boks Makinesi Similatörü'
};
