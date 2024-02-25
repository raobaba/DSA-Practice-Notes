let arr = [3, 2, 9, 4, 6, 8, 7];

for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[minIndex] > arr[j]) {
            minIndex = j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

console.log(arr);
