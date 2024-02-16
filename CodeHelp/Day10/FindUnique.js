// let arr = [4,0,2,-5,-4]
// FindUnique(arr);
// function FindUnique(arr){
//     let obj = {};
//     for(let i=0;i<arr.length;i++){
//         if(obj[arr[i]]===undefined){
//             obj[arr[i]]=1;
//         }else{
//             obj[arr[i]]++;
//         }
//     }
//     for(let num in obj){
//         if(obj[num]===1){
//             console.log(num);
//         }
//     }
// }

//XOR method
// let ans = 0;
// for(let i=0;i<arr.length;i++){
//     ans = ans^arr[i];
// }
// console.log(ans);

let arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (i !== j && arr[i] === arr[j]) {
      count++;
    }
  }
  if (count === 0) {
    console.log(arr[i]);
    break;
  }
}
