const readUserInput = require("readline-sync");


const CheckValidNumber = (number) => {
  Valid = true;

  if (isNaN(number)) {
    Valid = false;
  } else if (parseFloat(number) % 1 !== 0 || parseFloat(number) <= 0) {
    Valid = false;
  }

  return Valid;
};

const FindPrimes = (n) => {
  const primes = [];

  let count = 0;

  for (i = 2; i < n; i++) {
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        count++;
      }
    }

    if (count === 0) {
      primes.push(i);
      // console.log(i)
    }
    count = 0;
  }

  console.log("Primes between 1 and " + n + ":", primes);
};



const n  = readUserInput.question("Enter Number : ")


if(CheckValidNumber(n) === false){
    console.log("Invalid Input Must be a whole number")
}else{
    FindPrimes(n)
}