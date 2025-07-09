export class Car {
  _numberOfTires: number;
  _numberOfDoors: number;
  _seatBelt: boolean;
  _airbag: boolean;
  constructor(
    numberOfTires: number = 4,
    numberOfDoors: number = 5,
    seatBelt: boolean = true,
    airbag: boolean = true
  ) {
    this._numberOfTires = numberOfTires;
    this._numberOfDoors = numberOfDoors;
    this._seatBelt = seatBelt;
    this._airbag = airbag;
  }

  public get numberOfTires(): number {
    return this._numberOfTires;
  }

  public set numberOfTires(numberOfTires: number) {
    this._numberOfTires = numberOfTires;
  }

  public get numberOfDoors(): number {
    return this._numberOfDoors;
  }

  public set numberOfDoors(numberOfDoors: number) {
    this._numberOfDoors = numberOfDoors;
  }
  public get seatBelt(): boolean {
    return this._seatBelt;
  }

  public set seatBelt(seatBelt: boolean) {
    this._seatBelt = seatBelt;
  }
  public get airbag(): boolean {
    return this._airbag;
  }

  public set airbag(airbag: boolean) {
    this._airbag = airbag;
  }
  toString(): string {
    let seatbeltText = "no";
    if (this.seatBelt) {
      seatbeltText = "a";
    }
    let airbagText = "no";
    if (this.seatBelt) {
      airbagText = "a";
    }
    return `This car has ${this.numberOfDoors} doors and ${this.numberOfTires} tires and ${seatbeltText} airbag and ${airbagText} airbag.`;
  }
  equals(otherCar: Car): boolean {
    return (
      this.airbag === otherCar.airbag &&
      this.seatBelt === otherCar.seatBelt &&
      this.numberOfDoors === otherCar.numberOfDoors &&
      this.numberOfTires === otherCar.numberOfTires
    );
  }
}
