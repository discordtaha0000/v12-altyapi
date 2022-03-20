const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (bot, message, args) => {
var prefix = ayarlar.prefix;             
    
  if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(`Bu Komutu Kullanabilmek İçin \`**Üyeleri At**\` İznine Sahip Olmalısın!`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (message.mentions.users.size < 1) return message.channel.send(`**Atmamı İstediğin Kullanıcıyı Sunucuda Bulamadım :pensive:**   \`${prefix}at @Gnarge Uyarı\` `);
  if (user.id === message.author.id) return message.channel.send('Kendini atamazsın.');
if (user.position > message.member.roles.highest.position) return message.channel.send(`Bu kullanıcının senin rollerinden/rolünden daha yüksek rolleri/rolü var.`);
			    if (!reason) reason = 'Belirtilmemiş.'
   if (!user) return message.channel.send(`Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`**Atmamı İstediğin kullanıcıyı sunucuda bulamadım :pensive:**.`)

 if (!message.guild.member(user).bannable) return message.channel.send(`Bu kişiyi sunucudan atamıyorum çünkü \`Benden Daha Yüksek Bir Role Sahip\` Ya Da \`Bana Gerekli Yetkileri Vermedin\`.`);

   if (!message.guild.member(user).bannable) return message.channel.send('Sunucudaki Yetkilileri Atamam!');
    message.guild.member(user).kick(reason);
message.channel.send(`<@${user.id}> **Adlı Kullanıcı Sunucudan Atıldı Hoşçakal** | **Sebep:** \`${reason}\``)


};

exports.conf = {
  aliases: ['at'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'Kick',
  description: '\`》Belirttiğiniz Kişiyi Sunucudan Atar :wave:\`',
  usage: 'kick <@kullanıcı> <sebep>',
 
};
