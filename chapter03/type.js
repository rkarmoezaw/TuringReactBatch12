let a = 7;
let b = 2;
let str = 'Hello';
b = 'Hello';
console.log('typeof str ', typeof str);
console.log('typeof a ', typeof a);
console.log(' + ', a + b);

console.log(typeof 2);
console.log(typeof 'Hello');
console.log(typeof 324n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Symbol('Fool'));
console.log(typeof null);

console.log(Symbol('Hello') === Symbol('Hello'));

/*
7 Primitive Types
  - String
  - Number
  - BigInt
  - Boolean
  - Undefined
  - Symbol
  - Null
*/
