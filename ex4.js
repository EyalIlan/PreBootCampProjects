const readUserInput = require("readline-sync");

let people = readUserInput.question("How many people are you going with? ");


const CheckValidNumber = (number) =>{
    let bool = true
    if(isNaN(number)){
        bool = false
    
    }else if(parseFloat(number)%1 !== 0 || parseFloat(number) <0){
        bool =false
    }
    return bool
}



if (CheckValidNumber(people) === false) {
  throw "Stop Execution";
}




let Kosher = readUserInput.question("Should it be Kosher? [y/n]: ");
if (isNaN(Kosher) === false) {
  throw "Stop Execution";
}

let foodsType = ["Salad", "Soup", "Burgers", "Meat"];
let KosherRestaurants = [
  "Pizzaiola - Pizzeria",
  "Teller Bakery - Reut Branch",
  "Burgers Bar Modiin - Malibu Branch",
  "Luciana - Italian Restaurant Kosher LeMehadrin",
];
let KashrutLemehadrinRestaurants = [
  "Biga Cafe - Shilat Branch",
  "Chalom Yaakov Bakery Modiin - Moriah Center Branch",
  "Burgers Bar Modiin - Azrieli Mall Branch",
  "Luciana - Italian Restaurant Kosher LeMehadrin",
];
let NoKosherRestaurants = [
  "Machneyuda",
  "HaSadna – The Culinary Workshop",
  "Mona",
  "Dekel",
];

if (Kosher === "y") {
  let KashrutLemehadrin = readUserInput.question("Kashrut Lemehadrin? [y/n]:");

  if (isNaN(KashrutLemehadrin) === false) {
    throw "stop Execution";
  }

  if (KashrutLemehadrin === "y") {
    let food = readUserInput.keyInSelect(
      foodsType,
      "Which food you would like?"
    );
    
    
    if (food !== -1) { // Cancel button
      console.log(
        "we recommend the " + KashrutLemehadrinRestaurants[food] + " restaurant"
      );
    }


  } else {
    let food = readUserInput.keyInSelect(
      foodsType,
      "Which food you would like?"
    );

    if (food !== -1) {
      console.log(
        "we recommend the " + KosherRestaurants[food] + " restaurant"
      );
    }

  }


} else {
  let food = readUserInput.keyInSelect(foodsType, "Which food you would like?");
  if (food !== -1) {
    console.log(
      "we recommend the " + NoKosherRestaurants[food] + " restaurant"
    );
  }
}
