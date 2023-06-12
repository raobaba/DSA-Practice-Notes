function printPattern(n) {
    for (let row = 1; row <= n; row++) {
      let spaces = n - row;
      
      for (let i = 0; i < spaces; i++) {
        process.stdout.write("  ");
      }
      
      for (let column = row; column >= 1; column--) {
        process.stdout.write(column + " ");
      }
      
      for (let column = 2; column <= row; column++) {
        process.stdout.write(column + " ");
      }
      
      console.log();
    }
  }
  
  const n = 5; // Replace 5 with the desired number
  printPattern(n);
  