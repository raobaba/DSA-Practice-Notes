let matrix = [[x,o,x],[o,x,o],[o,x,x]];
ticTacToe(matrix);
function ticTacToe(matrix) {
    for (let i = 0; i < 3; i++) {
      let count_o = 0;
      let count_x = 0;
      for (let j = 0; j < 3; j++) {
        if (matrix[i][j] == "o") {
          count_o++;
        } else if (matrix[i][j] == "x") {
          count_x++;
        }
      }
      if (count_o == 3) {
        console.log("o");
        break;
      } else if (count_x == 3) {
        console.log("x");
        break;
      }
    }
    for (let i = 0; i < 3; i++) {
      let count_o = 0;
      let count_x = 0;
      for (let j = 0; j < 3; j++) {
        if (matrix[j][i] == "o") {
          count_o++;
        } else if (matrix[j][i] == "x") {
          count_x++;
        }
      }
      if (count_o == 3) {
        console.log("o");
        break;
      } else if (count_x == 3) {
        console.log("x");
        break;
      }
    }
    let count_o1 = 0;
    let count_x1 = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i == j) {
          if (matrix[i][j] == "o") {
            count_o1++;
          } else if (matrix[i][j] == "x") {
            count_x1++;
          }
        }
      }
    }
    if (count_o1 == 3) {
      console.log("o");
    } else if (count_x1 == 3) {
      console.log("x");
    }
    let count_o = 0;
    let count_x = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 2; j >= 0; j--) {
        if ((i == 0 && j == 2) || (i == 1 && j == 1) || (i == 2 && j == 0)) {
          if (matrix[i][j] == "o") {
            count_o++;
          } else if (matrix[i][j] == "x") {
            count_x++;
          }
        }
      }
    }
    if (count_o == 3) {
      console.log("o");
    } else if (count_x == 3) {
      console.log("x");
    }
  }