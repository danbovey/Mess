window.onload = () => {
    console.log('Messenger Discord Skin v1.0.0');

    // Define important elements
    const els = {
        conversations: document.querySelector('._1enh'),
        header: document.querySelector('._5742'),
        rightSidebar: document.querySelector('._4_j5')
    };

    const components = [
        require('./components/ext-settings'),
        require('./components/chat-settings')
    ];

    components.forEach(c => c(els));
};
