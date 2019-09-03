const Discord = require('discord.js');
const client2 = new Discord.Client();
var creditnumber = Number
var code = Number

client2.on('message', message => {
    if(message.content === 'creditme'){
        message.channel.send("#credit" + "<@" + myid + ">" + Number)
    }
});

client2.login(process.env.BOT_TOKEN2);
