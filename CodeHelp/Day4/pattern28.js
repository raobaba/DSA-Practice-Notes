function printPattern(n) {
    let rcSize = 2 * n - 1; // Row Column SIZE
    for (let row = 1; row <= rcSize; row++) {
      for (let column = 1; column <= rcSize; column++) {
        let atEveryIndex = n - Math.min(Math.min(row - 1, column - 1), Math.min(rcSize - row, rcSize - column));
        process.stdout.write(atEveryIndex + " ");
      }
      console.log();
    }
  }
  
  const n = 5; // Replace 5 with the desired number
  printPattern(n);
  