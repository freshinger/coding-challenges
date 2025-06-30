namespace oop {
  abstract class Shape {
    readonly name: string = "Shape";

    getArea(): number {
      return 0;
    }
  }

  class Rectangle extends Shape {
    readonly name: string = "Rectangle";
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
      super();
      this._width = width;
      this._height = height;
    }

    public get width(): number {
      return this._width;
    }

    public set width(width: number) {
      this._width = width;
    }

    public get height(): number {
      return this._height;
    }

    public set height(height: number) {
      this._height = height;
    }

    getArea(): number {
      return this._height * this._width;
    }
  }

  class Circle extends Shape {
    readonly name: string = "Circle";
    public static PI = 3.14;
    private _radius: number;
    constructor(radius: number) {
      super();
      this._radius = radius;
    }

    public get radius(): number {
      return this._radius;
    }

    public set radius(radius: number) {
      this._radius = radius;
    }

    getArea(): number {
      return this._radius * this._radius * Circle.PI;
    }
  }

  // Test
  const shapes: Shape[] = [new Rectangle(4, 5), new Circle(3)];
  shapes.forEach((shape) =>
    console.log(`${shape.name} area: ${shape.getArea()}`)
  );
}
