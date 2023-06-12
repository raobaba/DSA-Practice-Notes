function printPattern(n) {
    for (let row = 1; row <= n; row++) {
      let ch = String.fromCharCode(60 + n - row + 1 + 4); // ASCII value calculation
      for (let column = 1; column <= row; column++) {
        process.stdout.write(ch + " ");
        ch = String.fromCharCode(ch.charCodeAt(0) + 1); // Increment character
      }
      console.log();
    }
  }
  
  const n = 5; // Replace 5 with the desired number
  printPattern(n);
  