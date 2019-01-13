const beginDate = new Date().getTime();
const express = require('express');

var app = express();

var routeUser = express.Router();

routeUser.get('/1.html', function (req, res) {
    res.send('user1');

});
routeUser.get('/2.html', function (req, res) {
    res.send('user2');
});

app.use('/user', routeUser);

var articleRoute = express.Router();
app.use('/article', articleRoute);
articleRoute.get('/21.html',function (req,res) {
    res.send('21');
});

app.listen(8080);

const endDate = new Date().getTime();
console.log('start success\t用时：' + (endDate - beginDate));
