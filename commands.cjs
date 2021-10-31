const requireDir = require('require-dir')
const commands = requireDir('./commands', {extensions: ['.cjs']});

module.exports = async (msg) => {
    var tokens = msg.content.split(' ');
    var first = tokens.shift();

    var channelId = msg.channel.id;

    var commandKeyword = '-' + (process.env.LOCAL_TESTING_COMMAND || 'xfer');

    if(first == commandKeyword && channelId == '902631889997803520'){
        var tag = tokens.shift();
        tag = tag.toLowerCase();

        try{
            commands[tag](msg, tokens);
        }catch(err){
            commands['unknown-command'](msg, tokens);
        }
        
    }
}