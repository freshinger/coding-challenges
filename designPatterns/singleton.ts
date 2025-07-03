class SettingsManager {
  private static instance: SettingsManager | undefined;
  private values: { [key: string]: string } = {};
  private constructor() {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new SettingsManager();
    }
    return this.instance;
  }

  public get(key: string): string {
    return this.values[key];
  }

  public set(k: string, v: string) {
    this.values[k] = v;
  }
}

// Example usage:
SettingsManager.getInstance().set("theme", "dark");
console.log(SettingsManager.getInstance().get("theme")); // Output: 'dark'
