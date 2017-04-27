let options = {
    theme: 'light',
    chat: {
        chat_style: true
    }
};

const Storage = {
    load: () => new Promise((resolve) => {
        chrome.storage.sync.get(null, items => {
            Object.assign(options, items);
            resolve(options);
        });
    }),
    set: opts => new Promise((resolve) => {
        options = Object.assign({}, options, opts);
        chrome.storage.sync.set(options, () => resolve());
    }),
    get: () => options
};

module.exports = Storage;
