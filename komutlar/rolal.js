const Discord = require('discord.js');
exports.run = (client, message, args) => {

if (!message.guild){
const ozelmesajuyari = new Discord.RichEmbed()
.setColor(0Xff0000)
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.addField(':warning: **Uyarı** :warning:', '`rol-al` ***adlı komutu özel mesajlarda kullanamazsın.**')
return message.author.sendEmbed(ozelmesajuyari); }
let guild = message.guild
let rol = args[1]
let user = message.mentions.members.first()

if(!user) return message.reply('**Kimden Rol Alacağımı Yazmadın!**').catch(console.error);
if (rol.lenght < 1) return message.reply('**Rol idsini belirtmedin**');
user.removeRole(rol);
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: 2
};

exports.help = {
name: 'rol-al',
description: 'Rol Alma Komutu',
usage: 'rol-al [kullanıcı] [@rol]'
}
Bu kanalda mesaj gönderme iznine sahip değilsin.
﻿
