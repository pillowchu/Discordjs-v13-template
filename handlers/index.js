/*
 * I'm sorry but I refuse to explain this file. pt2
 * I didn't even write it, I think it came
 * directly from the documentation for discord.js.
 */
const fs = require("node:fs");

module.exports = async (client) => {
    const commandFiles = fs
    .readdirSync(`${process.cwd()}/commands`)
    .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
        const command = require(`${process.cwd()}/commands/${file}`)
        client.commands.set(command.data.name, command)
    }

    const eventFiles = fs
    .readdirSync(`${process.cwd()}/events`)
    .filter((file) => file.endsWith(".js"));
  for (const file of eventFiles) {
    const event = require(`${process.cwd()}/events/${file}`);
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }
};
