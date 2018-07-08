const Discord = require('discord.js');
const client = new Discord.Client();
const adminprefix = ".";
const devs = ['431150885549113344','259750207321931777']
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
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
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
            message.channel.send('**حط رقم معين يتم السحب منه**');
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
 ╔[❖════════════❖]╗
                  Prefix = ' * '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
                    اوامر ادارية
╚[❖════════════❖]╝

 ❖  *kick <mention > ➾ لطرد عضو
 
 ❖ *mute < mention > ➾ اسكات عضو 

 ❖ *clear  ➾ لتنضيف المحادثة (fixing)

 ❖ *cv <name> ➾ صنع روم صوتية

 ❖ *ct <name> ➾ صنع روم كتابية

 ❖ *unmute <mention> ➾ فك الاسكات من العضو

 ❖ *bc <message> ➾ لارسال رسالة لجميع اعضاء السيرفر


╔[❖════════════❖]╗
                    اوامر عامة
╚[❖════════════❖]╝

❖ *roll <number> ➾ قرعة

❖ *member ➾ معلومات الاعضاء

❖ *avatar ➾ شعار حسابك

❖ *ser-av ➾ شعار السيرفر

❖ *uptime ➾ مدة التشغيل

❖ *id ➾ اي دي

❖ *date ➾ التاريخ

❖ *invs ➾ رابط دخول سيرفرك

❖ *own ➾ مسؤول البوت

❖ *help-ar ➾ المساعدة في العربي

❖ *help-en ➾ المساعدة في الانجليزيلة

❖ *ping ➾ عرض سرعه اتصال البوت

❖ *bot ➾ معلومات البوت

❖ *server ➾ معلومات السيرفر

❖ *invite ➾ رابط دعوة البوت

╔[❖════════════❖]╗
                      الترحيب
╚[❖════════════❖]╝

لتفعيل خاصية الترحيب قم بعمل قناة اسمها "welcome"

==================================================================

Server support: https://discord.gg/9FUHdCn

bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=449945015490445325&permissions=8&scope=bot

==================================================================`);

    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-ar") {
		 message.channel.send('**تم ارسالك في الخاص**');
            
	
		 


 message.author.sendMessage(`
 ╔[❖════════════❖]╗
                  Prefix = ' * '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
                    اوامر ادارية
╚[❖════════════❖]╝

 ❖  *kick <mention > ➾ لطرد عضو
 
 ❖ *mute < mention > ➾ اسكات عضو 

 ❖ *clear  ➾ لتنضيف المحادثة (fixing)

 ❖ *cv <name> ➾ صنع روم صوتية

 ❖ *ct <name> ➾ صنع روم كتابية

 ❖ *unmute <mention> ➾ فك الاسكات من العضو

 ❖ *bc <message> ➾ لارسال رسالة لجميع اعضاء السيرفر


╔[❖════════════❖]╗
                    اوامر عامة
╚[❖════════════❖]╝

❖ *roll <number> ➾ قرعة

❖ *member ➾ معلومات الاعضاء

❖ *avatar ➾ شعار حسابك

❖ *ser-av ➾ شعار السيرفر

❖ *uptime ➾ مدة التشغيل

❖ *id ➾ اي دي

❖ *date ➾ التاريخ

❖ *invs ➾ رابط دخول سيرفرك

❖ *own ➾ مسؤول البوت

❖ *help-ar ➾ المساعدة في العربي

❖ *help-en ➾ المساعدة في الانجليزيلة

❖ *ping ➾ عرض سرعه اتصال البوت

❖ *bot ➾ معلومات البوت

❖ *server ➾ معلومات السيرفر

❖ *invite ➾ رابط دعوة البوت

╔[❖════════════❖]╗
                      الترحيب
╚[❖════════════❖]╝

لتفعيل خاصية الترحيب قم بعمل قناة اسمها "welcome"

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
        .setDescription("تم ارسالك في الخاص")
   .setFooter("اسم سيررك ",'رابط صوره سيرفرك')
                   .setTimestamp()
				message.channel.send('**تم الارسال في الخاص**');


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

message.channel.send('**تم الارسال في الخاص**');

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {


 message.author.sendMessage(`
 
بامكانك دعوة البوت من هنا
***bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=449945015490445325&permissions=8&scope=bot***
Server Support : https://discord.gg/8zRnMrt
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
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
                .addField('** الـسيرفر**', `${message.guild.name}`,true)
                .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
                .addField(' **الرسالة** ', args)
                .setThumbnail(message.guild.iconURL)
                .setColor('RANDOM')
                m.send(`${m}`,{embed: bc});
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('?? | جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('?? | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('??| الرسالة ', args)
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
            message.channel.sendMessage(`تم حفظ السبب وستتم مراجعته من قبل الأونر`)
client.channels.get(`ID Chat admin`).sendMessage("** تم طرد هذا الشخص من قبل " + message.guild.owner + " سبب مذكور **" + args.join("  "))
        }).catch(() => {
            message.channel.send(`:x: I cant kick this member`);
        });
    }
});


client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command === "*mute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
                  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'Mute-Log'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(' Mute ', ' | :white_check_mark: |')
    .addField('تم اعطاء الميوت ل', `${user.username}#${user.discriminator} `)
    .addField('السبب', '**تعكير نظام الشات**')
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};
    if (command === "*unmute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **");
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'console'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('UnMute ', ' | :white_check_mark: |')
    .addField('تم فك الميوت عن', `${user.username}#${user.discriminator} `)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **');

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
  
      .setTitle(`صورة ** ${message.guild.name} **`)
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
  .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
  .addField("**المستخدمين:**", client.users.size)
  .addField("**قنوات:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('*pes15')){
 if(!message.author.id === '324672376455299074') return;
message.channel.sendMessage('تم , جار أرسال الرسالة')
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
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});

client.on('message', message => {
    var prefix = "*"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});

  
client.on("message", (message) => {
if (message.content.startsWith("*ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith("*cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
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
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('! AK', '')

var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`الى اللقاء...`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`! AK`, '')

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
.setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});








var Canvas = require('canvas');// npm i canvas بكج
var jimp = require('jimp');// npm i jimp  بكج
const fs = require("fs");// npm i fs  بكج

      client.on('guildMemberAdd', member => {
      const welcomer =  member.guild.channels.find('name', 'welcome');//اسم الروم الي يرحب فيه

      var Canvas = require('canvas')
      var jimp = require('jimp')

      const w = ['./w1.png',
      './w2.png',
      './w3.png',
      './w4.png',
      './w5.png',
      './w7.png',
      './w8.png'];

              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 2;
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 401, 202);

      })

                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);

                              // افاتار
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.drawImage(ava, 152, 27, 95, 95);

                                                      //wl
                              ctx.font = '20px Arial Bold';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                                         ctx.fillText(member.user.username, 200, 154);

                              //NAME 
                              ctx.font = '20px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                    ctx.fillText(`You Are Number ${member.guild.memberCount} ` // هنا كلمه انك العضو رقم
                              , 200, 190);

 welcomer.sendFile(canvas.toBuffer())



      })
      })
      });






// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
