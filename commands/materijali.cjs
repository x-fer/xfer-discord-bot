const Discord = require('discord.js')

module.exports = async function(msg, args){
    console.log('called materijali!');

    var message = new Discord.MessageEmbed()
        .setColor('#ff5f6d')
        .setDescription('Materijale pronađi na stranici [materijali.xfer.hr](https://materijali.xfer.hr)!');

    msg.channel.send( {embeds: [message]} );
}