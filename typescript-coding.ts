// step 1
let numbers: number[] = [1, 2, 3, 4];

function dbl(input: number[]): number[] {
  return input.map((x) => x * 2);
}
let dblnumbers = dbl(numbers);
for (const element of dblnumbers) {
  console.log(element);
}

//step 2

let words: string[] = ["it", "is", "the", "longest", "shortest", "word"];

function filterlongwords(input: string[]): string[] {
  return input.filter((x) => x.length > 5);
}

let filtered = filterlongwords(words);

for (const word of filtered) {
  console.log(word);
}

// step 3

let numbersToReduce: number[] = [1, 2, 3, 4];
function sumNumbers(input: number[]): number {
  return input.reduce((x, y) => x + y);
}
console.log(sumNumbers(numbersToReduce));

// step 4
let numberstoCheck: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numberstoCheck.some((x) => x > 10));
let numberstoCheck2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(numberstoCheck2.some((x) => x > 10));
