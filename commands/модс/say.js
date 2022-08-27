const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const { prefix } = require(`../../config.json`)

module.exports = {
  name: "say",
  aliases: ["mods"],

  run: (client, message, args) => {

 let embed = new MessageEmbed()
  .setColor("#87CEEB")
  .setDescription(`${message}`)
  message.channel.send(embed)
  }
}