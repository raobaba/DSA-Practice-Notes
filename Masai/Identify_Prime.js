let num = 13;
function identifyPrime(num) {
         var count = 0;
    for(var a = 2; a<num; a++)
    {
        if(num%a===0)
        {
            count++;
        }
    }
    if(count===0)
    {
        console.log("Yes");
    }
    else 
    {
        console.log("No");
    }
          
          
  
}