let arr = [2,3,5,7,8,9,6,1];

let key = 5;

let isPresent = false;

for(let i=0;i<=arr.length;i++){
    if(arr[i]===key){
        isPresent=true;  
        console.log(`${key} is at Index ${i}`);
    }

}

