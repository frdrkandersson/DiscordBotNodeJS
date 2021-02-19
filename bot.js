const commando = require('discord.js-commando');
const client = new commando.Client({
    owner: '98828799315025920',
    commandPrefix: '.'
});

client.registry.registerGroups([
    ['cs', 'Counter Strike Commands'],
    ['general', 'General Commands'],
    ['radio', 'Radio Commands']    
]);
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + '/commands');

const token = process.env.DISCORD_SERVER_TOKEN;

client
    .on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    })

    .on('commandError', (cmd, err) => {
        if(err instanceof commando.FriendlyError) return;
        console.error(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
    })

    .on('error', console.error)
    .on('warn', console.warn)
    //.on('debug', console.log)
    .on('disconnect', () => { console.warn('Disconnected!'); })
	.on('reconnecting', () => { console.warn('Reconnecting...'); })

client.login(token);