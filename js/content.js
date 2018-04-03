const Storage = require('./utils/storage');

const optionsPage = window.location.href.indexOf('mess-settings') > -1;

Storage.load()
    .then(options => {
        // Add theme classes early to theme Messenger
        // before the majority of content loads
        document.body.classList.add(
            `Mess-theme-${options.theme}`,
            options.chat.style == 'bubbles' ? 'Mess-chat_style-bubbles' : 'Mess-chat_style-irc'
        );

        window.onload = () => {
            // Define important elements
            const els = {
                conversations: document.querySelector('._1enh'),
                header: document.querySelector('._673w'),
                chat: document.querySelector('._4_j4')
            };

            // Start updaters - setInterval checks for Mess features
            const updaters = [
                require('./updaters/conversations'),
                require('./updaters/auth-avatar'),
                require('./updaters/chat-actions'),
                require('./updaters/chat-settings'),
                require('./updaters/imgur-gifv')
            ];
            updaters.forEach(u => u(els, Storage));

            // Create the settings modal
            const settings = require('./components/ext-settings')(els, Storage);
            
            // If the options page has been requested, open now
            if(optionsPage) {
                settings.modal.open();
            }
        };
    });
