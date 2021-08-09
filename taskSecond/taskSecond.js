let enteredNamber = parseInt(
  prompt('Введите число которое будет возведено в степень')
);
let enteredInvolution = parseInt(
  prompt('Введите степень в которую будет возведено число ')
);
function pow(enteredNamber, enteredInvolution) {
  let result = 1;

  for (let i = 0; i < enteredInvolution; i++) {
    result *= enteredNamber;
  }

  return result;
}

alert(
  ' число ' +
    enteredNamber +
    ' возведенное в ' +
    enteredInvolution +
    ' степень  = ' +
    pow(enteredNamber, enteredInvolution)
);
