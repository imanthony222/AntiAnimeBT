const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NjE0NjU3ODY3NjUxMjE5NDg3.XWCrQw.rPOw6XTeb0CNtcRTAaGpi93Mc8U';

const PREFIX = '-';



bot.on('ready', () =>{
    console.log ('AABot is online!')
    bot.user.setActivity('https://discord.gg/uXg3Nrq ---------- Made by imanthony#0420 ---------- ')
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'wyd':
       message.channel.sendMessage('Slaying weebs with my Sharpness V Sword, hbu?')
       break;
        case 'AntiAnime':
        message.channel.sendMessage('Gotta kill em all!')
        break;
        case 'AntiFurry':
        message.channel.sendMessage('Decimate the furries. Now.')
        break;
        case 'suggestion':
        message.channel.sendMessage('DM imanthony#0420 for suggestions!')
        break;
        case 'pie':
        message.channel.sendMessage('Mr Pie is better then every human')
        break;
        case 'sandvich':
        message.channel.sendMessage('sandvich is god')
        break;
        case 'help':
        message.channel.sendMessage('```COMMAND LIST - http://tiny.cc/AABOT1 ```')
        break;
        case 'nutman':
        message.channel.sendMessage('caffene makes me fell jittery, like i want to depopulate a anime convention')
        break; 
        case 'aura':
        message.channel.sendMessage('Aura is dad amirite?')
        break;
        case 'propaganda':
        message.channel.sendMessage('this command is in the making, sorry!')


    }


})

    
bot.login(token);
