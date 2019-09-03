const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
console.log("Scrpit By Shadow");
const myid = ['524218118462242816'];
const prefix = ['!'];

var creditnumber = Number
var code = Number

creditnumber = 1111
code = 0000



client.on("ready", () => {
let channel =     client.channels.get("618079138376450198")
setInterval(function() {
channel.send(`الزعامة فوقك يمعرص خد ناحو hhhhhhh ksmk`);
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

client.on('message', message => {
    if(message.content === 'creditme'){
        message.channel.send("#credit" + "<@" + myid + ">")
    }
});

client.on('message', message => {
    if(message.content === 'creditme'){
        message.channel.send("#credit" + "<@" + myid + ">" + Number)
        message.channel.send(code)
    }
});

client2.on("ready", () => {
let channel =     client2.channels.get("618079138376450198")
setInterval(function() {
channel.send(`الزعامة فوقك يمعرص خد ناحو hhhhhhh ksmkk`);
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


client2.on('message', message => {
    if(message.content === 'creditme'){
        message.channel.send("#credit" + "<@" + myid + ">" + Number)
        message.channel.send(code)
    }
});

client3.on("ready", () => {
    let channel =     client3.channels.get("618079138376450198")
    setInterval(function() {
    channel.send(`الزعامة فوقك يمعرص خد ناحو hhhhhhh ksmkk`);
    }, 3)
    });
    
    client3.on('message', message => {
        if(message.content === prefix+'ريب'){
            message.channel.send("#rep "+"<@" + myid + ">")
        }
    });
    
    client3.on('message', message => {
        if(message.content === 'هاي'){
            message.channel.send("يوووووووووه ابن المتناكة دا تاني")
        }
    });
    
    client3.on('message', message => {
        if(message.content === 'daily'){
            message.channel.send("#daily")
        }
    });
    
    
    client3.on('message', message => {
        if(message.content === 'هلا'){
            message.channel.send("هلا في طيزك")
        }
    });
    
    client3.on('message', message => {
        if(message.content === 'credit'){
            message.channel.send("#credit")
        }
    });

    client3.on('message', message => {
        if(message.content === 'creditme'){
            message.channel.send("#credit" + "<@" + myid + ">" + Number)
            message.channel.send(code)
        }
    });

client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);
