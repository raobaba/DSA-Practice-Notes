const unsortedArray = [5, 3, 1, 4, 6];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // [1, 3, 4, 5, 6]

function bubbleSort(arr) {
    const len = arr.length;
    let swapped;
    
    for (let i = 0; i < len - 1; i++) {
      swapped = false;
      
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          swapped = true;
        }
      }
      
      if (!swapped) {
        break;
      }
    }
    
    return arr;
  }