
const readUserInput = require('readline-sync')




const Make10 = (num1,num2) => {
    if((parseFloat(num1) + parseFloat(num2))===10){
        console.log('makes 10')
    }else{
        console.log('nope')
    }
}


const num1 = readUserInput.question('Enter the First Number ')
const num2 = readUserInput.question('Enter the Seconde Number ')

if(isNaN(num1) || isNaN(num2)){
    console.log('One of the number you enter is Invalid')
}
else{
    Make10(num1,num2)
}


