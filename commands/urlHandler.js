async function handleURL(message) {
    if (message.author.bot) return; // ignora los mensajes mandados por bots

    const patron = /(https?:\/\/(?:[a-z]+\.)?tiktok\.com\/\S+)/; // expresion regular para detectar enlaces de tiktok
    const match = message.content.match(patron); // busca coincidencias con la URL de tiktok

    if (match) {
        message.suppressEmbeds(true); // suprime el embed del mensaje original

        const modifiedURL = match[0].replace('tiktok', 'tnktok'); // modifica el dominio de la URL encontrada

        // envia un mensaje con la URL modificada  
        await message.reply({content: modifiedURL });
    }
    
};

module.exports = { handleURL };