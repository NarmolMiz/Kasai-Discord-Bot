const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '/'

client.on('ready', () => {
  console.log(`Bot has been planted, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`En route sur ${client.guilds.size} serveurs`)
});

client.on('message', message => {
	if (message.content === `${prefix}ping`) {
           const m = await message.channel.send("Ping?");
           m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
           console.log('Used command : ping')
});

//--------------------------------------------------------

client.login(process.env.TOKEN);
