const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const { prefix } = require(`../../config.json`)

module.exports = {
  name: "help",
  aliases: ["other"],

  run: (client, message, args) => {

 let embed = new MessageEmbed(
  .setTitle(`・ Список команд ・`)
  .setColor("#87CEEB")
  .addField( "Модерация",`> \`${prefix}clear\`: Очистить последние сообщения в текущем канале` )
  .addField( "Верификация",`> \`${prefix}setverify\`: Установить канал верификации.\n> \`${prefix}setrole\`: Выдаёт роль после верификации.\n> \`${prefix}setrrole\`: Удаляет роль, когда они используют команду в канале верификации.\n> \`${prefix}verify\`: Он дает или удаляет роль, он работает только в канале верификации.\n> \`${prefix}rvrole\`: Удалить выдачу роли после верификации\n> \`${prefix}rvchannel\`: Удалить верификацию\n> \`${prefix}rrvrole\`: Удалить роль, которая выдаётся после верификации`) 
  .addField( "Утилиты",`> \`${prefix}info\`: Информация о боте` )
  .setThumbnail( message.guild.iconURL() )
  .setTimestamp()
  message.channel.send(embed)
  }
}