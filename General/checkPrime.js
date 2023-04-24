let num = 100;
for(let i=2;i<num;i++){
    let count = 0;
    for(let j=2;j<i;j++){
        if(i===2){
            count = 0;
        }
        else if(i%j===0){
            count++;
        }
    }
    if(count>=1){
        console.log(`${i} is not a prime number`)
    }else{
        console.log(`${i} is prime number`);
    }
}