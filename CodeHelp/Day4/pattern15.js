pattern(4);
function pattern(n) {
    for (let row = 1; row <= n; row++) {
      for (let spaces = 1; spaces <= n - row; spaces++) {
        process.stdout.write("  ");
      }
  
      let c = 1;
      for (let column = 1; column <= row; column++) {
        process.stdout.write(c + "   ");
        c = (c * (row - column)) / column;
      }
      console.log();
    }
  }
  