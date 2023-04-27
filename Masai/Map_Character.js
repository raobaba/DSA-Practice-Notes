let N = 5;
mapChar(N);
function mapChar(N) {
    // Write code here
     var lower = "abcdefghijklmnopqrstuvwxyz";
     var obj = {};
     for(var i=0;i<N;i++)
     {
         var char = lower[i];
         obj[char]= i+1;
     }
        for(var key in obj)
        {
            console.log(key+"-"+obj[key]);
        }
}