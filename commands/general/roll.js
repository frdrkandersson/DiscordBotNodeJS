const commando = require('discord.js-commando');

module.exports = class RollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'general',
            memberName: 'roll',
            description: 'Rolls a number',
            examples: ['roll 100']
        });
    }

    async run(msg, args) {
        let maxNumber = parseInt(args);
        maxNumber = isNaN(maxNumber) ? 100 : maxNumber;
        let roll = Math.floor(Math.random() * maxNumber) + 1;
        return msg.reply(`${roll} (1-${maxNumber})`);
    }
}