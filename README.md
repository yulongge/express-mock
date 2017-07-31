# mock

## express for mock

### express

高度包容,快速而极简的 Node.js Web框架

express 一种保持最低程度规模的灵活 Node.js Web应用框架，它提供精简基本Web应用程序功能，而不会隐藏你了解和青睐 Node.js功能。

#### 1. 安装
```js
	npm init //创建一个package.json
	npm install express --save
```

#### 2. 原理

##### 2.1 http模块
Express建立在 Node.js 内置的http模块上。

如果用http模块生成服务器如下:

```js
	var http = require('http');
	var app = http.createServer(function(request, response) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.end("Hello world");
	});
	app.listen(3000, "localhost");
```
express封装(核心是对http模块的再包装)
```js
	var express = require('express');
	var app = express();
	app.get('/', function(req, res) {
		res.send("Hello world");	
	});
	app.listen(3000):
```

Express 框架等价于在http模块之上，加了一个中间层.

##### 2.2 中间件

middleware 就是处理HTTP请求的函数。其特点就是，一个中间件处理完，再传递给下一个中间件。

从本质上讲，一个express就是在调用各种中间件。
中间件的种类:

- 应用级中间件
	1. app.use()
	2. app.METHOD()
- 路由级中间件
	```js
	var router = express.Router();
	```
	使用router.use() 和 router.VERB()加载
	```js
	router.use(function(req, res, next) { //没挂路径，每个请求都回执行
		console.log('Time', Date.now());
		next();
	});
	router.get('/user/:id', function() (req, res, next) {
		res.render('regular');
	})
	```
- 错误处理中间件
	使用四个参数
	```js
	app.use(function(err, req, res, next) {
		console.log(err.stack);
		res.status(500).send('Something broke!');
	})
	```
	> 定义处理错误中间件必须使用4个参数，即使不需要next对象，也必须在签名中声明它。

- 内置中间件
	从4.x版本开始，Express已经不再依赖Connect了，除了express.static, Express以前内置的中间件现在已经全部单独作为模块安装使用了。
	express.static是Express唯一内置的中间件。
	```js
	var options = {
	  dotfiles: 'ignore',
	  etag: false,
	  extensions: ['htm', 'html'],
	  index: false,
	  maxAge: '1d',
	  redirect: false,
	  setHeaders: function (res, path, stat) {
		res.set('x-timestamp', Date.now());
	  }
	};

	app.use(express.static('public', options));
	```

	每个目录可有多个静态目录：

	```js
		app.use(express.static('public'));
		app.use(express.static('uploads'));
		app.use(express.static('files'));
	```

- 第三方中间件
	通过使用第三方中间件从而为express应用增加更多功能。

	```js
	npm install cookie-parser //先安装所需node模块

	var cookieParser = require('cookie-parser');
	app.user(cookieParser());
	```

##### 2.3 use

use是express注册中间件的方法，它返回一个函数。

#### 3. 方法

##### 3.1 use的别名

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

##### 3.2 set

用于指定变量的值
```js
app.set("views", __dirname + "/views");
app.set("view engine", "jade");
```

##### 3.3 response对象

- response.redirect
- response.sendFile
- response.render

##### 3.4 request对象

- request.ip
- request.files

### faker.js

用来mock数据，有自己的API，而且非常丰富

#### install

```js
npm i faker --save 

var faker = require('faker');

var randomName = faker.name.findName();
var randomEmail = faker.internet.email();
var randomCard = faker.helpers.createCard();
```

#### API
Faker.fake()

```js
var json = faker.fake("{{name.lastName}}, {{name.firstName}}, {{name.suffix}}");
console.log(json) //"Marks, Dean Sr."
```

#### Localization

default value is set to English

```js
faker.locale = "zh_CN";
```





## json-server for mock

### install

```js
 npm install json-server --save
```

### 运行

安装完后，在本目录下创建一个xx.json,然后执行
```js
json-server db.json -p 3003
```


