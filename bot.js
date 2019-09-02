const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
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

client.on('message', message => {
    if(message.content === 'daily'){
        message.channel.send("#daily")
    }
});


client.on('message', message => {
    if(message.content === 'هلا'){
        message.channel.send("هلا في طيزك")
    }
});

client.on('message', message => {
    if(message.content === 'credit'){
        message.channel.send("#credit")
    }
});

client2.on("ready", () => {
let channel =     client2.channels.get("618079138376450198")
setInterval(function() {
channel.send(`لا لا لا لا لال ال ا تم الدعس hi hi`);
}, 3)
});

client2.on('message', message => {
    if(message.content === prefix+'ريب'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client2.on('message', message => {
    if(message.content === 'هاي'){
        message.channel.send("يوووووووووه ابن المتناكة دا تاني")
    }
});

client2.on('message', message => {
    if(message.content === 'daily'){
        message.channel.send("#daily")
    }
});


client2.on('message', message => {
    if(message.content === 'هلا'){
        message.channel.send("هلا في طيزك")
    }
});

client2.on('message', message => {
    if(message.content === 'credit'){
        message.channel.send("#credit")
    }
});


client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);
