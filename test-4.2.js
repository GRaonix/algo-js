const readlineSync = require("readline-sync")

// let n = readlineSync.question('Choose a n number: ')
let rand = 0;

function rand10(){

    return Math.floor(Math.random()*10+1);
}

console.log(rand10());
// rand10(); // generate a number between 1 & 10

