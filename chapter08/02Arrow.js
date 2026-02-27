function add(a, b) {
  console.log("A", a, "B", b);
  return a + b;
}

let result = add(10, 20);
console.log(result);

let add2 = (a, b) => a + b;

result = add2(5, 10);
console.log(result);
