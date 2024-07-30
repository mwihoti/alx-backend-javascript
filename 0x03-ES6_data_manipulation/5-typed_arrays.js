export default function createInt8TypedArray(length, position, value) {
  // Check if the position is outside the range of the array
  if (position >= length) {
    throw new Error('Position outside range');
  }
  // Create a DataView of the array and return it
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
