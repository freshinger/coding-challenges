class BankAccount {
  private balance: number;
  public readonly accountNumber: string;

  constructor(accountNumber: string, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }
  public withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
  public getBalance(): number {
    return this.balance;
  }
}

// Test
const account = new BankAccount("123ABC", 500);
account.deposit(200);
account.withdraw(100);
console.log(account.getBalance()); // Should log: 600
