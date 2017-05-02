const createSetting = require('../../setting');

module.exports = (els, Storage) => {
    const panel = document.createElement('div');
    panel.classList.add('Mess-setting-panel');
    panel.id = 'Mess-panel-text';

    createSetting({
        panel,
        groupName: 'emoji',
        heading: chrome.i18n.getMessage('settings_text_emoji'),
        isChecked: name => Storage.get().text.emoji == name,
        disabled: true,
        inputs: [ 'facebook', 'apple', 'twitter', 'emojione' ],
        label: name => chrome.i18n.getMessage(`settings_text_emoji_${name}`),
        onChange: name => {
            
        }
    });

    let hr = document.createElement('hr');
    panel.appendChild(hr);

    createSetting({
        panel,
        groupName: 'imgurgifv',
        heading: chrome.i18n.getMessage('settings_text_images'),
        type: 'checkbox',
        isChecked: () => Storage.get().text.imgur_gifv,
        inputs: [ 'imgurgifv' ],
        label: () => chrome.i18n.getMessage(`settings_text_images_imgurgifv`),
        onChange: () => {
            Storage.set({
                text: { imgur_gifv: !Storage.get().text.imgur_gifv }
            });
        }
    });

    hr = document.createElement('hr');
    panel.appendChild(hr);

    return panel;
};
