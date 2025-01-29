async function handleURL(message) {
    if (message.author.bot) return; // ignora los mensajes mandados por bots

    const patron = /(https?:\/\/(?:[a-z]+\.)?tiktok\.com\/\S+)/; // expresion regular para detectar enlaces de tiktok
    const match = message.content.match(patron); // busca coincidencias con la URL de tiktok

    if (match) {
        message.suppressEmbeds(true); // suprime el embed del mensaje original

        const originalURL = match[0].replace('tiktok', 'tnktok'); // modifica el dominio de la URL encontrada
        const newMessage = message.content.replace(match[0], originalURL); //Reemplaza la URL

        // envia un mensaje con la URL modificada  
        await message.reply({content: newMessage });
    }
    
};

module.exports = { handleURL };