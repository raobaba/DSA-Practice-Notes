let candyType = [1,1,2,3]

let res = distributeCandies(candyType)
console.log(res);

function distributeCandies(candyType) {
    let uniqueCandies = new Set(candyType);

    return Math.min(candyType.length / 2, uniqueCandies.size);

};