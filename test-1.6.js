const readlineSync = require("readline-sync");

let number1 = readlineSync.question('Can you give me a int please ?');
let number2 = readlineSync.question('Can you give me another int please?');

//number1 = Math.trunc(number1);
let resultat = number1 % number2;

console.log('Modulo of number1 & number2 = ' + resultat);
