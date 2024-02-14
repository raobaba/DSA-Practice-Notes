let arr = [1,3,4,5,7,6,8,2,9,32,11,23,13,-95,15,67,34,0];

let Max = -Infinity;
let Min = Infinity;
for(let i=0;i<=arr.length;i++){
    if(arr[i]>Max){
        Max = arr[i];
    }
    if(arr[i]<Min){
        Min = arr[i];
    }
}

console.log("Min:-",Min,"Max:-",Max);