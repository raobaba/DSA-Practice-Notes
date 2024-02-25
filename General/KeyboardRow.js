let words = ["hello", "alaska", "dad", "peace"];

let r1 = "qwertyuiopQWERTYUIOP";
let r2 = "asdfghjklASDFGHJKL";
let r3 = "zxcvbnmZXCVBNM";

let result = [];
for (let i = 0; i < words.length; i++) {
    let inRow1 = true, inRow2 = true, inRow3 = true;
    for (let j = 0; j < words[i].length; j++) {
        let c = words[i].charAt(j);
        if (!r1.includes(c)) {
            inRow1 = false;
        }
        if (!r2.includes(c)) {
            inRow2 = false;
        }
        if (!r3.includes(c)) {
            inRow3 = false;
        }
    }
    if (inRow1 || inRow2 || inRow3) {
        result.push(words[i]);
    }

}

console.log(result);
