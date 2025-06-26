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
