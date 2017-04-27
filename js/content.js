window.onload = () => {
    console.log('Messenger Discord Skin v1.0.0');

    const conversationsWidth = 57;

    // Move the settings icon from the right sidebar to the conversation title
    const title = document.querySelector('._5742 ._5743');
    const settingIcon = document.querySelector('._4_j5 ._3-ne');

    if(title != null && settingIcon != null) {
        const leftOffset = title.offsetWidth;
        settingIcon.style.left = `${leftOffset + 32 + conversationsWidth}px`;
        settingIcon.style.display = 'block';
    }
};
