"use strict";
// step 1
let numbers = [1, 2, 3, 4];
function dbl(input) {
    return input.map((x) => x * 2);
}
let dblnumbers = dbl(numbers);
for (const element of dblnumbers) {
    console.log(element);
}
