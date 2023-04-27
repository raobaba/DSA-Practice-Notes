let N = 5;
let M = 4;
let matrix = [[0,0,0,0],[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]];
transposeTheMatrix(N, M, matrix)
function transposeTheMatrix(N, M, matrix){
    //write code here
    for(var i=0;i<M;i++)
    {
        var bag = "";
        for(var j=0;j<N;j++)
        {
            bag = bag + matrix[j][i]+" ";
        }
        console.log(bag);
    }
  
}