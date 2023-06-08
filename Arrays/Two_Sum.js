// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var arr = [2,7,11,15];
var target = 9;
console.log(twoSum(arr,target));
function twoSum(arr,target){
    let i = 0;
    let j = arr.length-1;
    while(i<j){
        if(arr[i]+arr[j]===target){
            return [i,j];
        }else if(arr[i]+arr[j]>target){
            j--;
        }else{
            i++;
        }
    }
    return [-1,-1];
}