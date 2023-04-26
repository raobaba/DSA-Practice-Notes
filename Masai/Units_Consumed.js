let n = 930;
unitsConsumed(n);
function unitsConsumed(n) {
    //write code here
    var unit = 0;
    var remain = n-80;
    if(remain>650)
    {
        unit = unit+150;
        remain = remain-650;
        unit = unit + remain/10;
    }
    else if(remain>150&&remain<=650)
    {
        unit = unit + 50;
        remain = remain-150;
        unit = unit +remain/5;
    }
    else
    {
        unit = unit + remain/3;
    }
    console.log(unit);
}