const commando = require('discord.js-commando');

module.exports = class AvatarCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            group: 'general',
            memberName: 'avatar',
            description: 'Gives avatar-picture',
            examples: ['avatar @user']
        });
    }

    async run(msg, args) {
        let target = msg.mentions.users.first() || msg.author;

        await msg.channel.send({
            files:
            [{
                attachment: target.displayAvatarURL,
                name: "avatar.png"
            }]
        });
    }
}