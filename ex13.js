
const readUserInput = require("readline-sync");

//32 - space
//65 -122 ascii
//str.charCodeAt(0)
const StringInput = readUserInput.question('Enter your String to find the longest word ')

let longestWord = ''
let actualWord = ''

for(let i = 0;i<= StringInput.length;i++){

    if(StringInput.charCodeAt(i)===32 || i === StringInput.length){
        if(actualWord.length > longestWord.length){
            longestWord = actualWord
        }
        actualWord = ''
    }

    if(StringInput.charCodeAt(i) >=65 && StringInput.charCodeAt(i)<=122){// the ascii values of all the charcters
        actualWord += StringInput.charAt(i)
    } 
}

console.log(longestWord)

