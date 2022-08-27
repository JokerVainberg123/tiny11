const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "rrvrole",
  aliases: ["rrvr"],

  run: (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("У вас недостаточно прав для использования этой команды.");
    }
 
  db.delete(`srrole_${message.guild.id}`);
    
    message.channel.send(`Удалена роль, которая выдавалась после верификации `)
  }
}