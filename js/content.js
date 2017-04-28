const Storage = require('./storage');

Storage.load()
    .then(options => {
        document.body.classList.add(
            `Mess-theme-${options.theme}`,
            options.chat.style == 'bubbles' ? 'Mess-chat_style-bubbles' : 'Mess-chat_style-irc'
        );

        window.onload = () => {
            // Define important elements
            const els = {
                conversations: document.querySelector('._1enh'),
                header: document.querySelector('._5742'),
                rightSidebar: document.querySelector('._4_j5')
            };

            const components = [
                require('./components/ext-settings'),
                require('./components/conversations'),
                require('./components/chat-settings'),
            ];

            components.forEach(c => c(els, Storage));
        };
    });
