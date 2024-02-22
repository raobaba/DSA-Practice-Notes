let arr = [1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0];

let start = 0;
let end = arr.length - 1;

while (start <= end) {
    while (arr[start] === 0 && start <= end) {
        start++;
    }

    while (arr[end] === 1 && start <= end) {
        end--;
    }

    if (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

console.log(arr);
