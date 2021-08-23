const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(File => File.endsWith('.js'));




const {prefix, system_prefix, token, words_array, system, operator,} = require('./config.json');




client.once('ready', () => {
    console.log(system);
    console.log(token);
    console.log(system_prefix);
    console.log(operator.Sigma);
    console.log(operator.Company);
    console.log('.');
    console.log('.');
    console.log('.');
    console.log('Sigma is online!');
    console.log('.');
    console.log('.');
    console.log('.');
    console.log(words_array[0]);
    console.log(words_array[1]);
    console.log(words_array[2]);
	client.user.setActivity("ซิกมาจะเข้าวันพุธนี้แล้วนะคะ");
});

client.login('ODUwMjUxNTI0NTkyNzYyOTI0.YLnAcA.qaFcI6XL3mw15Enx5a1mwrlcu9w')


for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    
    if (message.content === 'สวัสดีซิกมา') {
        message.channel.send('สวัสดีค่ะคุณพ่อ!');
    }else if(message.content === 'ซิกมา'){
        message.channel.send('ค่ะ คุณพ่อ?');
    }else if(message.content === 'เนอะ ซิกมา'){
        message.channel.send('นั่นสินะคะ แหะแหะ');
    }else if(message.content === 'ซิกมา ใช้พรีฟิกอะไรเหรอ'){
        message.channel.send('พรีฟิกของหนู คือ + ค่ะ');
    }else if(message.content === 'Sigma prefix'){
        message.channel.send('It is +');
    }else if(message.content === `${prefix}ping`){
        message.channel.send('ทำไมถึงได้เล่นอะไรไร้สาระแบบนั้นล่ะคะ');
    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);

    if(command === "args") {
        if (!args.length) {
            return message.channel.send(`ใส่ข้อความด้วยสิคะ, ${message.author}!`);
        }else if(args[0] === 'แฮร่') {
            return message.channel.send('แงงงง');
        }

        message.channel.send(`commandName: ${command}\nArguments: ${args}`);
    }
    else if (command === 'pat') {
        const taggedUser = message.mentions.users.first();
        message.channel.send(`${message.author} ลูบ ${taggedUser.username}`);
        return;
    }

});
