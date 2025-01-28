const { Client, GatewayIntentBits } = require('discord.js');
const { createActionRow } = require('./utils/componentsUtils');
const handleInteractions = require('./commands/handleInteractions');
require('dotenv').config();

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.once('ready', () => {
    console.log("Bot prendido we")
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const patron = /(https?:\/\/(?:[a-z]+\.)?tiktok\.com\/\S+)/;

    const match = message.content.match(patron);

    if (match) {
        const originalURL = match[0].replace('tiktok','tnktok');
        const newMessage = message.content.replace(match[0], originalURL);

        const [row1, row2] = createActionRow(match[0], originalURL);

        setTimeout(async () => {
            await message.delete();
        }, 3000);
        
        message.channel.send({
            content: `Tiktok enviado por ${message.author.username}: ${newMessage}`,
            components: [row1, row2],
        });
        
    }
});

client.on('interactionCreate', handleInteractions);

client.login(process.env.DISCORD_TOKEN);