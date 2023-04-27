let N = 3;
let M = 2;
let arr = [[1,2],[3,4],[5,6]];
array2D(N,M,arr);


function array2D(N,M,arr){
    //write code here

    for(var i=0;i<N;i++)
    {
        var bag = "";
        for(var j=0;j<M;j++)
        {
            bag = bag +arr[i][j]+" ";
        }
        console.log(bag);
    }
}