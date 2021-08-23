module.exports = {
    name: 'say',
    description: 'เดี๋ยวหนูไปบอกให้ค่ะ',
    execute(message, say) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("คิดจะทำอะไรกันคะ");
        let botmessage = args.join(" ");
        message.delete().catch();
        message.channel.send(botmessage);
    }
};   