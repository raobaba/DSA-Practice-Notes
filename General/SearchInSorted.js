let arr = [5,6,8,9,2,3,4];

let start = 0;
let end = arr.length-1;
let mid = Math.floor(start+(end-start)/2);

while(start<end){
    if(arr[mid]>=arr[0]){
        start = mid+1;
    }else{
        end = mid;
    }
    mid = Math.floor(start+(end-start)/2);
}
console.log(arr[start])