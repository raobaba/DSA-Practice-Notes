let N = 4;
sumRelatedProblem(N);

function sumRelatedProblem(N) {
    // Write code here
    var sum = 0;
    for(var i=1;i<=N;i++)
    {
        if(i%2===0)
        {
            sum = sum + i;
        }
    }
    console.log(sum);
}