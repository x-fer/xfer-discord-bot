const fetch = require('node-fetch')
const Discord = require('discord.js')

module.exports = async function(msg, args){
    console.log('called cf!');

    if(args.length == 0){
        msg.channel.send('You must provide a CF handle! E.g. -tmtr cf ivaneo');
    }else{
        var handle = args.shift();

        let url = `https://codeforces.com/api/user.info?handles=${handle}`;
        let response = await fetch(url);
        let json = await response.json();

        // console.log(json);

        if(json.status != 'OK'){
            msg.channel.send('Something went wrong while fetching user info!');
        }else{
            
            var message = new Discord.MessageEmbed()
                .setTitle(String(json.result[0].handle))
                .setImage(json.result[0].avatar)
                .setColor('#ff5f6d')
                .setURL(`https://codeforces.com/profile/${json.result[0].handle}`)
                .addFields(
                    { name: 'Current rating: ', value: String(json.result[0].rating), inline: true},
                    { name: 'Current title: ', value: String(json.result[0].rank), inline: true},
                    { name: 'Max. rating: ', value: String(json.result[0].maxRating), inline: true},
                    { name: 'Max. title: ', value: String(json.result[0].maxRank), inline: true}
                );

            msg.channel.send({embeds: [message]});
        }
    }

    
}