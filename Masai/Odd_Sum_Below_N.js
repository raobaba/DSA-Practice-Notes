let num = 7;
oddSumBelowN(num);

function oddSumBelowN(num) {
    // Write code here
        var i = 1;
    var sum = 0;
     while(i<=num)
     {
         if(i%2==1)
         {
             sum = sum +i;
         }
         i++;
     }
        console.log(sum);
    
}