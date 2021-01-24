const readUserInput = require('readline-sync')


let  UserString =  readUserInput.question('enter sentence and every space in it will change to * ')
let UpdateUserString = ''


for(let i of UserString){
    if(i === ' '){
        UpdateUserString = UpdateUserString + '*'
    }else{
        UpdateUserString = UpdateUserString + i
    }
}

console.log(UpdateUserString)