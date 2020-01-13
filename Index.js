const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = 'rs!';
const ping = require('minecraft-server-util') 
const version = 1.0

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
    msg.channel.send('No u kiddo!');
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

client.on('message', msg => {
  let args = msg.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
    case serverinfo:
      const Embed = new Discord.RichEmbed()
      .setTitle('Server Info')
      .addField('Server Name', msg.guild.name)
      .addField('Server Version', version)
      .setColor(0xF1C40F)
      msg.channel.sendEmbed(Embed);
    break;
  }

})

client.on('message', msg => {
  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'delta':
      msg.channel.send('Sub to Delta Eclipse! Her Channel: https://www.youtube.com/channel/UCWKcJDvVZoQ9npsI9YmdUBg');
    break;
  }

});





client.login(process.env.BOT_TOKEN);