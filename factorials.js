// Factorialize a Number

function factorialize(num) {
  var factorial = 1;
  for (var i = 1; i < (num + 1); i++) {
    factorial *= i;
  }

  return factorial;
}

console.log(factorialize(10));
