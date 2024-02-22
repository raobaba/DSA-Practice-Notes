let num = 36;
let start = 0;
let end = num;
let mid = Math.floor(start+(end-start)/2);

let res = isPerfectSquare(num);
console.log(res)

function isPerfectSquare(num) {
    let start = 0;
    let end = num-1;
    let mid = Math.floor(start+(end-start)/2);
    while(start<=end){
        if(mid**2===num){
            return true;
        }else if(mid**2>num){
            end = mid-1;
        }else{
            start = mid+1;
        }
        mid = Math.floor(start+(end-start)/2);
    }
    return false;
};