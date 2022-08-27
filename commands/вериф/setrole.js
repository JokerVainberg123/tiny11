const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setrole",
  aliases: ["sr"],
  category: ":frame_photo: WELCOME",
  run: (client, message, args) => {

     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("У вас недостаточно прав для использования этой команды.");
    }
    let vrole = message.mentions.roles.first();
    if(!vrole) {
      return message.channel.send(`Укажите роль, которая будет выдаваться, когда они пройдут верификацию.`)
    }

    db.set(`verole_${message.guild.id}`, vrole.id)
    
    message.channel.send(`Теперь роль \`${message}\` будет выдаваться когда они пройдут верификацию.`)
  }
}