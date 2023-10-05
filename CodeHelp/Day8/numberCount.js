let total = 166;

let notes = [100, 50, 10, 5, 1];
let i = 0;
while (total > 0) {
  if (total >= notes[i]) {
    totalNotes = Math.floor(total / notes[i]);
    total = total % notes[i];
  }
  console.log(`number of ${notes[i]} notes is ${totalNotes}`);
  i++;
}
