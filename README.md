# express-mock

## express

高度包容,快速而极简的 Node.js Web框架

express 一种保持最低程度规模的灵活 Node.js Web应用框架，它提供精简基本Web应用程序功能，而不会隐藏你了解和青睐 Node.js功能。

### 1. 安装
```js
	npm init //创建一个package.json
	npm install express --save
```

### 2. 原理

#### 2.1 http模块
Express建立在 Node.js 内置的http模块上。

```js
	var http = require('http');
	var app = http.createServer(function(request, response) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.end("Hello world");
	});
	app.listen(3000, "localhost");
```
express封装：
```js
	var express = require('express');
	var app = express();
	app.get('/', function(req, res) {
		res.send("Hello world");	
	});
	app.listen(3000):
```

Express 框架等价于在http模块之上，加了一个中间层.

#### 2.2 中间件

middleware 就是处理HTTP请求的函数。

#### 2.3 use

use是express注册中间件的方法，它返回一个函数。

### 3. 方法

#### 3.1 use的别名

针对不同的请求，Express 提供了use方法的一些别名。

```js
	app.all("*", function(request, response, next) {
		response.writeHead(200, {
			{
				"Content-Type": "text/plain"
			}
		});
		next();
	});
	app.get("/", function(request, response) {
		response.end("Welcome to the homePage !");
	})
	app.get("/about", function(request, response) {
		response.end("Welcome to the homePage !");
	})
	app.get("/", function(request, response) {
		response.end("Welcome to the homePage !");
	})
	app.get("*", function(request, response) {
		response.end("404!");
	})
	http.createServer(app).listen(3000);
```

除了get方法以外，Express还提供了post，put，delete方法，即HTTP动词都是Express的方法。

#### 3.2 set

用于指定变量的值
```js
app.set("views", __dirname + "/views");
app.set("view engine", "jade");
```

#### 3.3 response对象




