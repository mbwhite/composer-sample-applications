
'use strict'
var chalk = require('chalk');
var shell = require('shelljs');
var fs  = require('fs');
var path= require('path');
var pretty = require('prettyjson');


console.log(chalk.blue.bold('Hyperledger Composer Sample applications available in this repository:\n'));
let apps = fs.readdirSync('./packages');
apps.forEach(function(entry) {
    var packagejson = require(path.resolve('.','packages',entry,'package.json'));

    var sampleapp = { 'App Directory': './packages/'+entry,
                      'App Name':packagejson.name,
                      'App Description':packagejson.description }



    console.log(pretty.render(sampleapp,{
        keysColor: 'blue',
        dashColor: 'blue',
        stringColor: 'white'
    }));
    console.log('\n');

});
