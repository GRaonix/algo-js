const readlineSync = require("readline-sync")

rand = Math.floor(Math.random()*100+1)


let guess = readlineSync.question('Choose a random number betweeb 1 & 100 : ')

while (guess != rand) {

if (guess > rand)
  guess = readlineSync.question('Too high, try again : ')
  else
  guess = readlineSync.question('Too low, try again : ')
}

console.log('Good guess ! Random number was : ' + rand)

