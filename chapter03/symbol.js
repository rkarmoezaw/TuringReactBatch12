let strname = 'name';
let symbol = Symbol('name');
let symbol2 = Symbol('name');

console.log('typeof symbol ', typeof symbol);
console.log(symbol.toString());
console.log('symbol ', symbol);

console.log('symbol == symbol2 ', symbol == symbol2);

let s = Symbol.for('shared');
let t = Symbol.for('shared');
console.log(s === t);

console.log(s.toString());

console.log(Symbol.keyFor(t));
