const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setrrole",
  aliases: ["srr"],
  category: ":frame_photo: WELCOME",
  run: (client, message, args) => {

     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("У вас недостаточно прав для использования этой команды.");
    }
    let vrole = message.mentions.roles.first();
    if(!vrole) {
      return message.channel.send(`Укажите роль, которую вы хотите удалить, когда они пройдут верификацию.`)
    }

    db.set(`srrole_${message.guild.id}`, vrole.id)
    
    message.channel.send(`Сейчас я удалю роль \`${vrole}\` если они пройдут верификацию `)
  }
}