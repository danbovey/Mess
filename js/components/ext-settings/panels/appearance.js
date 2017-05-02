const createSetting = require('../../setting');
const chatActions = require('../../../updaters/chat-actions');

module.exports = (els, Storage) => {
    const panel = document.createElement('div');
    panel.classList.add('Mess-setting-panel');
    panel.id = 'Mess-panel-appearance';

    createSetting({
        panel,
        groupName: 'theme',
        heading: chrome.i18n.getMessage('settings_appearance_theme'),
        isChecked: name => Storage.get().theme == name,
        inputs: [ 'dark', 'light' ],
        label: name => chrome.i18n.getMessage(`settings_appearance_theme_${name}`),
        onChange: name => {
            document.body.classList.remove('Mess-theme-light', 'Mess-theme-dark');
            document.body.classList.add(`Mess-theme-${name}`);
            Storage.set({ theme: name });
        }
    });

    let hr = document.createElement('hr');
    panel.appendChild(hr);

    createSetting({
        panel,
        groupName: 'chatstyle',
        heading: chrome.i18n.getMessage('settings_appearance_chatstyle'),
        isChecked: name => Storage.get().chat.style == name,
        inputs: [ 'irc', 'bubbles' ],
        label: name => chrome.i18n.getMessage(`settings_appearance_chatstyle_${name}`),
        onChange: name => {
            document.body.classList.remove('Mess-chat_style-irc', 'Mess-chat_style-bubbles');
            document.body.classList.add(`Mess-chat_style-${name}`);
            Storage.set({ chat: Object.assign(Storage.get().chat, { style: name }) });
        }
    });

    hr = document.createElement('hr');
    panel.appendChild(hr);

    createSetting({
        panel,
        groupName: 'chatactions',
        heading: chrome.i18n.getMessage('settings_appearance_chatactions'),
        type: 'checkbox',
        isChecked: name => Storage.get().chat.actions.indexOf(name) == -1,
        inputs: [ 'file', 'sticker', 'gif', 'emoji', 'voice', 'poll', 'game', 'cam' ],
        label: name => chrome.i18n.getMessage(`settings_appearance_chatactions_${name}`),
        onChange: name => {
            let actions = Storage.get().chat.actions;
            if(actions.indexOf(name) > -1) {
                actions = actions.filter(a => a != name);
            } else {
                actions.push(name);
            }
            Storage.set({ chat: { actions } });

            // Update chat actions
            chatActions(els, Storage, false)();
        }
    });

    hr = document.createElement('hr');
    panel.appendChild(hr);

    return panel;
};
