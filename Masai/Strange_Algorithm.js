let n = 3;
function StrangeAlgorithm(n){
    let bag = `${n} `;
  while (n !== 1) {
      if (n % 2 === 0) {
          n = n / 2;
          bag = bag + n + " ";
      } else if (n % 3 === 0) {
          n = n * 3 + 1;
          bag = bag + n + " ";
      } else {
          n = n * 3 + 1;
          bag = bag + n + " ";
      }
  }
  console.log(bag);
    
}