export default function cleanSet(set, startString) {
  // Array to store the remaining values
  const parts = [];
  // Return an empty string if any of the parameters are invalid
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    // Check if the value is a string and starts with the given string
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Extract the substring after the startString
      const valueSubStr = value.substring(startString.length);
      // Add the substring to the parts array if it is not empty and not
      // equal to the original value
      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
