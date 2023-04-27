let N = 5;
let K = 10;
mapNumbers(N,K);
function mapNumbers(N,K){
    //write code here
       var obj={};
        for(var i=0;i<N;i++)
        {
            obj[i]=K;
            K++;
        }
        
        for(var key in obj )
        {
            console.log((+key+1)+"-"+obj[key]);
        }
}