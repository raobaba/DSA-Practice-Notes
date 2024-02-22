let arr = [3,2,2,2,3];

let value = 3;

let k = 0;
for (let i = 0; i < arr.length; i++) {

  if (arr[i] !== value) {
    arr[k] = arr[i];
    k++;
  }
}

console.log(k);