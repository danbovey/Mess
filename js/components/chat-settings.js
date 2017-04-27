module.exports = els => {
    // Move the settings icon from the right sidebar to the header
    // Place next to the conversation header
    const icon = els.rightSidebar.querySelector('._3-ne');
    els.header.appendChild(icon);
};
