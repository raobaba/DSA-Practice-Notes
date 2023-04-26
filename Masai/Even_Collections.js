let [max,min] = [19,13];
evenCollection(max,min);

function evenCollection(max,min){
    //write code here
    var sum = 0;
    for(var i =min; i<=max;i++)
        {
            if(i%2===0)
            {
                sum = sum +i;
            }
          
        }
        console.log(sum);
    
}