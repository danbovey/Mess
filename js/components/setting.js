const createRadio = require('./radio');

module.exports = ({
    panel,
    groupName,
    heading,
    description,
    content,
    type = 'radio',
    isChecked,
    disabled = false,
    inputs,
    label,
    onChange,
}) => {
    // Create the setting group
    const setting = document.createElement('div');
    setting.classList.add('Mess-setting-group', `Mess-setting-${groupName}`);

    // Create the heading
    const head = document.createElement('h4');
    head.textContent = heading;
    setting.appendChild(head);

    // Add a description paragraph
    if(description) {
        const desc = document.createElement('p');
        desc.textContent = description;
        setting.appendChild(desc);
    }

    // Add content instead of inputs
    if(content) {
        if(typeof content.then == 'function') {
            content.then(c => setting.appendChild(c));
        } else {
            setting.appendChild(content());
        }
    } else if(inputs) {
        const controlGroups = document.createElement('div');
        controlGroups.classList.add('control-groups');
        setting.appendChild(controlGroups);

        // Loop through and create radio/checkboxes
        inputs.forEach(name => {
            const toggle = createRadio({
                type,
                groupName,
                name,
                label: label(name),
                checked: isChecked(name),
                disabled,
                onClick: onChange
            });
            controlGroups.appendChild(toggle);
        });
    }

    panel.appendChild(setting);
};
