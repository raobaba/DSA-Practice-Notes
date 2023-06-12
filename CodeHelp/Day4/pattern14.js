pattern(4);
function pattern(n) {
    let inSpace = 1;
    let inBelowSpace = 2 * n - 5;
  
    for (let row = 1; row <= 2 * n - 1; row++) {
      let totalColumns = 1;
      if (row !== 1 && row !== 2 * n - 1)
        totalColumns = 2;
  
      let totalSpaces = row > n ? row - n : n - row;
      for (let space = 1; space <= totalSpaces; space++) {
        process.stdout.write(" ");
      }
  
      for (let column = 1; column <= totalColumns; column++) {
        process.stdout.write("*");
        if (row > 1 && row <= n) {
          for (let space = 1; space <= inSpace; space++) {
            process.stdout.write(" ");
          }
          inSpace += 1;
        }
        if (row > n) {
          for (let space = 1; space <= inBelowSpace; space++) {
            process.stdout.write(" ");
          }
          inBelowSpace--;
        }
      }
      console.log();
    }
  }
  