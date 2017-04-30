const createRadio = require('../radio');

module.exports = Storage => {
    const content = document.createElement('div');
    content.classList.add('Mess-setting-panel');
    content.id = 'Mess-panel-text';

    const emojiStyle = document.createElement('div');
    emojiStyle.classList.add('Mess-setting-group');
    let heading = document.createElement('h4');
    heading.textContent = 'Emoji Style';
    emojiStyle.appendChild(heading);

    let controlGroups = document.createElement('div');
    controlGroups.classList.add('control-groups');

    const handleEmojiClick = name => {

    };
    const currEmoji = Storage.get().text.emoji;
    controlGroups.appendChild(createRadio({
        groupName: 'emoji',
        name: 'facebook',
        label: 'Facebook Style',
        checked: currEmoji == 'facebook',
        disabled: true,
        onClick: handleEmojiClick
    }));
    controlGroups.appendChild(createRadio({
        groupName: 'emoji',
        name: 'apple',
        label: 'Apple/International Style',
        checked: currEmoji == 'apple',
        disabled: true,
        onClick: handleEmojiClick
    }));
    controlGroups.appendChild(createRadio({
        groupName: 'emoji',
        name: 'twitter',
        label: 'Twitter Style',
        checked: currEmoji == 'twitter',
        disabled: true,
        onClick: handleEmojiClick
    }));
    controlGroups.appendChild(createRadio({
        groupName: 'emoji',
        name: 'emojione',
        label: 'Emoji One Style',
        checked: currEmoji == 'emojione',
        disabled: true,
        onClick: handleEmojiClick
    }));

    emojiStyle.appendChild(controlGroups);
    content.appendChild(emojiStyle);

    return content;
};
