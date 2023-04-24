let num = 6;
evenSumBelowN(num);

function evenSumBelowN(num) {
    // Write code here
    var i = 1;
     var sum = 0;
     while(i<=num)
     {
         if(i%2===0)
         {
             sum = sum +i;
            
         }  
         i++;
     } 
     console.log(sum);
  
}