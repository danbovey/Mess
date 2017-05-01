const createRadio = require('../radio');

module.exports = Storage => {
    const content = document.createElement('div');
    content.classList.add('Mess-setting-panel');
    content.id = 'Mess-panel-text';

    const emojiStyle = document.createElement('div');
    emojiStyle.classList.add('Mess-setting-group');
    let heading = document.createElement('h4');
    heading.textContent = chrome.i18n.getMessage('settings_text_emoji');
    emojiStyle.appendChild(heading);

    let controlGroups = document.createElement('div');
    controlGroups.classList.add('control-groups');

    const handleEmojiClick = name => {
        
    };
    const currEmoji = Storage.get().text.emoji;
    const createEmojiRadio = name => {
        controlGroups.appendChild(createRadio({
            groupName: 'emoji',
            name,
            label: chrome.i18n.getMessage(`settings_text_emoji_${name}`),
            checked: currEmoji == name,
            disabled: true,
            onClick: handleEmojiClick
        }));
    };
    createEmojiRadio('facebook');
    createEmojiRadio('apple');
    createEmojiRadio('twitter');
    createEmojiRadio('emojione');
    emojiStyle.appendChild(controlGroups);
    content.appendChild(emojiStyle);

    const hr = document.createElement('hr');
    content.appendChild(hr);

    const images = document.createElement('div');
    images.classList.add('Mess-setting-group');
    heading = document.createElement('h4');
    heading.textContent = chrome.i18n.getMessage('settings_text_images');
    images.appendChild(heading);

    controlGroups = document.createElement('div');
    controlGroups.classList.add('control-groups');
    controlGroups.appendChild(createRadio({
        type: 'checkbox',
        groupName: 'imgur_gifv',
        name: 'imgur_gifv',
        label: chrome.i18n.getMessage(`settings_text_images_imgurgifv`),
        checked: Storage.get().text.imgur_gifv,
        onClick: () => Storage.set({
            text: { imgur_gifv: !Storage.get().text.imgur_gifv }
        })
    }));
    images.appendChild(controlGroups);
    content.appendChild(images);

    return content;
};
