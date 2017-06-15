// Print the numbers 1..100
// For multiples of 3, print "Fizz" instead of the number
// For multiples of 5, print "Buzz" instead of the number
// For multiples of 3 and 5, print "FizzBuzz" instead of the number

for (let i = 1; i <= 100; i++) {
  ((i % 3 == 0) && (i % 5 == 0)) ? console.log('FizzBuzz') :
  (i % 3  == 0) ? console.log('Fizz') :
  (i % 5  == 0) ? console.log('Buzz') :
  console.log(i);
}
