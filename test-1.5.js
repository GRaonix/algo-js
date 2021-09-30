const readlineSync = require("readline-sync");

let number1 = readlineSync.question('Can you give me a float please ?');
let number2 = readlineSync.question('Can you give me another float please?');

number1 = Math.trunc(number1);
let resultat = number1 * number2;

console.log('First number multiplied by Second number = ' + resultat);
