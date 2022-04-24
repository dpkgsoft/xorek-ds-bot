require("dotenv").config();

console.log("");
console.log(" Welcome to default XorekCloud bot! ");
console.log("");
console.log(" You can test our hosting by running this bot,");
console.log(" or you can upload your own bot.");
console.log("");
console.log(" To run this bot create file '.env' in the root");
console.log(" folder with TOKEN= parameter. After '=' place bot token");
console.log(" from https://discord.com/developers/applications.");
console.log(" This bot is also available at https://qdk.pw/xrkds.");
console.log("");
console.log(" This bot will respond on command 'ping'.");
console.log(" Have fun!");
console.log("");

if (process.env.TOKEN === undefined) {
    process.exit(100);
}

const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("messageCreate", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login(process.env.TOKEN);