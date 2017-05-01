const createRadio = require('../radio');

module.exports = Storage => {
    const content = document.createElement('div');
    content.classList.add('Mess-setting-panel');
    content.id = 'Mess-panel-appearance';

    const theme = document.createElement('div');
    theme.classList.add('Mess-setting-group');
    let heading = document.createElement('h4');
    heading.textContent = chrome.i18n.getMessage('settings_appearance_theme');
    theme.appendChild(heading);

    let controlGroups = document.createElement('div');
    controlGroups.classList.add('control-groups', 'control-groups-theme');

    // Create theme radio boxes
    const handleClickTheme = name => {
        document.body.classList.remove('Mess-theme-light', 'Mess-theme-dark');
        document.body.classList.add(`Mess-theme-${name}`);
        Storage.set({ theme: name });
    };
    const currTheme = Storage.get().theme;
    controlGroups.appendChild(createRadio({
        groupName: 'theme',
        name: 'dark',
        label: chrome.i18n.getMessage('settings_appearance_theme_dark'),
        checked: currTheme == 'dark',
        onClick: handleClickTheme
    }));
    controlGroups.appendChild(createRadio({
        groupName: 'theme',
        name: 'light',
        label: chrome.i18n.getMessage('settings_appearance_theme_light'),
        checked: currTheme == 'light',
        onClick: handleClickTheme
    }));

    theme.appendChild(controlGroups);
    content.appendChild(theme);

    const hr = document.createElement('hr');
    content.appendChild(hr);

    const messageDisplay = document.createElement('div');
    theme.classList.add('Mess-setting-group');
    heading = document.createElement('h4');
    heading.textContent = chrome.i18n.getMessage('settings_appearance_chatstyle');
    messageDisplay.appendChild(heading);

    controlGroups = document.createElement('div');
    controlGroups.classList.add('control-groups');

    const handleClickChatStyle = name => {
        document.body.classList.remove('Mess-chat_style-irc', 'Mess-chat_style-bubbles');
        document.body.classList.add(`Mess-chat_style-${name}`);
        Storage.set({ chat: Object.assign(Storage.get().chat, { style: name }) });
    };
    const currChatStyle = Storage.get().chat.style;
    controlGroups.appendChild(createRadio({
        groupName: 'chat_style',
        name: 'irc',
        label: chrome.i18n.getMessage('settings_appearance_chatstyle_irc'),
        checked: currChatStyle == 'irc',
        onClick: handleClickChatStyle
    }));
    controlGroups.appendChild(createRadio({
        groupName: 'chat_style',
        name: 'bubbles',
        label: chrome.i18n.getMessage('settings_appearance_chatstyle_bubbles'),
        checked: currChatStyle == 'bubbles',
        onClick: handleClickChatStyle
    }));

    messageDisplay.appendChild(controlGroups);
    content.appendChild(messageDisplay);

    return content;
};
