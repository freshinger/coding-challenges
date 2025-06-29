function applyOperation(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  let resultOfOperation = operation(a, b);
  return resultOfOperation;
}
//addition
console.log(applyOperation(1, 1, (x, y) => x + y));
//subtraction
console.log(applyOperation(1, 1, (x, y) => x - y));
//multiplication
console.log(applyOperation(2, 3, (x, y) => x * y));
//division
console.log(applyOperation(4, 2, (x, y) => x / y));
