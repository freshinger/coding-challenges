interface animal {
  name: string;
  makeSound(): string;
}

class Dog implements animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  makeSound(): string {
    return `${this.name} says Woof!`;
  }
}

// Test
const dog = new Dog("Rex");
console.log(dog.makeSound()); // "Rex says Woof!"
