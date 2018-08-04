var chalk = require('chalk');
var module = require('./module.js');
// console.log(chalk.blue('Hello World!'));
// console.log(chalk.red('Hello World!'));

module.pushToList(10);
module.pushToList(-21);
module.pushToList(0);
module.pushToList(91);
module.pushToList(7);
module.pushToList(101);
console.log(module.sortedList());