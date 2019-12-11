const db = require('quick.db')

exports.run = (bot, messsage, args, func) => {

 if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This resuires you to have a role with `ADMINISTRATOR`')
 if (!args.join("")) return MessageChannel.channel.send('Please enter arguments, `setPrefix<prefix>`')

 db.updateText(`guildPrefix_${message.guild.id}`, args.join().trim()).then(i => {

  message.channel.send('Prefix changed to ' + i.text);

 })

}