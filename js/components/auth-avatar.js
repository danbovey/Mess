/**
 * Insert the user's avatar in every sent chat message
 */
module.exports = els => {
    let url = '';
    let name = '';

    const getAvatar = () => {
        const conversationsActions = els.conversations.querySelector('._36ic');
        const settingsBtn = conversationsActions.querySelector('._4kzu a');
        if(settingsBtn) {
            document.body.classList.add('Mess-init');

            // Open the settings
            settingsBtn.click();
            window.setTimeout(() => {
                // Close the settings
                settingsBtn.click();
                const menu = document.querySelector(
                    `.uiLayer[data-ownerid="${settingsBtn.id}"]`
                );
                const items = menu.querySelectorAll('.__MenuItem');
                let found  = false;
                [].forEach.call(items, item => {
                    const text = item.querySelector('._54nh');
                    const activeContacts = chrome.i18n.getMessage('menu_activecontacts').toLowerCase();
                    if(!found && text && text.textContent.toLowerCase() == activeContacts) {
                        found = true;
                        // Click on the active contacts menu
                        item.querySelector('a').click();
                        window.setTimeout(() => {
                            url = els.conversations.querySelector('._1u5h img').getAttribute('src');
                            name = els.conversations.querySelector('._1u5i ._364g').textContent;
                            // Go back to main conversations
                            els.conversations.querySelector('._36ic._5l-3 a').click();

                            document.body.classList.remove('Mess-init');

                            // We can now check for user's messages that need avatars every second
                            window.setInterval(updateMessages, 1000);
                        }, 20);
                    }
                });
            }, 20);
        } else {
            document.body.classList.remove('Mess-init');
            window.setTimeout(getAvatar, 500);
        }
    };
    getAvatar();

    const updateMessages = () => {
        const aChat = els.chat.querySelector('._1t_q');
        if(aChat) {
            const avatarEl = aChat.cloneNode(true);
            avatarEl.classList.add('Mess-auth-avatar');
            // The link to the contact's profile only exists in group conversations
            const link = avatarEl.querySelector('a');
            if(link) {
                avatarEl.querySelector('a').removeAttribute('href');
            }
            avatarEl.querySelector('._4ldz').dataset.tooltipContent = `${name}`;
            const img = avatarEl.querySelector('img');
            img.setAttribute('alt', name);
            img.setAttribute('src', url);

            const groups = els.chat.querySelectorAll('._1t_p');
            [].forEach.call(groups, group => {
                if(!group.classList.contains('Mess-injected-auth-avatar')) {
                    if(group.querySelector('._nd_') != null) {
                        group.classList.add('Mess-injected-auth-avatar');
                        group.insertBefore(avatarEl.cloneNode(true), group.firstChild);
                    }
                }
            });
        }
    };

    const findAncestor = (el, className) => {
        while((el = el.parentElement) && !el.classList.contains(className));
        return el;
    };
};
