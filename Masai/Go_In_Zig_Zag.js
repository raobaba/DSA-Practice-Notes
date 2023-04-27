let N = 5;
let M = 5;
let matrix = [[1,2,3,4,5],[5,6,7,8,5],[1,4,3,5,2],[6,2,4,1,6],[8,5,2,4,1]];
goInZigZag(N,M,matrix)
function goInZigZag(N, M, matrix){
    //write code here
        var bag = "";
    for(var i=0;i<N;i++)
    {
        if(i%2===0)
        {
            for(var j=M-1;j>=0;j--)
            {
                bag = bag + matrix[i][j]+" ";
            }
        }
        else
        {
            for(var j=0;j<M;j++)
            {
                bag = bag + matrix[i][j]+" ";
            }
        }
        
    }
    console.log(bag);
  
}