pattern(5);
function pattern(n) {
    let inSpaces = 2;
    let belowSpaces = 2 * n - 2;
  
    for (let row = 1; row <= 2 * n; row++) {
      let totalColumns = row > n ? row - n : n - row + 1;
  
      for (let column = 1; column <= totalColumns; column++) {
        process.stdout.write("*");
      }
  
      if (row <= n && row !== 1) {
        for (let spaces = 1; spaces <= inSpaces; spaces++) {
          process.stdout.write(" ");
        }
        inSpaces += 2;
      }
  
      if (row > n && row !== 2 * n) {
        for (let spaces = 1; spaces <= belowSpaces; spaces++) {
          process.stdout.write(" ");
        }
        belowSpaces -= 2;
      }
  
      for (let column = 1; column <= totalColumns; column++) {
        process.stdout.write("*");
      }
  
      console.log();
    }
  }
  