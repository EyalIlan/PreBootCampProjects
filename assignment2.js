const readUserInput = require('readline-sync')
const chalk = require("chalk");
//Geek out
//Unleash the ninja within


let money = 50
let play = true


const ValidInput = (number) =>{
    let check = true
    if(isNaN(number)){
        check = false
    }
    return check
}



console.log(chalk.yellow('////////-------- Welcome To WAR --------////////\n'))
let name = readUserInput.question(chalk.yellow('please enter your name: '))
while(money > 0 && play === true){
    
    console.log(chalk.yellow('Hello '+name+' you currently have '+ money+' dollars'))

    let check;

    do{
         check = true
         bet = readUserInput.question(chalk.yellow('Place your bet for the next round: 1 to '+money+': '))
         if(ValidInput(bet)){
            check = false
         }else{
             console.log(chalk.red('Must be a Number!'))
         }
    }while(check)


    if(bet > money || bet <0){
        console.log(chalk.red('i said between 1 to '+ money + ' And you typed '+bet))
        console.log(chalk.red('I dont play with liars!!! Bye'))
        play = false
    }else{
        let computerCard = Math.ceil(Math.random()*12)
        let userCard = Math.ceil(Math.random()*12)
        
        console.log(chalk.blue('Your card is '+computerCard + ' And my card is '+userCard))
        
        if(computerCard > userCard){
 
            money = parseFloat(money) -  parseFloat(bet)
            console.log(chalk.blue('You Lost '+bet+' And now you have '+money))
            
        }else if(userCard > computerCard){
            money = parseFloat(money) +  parseFloat(bet)
            console.log(chalk.blue('You Won '+bet+'!! And now you have '+ money))
        }else{
            console.log(chalk.blue('It is a Draw Nobody won'))
        }

        if(money === 0){
            console.log(chalk.blue('You are broke... Bye Bye'))
        }else{


            let key = false
            let choice;
            while(key === false){
                console.log(chalk.yellow('What would you like to do?'))
                console.log(chalk.yellow('1. Play another round'))
                console.log(chalk.yellow('2. leave with my money :-)'))
                choice = readUserInput.question('') // Global varibale  for the
                if(choice !== "1" && choice !== "2"){
                    console.log(chalk.red('Must be 1 or 2'))    
                }else{
                   key = true 
                }
            }


            if(choice === '2'){
                play = false
            }

        }

    }
    
} 