pattern(5);
function pattern(n) {
    for (let row = 1; row <= n; row++) {
      // Trailing Spaces
      for (let spaces = 1; spaces <= n - row; spaces++) {
        process.stdout.write(" ");
      }
  
      let totalColumns = 2;
      if (row === 1 || row === n) {
        totalColumns = n - 1;
      }
  
      for (let column = 1; column <= totalColumns; column++) {
        process.stdout.write("* ");
  
        if (row > 1 && row < n) {
          for (let spaces = 1; spaces <= n - 3; spaces++) {
            process.stdout.write("  ");
          }
        }
      }
      
      console.log();
    }
  }
  