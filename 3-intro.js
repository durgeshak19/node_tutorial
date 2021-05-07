//CommonJS , every file in node is module(by default)
//Moules - EncapuslatedCode(only share minimum)

const names = require('./3-names');
const sayHi = require('./3-utils');
const data = require('./3-alternate-way')
require('./4-mind-grenade');

console.log(data)


sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
