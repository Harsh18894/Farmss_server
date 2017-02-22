var chgpass = require("config/chgpass");
var login = require("config/login");
var register = require("config/register");

module.exports = function(app) {

	app.get('/', function(req, res){
		res.send("Farmss Server Online Now.......");
	});

	app.post('/login', function(req,res){
		var mobile = req.body.mobile;
		var password = req.body.password;

		login.login(mobile, password, function(found){
			console.log(found);
			res.json(found);
		});
	});

	app.post('/register', function(req, res){
		var name = req.body.name;
		var email = req.body.email;
		var mobile = req.body.mobile;
		var password = req.body.password;
		var location = req.body.location;

		register.register(name, email, mobile, password, location, function(found){
			console.log(found);	
			res.json(found);
		});
	});
}