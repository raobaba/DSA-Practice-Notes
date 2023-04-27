let N = 3;
let M = 2;
let matrix = [[0,1],[1,0],[1,1]];
binaryMatrix(N,M,matrix);
function binaryMatrix(N,M, matrix) {
    //write code here
        for(var i=0;i<N;i++)
        {
             var bag = "";
            for(var j=0;j<M;j++)
            {
               
                if(matrix[i][j]===0)
                {
                    bag = bag + 1+" ";
                }
                else
                {
                    bag = bag + 0+" ";
                }
                
            }
           console.log(bag);
        }
          
  }