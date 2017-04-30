module.exports = ({
    groupName,
    name,
    label,
    checked,
    onClick,
    disabled
}) => {
    const group = document.createElement('div');
    group.classList.add('radio', name);

    const id = `Mess-radio-${name}`;
    const input = document.createElement('input');
    input.id = id;
    input.setAttribute('type', 'radio');
    input.setAttribute('name', groupName);
    if(checked) {
        input.setAttribute('checked', 'checked');
    }
    if(disabled) {
        input.setAttribute('disabled', 'disabled');
    }
    input.addEventListener('click', () => onClick(name));
    group.appendChild(input);

    const lbl = document.createElement('label');
    lbl.setAttribute('for', id);
    lbl.textContent = label;

    group.appendChild(lbl);

    return group;
};
