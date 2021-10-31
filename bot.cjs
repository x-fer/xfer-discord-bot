require('dotenv').config();

const Discord = require('discord.js')
const commandHandler = require('./commands.cjs')

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_EMOJIS_AND_STICKERS"]});

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => console.log('The bot is ready.'));

client.on('messageCreate', commandHandler);