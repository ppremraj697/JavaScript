//Example 1
const arr = [10, 2, 44, 75, 40, 5, 22, 94, 23];

const output = arr.reduce((acc, curr) => {
  if (acc < curr) acc = curr;
  return acc;
}, Number.MIN_SAFE_INTEGER);

console.log(output);

//Example 2
const users = [
  { firstName: "Premraj", lastName: "Patil", age: 23 },
  { firstName: "Akshay", lastName: "Saini", age: 29 },
  { firstName: "Donald", lastName: "Trump", age: 78 },
  { firstName: "Sunil", lastName: "Shetty", age: 55 },
  { firstName: "Elon", lastName: "Musk", age: 55 },
  { firstName: "Arvind", lastName: "Kejriwal", age: 55 },
];

function callback(acc, curr) {
  if (acc.hasOwnProperty(curr.age)) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}

const ans = users.reduce(callback, {});

console.log(ans);