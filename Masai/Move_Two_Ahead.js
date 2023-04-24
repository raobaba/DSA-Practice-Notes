let num = 12;
moveTwoAheadII(num);

function moveTwoAheadII(num) {
    // Write code here
    var i = 1;
    while(i<=num)
    {
        if(i%2===0)
        {
            console.log(i);
        }
        i++;
        
    }
    
}