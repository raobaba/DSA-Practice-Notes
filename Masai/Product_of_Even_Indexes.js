let arr = [1,2,3,4];
let N = 4;
productOfEvenIndexes(N,arr);
function productOfEvenIndexes(N, arr) {
    //write code here
         var fact = 1;
       for(var i=0;i<N;i++)
       {
           if(i%2===0)
           {
               fact = fact*arr[i];
           }
       }
       console.log(fact);
  }