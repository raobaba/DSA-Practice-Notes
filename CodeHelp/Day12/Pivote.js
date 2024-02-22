let nums = [1,7,3,6,5,6];

let result = PivotElement(nums);
console.log(result);

function PivotElement(nums){
    let totalSum = 0;
let leftSum = 0;

for (let num of nums) {
    totalSum += num;
}

for (let i = 0; i < nums.length; i++) {
    totalSum -= nums[i];

    if (leftSum === totalSum) {
        return i;
    }

    leftSum += nums[i];
}

return -1;
}