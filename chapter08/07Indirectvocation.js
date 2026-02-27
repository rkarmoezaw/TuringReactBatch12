// "use strict";
let obj = {
  name: "R Kar",
  greet(message) {
    console.log(this);
    console.log(this.name);
    console.log(message);
  },
};

let obj2 = {
  name: "Aung Aung",
};

let greet = obj.greet; //disappear this and attached to window object, in strict mode, it's undefined
greet();

greet.call(obj, "HI");
greet.call(obj2, "Hello");

greet.apply(obj, ["Hi"]);
greet.apply(obj2, ["Hello"]);

let fun = obj.greet.bind(obj2, "Howdy");
fun();
