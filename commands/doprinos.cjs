const Discord = require('discord.js')

module.exports = async function(msg, args){
    console.log('called doprinos!');

    var message = new Discord.MessageEmbed()
        .setColor('#ff5f6d')
        .setDescription('Želite li pomoći u izgradnji X.FER Bota, pogledajte upute za doprinos na [linku](https://github.com/x-fer/xfer-discord-bot/blob/master/CONTRIBUTING.md)!');

    msg.channel.send( {embeds: [message]} );
}