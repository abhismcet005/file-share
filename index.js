#! /usr/bin/env node

// Set default node environment to development
var express = require('express');
var app = express();
var directory = require('serve-index');

//var userArgs = process.argv.slice(2);
//var userPort = userArgs[0] || 9000;
//var dirUrl = userArgs[1] || __dirname;
//console.log(userPort,dirUrl);

var userArgs = require('optimist').argv;
var userPort = userArgs.port || 9000;
var dirUrl = userArgs.path || __dirname;

app.use(directory(dirUrl));
app.use(express.static(dirUrl));

var server = app.listen(userPort, function () {
    console.log('file-share module listening at port : '+ userPort);
});