function mashArrays(a: any[], b: any[]): any[] {
  let mashedTogether: any[] = [];
  for (let i = 0; i < a.length; i++) {
    mashedTogether.push(a[i]);
    mashedTogether.push(b[i]);
  }
  return mashedTogether;
}

console.log(mashArrays([1, 2, 3], ["a", "b", "c"]));
// [1, 'a', 2, 'b', 3, 'c']

console.log(mashArrays(["x", "y"], [10, 20]));
// ['x', 10, 'y', 20]

console.log(mashArrays([true, false], ["yes", "no"]));
// [true, 'yes', false, 'no']

console.log(mashArrays(["left", "right", "center"], [0, 1, 2]));
// ['left', 0, 'right', 1, 'center', 2']
