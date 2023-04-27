//Enter code 
https://oj.masaischool.com/contest/2926/problem/05
function runProgram(input) {
    input = input.split("\n");
    var N = +(input[0]);
    var arr1 = input[1].split(" ").map(Number);
    var arr2 = input[2].split(" ").map(Number);
    air(N, arr1, arr2);

}
function air(N, arr1, arr2) {
    //console.log(N,arr1,arr2)
    var i = 0;
    while (i < N) {
        var flag = false;
        if (arr1[i] <= 15 && arr2[i] <= 7) {
            flag = true;
            console.log("Boarding");
        }
        else {
            console.log("Stop");
        }

        i++;
    }
}

if (process.env.USER === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
 
