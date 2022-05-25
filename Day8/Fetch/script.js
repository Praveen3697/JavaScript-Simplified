// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.map(user => user.name))
//   });

// async-await version of above code

async function doStuff(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    const data = await response.json()

    console.log(data.map(user => user.name))
}
doStuff()

const URL = "https://jsonplaceholder.typicode.com/comments?postId=1"

async function func(){
    const response = await fetch(URL)

    const data = await response.json()

    console.log(data)
}

func()