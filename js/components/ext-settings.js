/**
 * Extension Settings
 */
module.exports = els => {
    const conversationsActions = els.conversations.querySelector('._36ic');
    const settingsBtn = conversationsActions.querySelector(' ._4kzu a');

    // Add "Mess Settings" action to settings dropdown
    settingsBtn.addEventListener('click', () => {
        const menu = document.querySelector(
            `.uiLayer[data-ownerid="${settingsBtn.id}"]`
        );
        // The action is injected once because the dropdown stays on the page
        if(!menu.classList.contains('Mess-injected-ext-settings')) {
            menu.classList.add('Mess-injected-ext-settings');
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
            action.classList.add('Mess-ext-settings');
            action.querySelector('a').addEventListener('click', e => {
                e.preventDefault();

                // Close the dropdown menu
                settingsBtn.click();

                                
            });
            action.querySelector('span').textContent = 'Mess Settings';
            ul.insertBefore(action, ul.firstChild);
        }
    });

};
