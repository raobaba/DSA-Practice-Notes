// Bitwise AND
// let resultAnd = 5 & 3; // 0101 & 0011 = 0001 (1 in decimal)
// console.log(resultAnd)
// Bitwise OR
//let resultOr = 5 | 3; // 0101 | 0011 = 0111 (7 in decimal)

// Bitwise XOR
//let resultXor = 5 ^ 3; // 0101 ^ 0011 = 0110 (6 in decimal)

// Bitwise NOT
//let resultNot = ~5;   // ~0101 = 1010 (-6 in decimal due to two's complement)

// Left Shift
//let resultLeftShift = 5 << 2; // 0101 << 2 = 010100 (20 in decimal)

// Right Shift
//let resultRightShift = 16 >> 2; // 10000 >> 2 = 0010 (2 in decimal)

// Zero-fill Right Shift
//let resultZeroFillRightShift = -16 >>> 2; // 11111111111111111111111111110000 >>> 2 = 00111111111111111111111111111100 (1073741820 in decimal)

function countSetBits(n) {
    let count = 0;
    while (n > 0) {
        count += n & 1; // Add the least significant bit to the count
        n >>= 1;       // Right shift to check the next bit
    }
    return count;
}

const num = 13;
const numSetBits = countSetBits(num);
console.log(`Number of set bits in ${num} is ${numSetBits}`);
