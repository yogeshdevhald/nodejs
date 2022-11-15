var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
const multer  = require('multer');

var app = express();

var server = require('http').Server(app);

var port = process.env.PORT || 4000;

// to support JSON-encoded bodies
app.use(bodyParser.json())

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))

// Require item routes
const routes = require('./route/route')

// using as middleware
app.use('/api', routes)


// app.get("/", (req, res, next) => {
// 	res.json("What's up?");
// });

server.listen(port, () => {
    console.log('Listening on port: ' + port);
});