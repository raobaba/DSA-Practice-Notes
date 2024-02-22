var nums = [2, 7, 11, 15];
var target = 9;


var result = TwoSum(nums, target);
console.log(result);

function TwoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }
  return [];
};

