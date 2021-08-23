module.exports = {
    names: 'args-info',
    description: 'info about the arguments',
    args: true,
    execute(message, args) {
        if(args[0]=== 'ฮือ') {
            return message.channel.send('TT');
        }

        message.channel.send(`Arguments: ${args} \nArguments Length: ${args.length}`);
    },
};
