const button = document.querySelector('button')

setTimeout(()=>{
    console.log("inside")
},1000)

console.log('outside')

button.addEventListener('click',()=>{
    console.log('Clicked')
})

// setTimeout and addEventListener are type of asynchornous code i.e. it doesn't exexute right away.
// it has some delay or in case of event like click it executes when clicked.They are also called as callbacks.

// other than this is the example of synchronous code

// callback hell example..callback inside of callback inside of callback...so on this is callback hell

setTimeout(()=>{
    console.log("inside")
    setTimeout(()=>{
        console.log("inside 2")
        setTimeout(()=>{
            console.log("inside 3")
        },1000)
    },2000)
},3000)

