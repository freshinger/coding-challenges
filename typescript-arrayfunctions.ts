let list1 = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194];

list1.sort((a, b) => b - a);
console.log(list1);
list1 = list1.map((x) => x * x);
console.log(list1);

let filtered1 = list1.filter(
  (x) =>
    list1.indexOf(x) != 0 &&
    list1.indexOf(x) != 1 &&
    list1.indexOf(x) != 2 &&
    list1.indexOf(x) != 3 &&
    list1.indexOf(x) != list1.length - 1 &&
    list1.indexOf(x) != list1.length - 2
);
console.log(filtered1);
let filtered2 = filtered1.filter((x) => x % 4 !== 0);
console.log(filtered2);
console.log(filtered2.reduce((x, y) => x + y));
