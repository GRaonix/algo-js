const readlineSync = require("readline-sync")

// let n = readlineSync.question('Choose a n number: ')



console.log('');
let l = readlineSync.question('Length of the rectangle : ');
let w = readlineSync.question('Width of the rectangle : ');


let myFunction = (l, w) => {
  return l * w;
}

console.log('The surface of the rectangle is ' + myFunction(l, w));
