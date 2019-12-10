const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '/'

client.on('ready', () => {
  console.log(`Bot has been planted, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`En route sur ${client.guilds.size} serveurs`)
});

client.on('message', message => {
	console.log(`${message.author.username} send ${message.content} !!`)
});
//--------------------------------------------------------

client.login(process.env.TOKEN);
