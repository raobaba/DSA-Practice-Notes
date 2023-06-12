pattern(5);
function pattern(n) {
    let inSpaces = 2 * n - 2;
    let belowSpaces = 2;
    
    for (let row = 1; row <= 2 * n - 1; row++) {
      let totalColumns = row > n ? 2 * n - row : row;
      
      for (let column = 1; column <= totalColumns; column++) {
        process.stdout.write("*");
      }
      
      if (row <= n) {
        for (let spaces = 1; spaces <= inSpaces; spaces++) {
          process.stdout.write(" ");
        }
        inSpaces -= 2;
      } else {
        for (let spaces = 1; spaces <= belowSpaces; spaces++) {
          process.stdout.write(" ");
        }
        belowSpaces += 2;
      }
      
      for (let column = 1; column <= totalColumns; column++) {
        process.stdout.write("*");
      }
      
      console.log();
    }
  }
  