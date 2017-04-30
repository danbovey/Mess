module.exports = Storage => {
    const content = document.createElement('div');
    content.classList.add('Mess-setting-panel');
    content.id = 'Mess-panel-support';

    const submitBug = document.createElement('div');
    submitBug.classList.add('Mess-setting-group');
    let heading = document.createElement('h4');
    heading.textContent = 'Issues or feedback?';
    submitBug.appendChild(heading);

    let p = document.createElement('p');
    const link = document.createElement('a');
    link.setAttribute('href', 'http://github.com/danbovey/Mess/issues');
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
    link.textContent = 'Submit a bug or feature request on GitHub';
    p.appendChild(link);
    submitBug.appendChild(p);

    content.appendChild(submitBug);

    const hr = document.createElement('hr');
    content.appendChild(hr);

    const tipJar = document.createElement('div');
    tipJar.classList.add('Mess-setting-group');
    heading = document.createElement('h4');
    heading.textContent = 'Tip jar';
    tipJar.appendChild(heading);
    p = document.createElement('p');
    p.textContent = 'A tip jar to support the development of Mess is in the works!';
    tipJar.appendChild(p);
    content.appendChild(tipJar);

    return content;
};
