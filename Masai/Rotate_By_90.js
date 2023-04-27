let R = 4;
let matrix = [[1,2,3,4],[5,4,3,6],[9,8,6,7],[1,5,7,9]];
rotateBy90(R,matrix);
function rotateBy90(R, matrix){
    //write code here
       for(var i=R-1;i>=0;i--)
   {
       var bag = "";
       for(var j=0;j<R;j++)
       {
           bag = bag + matrix[j][i]+" ";
       }
       console.log(bag);
   }
    
  
}