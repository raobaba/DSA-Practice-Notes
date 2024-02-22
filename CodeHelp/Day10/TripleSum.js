let arr = [1, 9, 8, 3, 5, 4, 7, 6, 2];
arr.sort((a, b) => a - b); // Sort the array in ascending order
let target = 12;

for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            if (arr[i] + arr[j] + arr[k] === target) {
                let ans = [arr[i], arr[j], arr[k]];
                console.log(ans);
            }
        }
    }
}
