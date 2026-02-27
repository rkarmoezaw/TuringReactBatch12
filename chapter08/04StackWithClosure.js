let stack = {
  items: [],

  push(item) {
    this.items.push(item);
  },
  pop() {
    return this.items.pop();
  },
};

stack.push(10);
stack.push(20);
stack.push(30);

//stack.items = []; //This is the problem

console.log(stack.items);
console.log(stack.pop());

function Stack() {
  let items = [];
  console.log(items);

  function push(item) {
    items.push(item);
  }

  function pop() {
    return items.pop();
  }

  return {
    push,
    pop,
  };
}

let stack2 = Stack();
stack2.push(10);
stack2.push(20);
stack2.push(30);

stack2.items = []; //didn't change values inside closure scope, they are different
console.log(stack2.items);
stack2.pop();
console.log(stack2.items);
