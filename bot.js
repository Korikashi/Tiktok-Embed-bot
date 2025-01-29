const { Client, GatewayIntentBits, MessageFlags } = require('discord.js');
const { handleURL } = require('./commands/urlHandler');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // recive eventos relaciondos con servidores
        GatewayIntentBits.GuildMessages, // recive mensajes en canales
        GatewayIntentBits.MessageContent, // accede al contenido de los mensajes
    ]
});

client.once('ready', () => {
    console.log("Bot prendido we")// mensaje de confirmacion si el bot esta encendido
});

client.on('messageCreate', handleURL); // pasa el evento a la funcion modular


client.login(process.env.DISCORD_TOKEN); // inicia sesion en Discord usando el toquen almacenado en las variables de entorno