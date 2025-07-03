import readline from "node:readline";

abstract class TaxStrategy {
  calculate(income: number): number {
    return income;
  }
}

class NoTax extends TaxStrategy {
  calculate(income: number): number {
    return income;
  }
}

class FlatTax extends TaxStrategy {
  calculate(income: number): number {
    return income * 0.9;
  }
}

class ProgressiveTax extends TaxStrategy {
  calculate(income: number): number {
    if (income < 10000) {
      return income * 0.9;
    } else if (income >= 10000 && income < 20000) {
      return income * 0.85;
    } else {
      return income * 0.8;
    }
  }
}

class TaxCalculator {
  strategy: TaxStrategy;
  constructor(strategy: TaxStrategy) {
    this.strategy = strategy;
  }

  calculate(income: number) {
    return this.strategy.calculate(income);
  }
}

/* test
let calculator = new TaxCalculator(new FlatTax());
console.log(calculator.calculate(1000)); // $100 flat tax
calculator = new TaxCalculator(new NoTax());
console.log(calculator.calculate(1000));
calculator = new TaxCalculator(new ProgressiveTax());
console.log(calculator.calculate(1000));
*/

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let income = 0;
let strategy = 1;
rl.question(`What's your income?`, (eingabe) => {
  income = Number.parseInt(eingabe);
  rl.close();
  const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  r2.question(
    `Choose a preferred Tax Strategy (1 for noTax, 2 for Progressive, 3 for Flat)?`,
    (eingabe2) => {
      strategy = Number.parseInt(eingabe2);
      console.log("income after tax:");
      switch (strategy) {
        case 1:
          const calculator1 = new TaxCalculator(new NoTax());
          console.log(calculator1.calculate(1000));
          break;
        case 2:
          const calculator2 = new TaxCalculator(new ProgressiveTax());
          console.log(calculator2.calculate(1000));
          break;
        case 3:
          const calculator3 = new TaxCalculator(new FlatTax());
          console.log(calculator3.calculate(1000));
          break;
        default:
          break;
      }
      r2.close();
    }
  );
});
