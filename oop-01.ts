class Car {
  private _make: string;
  private _model: string;
  private _year: number;

  constructor(make: string, model: string, year: number) {
    this._make = make;
    this._model = model;
    this._year = year;
  }

  public get make(): string {
    return this._make;
  }

  public set make(make: string) {
    this._make = make;
  }

  public get model(): string {
    return this._model;
  }

  public set model(model: string) {
    this._model = model;
  }

  public get year(): number {
    return this._year;
  }

  public set year(year: number) {
    this._year = year;
  }

  getDetails(): string {
    return `${this._year} ${this._make} ${this._model}`;
  }
}

// Test
const myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.getDetails());
