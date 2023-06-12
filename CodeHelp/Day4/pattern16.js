pattern(5);
function pattern(n) {
    for (let row = 1; row < 2 * n; row++) {
      let c = row > n ? 2 * n - row : row;
      let spaces = n - c;
      
      for (let i = 0; i < spaces; i++) {
        process.stdout.write("  ");
      }
  
      for (let column = c; column >= 1; column--) {
        process.stdout.write(column + " ");
      }
      
      for (let column = 2; column <= c; column++) {
        process.stdout.write(column + " ");
      }
      
      console.log();
    }
  }
  