function maskify(input) {
  let inputArray = input.split("");
  let output = "";
  for (let index = 0; index < inputArray.length; index++) {
    const element = inputArray[index];
    if (inputArray.length - 4 > index) {
      output += "#";
    } else {
      output += inputArray[index];
    }
  }

  return output;
}

//Test

let input = "Skippy!";
let output = maskify(input);
console.log(output);
let input2 = "Nananananananananananananananana Batman!";
let output2 = maskify(input2);
console.log(output2);
