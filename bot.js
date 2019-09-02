const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");
const myid = ['524218118462242816'];
const prefix = ['!'];


client.on("ready", () => {
let channel =     client.channels.get("618079138376450198")
setInterval(function() {
channel.send(`لا لا لا لا لال ال ا تم الدعس hi hi`);
}, 3)
});

client.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client.on('message', message => {
    if(message.content === 'هاي'){
        message.channel.send("يوووووووووه ابن المتناكة دا تاني")
    }
});

client.login(process.env.BOT_TOKEN);
