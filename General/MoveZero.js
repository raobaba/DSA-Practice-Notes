let nums = [0,1,0,3,12];

let nonZeroIndex = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        let temp = nums[i];
        nums[i] = nums[nonZeroIndex];
        nums[nonZeroIndex] = temp;
        nonZeroIndex++;
    }
}
console.log(nums)