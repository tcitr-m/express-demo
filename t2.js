const path = require('path');

var p = 'F:\\demo\\nodejs-demo\\express-demo\\www\\upload.html';

var obj = path.parse(p);

console.log(obj);
/*
{ root: 'F:\\',
  dir: 'F:\\demo\\nodejs-demo\\express-demo\\www',
  base: 'upload.html',
  ext: '.html',
  name: 'upload' }
* */