// step 1
let age: number = 37;

// step 2
for (let index = 1; index <= age; index++) {
  console.log(index + " ");
}

// step 3
if (age > 18) {
  console.log("you are older than 18 years.");
} else {
  console.log("you are younger than 18 years.");
}

// step 4
let score: number = 0;

// step 5
if (score !== 0) {
  console.log("score is available.");
}

// step 6
if (score) {
  console.log("Score is evaluated as truthy.");
} else {
  console.log("Score is evaluated as falsy.");
}

// step 7
let username: string = "";

// step 8
if (username != "") {
  console.log("username is available.");
}

// step 9
if (username) {
} else {
  console.log("username is evaluated as falsy.");
}

// step 10
let isAdmin: boolean = false;

// step 11
if (isAdmin) {
  console.log("isAdmin is evaluated as truthy.");
} else {
}

// step 12
if (isAdmin === false) {
  console.log("isAdmin is false.");
}
