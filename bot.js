const Discord = require('discord.js');
const client = new Discord.Client();
const adminprefix = ".";
const devs = ['431150885549113344'];
const child_process = require("child_process");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('ready', () => {
  client.user.setGame('*help | *invite','https://www.twitch.tv/peery13');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
var prefix = "*";	
client.on('message', message => {
        if (message.content.startsWith(prefix + "uptime")) {
    let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** day');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** days');
    }

    if (hours === 1) {
        dateStrings.push('**1** hour');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** hours');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }

    if (seconds === 1) {
        dateStrings.push('**1** second');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** seconds');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    message.channel.send(dateString);
}
});

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
} else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : Êã ÊÛíÑ ÕæÑÉ ÇáÈæÊ`);
        } else     
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
});

client.on('message', message => {
  
if (message.content.startsWith(prefix + 'perm')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});

    }
});


client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**ÍØ ÑÞã ãÚíä íÊã ÇáÓÍÈ ãäå**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

	
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-en") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
 **
__~~GAMER-BOT~~__ By: <@448444251504640012>
?[??????????????]?
             Prefix = ' * '
?[??????????????]?
?[??????????????]?
             Admin Commands
?[??????????????]?
 ? *kick <mention > ? kick member from server
 ? *clear ? clear chat ( not ready yet fixing)
 
 ? *mute < mention > ? mute member
 ? *unmute <mention> ? unmute member
 ? *ct <name> ? create channel
 ? *cv <name> create voice channel
  
 ? *bc <message> ? message all members in server
?[??????????????]?
            General  Commands
?[??????????????]?
? *roll <number> ? role 
? *date ? see date
? *member ? members info
? *ser-av ? server avatar
? *uptime ? to see uptime
? *invs ? server invite link
? *own ? bot owner
? *id ? your id
? *avatar ? your avatar account
? *help-en ? help by arabic
? *help-en ? help by english
? *ping ? to see ping
? *bot ? bot informations 
? *server ? server informations 
? *invite ? bot invite link
?[??????????????]?
                    Welcome
?[??????????????]?
to enable welcome message do channel name "welcome"
==================================================================
Server support: https://discord.gg/8zRnMrt
==================================================================
bot invite link: https://discordapp.com/oauth2/authorize?client_id=438579591355957248&permissions=8&scope=bot
==================================================================
`);

    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-ar") {
		 message.channel.send('**Êã ÇÑÓÇáß Ýí ÇáÎÇÕ**');
            
	
		 


 message.author.sendMessage(`
 **
__~~GAMER-BOT~~__ By: <@448444251504640012>
????
?[??????????????]?
                  Prefix = ' * '
?[??????????????]?
?[??????????????]?
                    ÇæÇãÑ ÇÏÇÑíÉ
?[??????????????]?
 ?  *kick <mention > ? áØÑÏ ÚÖæ
 
 ? *mute < mention > ? ÇÓßÇÊ ÚÖæ 
 ? *clear  ? áÊäÖíÝ ÇáãÍÇÏËÉ (fixing)
 ? *cv <name> ? ÕäÚ Ñæã ÕæÊíÉ
 ? *ct <name> ? ÕäÚ Ñæã ßÊÇÈíÉ
 ? *unmute <mention> ? Ýß ÇáÇÓßÇÊ ãä ÇáÚÖæ
  
 ? *bc <message> ? áÇÑÓÇá ÑÓÇáÉ áÌãíÚ ÇÚÖÇÁ ÇáÓíÑÝÑ
?[??????????????]?
                    ÇæÇãÑ ÚÇãÉ
?[??????????????]?
? *roll <number> ? ÞÑÚÉ
? *member ? ãÚáæãÇÊ ÇáÇÚÖÇÁ
? *avatar ? ÔÚÇÑ ÍÓÇÈß
? *ser-av ? ÔÚÇÑ ÇáÓíÑÝÑ
? *uptime ? ãÏÉ ÇáÊÔÛíá
? *id ? Çí Ïí
? *date ? ÇáÊÇÑíÎ
? *invs ? ÑÇÈØ ÏÎæá ÓíÑÝÑß
? *own ? ãÓÄæá ÇáÈæÊ
? *help-ar ? ÇáãÓÇÚÏÉ Ýí ÇáÚÑÈí
? *help-en ? ÇáãÓÇÚÏÉ Ýí ÇáÇäÌáíÒíáÉ
? *ping ? ÚÑÖ ÓÑÚå ÇÊÕÇá ÇáÈæÊ
? *bot ? ãÚáæãÇÊ ÇáÈæÊ
? *server ? ãÚáæãÇÊ ÇáÓíÑÝÑ
? *invite ? ÑÇÈØ ÏÚæÉ ÇáÈæÊ
?[??????????????]?
                      ÇáÊÑÍíÈ
?[??????????????]?
áÊÝÚíá ÎÇÕíÉ ÇáÊÑÍíÈ Þã ÈÚãá ÞäÇÉ ÇÓãåÇ "welcome"
==================================================================
Server support: https://discord.gg/9FUHdCn
bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=449945015490445325&permissions=8&scope=bot
==================================================================
`);

    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "invs")) {
     if(!message.channel.guild) return;
if (message.author.bot) return;
        message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("Êã ÇÑÓÇáß Ýí ÇáÎÇÕ")
   .setFooter("ÇÓã ÓíÑÑß ",'ÑÇÈØ ÕæÑå ÓíÑÝÑß')
                   .setTimestamp()
				message.channel.send('**Êã ÇáÇÑÓÇá Ýí ÇáÎÇÕ**');


      message.channel.sendEmbed(Embed11).then(message => {message.delete(3000)})
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "own") {


 message.author.sendMessage(`
 
 __~~Bot Staff~~__
??
 __Powered By__: ??????M??#5683
Server Support : https://discord.gg/8zRnMrt
`);

message.channel.send('**Êã ÇáÇÑÓÇá Ýí ÇáÎÇÕ**');

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {


 message.author.sendMessage(`
 
ÈÇãßÇäß ÏÚæÉ ÇáÈæÊ ãä åäÇ
***bot invite link: https://discordapp.com/oauth2/authorize?client_id=438579591355957248&permissions=8&scope=bot***
Server Support : https://discord.gg/8zRnMrt
`);

message.channel.send('**Êã ÇáÇÑÓÇá Ýí ÇáÎÇÕ**');

    }
});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** äæÚ ÇáÓíÑÝÑ**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __ÇáÑÊÈ__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ ÚÏÏ ÇáÇÚÖÇÁ__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ ÚÏÏ ÇáÇÚÖÇÁ ÇáÇæäáÇíä__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ ÇáÑæãÇÊ ÇáßÊÇÈíÉ__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ ÑæãÇÊ ÇáÕæÊ__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ ÇáÃæäÜÑ__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ÇíÏí ÇáÓíÑÝÑ__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ Êã Úãá ÇáÓíÑÝÑ Ýí__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


