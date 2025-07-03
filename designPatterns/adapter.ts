class OldWeatherService {
  fetch(): string {
    setTimeout(() => {}, 3000);
    return `current Temperature: 35°C current Condition: humid`;
  }
}
interface WeatherClient {
  getCurrentWeather(): string;
}
class WeatherAdapter implements WeatherClient {
  oldService: OldWeatherService;

  constructor() {
    this.oldService = new OldWeatherService();
  }

  getCurrentWeather(): string {
    return this.oldService.fetch();
  }
}

//test:
const weather = new WeatherAdapter();
console.log(weather.getCurrentWeather());
