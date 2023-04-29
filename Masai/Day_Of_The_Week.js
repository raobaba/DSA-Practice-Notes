let N = 8;
let day = 'wednesday';
dayOfTheWeek(day,N);
function dayOfTheWeek(day, N) {
    //write code here
          var cd = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
        var new_day = 0;
        
        for(var i=0;i<cd.length;i++)
        {
            if(cd[i]==day)
            {
                new_day = cd[(i+N)%7];
            }
            
        }
            console.log(new_day);
  
  }