// import requireDir from 'require-dir';
const requireDir = require('require-dir')
const commands = requireDir('./commands', {extensions: ['.cjs']});

module.exports = async (msg) => {
    var tokens = msg.content.split(' ');
    var first = tokens.shift();

    var channelId = msg.channel.id

    if(first == '-xfer' && channelId == '902631889997803520'){
        var tag = tokens.shift();

        try{
            commands[tag](msg, tokens);
        }catch(err){
            console.log('kriva komanda');
            commands['unknown-command'](msg, tokens);
        }
        
    }
}