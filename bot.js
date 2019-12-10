/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */
const io = require('socket.io-client');
const socket = io.connect('https://megamanroyale.com:25561');
 //socket.connect('https://megamanroyale.com:25561');
// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

setInterval(function(){ socket.emit('dc-pl');}, 10000);

// update channel name
socket.on('pl-on', (data) => {
  client.channels.find(x => x.id == "620322078154817557").edit({name: 'Players Online: ' + data});
});

setInterval
// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('--your login key here---');
