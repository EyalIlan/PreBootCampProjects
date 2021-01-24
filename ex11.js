
const readUserInput = require('readline-sync')

const PolindromeUser = readUserInput.question('enter a string and the program will tell if its a polindrome ')

let reveseString = PolindromeUser.split('').reverse().join('');


if(PolindromeUser === reveseString){
    console.log('It is a Polindrome! :)')
}else{
    console.log('it is not a Polindrome its just a string :(')
}



