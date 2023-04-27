let N = 3;
let arr1 = [4,5,7];
let arr2 = [9,2,5];
intersectionOfArray(N,arr1,arr2);
function intersectionOfArray(N, arr1, arr2){
    //write code here
    var flag = 0;
    for(var i=0;i<arr1.length;i++)
    {
        for(var j=0;j<arr2.length;j++)
        {
            if(arr1[i]==arr2[j])
            {
                flag = arr1[i];
            }
        }
    }
    console.log(flag);
}