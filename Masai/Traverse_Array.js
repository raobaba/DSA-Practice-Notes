let arr = [1,2,3,4,5];
let n = 5;
reverseArrayTraversal(n,arr);

function reverseArrayTraversal(n, arr){
    //write code here
         var bag = "";
     for(var i=n-1;i>=0;i--)
     {
       bag = bag + arr[i]+" ";
     }
     console.log(bag);
}