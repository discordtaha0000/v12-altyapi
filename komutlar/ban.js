const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
let guild = message.guild.id;   
var prefix = ayarlar.prefix;
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu Komutu Kullanabilmek İçin \`**Üyeleri Yasakla**\` iznine sahip olmalısın!`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (!user) return message.channel.send(`Sunucudan yasaklamak istediğiniz kullanıcıyı etiketlemelisiniz; \`${prefix}ban @Gnarge Reklam\` `);
  if (user.id === message.author.id) return message.channel.send('Kendini yasaklayamazsın.');
  if (user.position > message.member.roles.highest.position) return message.channel.send(`Bu kullanıcının senin rollerinden/rolünden daha yüksek rolleri/rolü var.`);
    if (!reason) reason = 'Belirtilmemiş.'
    if (!user) return message.channel.send(`Etiketlediğin Kişiyi Sunucuda Bulamadım :eyes:.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`Etiketlediğin Kişiyi Sunucuda Bulamadım :eyes:.`)

 if (!message.guild.member(user).bannable) return message.channel.send(`Bu kişiyi sunucudan yasaklayamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);

   if (!message.guild.member(user).bannable) return message.channel.send('Sunucudaki yetkilileri yasaklayamam!');

  message.guild.members.ban(user.id)
  message.channel.send(`<@${user.id}> **Adlı Kullanıcı Başarıyla Sunucudan Yasaklandı**  <:Yargi:942850561068384326> **Sebep:** \`${reason}\``)

};

exports.conf = {
  aliases: ['yasakla','ban','Ban'],
  permLevel: 0,
  kategori: 'Moderasyon'
};

exports.help = {
  name: 'Ban',
  description: ' \`》Belirttiğiniz Kişiyi Sunucudan Yasaklar.\`',
  usage: 'ban <@kullanıcı> <sebep>',

};
