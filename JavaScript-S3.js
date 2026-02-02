


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

// function Maxnum (arr){
//     let max=arr[0]
//     for(let i=0 ; i<arr.length ; i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
    
//     }
//     return max
// }
// let x=[1,2,3,5]
// console.log(Maxnum(x)) 



//  [1,2,3,4,5] [5,4,3,2,1]

let x = [1,2,3,4,5]

// let temp =0
// temp = x[0]          
// x[0]=x[x.length-1]           [5,2,3,4,5]           
// x[4]=temp              

// x[0]=x[4]       
// x[4]=x[0]


// function Reverse (array){
//     let temp =0
//     for (let i=0 ; i<array.length/2 ; i++ ){
//         temp=array[i]
//         array[i]=array[array.length-1-i]
//         array[array.length-1-i]=temp
//     }
// }
// Reverse(x)
// console.log(x)



// const Person = { 
//     name:'ahmad' , 
//     age:30 , 
//     address:'Roterdam' , 
//     children:['jhon' , 'joe'],
//     calsses:{ math:'sdasd' , sciense:'dasdsadas'},
//     info: function (gender){
//         console.log(`my name is ${this.name} and my age is ${Person.age} my gender is ${gender} `)
//     }
// }

// Person.info('male')

// Person['name']='Doe'
// Person.work='Developer'
// console.log(Person['name'])


const todos =[
    { 
        id:1,
        task:'Take out the trash',
        isCompleted:false
    } ,
     { 
        id:2,
        task:'go to work',
        isCompleted:false
    }   ,
     { 
        id:3,
        task:'Buy Groceries',
        isCompleted:false
    }
]

for(let i=0 ; i<todos.length ; i++){
    todos[i].isCompleted=true
}

console.log(todos)