const beginDate = new Date().getTime();
const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');   //解析文件请求
const consolidate = require('consolidate'); //模板引擎

var app = express();
//创建监听
app.listen(8080);
//设置cookie 签名
app.use(cookieParser('as3d13ghd30984d'));
//创建session密钥
var sessionKey = [];
for (var i=0;i<100;i++){
    sessionKey.push('tomo' + Math.random());
}
app.use(cookieSession({
    name: 'lily',
    keys: sessionKey,
    maxAge: 1000 * 3600 * 1
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: './public/uploadFile/'}).any());



app.set('views engine', 'html');    //声明输出类型

app.set('views', './views');        //输出模板目录

app.engine('html', consolidate.ejs);//类型

app.get('/index', function (req,res) {
    res.render('1.ejs',{user: 'kurosawa'});
});

app.use(static('./www'));
const endDate = new Date().getTime();
console.log('start success\t用时：' + (endDate - beginDate));