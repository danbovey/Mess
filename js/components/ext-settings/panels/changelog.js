module.exports = Storage => {
    const content = document.createElement('div');
    content.classList.add('Mess-setting-panel');
    content.id = 'Mess-panel-changelog';

    const group = document.createElement('div');
    group.classList.add('Mess-setting-group');
    let heading = document.createElement('h4');
    heading.textContent = 'Change Log';
    group.appendChild(heading);
    content.appendChild(group);

    var req = new XMLHttpRequest();
    req.onload = e => {
        const html = e.target.response;
        const changeLog = document.createElement('div');
        changeLog.classList.add('Mess-changelog');
        changeLog.innerHTML = html;
        group.appendChild(changeLog);
    };
    req.open('GET', 'https://raw.githubusercontent.com/danbovey/Mess/master/CHANGELOG.md');
    req.send();

    return content;
};
