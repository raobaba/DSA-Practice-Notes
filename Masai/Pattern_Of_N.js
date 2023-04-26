let N = 4;
patternOfN(N);
function patternOfN(N) {
    // Write code here
    var count = 1;
    for(var i=0;i<N;i++)
    {
        var bag = "";
        for(var j=0;j<N;j++)
          {
              bag = bag + count+" ";
              count++;
          }
          console.log(bag);
    }
}