pattern(5);
function pattern(n) {
    for (let row = 0; row < 2 * n; row++) {
      let totalColsInRow = row > n ? 2 * n - row : row;
      let spaces = n - totalColsInRow;
      
      for (let i = 0; i < spaces; i++) {
        process.stdout.write(" ");
      }
      
      for (let column = 0; column < totalColsInRow; column++) {
        process.stdout.write("* ");
      }
      
      console.log();
    }
  }
  