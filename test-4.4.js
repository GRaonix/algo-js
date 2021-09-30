const readlineSync = require("readline-sync")

let rand = 0;
let arr = [];

let n = readlineSync.question('How many random numbers ? : ')


function rand10(){
   rand = Math.floor(Math.random()*10+1);
   // console.log('Random number : ' + rand);
   arr.push(rand);
}

function multirand(n){
 
  for (let i = 0; i < n; i++) {
  rand10();
}   
}

multirand(n);

console.log("For the array : ");
for (let i = 0; i < arr.length; i++) {
   arr[i];
 
 console.log('[' + arr[i] + ']');
  
}

function average(arr){
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i] ;
  
}
  sum /= arr.length;
  console.log('Average of the array : ' + sum);
}

average(arr);


function max(arr){
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > sum){
  sum = arr[i]; }
  
}
  console.log('Biggest number of the array : ' + sum);
}

max(arr);



function min(arr){
let sum = 11;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < sum){
  sum = arr[i]; }
  
}
  console.log('Smallest number of the array : ' + sum);
}

min(arr);





