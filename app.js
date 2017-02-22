// Module Dependencies
var express = require('express');
var connect = require('connect');
var app = express();
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'


//Configuration
app.use(express.static(__dirname + '/public'));
app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());

//	Routes
require('./routes/routes.js')(app);

app.listen(port);

console.log("The App runs on server "+ server_ip_address + "and port " + port);