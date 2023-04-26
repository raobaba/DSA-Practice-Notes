let N = 4;
patternPrinting(N);

function patternPrinting(N) {
    // Write code here
    for(var a = 1; a <= N; a++)
    {
         bag = "";
        for(var b = 1; b<=a; b++)
        {
            bag = bag +"*";
        }
        console.log(bag);
    }
}