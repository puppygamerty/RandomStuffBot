const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = 'rs!';
const ping = require('minecraft-server-util') 
const version = 1.0

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('with a switchblade', { type: "PLAYING"}).catch(console.error);
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if (!channel) return;
    
    const EmbedWelcome = new Discord.RichEmbed()
    .setTitle('New Member')
    .addField('User', member.displayName)
    .addField('Server', member.guild)
    .setThumbnail(member.user.avatarURL)
    .setColor(0x34C3ED)
    .setFooter('Welcome to Random Stuff! We hope you have a good time!')

    channel.send(EmbedWelcome)
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find(channel => channel.name === "welcome");
  if (!channel) return;

  channel.send(`Oh! ${member} Decided to Leave >:(. Well, RIP.`)
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('No u kiddo!');
  }
});

client.on('message', msg => {
  if (msg.content === 'pig'){
    msg.channel.send('🐷')
    msg.delete (10);
  }
})


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
    case 'info':
      const Embed = new Discord.RichEmbed()
      .setTitle('User Info')
      .addField('User Name', msg.author.username)
      .addField('Current Server', msg.guild.name)
      .addField('Server Version', version)
      .setColor(0xF1C40F)
      .setThumbnail(msg.author.avatarURL)
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