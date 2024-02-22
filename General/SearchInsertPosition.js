let arr = [1,3,5,6];
let target = 2;

for(let i=0;i<arr.length;i++){
    for (let i = 0; i < arr.length; i++) {
        if (target <= arr[i]) {
            console.log(i);
            break;
        }
    }
    console.log(arr.length)
    break;
}