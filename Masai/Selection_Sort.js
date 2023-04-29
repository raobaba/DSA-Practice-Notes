const unsortedArray = [5, 3, 1, 4, 6];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // [1, 3, 4, 5, 6]

function selectionSort(arr) {
    const len = arr.length;
    
    for (let i = 0; i < len - 1; i++) {
      let min = i;
      
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      
      if (min !== i) {
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
      }
    }
    
    return arr;
  }