// hoisting

// console.log(sum(1,2))

// function sum(a,b){
//     return a+b
// }

// if same function is written as arrow function

// console.log(sumArrow(1,2))

// let sumArrow = (a,b)=>{
//     return a+b
// }

// since arrow function are treated as variable therefore hoisting is not done and error is shown that the sumArrow function has not been initialised.

// closure similar to scope
{
function print(variable){
    let c = 3
    return function func(variable2){
        console.log(variable)
        console.log(variable2)
        console.log(c)
    }
}

let a = print(2)
a(5)

// above is the example of closure......


// convert string to Number

let x = "1"

console.log(parseInt(x))
console.log(typeof parseInt(x))

// if its a float then use parseFloat

let y = "1.53"
console.log(parseFloat(y))
console.log(typeof parseFloat(y))

// convert number to string
let k = 1.589
console.log(k.toString())

}


// // array
// const a=[1,2,3,4,5,6,7,8,9,10]

// console.log(a)

// a.push(11)
// // adds 11 to to end of array
// console.group(a)

const b = ['a','b','c','d','e']
// console.log(Math.floor(b.length/2))

console.log(b[2])

const c = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]

console.log(c[0][3])
console.log(c[1][2])
console.log(c[2][0])

{
    // object
    let person={
        name: "Praveen",
        Age: 25,
        favouriteNum: 3
    }

    console.log(person)
    // if we want any single property

    console.log(person.name)
    console.log(person.Age)
    console.log(person.favouriteNum)
    console.log(typeof person)
}
{
    let car={
        Make:"Hyundai",
        Model: "Verna",
        isUsed:true,
        makeNoise : function(){
            console.log("Vroom")
        }
    }

    // console.log(car.Make)
    // console.log(car.Model)
    // console.log(car.isUsed)
    console.log(car.makeNoise())
}

{
    let Book={
        Title: "Rich Dad Poor Dad",
        Author:{
            Name: "Robert Kiyosaki",
            Age: 53
        }
    }

    console.log(Book.Title)
}

{
    // array methods

    // For Each
     const a = [1,2,3,4,5]
     a.forEach(number => {
         console.log(number)
     })
     a.forEach((number,index) => {
        console.log(number +" "+index)
    })

    // map it returns a whole new array so have to store it in variable

    let newArr1 = a.map(number =>{
        return number*2
    })

    console.log(newArr1)

    // filter  
    let newArr2 = a.filter(number =>{
        return number <= 2
    })
    console.log(newArr2)

    // other methods that are useful are some and every..it returns boolean value i.e. true or false..
}
{
    // reduce method
    const items=[
        {price: 10},
        {price: 15},
        {price: 20},
        {price: 1},
        {price: 6}
    ]

    const total=items.reduce((sum,item)=>{
        return sum+item.price
    },0 ) /*initializing the value of sum*/

    console.log(total)


    const a="Praveen"
    const b="Nair"

    // console.log(a+" "+b)
    console.log(`${a} ${b}`)


}

{
    class User{
        constructor(name,age){
            this.name=name,
            this.age=age,
            this.isHuman=true
        }
    }
    // function User(name,age){
    //     this.name = name,
    //     this.age = age,
    //     this.isHuman = true
    // }

    const user = new User("Praveen",25)
    const user1 = new User("PrasannaKumar",62)
    console.log(user)
    console.log(user1)
}