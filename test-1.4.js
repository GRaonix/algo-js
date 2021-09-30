const readlineSync = require("readline-sync");
let name = readlineSync.question('Can you give me your name please?');
let firstName = readlineSync.question('Can you give me your first name please?');
let city = readlineSync.question('Can you give me your city name please?');
//let numbertest = 5;
//let name = "Raoni";
//let firstName = "Gillet";
//let city = "Liege";
console.log('Your name is ' + firstName + ' ' + name + ' and you live in ' + city);
