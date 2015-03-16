/**
 * Server Launcher.
 */
// imports
var express = require('express');
var morgan = require('morgan');
var config = require('./config');
var logp = require('./logger');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var router = require('./router');
var http = require('http');
var fs = require('fs');
var app = express();

// config
app.use(morgan('dev'));
app.use(favicon(config.app.homedir + config.app.favicon));
app.use(express.static('./public'));
//app.use(bodyParser());
//app.use(methodOverride());

// router
app.use('/', router);

// launch server
logp.info("spawning server on port: " + config.app.port);
http.createServer(app).listen(config.app.port);
logp.info("server started and listening on port: " + config.app.port);

// end

