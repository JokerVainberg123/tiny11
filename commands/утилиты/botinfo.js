const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const { prefix } = require(`../../config.json`)

module.exports = {
  name: "info",
  aliases: ["utils"],

  run: (client, message, args) => {

 let embed = new MessageEmbed()
  .setTitle(`・ Информация о боте ・`)
  .setColor("#87CEEB")
  .addField( "Разработчики","> [Lanseicer#7311](https://discord.com/users/679999751881490475)\n> [Каспер#3333](https://discord.com/users/636667260810952724)")
  .addField( "Статистика",`> Всего серверов: \`${client.guilds.cache.size}\`\n> Всего участников: \`${client.users.cache.size}\`\n> Всего каналов: \`${client.channels.cache.size}\``)
  .addField( "Мониторинги","> Скоро...\n> Скоро..." )
  .setFooter("・ Выполнил: " + message.author.tag)
  .setThumbnail( message.guild.iconURL() )
  .setTimestamp()
  message.channel.send(embed)
  }
}