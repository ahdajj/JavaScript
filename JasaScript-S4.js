// let x=0
// var y=0
// const z=0

// console.log(x,y,z)


// m=true
// if(m==true){
//     let x=0
//     var y=0
//     const z=0
//     console.log(x,y,z)
// }
// console.log(y)


// function hi (){
//     let x=0
//     var y=0
//     const z=0
//     console.log(x,y,z)
// }

// hi()
// console.log(z)

// const p=document.getElementsByTagName('p')
// const h=document.getElementById('Head')
// const btn=document.getElementsByClassName('btn')

// const p1 = document.querySelector('p')
// const p2=document.querySelectorAll('p')


// const div = document.querySelector('div')
// div.innerHTML='<h1>Hello this is inner html </h1>'
// div.innerText ='<h1>Hello this is inner text</h1>'
// div.textContent
// let H=document.createElement('H1')
// H.innerText='Hello'
// div.append(H)
// div.appendChild()
// div.firstElementChild.remove()

// div.style.background='red'
// div.classList.add('Error')
// div.classList.remove('Error')


// const btn = document.querySelector('.btn')
// btn.addEventListener('click', function (){
// div.classList.add('Error')
// let h2=document.createElement('H2')
// h2.innerText='you Pressed the button'
// div.append(h2)
// div.innerHTML+='<h2>you Pressed the button </h2>'
// alert('Error')
// })


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

const div = document.querySelector('.display')
for (let i =0 ; i<todos.length ; i++){
    let tasktitle=document.createElement('p')
    tasktitle.innerText=todos[i].task
    let Haed = document.createElement('h1')
    Haed.innerText=todos[i].id
    let check = document.createElement('input')
    check.setAttribute('type','checkbox')
    if(todos[i].isCompleted==false){
        check.checked=true
    }
    div.append(Haed,tasktitle , check)

    // div.innerHTML+=`<h1>${todos[i].id}</h1> <p>${todos[i].task}</p> <p>${todos[i].isCompleted}</p>`
}
