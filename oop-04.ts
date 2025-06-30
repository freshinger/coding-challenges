class Employee {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  getDetails(): string {
    return `Employee's Name: ${this._name}`;
  }
}

class Manager extends Employee {
  private _department: string;

  constructor(name: string, department: string) {
    super(name);
    this._department = department;
  }

  public get department(): string {
    return this._department;
  }

  public set department(department: string) {
    this._department = department;
  }

  getDetails(): string {
    return `Employee's Name: ${this.name} Department: ${this._department}`;
  }
}

// Test
const manager = new Manager("Alice", "Engineering");
console.log(manager.getDetails());
