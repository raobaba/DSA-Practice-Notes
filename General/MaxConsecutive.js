
let nums = [1,1,0,1,1,1,0];
let count = 0;
let ans = 0;

let res = findMaxConsecutiveOnes(nums);
console.log(res)

function findMaxConsecutiveOnes(nums) {
    let first = 0;
    let count = 0;
    let max = 0;
    while (first < nums.length) {
        if (nums[first] === 1) {
            count++;
            max = Math.max(max, count);
            first++;
        } else {
            count = 0;
            first++;
        }
    }
    
    return max;
};