const readUserInput = require('readline-sync')


const CheckValidNumber = (number) =>{

    Valid = true

   if(isNaN(number)){
    Valid = false
   
   }else if(parseFloat(number)%1 !== 0 || parseFloat(number) <=0){
       Valid = false
   }

   return Valid

}


console.log('\nthis program will calculated the factorial')

sum = 1

number = readUserInput.question('choose a positive number to calculate its factorial and whole ')


if(CheckValidNumber(number) === false){
    console.log('Invalid Input')
}else{
    for(let i = 1;i<=number;i++){
        sum =  sum*i
    }
    
    
    console.log('\nthe result is '+ sum +'\n')

}


