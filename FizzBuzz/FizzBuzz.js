function FizzBuzz(n) {
  var input = [];
  for (var i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      input.push("FizzBuzz");
    } else if (i % 3 === 0) {
      input.push("Fizz");
    } else if (i % 5 === 0) {
      input.push("Buzz");
    } else {
      input.push(i.toString());
    }
  }
  return input;
};
console.log(FizzBuzz(50))
