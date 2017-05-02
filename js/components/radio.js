module.exports = ({
    type = 'radio',
    groupName,
    name,
    label,
    checked,
    onClick,
    disabled
}) => {
    const group = document.createElement('div');
    group.classList.add(type, name);

    const id = `Mess-${type}-${name}`;
    const input = document.createElement('input');
    input.id = id;
    input.setAttribute('type', type);
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
