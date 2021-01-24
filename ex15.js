
const readUserInput = require("readline-sync");
const chalk = require("chalk"); // change the color of the strings

const MinMax = (arr) =>{

    let min = arr[0]
    let max = arr[0]

    for(let j=0;j<arr.length;j++){

         if(arr[j] < min){
             min = arr[j]
         }   

         if(arr[j] >max){
             max = arr[j]
         }

    }

    console.log(chalk.blue('The Min is '+min))
    console.log(chalk.blue('The Max is '+max))

}



const CheckValidLength = (arrayLength) =>{
    let check = true
    if(isNaN(arrayLength)){
        check = false
    }else if(parseFloat(arrayLength)%1 !==0 || parseFloat(arrayLength)<0){
        check = false
    }
    return check
}



let validArrayLength = false
let  ArrayLength;
const Array = [];


while(validArrayLength === false){
    ArrayLength =  readUserInput.question('Enter how much  Numbers you want in the Array ')
    validArrayLength = CheckValidLength(ArrayLength)

    if(validArrayLength === false){
        (console.log( chalk.red ('Invalid Input Must be a whole Number and above 0')))
    }

}


for(let i =0;i<ArrayLength;i++){
    Array.push(Math.ceil(Math.random()*50))
}

console.log(Array)

MinMax(Array)


