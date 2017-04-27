module.exports = Storage => {
    const content = document.createElement('div');
    content.classList.add('Mess-setting-panel');
    content.id = 'Mess-panel-locale';

    const language = document.createElement('div');
    language.classList.add('Mess-setting-group');
    const langHeading = document.createElement('h4');
    langHeading.textContent = 'Language';
    language.appendChild(langHeading);
    const na = document.createElement('p');
    na.textContent = 'Not available';
    language.appendChild(na);
    content.appendChild(language);

    const hr = document.createElement('hr');
    content.appendChild(hr);

    const helpTranslate = document.createElement('div');
    helpTranslate.classList.add('Mess-setting-group');
    const heading = document.createElement('h4');
    heading.textContent = 'Help translate Mess';
    helpTranslate.appendChild(heading);

    const contribute = document.createElement('p');
    const link = document.createElement('a');
    link.setAttribute('href', 'http://github.com/danbovey/Mess');
    link.textContent = 'Contribute on GitHub!';
    contribute.appendChild(link);
    helpTranslate.appendChild(contribute);
    content.appendChild(helpTranslate);

    return content;
};
