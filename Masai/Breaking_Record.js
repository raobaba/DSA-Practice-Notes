let [n,m] = [264,200];
breakingTheRecord(n,m);
function breakingTheRecord(n, m) {
    //write code here
    if(n<m){
        console.log("Broken");
    }
    else if(n>m){
        console.log("Not Yet");
    }
    else{
        console.log("Wao");
    }
}