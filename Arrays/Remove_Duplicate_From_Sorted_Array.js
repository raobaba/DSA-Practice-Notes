//Given an integer array nums sorted in non-decreasing order, 
//remove the duplicates in-place such that each unique element
// appears only once. The relative order of the elements 
//should be kept the same. Then return the number of unique
// elements in nums.

let arr = [1,1,2];
let res = removeDuplicates(arr);
console.log(res);
function removeDuplicates(nums) {
    if (nums.length === 0) {
      return 0;
    }
  
    let uniqueIndex = 0;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[uniqueIndex]) {
        uniqueIndex++;
        nums[uniqueIndex] = nums[i];
      }
    }
  
    return uniqueIndex + 1;
  }