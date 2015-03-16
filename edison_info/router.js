/**
 * router for api calls.
 */
var express = require('express');
var appdick = process.cwd();
var config = require('./config');
var logp = require('./logger');
var router = express.Router();

router.use(function(req, res, next) {
	logp.info("request dump: ", req.method, req.url, req.headers, req.params);
	next();
});

router.get('/', function(req, res) {
	res.sendFile('./public/home.html', {
		"root" : __dirname
	});
});

module.exports = router;
