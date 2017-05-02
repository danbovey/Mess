const createSetting = require('../../setting');

module.exports = (els, Storage) => {
    const panel = document.createElement('div');
    panel.classList.add('Mess-setting-panel');
    panel.id = 'Mess-panel-changelog';

    createSetting({
        panel,
        groupName: 'changelog',
        heading: chrome.i18n.getMessage('settings_changelog'),
        content: new Promise(resolve => {
            var req = new XMLHttpRequest();
            req.onload = e => {
                const html = e.target.response;
                const content = document.createElement('div');
                content.classList.add('Mess-changelog');
                content.innerHTML = html;
                resolve(content);
            };
            req.open('GET', 'https://raw.githubusercontent.com/danbovey/Mess/master/CHANGELOG.md');
            req.send();
        })
    });

    return panel;
};
