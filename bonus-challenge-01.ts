function findNeedle(haystack: string[]): string {
  return "found the needle at position " + haystack.indexOf("needle");
}

console.log(findNeedle(["hay", "junk", "random", "needle", "more junk"]));
// "found the needle at position 3"

console.log(findNeedle(["needle"]));
// "found the needle at position 0"

console.log(findNeedle(["foo", "bar", "baz", "needle", "qux"]));
// "found the needle at position 3"

console.log(findNeedle(["one", "two", "three", "four", "needle"]));
// "found the needle at position 4"

console.log(findNeedle(["junk", "more junk", "needle", "even more junk"]));
// "found the needle at position 2"
