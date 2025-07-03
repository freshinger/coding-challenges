namespace Factory {
  abstract class Shape {
    draw() {}
  }

  class Circle extends Shape {
    draw() {
      console.log("drawing Circle");
    }
  }
  class Square extends Shape {
    draw() {
      console.log("drawing Square");
    }
  }
  class Triangle extends Shape {
    draw() {
      console.log("drawing Triangle");
    }
  }

  class ShapeFactory {
    static create(shape: string): Shape {
      switch (shape) {
        case "circle":
          return new Circle();
          break;
        case "square":
          return new Square();
          break;
        case "triangle":
          return new Triangle();
          break;
        default:
          return new Circle();
          break;
          break;
      }
    }
  }

  const shape = ShapeFactory.create("circle");
  shape.draw(); // Output: Drawing Circle
}
