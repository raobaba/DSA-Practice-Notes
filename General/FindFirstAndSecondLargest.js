let arr = [1,1,1,1,1];

arr.sort((a,b)=>a-b);
let set = new Set(arr);

let ans = [...set];

console.log(ans.length)