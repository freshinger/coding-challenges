class UserProfile {
  private _email: string;

  constructor(email: string) {
    this._email = this.checkEmail(email);
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = this.checkEmail(email);
  }

  private checkEmail(email: string): string {
    if (email.includes("@")) {
      return email;
    } else {
      throw new Error("invalid E-Mail");
    }
  }
}

// Test
const user = new UserProfile("john@example.com");
console.log(user.email); // Should return valid email
user.email = "wrongemail"; // Should throw an error
