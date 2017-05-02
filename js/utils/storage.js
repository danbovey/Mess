const assign = require('assign-deep');

let options = {
    theme: 'light',
    chat: {
        style: 'bubbles',
        actions: []
    },
    text: {
        emoji: 'facebook',
        imgur_gifv: true
    }
};

const Storage = {
    load: () => new Promise((resolve) => {
        chrome.storage.sync.get(null, items => {
            options = assign(options, items);
            resolve(options);
        });
    }),
    set: opts => new Promise((resolve) => {
        options = assign({}, options, opts);
        chrome.storage.sync.set(options, () => resolve());
    }),
    get: () => options
};

module.exports = Storage;
