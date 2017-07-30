var express = require('express');
var app = express();

app.get("/", function(req, res){
	res.send('hello world');
});

app.post('/createData', function(req, res) {
	console.log(req.body, 'req');
	res.send({id: 1, value: 2});
});
app.get("/menulist", function(req, res) {
	res.send([
		{id: 1, name: "食堂"},
		{id: 2, name: "美食城"}
	])	
});

app.listen(3000, function() {
	console.log("端口被启动");
});
