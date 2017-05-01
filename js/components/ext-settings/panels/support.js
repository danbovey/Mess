module.exports = Storage => {
    const content = document.createElement('div');
    content.classList.add('Mess-setting-panel');
    content.id = 'Mess-panel-support';

    const submitBug = document.createElement('div');
    submitBug.classList.add('Mess-setting-group');
    let heading = document.createElement('h4');
    heading.textContent = chrome.i18n.getMessage('settings_support_issues');
    submitBug.appendChild(heading);

    let p = document.createElement('p');
    const link = document.createElement('a');
    link.setAttribute('href', 'http://github.com/danbovey/Mess/issues');
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
    link.textContent = chrome.i18n.getMessage('settings_support_issues_action');
    p.appendChild(link);
    submitBug.appendChild(p);

    content.appendChild(submitBug);

    const hr = document.createElement('hr');
    content.appendChild(hr);

    const tipJar = document.createElement('div');
    tipJar.classList.add('Mess-setting-group');
    heading = document.createElement('h4');
    heading.textContent = chrome.i18n.getMessage('settings_support_tipjar');
    tipJar.appendChild(heading);
    p = document.createElement('p');
    p.textContent = chrome.i18n.getMessage('settings_support_tipjar_about');
    tipJar.appendChild(p);
    content.appendChild(tipJar);

    return content;
};
