let n = 3;
let m = 3;
let S = 6;
let matrix = [[1,2,3,],[2,2,2],[1,2,1]];
twoArrayAndSum(n, m, matrix, s)
function twoArrayAndSum(n, m, matrix, s){
    //write code here
      var count = 0   
  for (var i=0;i<n;i++)
  {
   for (var j = 0;j<m;j++)
   {
      if (j<matrix[i].length-2) 
      { 
        var temp = matrix[i][j] + matrix[i][j+1] + matrix[i][j+2];
        if (temp == s)
        {
            count++;
        }
      }
     if (i<matrix.length-2) 
     { 
         var temp = matrix[i][j] + matrix[i+1][j] + matrix[i+2][j];
         if (temp == s)
         {
             count++;
         }
     }
     if (i<matrix.length-2 && j<matrix[j].length-2) 
     { 
         var temp = matrix[i+2][j] + matrix[i+1][j+1] + matrix[i][j+2];
         if (temp == s)
         {
             count++;
         }
     }
     if (i<matrix.length-2 && j<matrix.length-2) 
     { 
         var temp = matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2];
         if (temp == s)
         {
             count++;
         }
     }
   }
  }
  console.log(count);

}