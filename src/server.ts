import dotenv from "dotenv";
import { Client, Intents } from "discord.js";

// Inhalte der .env-Datei in Node-Prozess laden
dotenv.config();

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const COMMAND_PREFIX = "!";

client.on("ready", () => {
  console.log("Der Bot ist dem Server gejoint.");
});

client.on("messageCreate", (message) => {
  if (message.content.charAt(0) !== COMMAND_PREFIX) return

  const command = message.content.split(" ")[0].slice(1);

  if (!command) return

  if (command === "play") {
    message.reply("Ich spiele für dich....")
  }
});

client.login(DISCORD_BOT_TOKEN);
