var fs = require('fs');
var insertCss = require('insert-css');
var css = fs.readFileSync(__dirname + '/bootstrap.css');
insertCss(css);