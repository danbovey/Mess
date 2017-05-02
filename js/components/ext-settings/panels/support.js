const createSetting = require('../../setting');

module.exports = (els, Storage) => {
    const panel = document.createElement('div');
    panel.classList.add('Mess-setting-panel');
    panel.id = 'Mess-panel-support';

    createSetting({
        panel,
        groupName: 'issues',
        heading: chrome.i18n.getMessage('settings_support_issues'),
        content: () => {
            const content = document.createElement('p');
            const link = document.createElement('a');
            link.setAttribute('href', 'http://github.com/danbovey/Mess/issues');
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener');
            link.textContent = chrome.i18n.getMessage('settings_support_issues_action');
            content.appendChild(link);

            return content;
        }
    });

    let hr = document.createElement('hr');
    panel.appendChild(hr);

    createSetting({
        panel,
        groupName: 'tipjar',
        heading: chrome.i18n.getMessage('settings_support_tipjar'),
        description: chrome.i18n.getMessage('settings_support_tipjar_about')
    });

    hr = document.createElement('hr');
    panel.appendChild(hr);

    return panel;
};
