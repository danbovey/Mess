/**
 * Add "Mess Settings" action to settings dropdown
 */
module.exports = (els, modal) => {
    const conversationsActions = els.conversations.querySelector('._3lz9');
    let settingsBtn;

    const injectExtSettings = () => {
        if(!document.body.classList.contains('Mess-init')) {
            const menu = document.querySelector(
                `.uiLayer[data-ownerid="${settingsBtn.id}"]`
            );
            const ul = menu.querySelector('ul');

            const action = ul.querySelector('li').cloneNode(true);
            action.addEventListener('mouseenter', () => {
                action.classList.add('selected');
                action.classList.add('_54ne');
            });
            action.addEventListener('mouseleave', () => {
                action.classList.remove('selected');
                action.classList.remove('_54ne');
            });
            action.classList.add('Mess-ext-settings-toggle');
            action.querySelector('a').addEventListener('click', e => {
                e.preventDefault();

                // Close the dropdown menu
                settingsBtn.click();

                modal.open();
            });
            action.querySelector('span').textContent = chrome.i18n.getMessage('settings_title');
            ul.insertBefore(action, ul.firstChild);

            settingsBtn.removeEventListener('click', injectExtSettings);
        }
    };

    const checkSettingsBtn = () => {
        settingsBtn = conversationsActions.querySelector('._4kzu a');
        if(settingsBtn && !settingsBtn.classList.contains('Mess-injected-ext-settings-toggle')) {
            settingsBtn.classList.add('Mess-injected-ext-settings-toggle');
            settingsBtn.addEventListener('click', injectExtSettings);
        }
    };
    checkSettingsBtn();
    // Check for a settings button every second
    // As it can be destroyed if you switch conversation lists
    window.setInterval(checkSettingsBtn, 1000);
};
