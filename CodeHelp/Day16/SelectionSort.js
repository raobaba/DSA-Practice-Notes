let arr = [1,3,5,2,9,8,6,7,4];

for(let i=0;i<arr.length;i++){
    let minIndex = i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[minIndex]>arr[j]){
            minIndex = j;
        }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
}
console.log(arr);