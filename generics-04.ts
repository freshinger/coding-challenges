function printLength<T extends { length: number }>(item: T): number {
  return item.length;
}
