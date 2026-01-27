


// number
// string 
// Boolean
// object
// null 
// undefined


// let x =[1,2,3,4,5]
// console.log(typeof x )

// x+=5
// x=x+5


//          0,1,2,3,4,5,6,7,8,9,10
// let x = [1,2,3,4,5,6,7,8,1,2,2]
// let y = [1,2,5,6,7,8]

// // console.log(x.length)
// for(let i=0 ; i<x.length; i++ ){
//     console.log(x[i])
// }


// let array=[1,-2,3,-3,8]         

// for (let i=0 ; i<array.length ; i++){
//     if(array[i]<0){
//         array[i]=0
//     }
// }
// console.log(array)

// let array = [12,5,22,4,52]
// let max=array[0]

// for(let i=0 ; i<array.length ; i++){
//     if(array[i]>max){
//         max=array[i]
//     }
// }
// console.log(max)


// let average=0
// function hi (a,b,c){
//        let sum=a+b+c
//        return sum 

// }

// console.log(hi(1,2,3))
// average=hi(1,2,3)/3     
      

// console.log(average)

function Maxnum (arr){
    let max=arr[0]
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]>max){
            max=arr[i]
        }
    
    }
    return max
}
let x=[1,2,3,5]
console.log(Maxnum(x)) 