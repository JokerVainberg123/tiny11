const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "rvrole",
  aliases: ["rvr"],
  category: ":frame_photo: WELCOME",

  run: (client, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("У вас недостаточно прав для использования этой команды.");
    }
 
  db.delete(`verole_${message.guild.id}`);
  
    message.channel.send(`Удалена роль которая выдавалась после верификации`)
  }
}