client.on('message', message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**.bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField('** ÇáÜÓíÑÝÑ**', `${message.guild.name}`,true)
                .addField(' **ÇáÜãÑÓá **', `${message.author.username}#${message.author.discriminator}`,true)
                .addField(' **ÇáÑÓÇáÉ** ', args)
                .setThumbnail(message.guild.iconURL)
                .setColor('RANDOM')
                m.send(`${m}`,{embed: bc});
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('?? | ÌÇÑí ÇÑÓÇá ÑÓÇáÊß ') 
            .addBlankField(true)
            .addField('?? | ÚÏÏ ÇáÇÚÖÇÁ ÇáãÑÓá áåã ', message.guild.memberCount , true)        
            .addField('??| ÇáÑÓÇáÉ ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
});

client.on('message', message => {
  var prefix = "*";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "kick") {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You Dont Have **KICK_MEMBERS** Permission!');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " Kicked From " + message.guild.name);
            message.channel.send("By: " + "<@" + message.author.id + ">")
            message.channel.sendMessage(`Êã ÍÝÙ ÇáÓÈÈ æÓÊÊã ãÑÇÌÚÊå ãä ÞÈá ÇáÃæäÑ`)
client.channels.get(`ID Chat admin`).sendMessage("** Êã ØÑÏ åÐÇ ÇáÔÎÕ ãä ÞÈá " + message.guild.owner + " ÓÈÈ ãÐßæÑ **" + args.join("  "))
        }).catch(() => {
            message.channel.send(`:x: I cant kick this member`);
        });
    }
});


