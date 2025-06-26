function sortByNumber(input) {
  let output = [];

  numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let words = input.split(" ");

  for (let index = 0; index < words.length; index++) {
    const word = words[index];
    for (const number of numbers) {
      if (word.includes(number)) {
        output[numbers.indexOf(number)] = word;
      }
    }
  }

  return output.join(" ");
}

//test 1
let testString1 = "is2 Thi1s T4est 3a";
console.log(sortByNumber(testString1));
//test 2
let testString2 = "4of Fo1r pe6ople g3ood th5e the2";
console.log(sortByNumber(testString2));
//test 2
let testString3 = "";
console.log(sortByNumber(testString3));
