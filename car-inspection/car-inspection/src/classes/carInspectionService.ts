import type { Car } from "./car";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class carInspectionService {
  static hasFourTires(car: Car): boolean {
    return car.numberOfTires === 4;
  }
  static hasSeatBelt(car: Car): boolean {
    return car.seatBelt;
  }
  static hasAirbag(car: Car): boolean {
    return car.airbag;
  }
  static hasThreeOrFiveDoors(car: Car): boolean {
    return car.numberOfTires === 3 || car.numberOfTires === 5;
  }
  static checkCar(car: Car): boolean {
    return (
      carInspectionService.hasFourTires(car) &&
      carInspectionService.hasSeatBelt(car) &&
      carInspectionService.hasAirbag(car) &&
      carInspectionService.hasThreeOrFiveDoors(car)
    );
  }
}
