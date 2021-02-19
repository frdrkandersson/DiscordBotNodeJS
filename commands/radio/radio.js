const commando = require('discord.js-commando');

module.exports = class RadioCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'radio',
            group: 'radio',
            memberName: 'radio',
			description: 'Plays radio',
			examples: ['roll p4']
        });
    }

    async run(msg, args) {
		if (!args[0]){
			msg.reply("Please provide a radio channel.");
			return;
		}
	
		if (!msg.member.voiceChannel) {
			msg.reply("You must be in a voice channel.");
			return;
		}

		//TODO: Add radio channels
		msg.member.voiceChannel.join().then(connection => { 
			connection.playArbitraryInput('http://sverigesradio.se/topsy/direkt/208-hi-mp3');
		}).catch(console.log);	
    }
}