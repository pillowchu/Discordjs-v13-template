const { Client, Collection, Intents } = require('discord.js'); //Gets the requirements for your discord bot!
const { token } = require('./settings.json'); //Where your token will be saved
const client = new Client({
  intents: [
    32767
  ]
}); 

module.exports = client;

client.commands = new Collection() //Allows the commands to be passed through

require('./Handlers')(client) //Discord.js Tutorials!!

client.login(token) //Logs in your bot from the token in settings.json
