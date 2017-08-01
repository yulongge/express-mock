var JSONDATA = require('./data/index');
var FakerData = require('./faker/menulist');
var eatlist = require('./faker/eatlist');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.send('welcome to homepage!');	
	});

	app.get("/menulist", function(req, res) {
		res.send(FakerData);	
	});


	app.get('/index/home', function(req, res) {
		console.log(JSONDATA, 'coming...');
		res.send(JSONDATA.index);
	})
	app.get('/eatlist', function(req, res) {
		res.send(eatlist);
	})
	app.post('/menu/add', function(req, res) {
		
	})
}
