let nums1 = [1,3,5,2,4]
let nums2 = [6,5,4,3,2,1,7]
first = 0;
second = 0;
let ans = [];
//[7,7,7,7,7]
let res = nextGreaterElement(nums1,nums2);
console.log(res)
function nextGreaterElement(nums1, nums2) {
    let ans = [];
    let first = 0;
    while (first < nums1.length) {
        let found = false;
        let second = 0;
        while (nums1[first] !== nums2[second]) {
            second++;
        }
        for (let i = second + 1; i < nums2.length; i++) {
            if (nums1[first] < nums2[i]) {
                ans.push(nums2[i]);
                found = true;
                break;
            }
        }
        if (!found) {
            ans.push(-1);
        }
        first++;
    }
    return ans
};