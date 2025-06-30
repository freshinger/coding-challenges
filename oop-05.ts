class MathHelper {
  public static PI = 3.14;
  public static circleArea(radius: number): number {
    return radius * radius * this.PI;
  }
}

// Test
console.log(MathHelper.circleArea(5)); // Should log: 78.5
