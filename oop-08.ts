interface MathOperation {
  (x: number, y: number): number;
}

let add: MathOperation;
add = function (x: number, y: number): number {
  return x + y;
};

let multiply: MathOperation;
multiply = function (x: number, y: number): number {
  return x * y;
};

// Test
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
