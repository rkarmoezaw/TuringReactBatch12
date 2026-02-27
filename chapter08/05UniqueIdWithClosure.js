function UniqueId() {
  let id = 0;
  return function () {
    id++;
    return id;
  };
}

let unique = UniqueId();
console.log(unique());
console.log(unique());
console.log(unique());
