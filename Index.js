const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = 'rs!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Noah Sleeping', { type: "WATCHING"}).catch(console.error);
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if (!channel) return;

    channel.send(`Welcome To Random Stuff, ${member}, Read Rules in #rules cutie :3!`)
});


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('@everyone');
  }
});


client.on('message', msg => {
  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'kick':
      if (!args[1]) msg.channel.send('Please Specify a user! Example rs!kick @Random Stuff!#4554')

      const user = msg.mentions.users.first();
      if(user){
        const member = member.guild.member(user);

        if(member){
          member.kick('You Were Kicked from Random Stuff! What did you do this time :3!').then(() => {
            msg.reply(`Kicked user, ${user.tag}`)
          }).catch(err => {
            MessageChannel.reply(`Unable to kick member!`)
            console.log(err);
          });
        }else{
          msg.reply("That user isn\'t in the server, silly!")
        }
      }else{
        msg.reply("That user isn\'t in the server, silly!")
      }
    break;
  }

});






client.login(process.env.BOT_TOKEN);