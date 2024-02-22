let arr = [12,33,12,42,43] //3,6,3,6,7


let sum = 0;

for(let i=0;i<arr.length;i++){
    let [...a] = arr[i].toString().split('').map(Number);;
    let [x,y] = a;
    console.log(x,y);
}