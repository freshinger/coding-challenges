function likesToText(likes) {
  let output = "";
  switch (likes.length) {
    case 0:
      output = "no one likes this";
      break;
    case 1:
      output = likes[0] + " likes this";
      break;
    case 2:
      output = likes[0] + " and " + likes[1] + " like this";
      break;
    case 3:
      output = likes[0] + ", " + likes[1] + " and " + likes[2] + " like this";
      break;
    default:
      output =
        likes[0] +
        ", " +
        likes[1] +
        " and " +
        (likes.length - 2) +
        " others like this";
      break;
  }

  return output;
}

//test

let test1 = []; //-->  "no one likes this"
let test2 = ["Peter"]; //-->  "Peter likes this"
let test3 = ["Jacob", "Alex"]; //-->  "Jacob and Alex like this"
let test4 = ["Max", "John", "Mark"]; //-->  "Max, John and Mark like this"
let test5 = ["Alex", "Jacob", "Mark", "Max"]; //-->  "Alex, Jacob and 2 others like this

let test6 = ["Alex", "Jacob", "Mark", "Max", "Daniel"]; //-->  "Alex, Jacob and 2 others like this

console.log(likesToText(test1));
console.log(likesToText(test2));
console.log(likesToText(test3));
console.log(likesToText(test4));
console.log(likesToText(test5));
console.log(likesToText(test6));
