function decimalToBinary(n) {
  if (n === 0) {
    return "0"; // Special case: binary representation of 0
  }

  let binary = "";
  while (n > 0) {
    let bit = n % 2; // Get the least significant bit
    binary = bit + binary; // Prepend the bit to the binary string
    n = Math.floor(n / 2); // Right shift 'n' by dividing it by 2
  }

  return binary;
}

const decimalNumber = 6; // Replace with your desired decimal number
const binaryRepresentation = decimalToBinary(decimalNumber);
console.log(`Binary representation of ${decimalNumber} is ${binaryRepresentation}`);
