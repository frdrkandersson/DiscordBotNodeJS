const commando = require('discord.js-commando');

module.exports = class KryssCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kryss',
            group: 'radio',
            memberName: 'kryss',
            description: 'Gives URL to this weeks melodikryss'            
        });
    }

    async run(msg, args) {
        return msg.reply("http://sr.korsord.se/html5/");
    }
}