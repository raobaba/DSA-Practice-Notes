//https://oj.masaischool.com/contest/5161/problem/07

function equilibriumElement(N, arr){
    //write code here
    console.log( Equilibrium(N,arr));

}
function Equilibrium(N,arr){

        var leftSum,rightSum;
    for(var i=0;i<N;i++){
        leftSum=0;
        for(var j=0;j<i;j++){
            leftSum = leftSum + arr[j];
        }
        rightSum=0;
        for(var k=i+1;k<N;k++){
            rightSum=rightSum+arr[k];
        }
        if(leftSum==rightSum){
            return i+1;
        }
        
    }
    return -1;
}