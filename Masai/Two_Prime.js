let [a,b] = [11,17];
twoPrimes(a,b);

function twoPrimes(a,b) {
    //write code here
    var fact_a=0;
    for(var i=0;i<=a;i++)
     {
         if(a%i==0)
         {
             fact_a++;
         }
     }
     var fact_b=0;
     for(var i=0;i<=b;i++)
     {
         if(b%i==0)
         {
             fact_b++;
         }
     }
     if(fact_a==2&&fact_b==2)
     {
         console.log("True");
     }
     else
     {
         console.log("False");
     }
}