client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command === "*mute") {
          if(!message.channel.guild) return message.reply('**:x: ÇÓÝ áßä åÐÇ ÇáÇãÑ ááÓíÑÝÑÇÊ ÝÞØ **');
                  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** áÇ íæÌÏ áÏíß ÈÑãÔä 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** áÇ íæÌÏ ÑÊÈÉ ÇáãíæÊ 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**áÇ íæÌÏ ÇáÑæã ÇáãÑÇÏ ÇÑÓÇá ÇáãÚáæãÇÊ áå 'Mute-Log'**");
  if (message.mentions.users.size < 1) return message.reply('** íÌÈ Úáíß ÇáãäÔä ÇæáÇð **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(' Mute ', ' | :white_check_mark: |')
    .addField('Êã ÇÚØÇÁ ÇáãíæÊ á', `${user.username}#${user.discriminator} `)
    .addField('ÇáÓÈÈ', '**ÊÚßíÑ äÙÇã ÇáÔÇÊ**')
    .addField('ÈæÇÓØÉ:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** áÇ íæÌÏ áÏí ÈÑãÔä Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};
    if (command === "*unmute") {
          if(!message.channel.guild) return message.reply('**:x: ÇÓÝ áßä åÐÇ ÇáÇãÑ ááÓíÑÝÑÇÊ ÝÞØ **');         
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** áÇ íæÌÏ áÏíß ÈÑãÔä 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** áÇ íæÌÏ ÑÊÈÉ ÇáãíæÊ 'Muted' **");
  if (!modlog) return message.reply("**áÇ íæÌÏ ÇáÑæã ÇáãÑÇÏ ÇÑÓÇá ÇáãÚáæãÇÊ áå 'console'**");
  if (message.mentions.users.size < 1) return message.reply('** íÌÈ Úáíß ÇáãäÔä ÇæáÇð **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('UnMute ', ' | :white_check_mark: |')
    .addField('Êã Ýß ÇáãíæÊ Úä', `${user.username}#${user.discriminator} `)
    .addField('ÈæÇÓØÉ:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** áÇ íæÌÏ áÏí ÈÑãÔä Manage Roles **');

  if (message.guild.member(user).removeRole(muteRole.id)) {
      client.channels.get(modlog.id).send({embed});
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed});
    });
  }

};


});


client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "*ser-av"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`ÕæÑÉ ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)

   message.channel.send({embed});
      }
  });


client.on('message', message => {
     if (message.content === "*bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**ÚÏÏ ÇáÓíÑÝÑÇÊ Çáí ÝíåÇ ÇáÈæÊ:**" , client.guilds.size)
  .addField("**ÇáãÓÊÎÏãíä:**", client.users.size)
  .addField("**ÞäæÇÊ:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('*pes15')){
 if(!message.author.id === '324672376455299074') return;
message.channel.sendMessage('Êã , ÌÇÑ ÃÑÓÇá ÇáÑÓÇáÉ')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
})
    
            
	     
client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='*member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('??| Members info')
      .addBlankField(true)
      .addField('??| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('??| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('??| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('??| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('?| Server Members',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
	
    });


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	    
                        message.channel.send('**Choose**: *help-ar ? arabic | *help-en ? english');

    }
});




client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**ÔßÑÇð áß áÅÖÇÝå ÇáÈæÊ Çáì ÓíÑÝÑß**`)
      guild.owner.send(embed)
});

client.on('message', message => {
    var prefix = "*"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            ÇáÓäÉ = currentTime.getFullYear(),
            ÇáÔåÑ = currentTime.getMonth() + 1,
            Çáíæã = currentTime.getDate();
        message.channel.sendMessage( "ÇáÊÇÑíÎ : " + Çáíæã + "-" + ÇáÔåÑ + "-" +ÇáÓäÉ)
    }
});

  
client.on("message", (message) => {
if (message.content.startsWith("*ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('ÊÜã ÅäÜÔÇÁ Ñæã ßÜÊÇÈÜí')

}
});


client.on("message", (message) => {
if (message.content.startsWith("*cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('ÊÜã ÅäÜÔÇÁ Ñæã ÕÜæÊí')
    
}
});

      client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('*ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });

client.on('message', message => {
    if (message.content.startsWith("*avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`ÚÖæ ÌÏíÏ`)
    .setDescription(`ÇåáÇ Èß Ýí ÇáÓíÑÝÑ`)
    .addField(' :bust_in_silhouette:  ÇäÊ ÑÞã',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('GAMER-BOT', '')

var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`ÎÑÌ ÚÖæ`)
    .setDescription(`Çáì ÇááÞÇÁ...`)
    .addField(':bust_in_silhouette:   ÊÈÞí',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`GAMER-BOT`, '')

var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});

client.on("message", msg => {
  if(msg.content === '*' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField(":trident:|Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField(":id:|iD", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':name_badge:|Status', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField(':game_die:|Playing', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField(':medal:|Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField(':name_badge:|Discriminator', `${msg.discriminator}`, true)
          .addField(':date:|Created At', `${msg.createdAt}`,true)
          .addField(':robot:|Bot', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});















client.on('message' , message => {
     if (message.content === prefix + "servers") {

if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***ãÌãæÚ ÇáÓíÑÝÑÇÊ ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
