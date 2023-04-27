let N = 5;
let K = 9;
let A = [3,0,6,2,7];
countSuchPairs(N,K,A);
function countSuchPairs(N,K,A){
    //write code here
        var count = 0;
    for(var i=0;i<=A.length-2;i++)
      {
          for(var j=i+1;j<=A.length-1;j++)
          {
              
               if(A[i]+A[j]==K)
               {
                   count++;
               }
          }
      }
      console.log(count);
}