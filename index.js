'use strict';

var mongoose = require('mongoose');
var restify = require('restify');
var Router = require('./utils/Router');

function onDbConnected(err) {
  if(err) {
    throw err;
  }
  console.log('DB connection open');
  server.listen(8080, '127.0.0.1', onServerListening);
}

function onServerListening(err) {
  if(err) {
    throw err;
  }
  console.log('%s listening at %s', server.name, server.url);
}

var server = restify.createServer({});
server.pre(function(req, res, next) {
  req.headers['content-type'] = 'application/json';//Force json request
  return next();
});
server.use(restify.CORS());
server.use(restify.queryParser());
server.use(function (req, res, next) {
  res.header('Content-Type', 'application/json; charset=utf8');
  return next();
});
server.use(restify.bodyParser({ mapParams: true }));
Router.setup(server);

mongoose.connect('mongodb://localhost/organizer', onDbConnected);

