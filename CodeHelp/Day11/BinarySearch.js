let arr = [1,2,3,4,5,6,7,11,16,18,20,29,30];

let start = 0;
let end = arr.length-1;
let mid = Math.floor(start + (end-start)/2);
let target = 30;

while(start<=end){
    if(target===arr[mid]){
        console.log(mid);
        break;
    }
    else if(target<arr[mid]){
        end = mid-1;
    }else{
        start = mid+1;
    }
    mid = Math.floor(start + (end-start)/2);
}
