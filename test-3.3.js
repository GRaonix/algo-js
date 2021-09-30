const readlineSync = require("readline-sync")

// let n = readlineSync.question('Choose a n number: ')

let numbersArray1 = [1, 2, 3, 4, 5];
// let numbersArray2 = [100, 101, 102];
let copie = 0;
let arr = [];
console.log(numbersArray1.length);


for (let i = 0; i < numbersArray1.length; i++) {
  copie = numbersArray1[i];
  arr.push(copie);
  // total += arr[i] ;
  
  console.log(i);
}


for (let i = 0; i < arr.length; i++) {

console.log('Element Number ' + i + ': ' + arr[i]);

}
