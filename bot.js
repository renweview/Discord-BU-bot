const discordio = require('discord.io');
console.log("import");

var bot = new discordio.Client({
    token: "NTg4NjMzNTI0OTIwMjU0NDY1.XRnBdQ.bSHysyLFQR9Pu-oqpk02ql7NSoE",
    autorun: true
});

const stdin = process.stdin;
stdin.on("data", function(input) {
    input = input.toString();
    try {
        let output = eval(input);
        console.log(output);
    } catch (e) {
        console.log("Error in eval.\n" + e.stack);
    }
});

console.log("console setup");
bot.on('ready', function() {
    console.log('Connected...');
});

console.log("bot on ready?");

bot.on("ready", function() {
    console.log("Ready...");
});

console.log("bot prep for on");
bot.on('message', function(user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
        switch (cmd) {
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                break;
            case 'hello':
                let username = evt.d.author.username
                let welcomeString = 'Welcome ' + username + '! :3'
                bot.sendMessage({
                    to: channelID,
                    message: welcomeString
                });
        }
    }
});

console.log("disconnect?");
bot.on("disconnect", function() {
    bot.connect();
})