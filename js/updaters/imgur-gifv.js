/**
 * Expand Imgur GIFV attachments
 */
module.exports = (els, Storage, interval = true) => {
    const expandGifvs = () => {
        if(Storage.get().text.imgur_gifv) {
            // Search for all imgur attachments that
            // are currently just text previews
            const attachments = els.chat.querySelectorAll('._5i_d');
            [].forEach.call(attachments, attach => {
                if(!attach.classList.contains('Mess-injected-imgur-gifv') && !attach.classList.contains('Mess-not-imgur-gifv')) {
                    const a = attach.querySelector('a');
                    if(a) {
                        const link = a.getAttribute('href');
                        // Match any Imgur GIFV links
                        if(link.indexOf('i.imgur.com') > -1 && link.indexOf('.gifv') > -1) {
                            attach.classList.add('Mess-injected-imgur-gifv');

                            // Match the imgur code in the messenger redirect URL
                            let imgurCode = link.match(/i.imgur.com%2F(.*).gifv/);
                            if(imgurCode) {
                                imgurCode = imgurCode[1];
                                
                                // Replace the attachment preview with an Imgur MP4
                                const video = document.createElement('video');
                                video.classList.add('Mess-imgur-gifv');
                                video.setAttribute('autoplay', 'autoplay');
                                video.setAttribute('loop', 'loop');
                                video.setAttribute('src', `https://i.imgur.com/${imgurCode}.mp4`);
                                attach.replaceChild(video, a);
                            }
                        } else {
                            // Stop testing this attachment
                            attach.classList.add('Mess-not-imgur-gifv');
                        }
                    }
                }
            });
        }
    };

    if(interval) {
        window.setInterval(expandGifvs, 2000);
    }

    return expandGifvs;
};
