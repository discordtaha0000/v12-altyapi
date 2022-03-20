const Discord = require('discord.js');
exports.run = async (client, message, args) => {

let anket = args.slice(0).join(" ")
if(!anket) return message.channel.send("**Ne Anketi Yapacaksın?**")

let Kexpert = new Discord.MessageEmbed()
.setFooter(message.author.tag, message.author.avatarURL())
.setColor("#fff300")
.setTitle(message.guild.name +" Anket")
.setDescription(`
${anket}

`)
message.channel.send(Kexpert).then(async m => {
await m.react("✅")
await m.react("❌")
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['anket','Anket'],
  permLevel: 0
}

exports.help = {
  name: 'anket',
  description: "anket",
  usage: 'anket'
}
