const Discord = require('discord.js')

module.exports = async function(msg, args){
    console.log('called help!')
    
    var message = new Discord.MessageEmbed()
        .setColor('#ff5f6d')
        .setDescription('Popis naredbi pronađi na [linku](https://github.com/x-fer/xfer-discord-bot/blob/main/COMMANDS.md).')

    msg.channel.send( {embeds: [message]} );
}