const { red, green } = require('colors');
const imageDownloader = require("image-downloader");

const downloadimage = (img) => {
    console.log(img)
    const options = {
        url: img,
        dest: './o'
    };
    
    imageDownloader
        .image(options)
        .then(({ filename }) => {
            console.log(`${filename} saved`.green);
        })
        .catch((err) => console.error('Process failed due to some error :'.red, '\n', err));
}

module.exports = downloadimage;