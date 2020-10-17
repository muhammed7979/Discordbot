const Discord = require('discord.js');

exports.run = (client, message, args) => {

let user = message.mentions.members.first();
let rol = args[1]

if(!user) return message.reply('**Kime Rol Vereceğimi Yazmadın!**').catch(console.error);
if (!rol.lenght < 1) return message.reply('**Rol idsini belirtmedin**');

  if(!message.member.roles.find("name", "Buraya ID")){
    user.addRole(rol);
    message.channel.send("Rol Başarı İle Verildi..")
  }else{
    message.channel.send("Role Zaten Sahip Kendileri..")
}
  

};

exports.conf = {
enabled: true,
aliases: ["rolver"],
permLevel: 0
};

exports.help = {
name: 'rol-ver',
description: 'Rol Verme Komutu',
usage: 'rol-ver [kullanıcı] [@rol]'
}
Bu kanalda mesaj gönderme iznine sahip değilsin.
