const readlineSync = require("readline-sync");

let minAge = readlineSync.question('Can you give me the min age ?');
let maxAge = readlineSync.question('Can you give me the max age ?');
let currentAge = readlineSync.question('Can you give me your current age ?');

if (minAge > maxAge) {
  console.log('I don\'t understand your request, I\'m sorry !');
} else if ((currentAge >= minAge) && (currentAge <= maxAge)) {

 console.log("Votre âge est bien entre l'age min et max.");
} else {
console.log("Votre âge n'est pas entre l'age min et max.");
}


