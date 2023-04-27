let N = 3;
let M = 4;
let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
spiralTraversal(N, M, arr)
function spiralTraversal(N, M, arr){
    //write code here
   var top = 0;
   var left = 0;
   var right = M-1;
   var bottom = N-1;
   var length= N*M;
   var mat = [];
   while(mat.length<length)
   {
       for(var i=top;i<=bottom && mat.length<length;i++)
       {
           mat.push(arr[i][left])+" ";
       }
       left++;
       for(var i=left;i<=right && mat.length<length;i++)
       {
           mat.push(arr[bottom][i])+" ";
       }
       bottom--;
       for(var i=bottom;i>=top && mat.length<length;i--)
       {
           mat.push(arr[i][right])+" ";
       }
       right--;
       for(var i=right;i>=left && mat.length<length;i--)
       {
           mat.push(arr[top][i])+" ";
       }
       top++;
   }
   console.log(mat.join(" "));
  
  
}