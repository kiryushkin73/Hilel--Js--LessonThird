let enteredNamber = parseFloat(prompt('Введите число'));
let remainderOfDivision;
let sum = 0;

while (enteredNamber > 0) {
  remainderOfDivision = enteredNamber % 10;
  sum = sum * 10 + remainderOfDivision;
  enteredNamber = parseInt(enteredNamber / 10);
}
alert(sum);
