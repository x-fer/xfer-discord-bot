const Discord = require('discord.js')

module.exports = async function(msg, args){
    console.log('called moj-natpro!');

    var message = new Discord.MessageEmbed()
        .setColor('#ff5f6d')
        .setDescription('Nastavne aktivnosti i stanje bodova pronađi na stranici [Moj NatPro](https://xfer.hr/moj-natpro/dashboard/)!');

    msg.channel.send( {embeds: [message]} );
}