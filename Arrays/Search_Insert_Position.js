let arr = [1,2,3,5,6];
let target = 4;
let res = SearchInsert(arr,target);
console.log(res);
function SearchInsert(nums,target){
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let middle = Math.floor(left + (right - left) / 2);
      if (nums[middle] === target) {
        return middle;
      } else if (nums[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  
    return left;
}