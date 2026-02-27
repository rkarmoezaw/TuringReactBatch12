let circle = {
  radius: 10,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);
