#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json')

program
    .version(pkg.version)
    .command('image', 'Download images')
    .parse(process.argv);

