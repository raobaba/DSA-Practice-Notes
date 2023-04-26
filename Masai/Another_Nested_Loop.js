let num = 4;
anotherNested(num);
function anotherNested(num) {
    // Write code here
    for(var i=1;i<=num;i++)
    {
        for(var j=1;j<=i;j++)
        {
            console.log(j);
        }
    }
}