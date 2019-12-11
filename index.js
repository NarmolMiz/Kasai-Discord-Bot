const Discord = require("discord.js");
const db = require('quick.db');
const client = new Discord.Client();
const prefix = '/'

const activities_list = [
  "with the /help command.",
  "with the developers console",
  "with some code",
  "with JavaScript"
];

client.on('ready', () => {

  console.log(`Bot has been planted, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`En route sur ${client.guilds.size} serveurs`)

  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    client.user.setActivity(activities_list[index]);
  }, 60000);
});

//--------------------------------------------------------

client.on("message", (message) => {

  if (message.channel.type != 'text') return message.channel.send('Please use commands in the server !!')

  db.fetchObject(`guildPrefix_${message.guild.id}`).then(i => {

    let prefix;

    if (i.text) {
        prefix = i.text
    } else {
      prefix = '='
    }

  })

});

//----------------------------------------------

client.login(process.env.TOKEN);


//-----------------------------------------------

