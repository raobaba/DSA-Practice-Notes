let N = 6;
let A = [1,2,3,5,7,12];
sumOfSpecialPairs(N,A);
function sumOfSpecialPairs(N,A){
    //write code here
    var sum = 0;
for (i = 0; i < N; i++) 
{
    for (j = i; j < N; j++) 
    {
        if (i < j) 
        {
            var prime = (j - i);
            count = 0;
            for (k = 1; k <= prime; k++) 
            {
                if (prime % k === 0) 
                {
                    count++;
                }
            }
            if (count == 2) 
            {
                var s = A[j] - A[i];
                if (s < 0) 
                {
                    sum = sum + (s * (-1));
                }
                else 
                {
                    sum = sum + s;
                }
            }
        }
    }
}
console.log(sum);

}