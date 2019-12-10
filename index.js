const Discord = require("discord.js");
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
  if (message.content.startsWith(`${prefix}kick`)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let member = args[0];
    let reason = args[1];
    member.kick(reason).then((member) => {
      message.channel.get('653993368405409831').send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
    });
  }
});

//----------------------------------------------

client.login(process.env.TOKEN);


//-----------------------------------------------

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if (command === "asl") {
  let age = args[0]; // Remember arrays are 0-based!.
  let sex = args[1];
  let location = args[2];
  message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
}

https://anidiots.guide/first-bot/command-with-arguments