let arr = [63, 70, 80, 33, 33, 47, 20];  //70 80 47 20

let ans = [];

for(let i=0;i<arr.length;i++){
    if(arr[i]<arr[i+1]){
        ans.push(arr[i+1]);
    }
}

ans.push(arr[arr.length-1]);
console.log(ans);