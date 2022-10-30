/*
 * I'm sorry but I refuse to explain this file.
 * I didn't even write it, I think it came
 * directly from the documentation for discord.js.
 */

// To run this file, execute the following line at the command line:
// node deploy

const fs = require("node:fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");


const { token, clientID, guildID } = require("./settings.json");

const commands = [];
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientID, guildID), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
