// alert(factorial(enteredNambpered));
// let enteredNambper = parseInt(prompt('Введите число: '));
// function factorial(enteredNambper) {
//   return enteredNambper != 1
//     ? enteredNambper * factorial(enteredNambper - 1)
//     : 1;
// }

// alert(factorial(enteredNambper));

let enterNamber = parseInt(prompt('Введите число : '));
function factorial(enterNambper) {
  let res = 1;
  while (enterNamber) res *= enterNamber--;
  return res;
}
alert(factorial(enterNamber));
