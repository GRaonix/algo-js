const readlineSync = require("readline-sync")



let AX = readlineSync.question('X coord of point A ? : ')
let AY = readlineSync.question('Y coord of point B ? : ')
let BX = readlineSync.question('X coord of point A ? : ')
let BY = readlineSync.question('Y coord of point B ? : ')

function calcDistance(AX, AY, BX, BY){


let dist = Math.sqrt(((BX - AX) * (BX - AX) ) + (( BY - AY) * (BY - AY)));
  console.log('Distance between point A & point B : ' + dist);
  
}

calcDistance(AX, AY, BX, BY)
// Math.sqrt( 0.5 );





