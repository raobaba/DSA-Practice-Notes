let arr = [1,8,9,5,6,7,3,4,2];

arr.sort();
let target = 12;
let ans = [];

let start = 0;
let end = arr.length-1;
while(start<=end){
    if(arr[start]+arr[end]===target){
        ans.push({ first: arr[start], second: arr[end] });
        start++;
        end--;
    }else if(arr[start]+arr[end]<target){
        start++;
    }else{
        end--;
    }
}

console.log(ans)

