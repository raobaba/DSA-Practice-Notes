let nums = [4,3,2,7,8,2,3,1];

let res = [];

nums.sort((a,b)=>a-b);
console.log(nums);

for(let i=0;i<nums.length;i++){
    if(nums[i]!==i+1){
        res.push(i+1);
    }
}
console.log(res);