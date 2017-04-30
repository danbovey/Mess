module.exports = Storage => {
    const content = document.createElement('div');
    content.classList.add('Mess-setting-panel');
    content.id = 'Mess-panel-support';

    const comingSoon = document.createElement('div');
    comingSoon.classList.add('Mess-setting-group');
    let heading = document.createElement('h4');
    heading.textContent = 'Working on it!';
    comingSoon.appendChild(heading);

    const p = document.createElement('p');
    p.textContent = 'Tip jar and GitHub contribution instructions coming soon';
    comingSoon.appendChild(p);

    content.appendChild(comingSoon);

    return content;
};
