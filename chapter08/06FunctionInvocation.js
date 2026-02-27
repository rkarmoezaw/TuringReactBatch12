function hello() {
  console.log("Hello");
}

hello();

let obj = {
  name: "R Kar",
  greet() {
    console.log(this);
    console.log(this.name);
  },
};

obj.greet(); //invoke as method

function Human(name) {
  this.name = name;
  console.log("Human");
}

let h = new Human("R Kar"); //invoke as constructor
console.log(h);
console.log(h.name);
