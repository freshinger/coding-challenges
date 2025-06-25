function findMissing(input) {
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  input = input.map((x) => x.toLowerCase());
  let beginning = input[0];
  let next = input[1];
  let found = false;
  let index = 1;
  while (!found) {
    if (alpha.indexOf(next) - alpha.indexOf(beginning) !== 1) {
      found = true;
      output = alpha[alpha.indexOf(beginning) + 1];
    } else {
      beginning = alpha[alpha.indexOf(input[index])];
      next = alpha[alpha.indexOf(input[index + 1])];
      index++;
    }
  }

  return output;
}

// test

let test1 = ["a", "b", "c", "d", "f"]; // -> 'e'
console.log(findMissing(test1));

let test2 = ["O", "Q", "R", "S"]; // -> 'P'
console.log(findMissing(test2));

let test3 = ["O", "P", "R", "S"]; // -> 'q'
console.log(findMissing(test3));
