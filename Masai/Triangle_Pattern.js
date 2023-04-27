
let N = 4;
rightAngleTriangle(N);

function rightAngleTriangle(N) {
    // Write code here
    for(var i=1;i<=N;i++)
    {
        var bag = "";
        for(var j=1;j<=i;j++)
        {
            bag = bag + i+" ";
        }
        console.log(bag);
    }
    
}