var express = require('express');
var app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


// 指定html
app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + req.path);
});

// json
app.get('/list.json', function(req, res) {
    res.sendFile(__dirname + req.path);
  });
  

// 配置Mock数据
var fs = require('fs');
app.post('/home', function(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  fs.readFile('./mock/home.json', function(err, data) {
    if (err) throw err;

    res.json(JSON.parse(data));
  });
});

// 监听端口
app.listen('3737', function () {
  console.log('localhost:3737/index.html');
});

// https://juejin.im/post/5bdbe92f6fb9a049bb7bc18f
