const readlineSync = require("readline-sync")

// let n = readlineSync.question('Choose a n number: ')

let numbersArray1 = [14, 2, 7, 4, 13];
// let numbersArray2 = [100, 101, 102];

console.log('Length of the array : ' + numbersArray1.length);
let comparaison = 0;
let plusgros = 0;
console.log("For the array : ");
for (let i = 0; i < numbersArray1.length; i++) {
   numbersArray1[i];
 
 console.log('[' + numbersArray1[i] + ']');
  
}

for (let i = 0; i < numbersArray1.length; i++) {
  comparaison = numbersArray1[i];
  plusgros = comparaison;
  
}
console.log('Biggest number is : ' + plusgros);


  pluspetit = plusgros;
  comparaison = 0;
for (let i = 0; i < numbersArray1.length; i++) {
  comparaison = numbersArray1[i];
 
  
  if (comparaison < pluspetit)
  pluspetit = comparaison;
  
}
console.log('Smallest number is : ' + pluspetit);
