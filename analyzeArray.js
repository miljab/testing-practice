export function analyzeArray(arr) {
  let average = 0;
  let min = Infinity;
  let max = -Infinity;
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    average += arr[i];
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
  }

  average = average / length;
  return { average, min, max, length };
}
