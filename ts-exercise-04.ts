interface StringMap {
  [key: string]: string;
}

function printValues(obj: StringMap): void {
  for (const key in obj) {
    console.log(key + ": " + obj[key]);
  }
}

printValues({ foo: "bar", baz: "qux" });
