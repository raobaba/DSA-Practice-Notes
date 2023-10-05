let arr = [1,2,3,1,2,3,5,6,6,5,4];
FindUnique(arr);
function FindUnique(arr){
    let obj = {};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]===undefined){
            obj[arr[i]]=1;
        }else{
            obj[arr[i]]++;
        }
    }
    for(let num in obj){
        if(obj[num]===1){
            console.log(num);
        }
    }
}