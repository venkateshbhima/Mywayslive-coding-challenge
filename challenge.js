function fizzBuzz(phoneNumberSum) {
  for (let i = 1; i <= phoneNumberSum; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 4 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
