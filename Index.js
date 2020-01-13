const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = 'rs!';
const ping = require('minecraft-server-util') 

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

client.on('message', msg => {
  let args = msg.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case 'delta':
      msg.channel.send('Sub to Delta Eclipse! Her Channel: https://www.youtube.com/channel/UCWKcJDvVZoQ9npsI9YmdUBg');
    break;
  }

});

client.on('message', msg => {
  let args = msg.content.substring(PREFIX.length).split(' ');
  
  switch (args[0]){
    case 'hypixel':

      ping('hypixel.net', 25565, (error, Response) => {
        if(error) throw error;
        msg.channel.send(new RichEmbed()
        .setTitle('Hypixel Server Status')
        .addField('Server IP', Response.host)
        .addField('Server Version', Response.version)
        .addField('Online Players', Response.onlinePlayers )
        .addField('Max Players', Response.maxPlayers))
      });
    break;
  }
});



client.login(process.env.BOT_TOKEN);