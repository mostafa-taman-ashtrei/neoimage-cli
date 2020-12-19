const { green, red } = require('colors');
const inquirer = require('inquirer');
const validUrl = require('valid-url');

const downloadimage = require('../lib/imageManager');
const { isRequired} = require('../utils/isRequired');

const image = {
    async download () {
        const imageUrl = await inquirer.prompt([{
            type: 'input',
            name: 'img',
            message: 'Enter a valid image url!'.green,
            validate:  isRequired,
        }]);

        if (validUrl.isUri(imageUrl.img)) downloadimage(imageUrl.img);
        else console.log('That is NOT a valid url try again'.red);
    }
}

module.exports = image;