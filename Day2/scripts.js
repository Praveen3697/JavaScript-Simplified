function myName(){
    console.log("Praveen Nair")
}

myName()

function printName(pName){
    console.log(pName)
}

printName("praveen")

function createName(name){
    return 'Hello '+name;
}

let xName = createName('praveen')

console.log(xName)


// calling function inside a function
function printVariable(variable){
    console.log(variable)
}

function func(name,callback){
    callback('hello ' + name)
}

func('Praveen',printVariable)

// another way of doing this is instead of writing line number 23-25

func("Vinay",function(variable){
    console.log(variable)
})

// Arrow functions

let fname = (name) =>{
    console.log(name)
}

fname('Sreelatha')

let sayHi = (name) => 'Hi '+ name

console.log(sayHi('Praveen'))

