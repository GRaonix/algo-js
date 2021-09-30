const readlineSync = require("readline-sync")

// let n = readlineSync.question('Choose a n number: ')

let numbersArray1 = [1, 2, 3, 4, 5];
let numbersArray2 = [100, 101, 102];
let total = 0;

console.log(numbersArray1.length);


for (let i = 0; i < numbersArray1.length; i++) {
  total += numbersArray1[i] ;
  
  console.log(i);
}
total /= numbersArray1.length;
console.log('Total of the array 1 : ' + total);

total = 0;
for (let i = 0; i < numbersArray2.length; i++) {
  total += numbersArray2[i];
  
  console.log(i);
}
total /= numbersArray2.length;
console.log('Total of the array 2 : ' + total);
