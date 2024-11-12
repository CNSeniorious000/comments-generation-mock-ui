export function choice<T>(items: T[], last?: T) {
  if (last) {
    items = items.filter((item) => item !== last);
  }
  return items[Math.floor(Math.random() * items.length)];
}
