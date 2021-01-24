const readlineSync = require('readline-sync');
const figlet = require('figlet');// design your own font
const Chalk = require('chalk'); // color text
const randomWords = require('random-words'); // generete random word


const createRandomWordHidden = (randomWord) => {
    let hiddenRandomWord = ''
    for(let i=0;i<randomWord.length;i++){
        hiddenRandomWord += '*'
    }

    return hiddenRandomWord
}


//////// check if a charcter in the string and add it if necessary  -> work
const checkAndChangeCharcterInString = (randomWord,randomWordHidden,letter) =>{
    let  Hidden = ''
    let tryCheck = false
    for(i=0;i<randomWord.length;i++){
        if(randomWord.charAt(i) === letter){
            Hidden += randomWord.charAt(i)
            tryCheck = true
            
      }else{
            Hidden +=  randomWordHidden .charAt(i)
      }
    }



    if(!tryCheck){
        if(!CharcterUsed.includes(letter)){

            console.log('in')
            trys = trys - 1

        }
    }
    return Hidden;
}

////////////////////////////////////////////////////////////
 

////////check if Won 


//// work ->
const CheckIfWon = (word) =>{ 

    let check = true
    for(let i = 0;i<word.length;i++){
        if(word.charAt(i) === '*'){
            check = false
        }
    }
    return check
}


const checkValidInput = (letter) =>{

    let Valid = false

    if(letter.length === 1){
        if(letter.charCodeAt(0) >= 97 && letter.charCodeAt(0)<= 122){
            Valid = true 
        }
    }
    return Valid
}



let randomWord =  randomWords().toLowerCase()
let hiddenRandomWord = ''
let trys = 10
let WON = false
let CharcterUsed = []

//////////------ title ------////////////
console.log(
    Chalk.red(
        figlet.textSync(
            'HANG MAN',
            {
                font:'Georgia11',
                verticalLayout:'full',
                horizontalLayout:'full',
                width: 150,
                whitespaceBreak: true
            }
        )   
    )
)
//////////------ title ------////////////


console.log('Welcome to The HANG MAN game you have 10 trys to guess the word')
console.log('May the adds always be in your favor')

hiddenRandomWord = createRandomWordHidden(randomWord)
   
  
  while(trys > 0 && WON === false){
      
   console.log(Chalk.blue('you have '+trys + ' guesses'))
   
   let Valid; 
   let guess
   
   do{
       console.log(Chalk.magenta('Used Charters '+'['+ CharcterUsed+']')) 
       console.log('The word is:')
       console.log(Chalk.yellow(hiddenRandomWord)) 
       guess = readlineSync.question('What is your guess? ').toLowerCase()
       Valid = checkValidInput(guess)
       
       if(!Valid){
           console.log(Chalk.red('Input Must Be One Letter'))
       } 


   }while(Valid === false) 
   
   
   hiddenRandomWord = checkAndChangeCharcterInString(randomWord,hiddenRandomWord,guess)
   WON = CheckIfWon(hiddenRandomWord)


   if(!CharcterUsed.includes(guess)){
    CharcterUsed.push(guess)
    }

  }


if(WON){
    console.log(Chalk.green('you guess the word ['+randomWord+'] and won the game!!!!'))
}else{
    console.log(Chalk.green('you did not guess the word [' + randomWord + '] you lose. good day sir!'))
}









