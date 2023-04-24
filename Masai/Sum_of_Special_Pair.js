var arr = [1,2,3,5,7,12];
let n = 6;
let res = SumOfSpecialPairs(n,arr);
console.log(res);

   function SumOfSpecialPairs(n,arr){
 
     let sum = 0;
  
     for (let i = 0; i < n - 1; i++) {
         for (let j = i + 1; j < n; j++)
 
             if (isPrime(j - i)) {
 
                 sum = sum + Math.abs(arr[i] - arr[j]);
             }
     }
     return sum;
   }
     function isPrime(n)
 {
 
     if (n <= 1)
         return false;
  
     for (let i = 2; i < n; i++)
         if (n % i===0)
             return false;
  
     return true;
 }