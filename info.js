
'use strict'
var chalk = require('chalk');
var shell = require('shelljs');
var fs  = require('fs');
var path= require('path');
var pretty = require('prettyjson');


console.log(chalk.blue.bold('Hyperledger Composer Sample applications available in this repository:\n'));

let apps = fs.readdirSync('./');
apps.forEach(function(entry) {
	var possiblePackage = path.resolve('.',entry,'package.json');
	
	if (fs.existsSync(possiblePackage)){
	    var packagejson = require(possiblePackage);

	    var sampleapp = { 'App Directory': './'+entry,
	                      'App Name':packagejson.name,
	                      'App Description':packagejson.description }



	    console.log(pretty.render(sampleapp,{
	        keysColor: 'blue',
	        dashColor: 'blue',
	        stringColor: 'white'
	    }));
	    console.log('\n');
	}
});
