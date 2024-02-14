let arr = [1,3,4,6,2,2];

 let result = FindDuplicate(arr);
 console.log(result)


function FindDuplicate(){
   let Obj = {};
   for(let i=0;i<arr.length;i++){
    if(Obj[arr[i]]===undefined){
        Obj[arr[i]]=1;
    }else{
        Obj[arr[i]]++;
    }
   }

   for(let key in Obj){
    if(Obj[key]>1){
        return key;
    }
   }
}