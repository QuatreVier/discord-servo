const { REST, Routes } = require("discord.js");
const { clientId, guildId, token } = require("./config/config.json");
const fs = require("node:fs");
const path = require("node:path");

const commands = [];

const foldersPath  = path.join(__dirname, 'commands');
const commandFolder = fs.readdirSync(foldersPath);
for(const folder of commandFolder){
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(filter => filter.endsWith(".js"));
    for(const file of commandFiles){
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
		} else {
			console.log(`¡Error! el comando ${filePath} no tiene "data" o "execute" `);
		}
    }
}

const rest = new REST().setToken(token);
(async () => {
	try {
		console.log(`Se comenzó a actualizar los comandos de la aplicación (/) ${commands.length}.`);
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Se cargaron los comandos de la aplicacion (/) ${data.length}.`);
	} catch (error) {
		console.error(error);
	}
})();