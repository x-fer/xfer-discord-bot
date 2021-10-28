const Discord = require('discord.js')

module.exports = async function(msg, args){
    console.log('called ferweb!');

    var message = new Discord.MessageEmbed()
        .setColor('#ff5f6d')
        .setDescription('Prezentacije s predavanja i druge sadržaje pronađi na [FER Webu](https://www.fer.unizg.hr/predmet/natpro)!');

    msg.channel.send( {embeds: [message]} );
}