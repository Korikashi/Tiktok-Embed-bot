const { Client, GatewayIntentBits } = require('discord.js');
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
        const URLcorregida = match[0].replace("i", "n");

        const nuevoMensaje = message.content.replace(match[0], URLcorregida);

        await message.delete();

        message.channel.send(`Tiktok enviado por ${message.author}: ${nuevoMensaje}`);
    }
});

client.login(process.env.DISCORD_TOKEN);