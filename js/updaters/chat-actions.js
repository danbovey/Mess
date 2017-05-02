module.exports = (els, Storage, interval = true) => {
    const actionEls = {
        file: '._vzk',
        sticker: '._4rv6',
        gif: '._yht',
        emoji: '._5s2p',
        voice: '._4rv7',
        poll: '._2o-b',
        game: '._4ce_',
        cam: '._4rv5'
    };

    const updateChatActions = () => {
        const actionDiv = els.chat.querySelector('._4rv4');
        const actions = Storage.get().chat.actions;
        Object.keys(actionEls).forEach(action => {
            const el = actionDiv.querySelector(actionEls[action]);
            if(el) {
                // If the action is in the settings,
                // the user wants to hide it
                if(actions.indexOf(action) > -1) {
                    el.style.display = 'none';
                } else {
                    el.style.display = 'inline-block';
                }
            }
        });
    };

    if(interval) {
        updateChatActions();
        window.setInterval(updateChatActions, 10000);
    }

    return updateChatActions;
};
