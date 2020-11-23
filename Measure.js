var fs = require('fs');

var array = fs.readFileSync('gcode.txt').toString().split("\n");

module.exports.array = array;