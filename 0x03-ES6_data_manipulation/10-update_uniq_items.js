export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    // If the value is 1, update it to 100
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
