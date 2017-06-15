// JavaScript Factorial Calculator
const factorialize = num => {
  let factorial = 1;
  
  for (let i = 1; i < (num + 1); i++) {
    factorial *= i;
  }
  
  return factorial;
}
