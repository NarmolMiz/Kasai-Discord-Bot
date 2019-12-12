const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '/'

//-------------------------------------------------

const activities_list = [
  "with the /help command.",
  "with the developers console",
  "with some code",
  "with JavaScript"
];

//--------------------------------------------

client.on('ready', () => {

  console.log(`Bot has been planted, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`En route sur ${client.guilds.size} serveurs`)

  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    client.user.setActivity(activities_list[index]);
  }, 60000);
});
//--------------------------------------------------------

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

//----------------------------------------------------------

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

//--------------------------------------------------------

client.on("message", async message => {

  if (message.author.bot) return;

  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

  if (command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o => { });
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

});
//----------------------------------------------

client.login(process.env.TOKEN);


//-----------------------------------------------

