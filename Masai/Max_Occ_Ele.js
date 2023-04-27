//https://oj.masaischool.com/contest/2926/problem/03

function maximumOccuringElement(A,N){
    //write code here
    var obj = {};
    for(var i=0;i<N;i++)
    {
        if(obj[A[i]]===undefined)
        {
            obj[A[i]]=1;
        }
        else
        {
            obj[A[i]]++;
        }
    }
    var max = -Infinity;
    for(var key in obj)
    {
        if(max<obj[key])
        {
            max = obj[key];
        }
    }
    var res = 0;
    for(var key in obj)
    {
        if(obj[key]==max)
        {
            res = key;
            break;
        }
    }
    console.log(res);
}
