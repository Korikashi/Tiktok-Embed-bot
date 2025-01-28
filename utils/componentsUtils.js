const { ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } = require('discord.js');

function createActionRow(originalURL, defaultRedirect) {
    const alternateRedirect = defaultRedirect.replace('tnktok', 'tiktxk');

    const placeholder = defaultRedirect === 'tnktok' ? ' Selecciona tnktok o tiktxk': 'Selecciona una opcion';

    const selectMenu = new StringSelectMenuBuilder()
        .setCustomId('select_redirect')
        .setPlaceholder(placeholder)
        .addOptions([
            {
                label: 'tnktok',
                description: 'Redirigir usando tnktok',
                value: 'tnktok',
                default: defaultRedirect === 'tnktok',
            },
            {
                label: 'tiktxk',
                description: 'redirigir usando tiktxk',
                value: 'tiktxk',
                default: defaultRedirect === 'tiktxk',
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