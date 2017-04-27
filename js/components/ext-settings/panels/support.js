module.exports = Storage => {
    const content = document.createElement('div');
    content.classList.add('Mess-setting-panel');
    content.id = 'Mess-panel-support';

    content.textContent = 'Support Mess';

    return content;
};
