const readlineSync = require("readline-sync");

//const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


let number = readlineSync.question('Choose a number between 1-7 : ');

if (number == 1)
{ console.log('The number : ' + number + ' is Monday');}
else if (number == 2)
{ console.log('The number : ' + number + ' is Tuesday');}
else if (number == 3)
{ console.log('The number : ' + number + ' is Wednesday');}
else if (number == 4)
{ console.log('The number : ' + number + ' is Thursday');}
else if (number == 5)
{ console.log('The number : ' + number + ' is Friday');}
else if (number == 6)
{ console.log('The number : ' + number + ' is Saturday');}
else if (number == 7)
{ console.log('The number : ' + number + ' is Sunday');}
else 
{ console.log('The number is not in range.');}

console.log('Bye !');
