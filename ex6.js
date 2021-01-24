const readUserInput = require('readline-sync')



number = 1

while(number < 10){    
    number = readUserInput.question('please choose a number larger than 10 ')

    if(isNaN(number)){
        console.log('only numbers are allowd')
        number = 0;
    }else{
        parseFloat(number)
    }


    if(number > 10){
        console.log('thank you')
    }
}