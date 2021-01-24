

//print Boom if any of the numbers digit is 7 or divisble by 7

const Hold = []

for(let i = 0 ;i<=100;i++){
    
    if(i === 0){
     
    }
    else if(i%7===0){
        Hold.push("BOOM")   
    //   console.log("BOOM")
    }else{
        if(i%10 === 7){
            Hold.push("BOOM") 
        //   console.log("BOOM")
        }
        else if(parseInt(i/10)==7){
            Hold.push("BOOM") 
            // console.log("BOOM")
        }
        else{
            Hold.push(i) 
            // console.log(i)           
        }
    }
}

console.log(Hold)