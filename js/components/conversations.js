const Tooltip = require('tooltip.js');

module.exports = els => {
    const convos = els.conversations.querySelectorAll('._1ht1');
    [].forEach.call(convos, conversation => {
        const convoName = conversation.querySelector('._1qt4 ._1qt5 ._1ht6');

        const tooltip = new Tooltip(conversation.querySelector('._4ldz'), {
            placement: 'right',
            title: convoName.textContent,
            template: (
                '<div class="Mess-tooltip" role="tooltip">' +
                    '<div class="tooltip-arrow"></div>' +
                    '<div class="tooltip-inner">' +
                    '</div>' +
                '</div>'
            ),
            container: document.body
        });
    });
};
