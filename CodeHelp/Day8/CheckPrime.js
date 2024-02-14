let num = 100;

let res = CheckPrime(num);

function CheckPrime(num){
    for(let i = 2;i<=num;i++){
        let isPrime = false;
        for(let j=2;j<i;j++){
            if(i%j===0){
              isPrime = true;
              break;
            }
        }
        
        if(isPrime){
            console.log(`${i} not Prime(X)`)
        }
        else{
            console.log(`${i} Prime(✓)`);
        }
    }


    
}