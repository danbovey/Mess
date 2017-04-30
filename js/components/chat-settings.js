/**
 * Move the settings icon from the right sidebar to the header
 * Place next to the conversation header
 */
module.exports = els => {
    const moveSettings = () => {
        const rightSidebar = document.querySelector('._4_j5');
        if(rightSidebar) {
            const icon = rightSidebar.querySelector('._3-ne');
            if(icon) {
                // Header
                document.querySelector('._5742').appendChild(icon);
                return;
            }
        }

        window.setTimeout(moveSettings, 5000);
    };
    moveSettings();
};
