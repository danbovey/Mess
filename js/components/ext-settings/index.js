const Modal = require('../modal');

const toggle = require('./create-toggle');

/**
 * Extension Settings
 */
module.exports = (els, Storage) => {
    const settingsDiv = document.createElement('div');

    // Create sidebar
    const sidebar = document.createElement('div');
    sidebar.classList.add('settings-sidebar');
    const header = document.createElement('h3');
    header.textContent = chrome.i18n.getMessage('settings_title');
    sidebar.appendChild(header);
    settingsDiv.appendChild(sidebar);

    // Create settings content
    const right = document.createElement('div');
    right.classList.add('settings-right');
    const inner = document.createElement('div');
    inner.classList.add('settings-inner');
    right.appendChild(inner);
    const actions = document.createElement('div');
    actions.classList.add('settings-actions');
    right.appendChild(actions);
    settingsDiv.appendChild(right);

    const panels = require('./panels/*.js', { mode: 'hash' });
    const items = [ 'appearance', 'text', 'locale', 'support', 'changelog' ];
    items.forEach(name => {
        const panel = panels[name](els, Storage);
        const label = chrome.i18n.getMessage(`settings_${name}`);

        // Create sidebar item
        const navItem = document.createElement('button');
        navItem.classList.add('sidebar-item');
        if(name == 'changelog') {
            navItem.classList.add('sidebar-item-small');
        }
        navItem.textContent = label;
        navItem.addEventListener('click', () => {
            // Update the active panel
            const panels = inner.querySelectorAll('.Mess-setting-panel');
            [].forEach.call(panels, p => p.classList.remove('active'));

            const active = inner.querySelector(`#Mess-panel-${name}`);
            active.classList.add('active');

            // Update the active sidebar item
            const navItems = sidebar.querySelectorAll('.sidebar-item');
            [].forEach.call(navItems, i => i.classList.remove('selected'));

            navItem.classList.add('selected');
        });
        sidebar.appendChild(navItem);

        // Append content to settings inner
        inner.appendChild(panel);
    });

    // Show the first panel
    inner.querySelector('.Mess-setting-panel').classList.add('active');
    sidebar.querySelector('.sidebar-item').classList.add('selected');

    const modal = Modal({
        className: 'Mess-ext-settings',
        content: settingsDiv
    });

    toggle(els, modal);

    // Close the modal with the Done button inside settings
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('Mess-btn');
    doneBtn.textContent = chrome.i18n.getMessage('settings_done');
    doneBtn.addEventListener('click', modal.close);
    actions.appendChild(doneBtn);

    return { name: 'ext-settings', modal };
};
