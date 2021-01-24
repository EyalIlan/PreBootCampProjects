const readUserInput = require("readline-sync");

let InputString = readUserInput.question("Enter your String: ");
let UpDateString = ''
let UpperCharcters = ["a", "e", "i", "o", "u", "y"];

let lowerAdd = true;




// toUpperCase()
for (let i = 0; i < InputString.length; i++) {
  for (let j = 0; j < UpperCharcters.length; j++) {
     if(InputString.charAt(i) === UpperCharcters[j]){
        UpDateString += InputString.charAt(i).toUpperCase()
        lowerAdd = false
     }
  }
    if(lowerAdd){
        UpDateString += InputString.charAt(i)
    }
    lowerAdd = true
}

console.log(UpDateString);
