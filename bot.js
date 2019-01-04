var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !explain
            case 'explain':
                bot.sendMessage({
                    to: channelID,
				message: 'Hi! I am an awesome bo made by Viertuelle to help you find trades. To get started, type "!want [card name]" and repeat until you have entered all the cards you want. Then, use the command "give [card name]" and repeat until you have entered all the cards you are willing to trade away. I will do the rest because I am awesome and you will be notified when a trade becoes availlable for you. Cya1!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});