module.exports = ({ content, className = '' }) => {
    const modal = document.createElement('div');
    modal.classList.add('Mess-modal', className);

    const open = () => {
        modal.classList.add('active');
    };
    const close = () => {
        modal.classList.remove('active');
        if(typeof onRequestClose == 'function') {
            onRequestClose();
        }
    };

    // Create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('Mess-overlay');
    overlay.addEventListener('click', close)
    modal.appendChild(overlay);

    // Create dialog and append content
    const dialog = document.createElement('div');
    dialog.classList.add('Mess-dialog');
    content.classList.add('Mess-modal-content');
    dialog.appendChild(content);
    modal.appendChild(dialog);

    document.body.appendChild(modal);

    return { open, close };
};
