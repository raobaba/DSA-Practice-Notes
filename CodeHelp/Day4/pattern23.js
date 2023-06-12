pattern(5);
function pattern(n) {
    let number = 1;
    let secondHalf = number * number + 1;
    
    for (let row = 1; row <= n; row++) {
      for (let spaces = 1; spaces <= row - 1; spaces++) {
        process.stdout.write("  ");
      }
      
      for (let column = 1; column <= n - row + 1; column++) {
        process.stdout.write(number + " ");
        number++;
      }
      
      for (let column = 1; column <= n - row + 1; column++) {
        process.stdout.write(secondHalf + " ");
        secondHalf++;
      }
      
      console.log();
    }
  }
  
  