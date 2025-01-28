const { ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } = require('discord.js');

function createActionRow(originalURL, defaultRedirect) {
    const alternateRedirect = defaultRedirect.replace('tnktok', 'tiktxk');


    const selectMenu = new StringSelectMenuBuilder()
        .setCustomId('select_redirect')
        .setPlaceholder(placeholder)
        .addOptions([
            {
                label: 'tnktok',
                description: 'Redirigir usando tnktok',
                value: 'tnktok',
            },
            {
                label: 'tiktxk',
                description: 'redirigir usando tiktxk',
                value: 'tiktxk',
            },
        ]);

    const row1 = new ActionRowBuilder()
        .addComponents(selectMenu);

    const row2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel('Abrir original')
            .setStyle(ButtonStyle.Link)
            .setURL(originalURL)
        );
    return [row1, row2];
}

module.exports = { createActionRow };