//https://oj.masaischool.com/contest/3352/problem/06

function sumWithoutBorders(N, M, matrix){
    //write code here
    var sum = 0;
    for(var i=0;i<N;i++)
    {
        for(var j=0;j<M;j++)
        {
           if(i!==0 &&j!==0 && i!=N-1 && j!=M-1)
           {
               sum = sum + matrix[i][j];
           }
        }
    }
    console.log(sum);
  
}