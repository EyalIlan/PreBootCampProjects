

const FunJoin = (arr1,arr2) =>{

    let arr3 = []
    for(let i =0;i<arr1.length;i++){
        arr3.push(arr1[i])
    } 
    for(let j =0;j<arr2.length;j++){
        arr3.push(arr2[j])
    }
    return arr3
}


const arr1 = ["Hello"]
const arr2 = ["AppleSeeds","Bootcamp"]


 let joinArray =  FunJoin(arr1,arr2)
 console.log(joinArray)