const fetch = require('node-fetch')
const Discord = require('discord.js')

module.exports = async function(msg, args){
    console.log('called prosjek!');

    if(args.length == 0){
        var message = new Discord.MessageEmbed()
                .setColor('#ff5f6d')
                .setDescription('You must provide a CF handle! E.g. \`-xfer prosjek ivaneo\`');

        msg.channel.send({embeds: [message]});
    }else{
        var handle = args.shift();

        let url = `https://codeforces.com/api/user.status?handle=${handle}`;

        try {
            let response = await fetch(url);
            let json = await response.json();

            let ok = json.result.filter(problem => problem.verdict == 'OK');
            
            let unique = new Set();
            let ratingSum = 0;

            for(let problem of ok) {
                if(!unique.has(problem.id)) {
                    unique.add(problem.id);
                    if(problem.problem.rating !== undefined) ratingSum += problem.problem.rating;
                }                
            }

            let average = ratingSum / unique.size;
            
            var message = new Discord.MessageEmbed()
                .setColor('#ff5f6d')
                .setTitle(handle)
                .setURL(`https://codeforces.com/profile/${handle}`)
                .setDescription(`Prosječna težina riješenih zadataka: **${average.toFixed(2)}**`);

            msg.channel.send({embeds: [message]});

        } catch (error) {
            var message = new Discord.MessageEmbed()
                .setColor('#ff5f6d')
                .setDescription('Something went wrong while fetching user info!');

            msg.channel.send({embeds: [message]});
        };

    }
}