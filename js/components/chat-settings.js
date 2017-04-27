module.exports = els => {
    // Move the settings icon from the right sidebar to the header
    // Place next to the conversation header
    const icon = els.rightSidebar.querySelector('._3-ne');
    els.header.appendChild(icon);

    // if(title != null && icon != null) {
    //     const leftOffset = title.offsetWidth;
    //     icon.style.left = `${leftOffset + 32}px`;
    //     icon.style.display = 'block';
    // }
};
