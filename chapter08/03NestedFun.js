function outer() {
  let counter = 10;
  console.log("Outer Function");
  function inner() {
    console.log("Inner Function", counter);
  }
  inner();
  return inner;
}

outer();
