//need to add quit game to each answer in the array option [0]

const readlineSync = require("readline-sync");

let sum = 0;
let quitGame = false
let Answer;

// let NoKosherRestaurants = [
//     "Machneyuda",
//     "HaSadna – The Culinary Workshop",
//     "Mona",
//     "Dekel",
//   ]


["Ewoks","Klatooinian","Wookiee","Wampa"]


console.log('\nhello! Welcome to the star wars quiz!')

const numberQuestion = ['First Question','Second Question','Third Question','Fourth Question','Fifth Question']

let questions = [
  {
    points: {
      1: 4,
      2: 1,
      3: 2,
      4: 3
    },
    question:"Who are the only two characters who appear in every Star Wars movie?",
    options: ["C-3PO and R2-D2","Obi-Wan Kenobi and Qui-Gon","Han Solo and Chewbacca","darth vader and Palpatine"]
  },
  {
    points: {
      1: 1,
      2: 2,
      3: 4,
      4: 3
    },
    question: "Who played Princess Leia?",
    options: ["margot robbie","scarlett johansson","Carrie Fisher","Rosario Dawson"]
  },
  {
    points: {
      1: 3,
      2: 4,
      3: 1,
      4: 2,
    },
    question: "Who created Star Wars?",
    options: ["Quentin Tarantino","George Lucas","steven spielberg","James Cameron"]
  },

  {
    points: {
      1: 2,
      2: 3,
      3: 4,
      4: 1,
    },
    question: "Which weapon is used by the Jedi Knights?",
    options: ["gun","shield","Lightsaber","wooden stick"]
  },

  {
    points: {
      1: 4,
      2: 1,
      3: 3,
      4: 2
    },
    question: "Which furry species lives on the forest moon of Endor?",
    options: ["Ewoks","Klatooinian","Wookiee","Wampa"]
  },

];

questions.forEach((question,index) => {
  
  if(quitGame === false){
      console.log('\n'+numberQuestion[index])
      console.log("----------------------------------");
      let answer = readlineSync.keyInSelect(question.options,question.question ) + 1;
      Answer = answer
      let points = 0 
      points = question.points[answer];
      sum = sum + points;
  }
  
     if(parseInt(Answer)=== 0){
     quitGame = true
    }
  
  
}); 

if(quitGame){
    console.log('hope you enjoy the game we hope to see you next time :)')
}else{
    if(sum === 20){
        console.log('You are the Choosing One!')
    }
    else if(sum < 20 && sum >15){
        console.log('You are a jedi master')
    }
    else if(sum <= 15 && sum >10){
        console.log('You are a jedi knight')
    }
    else if(sum <=10 && sum >5){
        console.log('you are a jedi padawan')
    }
    else if(sum <= 5 && sum >=0){
        console.log('you are fallen to the dark side of the force')
    }
    console.log('thank you for taking the star wars quiz may the force be with you\n')
}

