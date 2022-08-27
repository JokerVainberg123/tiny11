const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setverify",
  aliases: ["sv"],
  category: ":frame_photo: WELCOME",
  run: (client, message, args) => {

  
     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("У вас недостаточно прав для использования этой команды.");
    }
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Вы должны указать канал")
    }

    db.set(`verify_${message.guild.id}`, channel.id)
    
    message.channel.send(`Verification channel updated as ${channel}`)
  }
}