const { SlashCommandBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Reacciona al comando"),
        async execute(interaction){
            await interaction.deferReply({ ephemeral: true});
            await wait(5_000);
            await interaction.editReply({ content: "Buuuu", ephemeral: true})
        },
};