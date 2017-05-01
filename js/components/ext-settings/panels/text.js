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

    return content;
};
