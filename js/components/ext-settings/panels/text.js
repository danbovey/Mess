module.exports = Storage => {
    const content = document.createElement('div');
    content.classList.add('Mess-setting-panel');
    content.id = 'Mess-panel-text';

    content.textContent = 'Text & Images';

    return content;
};
