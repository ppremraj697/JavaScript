const radius = [5, 2, 3, 6, 4, 1];

//Our own basic map() functions logic
Array.prototype.calculate = function (logic) {
  const output = [];

  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }

  return output;
};

const area = function (radius) {
  return Math.PI * radius * radius;
};

console.log(radius.calculate(area));