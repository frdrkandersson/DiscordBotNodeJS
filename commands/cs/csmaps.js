const commando = require('discord.js-commando');

module.exports = class CsmapsCommand extends commando.Command {    
    constructor(client) {
        super(client, {
            name: 'csmaps',
            aliases: ['csmaps'],
            group: 'cs',
            memberName: 'csmaps',
            description: 'Rolls csmaps, number of maps as input',
            examples: ['csmaps 3']
        });
    }
    
    async run(msg, args) {        
      let mapPool = {"maps": [ "Dust 2", "Inferno", "Nuke", "Mirage", "Train", "Cobblestone", "Overpass", "Cache"]};      
      let maps = [];
      let noMaps = 0;	
      do{
        let map = Math.floor(Math.random() * mapPool.maps.length);
        if(!maps.includes(mapPool.maps[map])){
          maps.push(mapPool.maps[map]);
          noMaps++;
        }
      }while (noMaps < args)
      
      msg.channel.send(`Next Map: ${maps}`)
    }
}

