const Discord = require('discord.js')

module.exports = async function(msg, args){
    console.log('called unknown-command!')

    var message = new Discord.MessageEmbed()
        .setColor('#ff5f6d')
        .setDescription('Nepoznata naredba, pozovi \`-xfer help\` za popis naredbi.')

    msg.channel.send( {embeds: [message]} );
}