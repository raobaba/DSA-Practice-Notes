let arr = ["h","e","l","l","o"]

let bag = "";
let start = 0;
let end = arr.length-1;

while(start<=end){
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp
    start++;
    end--;
}
console.log(arr)


