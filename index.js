const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '/'

client.on('ready', () => {
  console.log(`Bot has been planted, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`En route sur ${client.guilds.size} serveurs`)
});

client.on('message', message => {
	if (message.content.startsWith(${prefix}TEST)) {
		console.log(`${message.author} use command : (${message.content})
	}
});

//--------------------------------------------------------

client.login(process.env.TOKEN);
