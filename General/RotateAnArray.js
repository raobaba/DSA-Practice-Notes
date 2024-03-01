let arr = [1, -2, -3, 4, 5, 6, 7];
let d = 2;

let ans = [];
for (let i = d; i < arr.length; i++) {
  ans.push(arr[i]);
}
for (let i = 0; i < d; i++) {
  ans.push(arr[i]);
}
console.log(ans);
