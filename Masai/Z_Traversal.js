//https://oj.masaischool.com/contest/3201/problem/3

function zTraversal(N,arr){
    //write code here
    var bag = "";
    for(var i=0;i<N;i++)
    {
        bag = bag + arr[0][i]+" ";
    }
    for(var i=1;i<N;i++)
    {
        bag = bag + arr[i][N-i-1]+" ";
    }
    for(var i=1;i<N;i++)
    {
        bag = bag + arr[N-1][i]+" ";
    }
    console.log(bag);
  
}