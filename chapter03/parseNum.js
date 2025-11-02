let str = '123.12abc';
let num = parseInt(str);
console.log('Value of num: ', num);

num = parseFloat(str);
console.log('Value of num: ', num);

str = '100abc';
num = +str;
console.log('Value of num: ', num);

let a = 'Hello';
let b = '2';
let result = a * b;

console.log('Result of a * b: ', result);

console.log('typeof NaN ', typeof result);

console.log('result == result ', result == result);
console.log('result == NaN ', result == NaN);
console.log('isNaN(result) ', isNaN(result));

a = 0.3;
b = 0.2;
let c = a - b;
console.log('a ', a);
console.log('c ', c);
