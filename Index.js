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
    case 'ily':
      msg.channel.send(':D');
    break;
  }

});






client.login(process.env.BOT_TOKEN);