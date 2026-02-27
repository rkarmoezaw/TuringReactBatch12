function add(x, y) {
  return x + y;
}

add(10, 20);

function inc(x) {
  return x++;
}

let a = 10;

inc(a); //a = x
console.log(a);

function incObj(obj) {
  obj.count++;
}

let counter = { count: 10 };
incObj(counter); //obj = counter
console.log(counter);

function incObj2(obj) {
  obj = { count: 10 };
}

incObj2(counter); //obj = counter
console.log(counter);
