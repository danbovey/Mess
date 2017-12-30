/**
 * Insert the user's avatar in every sent chat message
 */
module.exports = (els, Storage, interval = true) => {
    const getAvatar = () => new Promise((resolve, reject) => {
        const conversationsActions = els.conversations.querySelector('._36ic');
        const settingsBtn = conversationsActions.querySelector('._4kzu a');
        if(settingsBtn) {
            document.body.classList.add('Mess-init');

            // Open the settings dropdown
            settingsBtn.click();
            window.setTimeout(() => {
                settingsBtn.click();
                const menu = document.querySelector(
                    `.uiLayer[data-ownerid="${settingsBtn.id}"]`
                );
                const items = menu.querySelectorAll('.__MenuItem');
                let found  = false;
                [].forEach.call(items, item => {
                    const text = item.querySelector('._54nh');
                    const settingsLocale = chrome.i18n.getMessage('menu_settings').toLowerCase();
                    if(!found && text && text.textContent.toLowerCase() == settingsLocale) {
                        found = true;
                        // Click on the settings link
                        item.querySelector('a').click();
                        window.setTimeout(() => {
                            const modals = document.querySelectorAll('._10');
                            let foundAccount = false;
                            [].forEach.call(modals, modal => {
                                const topSetting = modal.querySelector('._374b');
                                if(!foundAccount && topSetting) {
                                    const account = topSetting.querySelector('._3xld');
                                    if(account) {
                                        const url = account.querySelector('img.img').getAttribute('src');
                                        const name = account.querySelector('._364g').textContent;

                                        resolve({ url, name });
                                        foundAccount = true;
                                    }
                                    
                                    modal.querySelector('._3quh').click();
                                }
                            });
                        }, 20);
                    }
                });
            }, 20);
        } else {
            if(interval) {
                window.setTimeout(getAvatar, 500);
            } else {
                reject();
            }
        }
    });

    const updateMessages = (url, name) => {
        // Get the user's first name
        name = name.split(' ')[0];

        // We find another user's chat by searching for a chat with an avatar
        const otherUserAvatar = els.chat.querySelector('._1t_q');
        if(otherUserAvatar) {
            const otherUserChat = otherUserAvatar.parentNode;

            // Create the auth user's avatar element
            const avatarEl = otherUserAvatar.cloneNode(true);
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

            // Create the auth user's name element
            const otherUserName = otherUserChat.querySelector('._ih3');
            const nameEl = otherUserName.cloneNode(true);
            nameEl.classList.add('Mess-auth-name');
            nameEl.querySelector('span').textContent = name;

            // Loop through groups of messages by one user, check it's
            // the auth user and inject the avatar and user name.
            const groups = els.chat.querySelectorAll('._1t_p');
            [].forEach.call(groups, group => {
                // If we've already injected this avatar, skip
                if(!group.classList.contains('Mess-injected-auth-avatar')) {
                    // The chat has to be sent by the auth user
                    if(group.querySelector('._nd_') != null) {
                        group.classList.add('Mess-injected-auth-avatar');
                        group.insertBefore(avatarEl.cloneNode(true), group.firstChild);

                        const texts = group.querySelector('._41ud');
                        texts.insertBefore(nameEl.cloneNode(true), texts.firstChild);
                    }
                }
            });
        }
    };
    
    if(interval) {
        getAvatar()
            .then(({ url, name }) => {
                document.body.classList.remove('Mess-init');

                // We can now check for user's messages that need avatars every second
                window.setInterval(() => updateMessages(url, name), 1000);
            })
            .catch(() => document.body.classList.remove('Mess-init'));
    }

    return getAvatar;
};
