const program = require('commander');

const image = require('../commands/image');

program
    .command('download')
    .description('Download any image form the internet by providong a valid url')
    .action(image.download);

program.parse(process.argv);