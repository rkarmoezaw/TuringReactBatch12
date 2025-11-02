let a = 10;
console.log('Value of a: ', a);
console.log('Type of a: ', typeof a);

a = 0.5;

a = 0xff; //hexadecimal (15*16 + 15)
a = 0.333;
a = 6.2e23;
a = 4.5e-24;
a = 543_245_233;

console.log('New value of a: ', a);
console.log('Type of a after reassignment: ', typeof a);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
