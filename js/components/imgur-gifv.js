/**
 * Expand Imgur GIFV attachments
 */
module.exports = (els, Storage) => {
    if(Storage.get().text.imgur_gifv) {
        const expandGifvs = () => {
            const attachments = els.chat.querySelectorAll('._5i_d');
            [].forEach.call(attachments, attach => {
                if(!attach.classList.contains('Mess-injected-imgur-gifv')) {
                    const a = attach.querySelector('a');
                    if(a) {
                        const link = a.getAttribute('href');
                        // Match any Imgur GIFV links
                        if(link.indexOf('i.imgur.com') > -1 && link.indexOf('.gifv') > -1) {
                            attach.classList.add('Mess-injected-imgur-gifv');

                            let imgurCode = link.match(/i.imgur.com%2F(.*).gifv/)[1];

                            const video = document.createElement('video');
                            video.classList.add('Mess-imgur-gifv');
                            video.setAttribute('autoplay', 'autoplay');
                            video.setAttribute('loop', 'loop');
                            video.setAttribute('src', `https://i.imgur.com/${imgurCode}.mp4`);
                            attach.replaceChild(video, a);
                        }
                    }
                }
            });
        };

        window.setInterval(expandGifvs, 2000);
    }
};
