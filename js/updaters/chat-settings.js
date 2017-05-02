/**
 * Move the settings icon from the right sidebar to the header
 */
module.exports = (els, Storage, interval = true) => {
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
    };

    if(interval) {
        window.setInterval(moveSettings, 5000);
    }

    return moveSettings;
};
