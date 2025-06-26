// step 1
let numbers: number[] = [1, 2, 3, 4];

function dbl(input: number[]): number[] {
  return input.map((x) => x * 2);
}
let dblnumbers = dbl(numbers);
for (const element of dblnumbers) {
  console.log(element);
}
