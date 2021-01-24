const readUserInput = require('readline-sync')

const NumbersCharcters = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE']

let number = readUserInput.question('Enter number between 0-9 :')

number = parseInt(number)

console.log(NumbersCharcters[number])