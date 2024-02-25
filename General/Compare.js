let a1 = [11, 7, 1, 13, 21, 3, 7, 3];
let a2 = [11, 3, 7, 1, 7];

const set1 = new Set(a1);
const set2 = new Set(a2);

const isEqual = [...set2].every((value) => set1.has(value));

if (isEqual) {
    console.log(true);
} else {
    console.log(false);
}

