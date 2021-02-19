const commando = require('discord.js-commando');

module.exports = class DisconnectCommand extends commando.Command {    
    constructor(client) {
        super(client, {
            name: 'disconnect',
            aliases: ['leave', 'disc', 'utvisa', 'kick', 'åk', 'dra', 'stick', 'trutn', 'knip'],
            group: 'general',
            memberName: 'disconnect',
			description: 'Leaved Channel'			
        });
    }
    
    async run(msg, args) {        
        this.client.voiceConnections.every(connection => {
            connection.disconnect();
        });
    }
}