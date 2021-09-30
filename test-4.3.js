const readlineSync = require("readline-sync")

let n = readlineSync.question('How many random numbers ? : ')
let rand = 0;

function rand10(){

    return Math.floor(Math.random()*10+1);
}

function multirand(n){
  let randtable=[];
  for (let i = 0; i < n; i++) {
  
  randtable.push(rand10());
  
}
 return randtable;
}

console.log(multirand(n));
