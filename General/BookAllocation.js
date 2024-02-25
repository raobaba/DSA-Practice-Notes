let n = 4;
let a = [12, 34, 67, 90];
let m = 2;

let res = findPages(a, n, m);
console.log(res);

function findPages(a, n, m) {
  let res = [];
  for (let i = 0; i <= m; i++) {
    let first = 0;
    let second = 0;
    for (let j = i + 1; j < n; j++) {
      second += a[j];
    }
    first += a[i];
    let max = Math.max(first,second);
    res.push(max);
  }
  res.sort((a, b) => a - b);
  return res[0];
}
