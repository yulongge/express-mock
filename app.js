var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./router')(app);

app.set('port', 3000); //设定port变量，为端口号
app.set('view engine', 'html'); //网页模板引擎

app.use(bodyParser.json());

app.listen(app.get('port'), function() {
	console.log("服务已启动，端口为: " + app.get('port'));
});
