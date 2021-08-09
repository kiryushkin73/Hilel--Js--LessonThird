let valueFirst = parseInt(prompt('Введите первое число'));
let valueSecond = parseInt(prompt('Введите первое число'));
function gcd(valueFirst, valueSecond) {
  return valueSecond == 0
    ? valueFirst
    : gcd(valueSecond, valueFirst % valueSecond);
}

function nok(valueFirst, valueSecond) {
  return (valueFirst * valueSecond) / gcd(valueFirst, valueSecond);
}

alert(nok(valueFirst, valueSecond));
