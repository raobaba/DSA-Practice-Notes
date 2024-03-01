let arr = [4, 2, 1, 5, 3];

let ans = [];

for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        ans.push(arr[i+1]);
    }else{
        ans.push(-1);
    }
}

console.log(ans)