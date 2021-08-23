module.exports = {
    name: 'ping!',
    description: 'Ping Command',
    execute(message, args) {
        message.channel.send('ยังจะพยายามอยู่อีกนะคะ');
    },
};