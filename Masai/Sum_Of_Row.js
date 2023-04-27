let N = 3;
let M = 2;
let arr = [[1,2],[3,4],[5,6]];
sumOfRows(N,M,arr);
function sumOfRows(N,M,arr){
    //write code here
     for(var i=0;i<N;i++)
    {
        var sum = 0;
        for(var j=0;j<M;j++)
        {
            sum = sum +arr[i][j];
        }
        console.log(sum);
    }
}