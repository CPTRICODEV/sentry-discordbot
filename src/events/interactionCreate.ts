import { Client, CommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = (client: any, interaction: CommandInteraction) => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    command.execute(interaction, client);
  } catch (err) {
    if (err) console.error(err);
    interaction.reply({
      content: "An error occurred while executing that command.",
      ephemeral: true,
    });
  }
};
