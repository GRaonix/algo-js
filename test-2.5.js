const readlineSync = require("readline-sync");

let favNumber = 1;
while (favNumber != 42) {
favNumber = readlineSync.question('What is your favorite number ?');
  console.log('Are you sure ?');
  
}
console.log('Bravo !');
