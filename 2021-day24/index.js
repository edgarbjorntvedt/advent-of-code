"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var input = (0, fs_1.readFileSync)('./data/input.txt');
var programString = input.toString() + 'get z';
console.log(programString.slice(20));
