let arr = [1, 2, 3, 4, 5, 5, 7, 8, 9, 9];
let result = FindDuplicateNumber(arr);
console.log(result);
function FindDuplicateNumber(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i];
  }
  for (let i = 1; i < arr.length; i++) {
    ans = ans ^ i;
  }
  return ans;
}

// let result = FindDuplicateNumber(arr);
// console.log(result);
// function FindDuplicateNumber(arr){
//     let Obj = {};
//     for(let i=0;i<arr.length;i++){
//         if(Obj[arr[i]]===undefined){
//             Obj[arr[i]]=1;
//         }else{
//             Obj[arr[i]]++;
//         }
//     }
//     let result = [];
//     for(let key in Obj){
//         if(Obj[key]===2){
//             result.push(key);
//         }
//     }
//     return result;
// }
