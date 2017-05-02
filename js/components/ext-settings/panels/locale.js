const createSetting = require('../../setting');
const flags = require('../../../utils/flags');

module.exports = (els, Storage) => {
    const panel = document.createElement('div');
    panel.classList.add('Mess-setting-panel');
    panel.id = 'Mess-panel-locale';

    createSetting({
        panel,
        groupName: 'language',
        heading: chrome.i18n.getMessage('settings_locale_language'),
        content: () => {
            const content = document.createElement('div');
            let localeCode = chrome.i18n.getMessage('@@ui_locale');
            const locale = flags[localeCode];
            if(locale.code) {
                localeCode = locale.code;
            }
            const flag = document.createElement('img');
            flag.classList.add('Mess-flag');
            flag.setAttribute('src', `https://flagpedia.net/data/flags/normal/${localeCode}.png`);
            flag.setAttribute('alt', locale.name);
            content.appendChild(flag);
            const languageName = document.createElement('span');
            languageName.textContent = locale.name;
            content.appendChild(languageName);

            return content;
        }
    });

    let hr = document.createElement('hr');
    panel.appendChild(hr);

    createSetting({
        panel,
        groupName: 'helptranslate',
        heading: chrome.i18n.getMessage('settings_locale_help'),
        content: () => {
            const content = document.createElement('p');
            const link = document.createElement('a');
            link.setAttribute('href', 'http://github.com/danbovey/Mess');
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener');
            link.textContent = chrome.i18n.getMessage('settings_locale_help_action');
            content.appendChild(link);
            
            return content;
        }
    });

    hr = document.createElement('hr');
    panel.appendChild(hr);

    return panel;
};
