let arr1 = [1, 4, 6, 8, 9];
let arr2 = [2, 3, 5, 7, 8];
let result = FindIntersectionPoint(arr1, arr2);
console.log(result);
function FindIntersectionPoint(arr1, arr2) {
  let i = 0;
  let j = 0;
  let n = arr1.length;
  let m = arr2.length;
  while (i < n && j < m) {
    if (arr1[i] === arr2[j]) {
      return arr1[i];
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return -1;
}
