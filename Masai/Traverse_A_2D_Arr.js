let N = 4;
let M = 3;
let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
traverse2dArray(N,M,matrix)
function traverse2dArray(N, M, matrix){
    //write code here
         var bag = "";
     for(var i=0;i<M;i++)
    {
         
        for(var j=N-1;j>=0;j--)
        {
            bag = bag + matrix[j][i]+" ";
        }
         
    }
         console.log(bag);

  
}