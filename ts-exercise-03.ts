function getLength(input: string | number): number {
  if (typeof input === "string") {
    return (input as string).length;
  } else {
    return input;
  }
}
