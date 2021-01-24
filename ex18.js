

let Arr = [1,2,3]
const Reverse = (arr) =>{

    for(let i=0;i<arr.length/2;i++){
          temp = arr[i]
          arr[i] = arr[arr.length-1-i]
          arr[arr.length-1-i] = temp 
    }
         return arr
}
const ReverseArray = Reverse(Arr)
console.log(ReverseArray)
