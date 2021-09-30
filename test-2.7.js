const readlineSync = require("readline-sync")

let n = readlineSync.question('Choose a n number: ')
let total = 0

do {
  let plus = Number(readlineSync.question('Choose a n number: '))
  
  total += plus
  n --
} while (n > 0)

console.log('Total : ' + total)




 

