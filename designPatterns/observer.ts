class StockTicker {
  price: number = 0;
  subscritionState: Map<Broker, boolean>;

  constructor() {
    this.subscritionState = new Map<Broker, boolean>();
  }

  setPrice(price: number): void {
    this.price = price;
    this.notify();
  }

  subscribe(broker: Broker) {
    this.subscritionState.set(broker, true);
  }

  unsubscribe(broker: Broker) {
    this.subscritionState.set(broker, false);
  }

  notify() {
    this.subscritionState.forEach((isSubscribed, subscriber) => {
      if (isSubscribed) {
        subscriber.notify();
      }
    });
  }
}

class Broker {
  notificationMessage: string;
  constructor(notificationMessage: string) {
    this.notificationMessage = notificationMessage;
  }
  notify() {
    console.log(this.notificationMessage);
  }
}

//test
const ticker = new StockTicker();

const broker1 = new Broker("Broker 1 notified of price change");
const broker2 = new Broker("Broker 2 notified of price change");
const broker3 = new Broker("Broker 3 notified of price change");

ticker.subscribe(broker1);
ticker.subscribe(broker2);
ticker.subscribe(broker3);
ticker.unsubscribe(broker3);
let price = 1;
setInterval(() => {
  ticker.setPrice(price);
  price++;
}, 5000);
