const flags = require('../../../utils/flags');

module.exports = Storage => {
    const content = document.createElement('div');
    content.classList.add('Mess-setting-panel');
    content.id = 'Mess-panel-locale';

    const language = document.createElement('div');
    language.classList.add('Mess-setting-group');
    const langHeading = document.createElement('h4');
    langHeading.textContent = chrome.i18n.getMessage('settings_locale_language');
    language.appendChild(langHeading);
    const locale = flags[chrome.i18n.getMessage('@@ui_locale')];
    const flag = document.createElement('img');
    flag.classList.add('Mess-flag');
    flag.setAttribute('src', `https://flagpedia.net/data/flags/normal/${locale.code}.png`);
    flag.setAttribute('alt', chrome.i18n.getMessage('@@ui_locale'));
    language.appendChild(flag);
    const languageName = document.createElement('span');
    languageName.textContent = locale.name;
    language.appendChild(languageName);
    content.appendChild(language);

    const hr = document.createElement('hr');
    content.appendChild(hr);

    const helpTranslate = document.createElement('div');
    helpTranslate.classList.add('Mess-setting-group');
    const heading = document.createElement('h4');
    heading.textContent = chrome.i18n.getMessage('settings_locale_help');
    helpTranslate.appendChild(heading);

    const contribute = document.createElement('p');
    const link = document.createElement('a');
    link.setAttribute('href', 'http://github.com/danbovey/Mess');
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
    link.textContent = chrome.i18n.getMessage('settings_locale_help_action');
    contribute.appendChild(link);
    helpTranslate.appendChild(contribute);
    content.appendChild(helpTranslate);

    return content;
};
