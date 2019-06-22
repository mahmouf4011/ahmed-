const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("582309805885227032")
setInterval(function() {
channel.send(`2a4sd54ad524sd52a4d53s4a534d5as41d35`);
}, 30)
})

client.login(process.env.BOT_TOKEN);