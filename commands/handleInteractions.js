async function handleButtons(interaction) {
    if (interaction.isStringSelectMenu()) {
        const { customId, values,  message } = interaction;

        if (customId === 'select_redirect'){
            const selectedValue = values[0];
            const urlPattern = /(https?:\/\/(?:[a-z]+\.)?(tnktok|tiktxk|tiktok)\.com\/\S+)/;
            const originalMatch = message.content.match(urlPattern);

            if (!originalMatch){
                await interaction.reply({ content: "No se encontro ninguna URL valida", ephemeral: true});
                return;
            }

            const originalURL = originalMatch[0]
            const newURL = originalURL.replace(/(tiktok|tnktok|tiktxk)/, selectedValue);

            const usernameMatch = message.content.match(/Tiktok enviado por (.+?):/);
            const username = usernameMatch ? usernameMatch[1] : 'Usuario';

            await interaction.update({
                content: `Tiktok enviado por ${username}: ${newURL}`,
            });
        }
    }
}

module.exports = handleButtons;