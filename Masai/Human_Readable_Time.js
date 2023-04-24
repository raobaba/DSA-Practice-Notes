let min = 135;
HumanReadableTime(min);

function HumanReadableTime(min){
    let h = Math.floor(min/60);
    let m = min%60;
    if(h>1){
        console.log(`${h}hrs ${m}mins` );
    }else
    console.log(`${h}hr ${m}mins` );
}