const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

var upload = multer({dest: './public/uploadFile/'});//缓存路径，自动生成
var app = express();

//app.use(bodyParser,urlencoded({extended: false}));
app.use(upload.any());

app.post('/upload',function (req,res) {
    /*
    [ { fieldname: 'f1',
    originalname: 'oracleToModel.txt',
    encoding: '7bit',
    mimetype: 'text/plain',
    destination: './public/uploadFile/',
    filename: 'f703fcab6f29036679fd353e6d741f94',
    path: 'public\\uploadFile\\f703fcab6f29036679fd353e6d741f94',
    size: 211 } ]
     */
    let originalname = req.files[0].originalname;   //文件原始名
    let filename = req.files[0].path;           //文件新名
    let ext = path.extname(originalname);           //扩展名
    console.log('文件名：'+filename);
    let newName = filename + ext;
    console.log('扩展名：'+ext);

    fs.rename(filename,newName ,function (err) {
        if (err)
            res.send('失败');
        else
            res.send('成功');

    });

});

app.listen(8080);
console.log('start success');