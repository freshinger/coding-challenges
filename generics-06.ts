function wrapValue<T = string>(val: T): T[] {
  return [val];
}

const defaultWrapped = wrapValue("test"); // should infer type
