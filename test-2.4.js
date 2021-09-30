for (let i = 0; i <= 100; i ++) {
let pair = i % 2;

if (pair === 0) 
{ 
operation = i / 2;
  console.log(i + ' is even, so the number is : ' + i + ' / 2 = ' + operation);
} else {
  operation = i * 3;
  console.log(i + ' is uneven, so the number is : ' + i + ' * 3 = ' + operation);
  
} } 
