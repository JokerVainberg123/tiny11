const { prefix, developerID } = require("./config.json")
const { config } = require("dotenv");
const db =require("quick.db");
const welc = require("image-cord")
const Discord = require('discord.js')
const express = require('express')
const { Client, MessageEmbed }  = require('discord.js');
const client = new Discord.Client({
  disableEveryone: false
});
let cooldown = new Set();
let cdseconds = 1;

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
process.on('UnhandledRejection', console.error);
 
client.on("message", async message => {
    
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if(cooldown.has(message.author.id)){

    return message.channel.send(`**${message.author.username}** wait \`10\` seconds to use this command!`)
  }
  cooldown.add(message.author.id);
  setTimeout(() => {
cooldown.delete(message.author.id)}, cdseconds * 1000)

  if (!message.member)
    message.member = message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);  

});

client.on("message", async message => {
const channel = db.get(`verify_${message.guild.id}`);

if (channel === null) {
    return;
  }

const chan = client.channels.cache.get(channel);
if (message.channel.name == chan.name) {
  message.delete();
    }
});

client.on("ready", () => {
  client.user.setStatus("idle");
  client.user.setActivity(`| ${prefix}help | С: ${client.guilds.cache.size} | У: ${client.users.cache.size} |`, { type: "WATCHING" })
  }
);

client.on('guildCreate', guild => {
  const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
  channel.send(`**Спасибо, что добавили меня сюда, ведь теперь этот сервер под защитой от ботов**\n**Мой префикс –** \`${prefix}\`\n**Для получения списка команд введи -** \`${prefix}help\`\n**Пожалуйста, сделай следующие действия -**\n\n\`1.\` **Передвинь мою роль выше роли верефикации дабы я мог выдать роль верефицированым пользователям**\n\`2.\` **Убедись, что у меня есть права администратора для работы.**`)
})

client.login("MTAwNjI3MTM5NDU1Mzc5MDU3NQ.GlLtLj.mNVPwWq10MNYmOBJVheDj-zrhO5jRsHjTErtTA"); 