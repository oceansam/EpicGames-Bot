// Base Imports
require("dotenv").config();
const { Client, Intents, MessageEmbed } = require("discord.js");
const { fetchData } = require("./util.js");
const cron = require("cron");
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
// Setup
const token = process.env.TOKEN;
// CLASS TYPES

/**
 * Ready Event Listener
 */
client.on("ready", () => {
	client.user.setPresence({
		status: "Development...",
		activity: {
			name: "Debuging Code",
			type: "PLAYING",
		},
	});

	let promotionGames = new cron.CronJob(
		"0 22 * * * *",

		async () => {
			const freeGames = await fetchData();
			const guild = client.guilds.cache.get("632353705496281118");
			const channel = guild.channels.cache.get("824852615489126430");

			freeGames.forEach((element) => {
				console.log(element.title);
				channel.send(`Free Game: ${element.title}`);
			});
			channel.send("Next alert at 10:00am tomorrow");
		}
	);
	promotionGames.start();
});

client.login(token);
