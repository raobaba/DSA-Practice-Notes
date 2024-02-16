let arr = [1,1,2,3,3,3,4,4,4,4,4];
let result = UniqueOccurance(arr);
console.log(result);
function UniqueOccurance(arr){
    let Obj = {};
    for(let i=0;i<arr.length;i++){
        if(Obj[arr[i]]===undefined){
            Obj[arr[i]]=1;
        }else{
            Obj[arr[i]]++;
        }
    }
    let UniqueCount = {};
    for(let unique in Obj){
        if(UniqueCount[Obj[unique]]){
            return false;
        }
        UniqueCount[Obj[unique]]=true;
    }
    return true;
}