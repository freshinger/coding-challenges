"use strict";
const list = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194];
// Sort these numbers in descending order.
console.log(list.sort((a, b) => b - a));
//Square these numbers.
console.log(list.map((x) => x * x));
//Remove the lowest two numbers and the highest 4 numbers from the list.
console.log(list);
console.log(list.filter((x) => list.indexOf(x) != 0));
