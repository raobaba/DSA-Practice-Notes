let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4]

let set = new Set(nums1);

let ans = [];

for(let key of nums2){
    if(set.has(key)){
        ans.push(key);
        set.delete(key);
    }
}

console.log(ans);