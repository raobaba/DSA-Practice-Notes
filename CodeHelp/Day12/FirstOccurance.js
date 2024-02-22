let arr = [1,2,3,3,3,4,5,6];

let key = 3;

let start = 0;
let end = arr.length-1;
let mid = Math.floor(start+(end-start)/2);
let ans = 0;

while(start<=end){
    if(arr[mid]===key){
        ans = mid;
        start = mid+1; // this is for finding last occuracne 
        //to find first occurance  end = mid-1;
    }else if(arr[mid]>key){
        end = mid-1;
    }else{
        start = mid+1;
    }
    mid = Math.floor(start+(end-start)/2);
}
console.log(ans);