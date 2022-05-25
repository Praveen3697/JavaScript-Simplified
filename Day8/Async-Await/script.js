/*

function setTimeoutPromise(delay){
    return new Promise((resolve,reject) => {
        setTimeout(resolve,delay)
    })
}

async function doStuff(){
    await setTimeoutPromise(550)
    console.log("1")
    await setTimeoutPromise(550)
    console.log("2")
}

doStuff()

*/

/*
function setTimeoutPromise(delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Resolved")
        },delay)
    })
}

async function doStuff(){
    const message = await setTimeoutPromise(550)
    console.log("1")
    console.log(message)
    const error = await setTimeoutPromise(550)
    console.log("2")
    console.error(error)
}

doStuff()
*/

/*
function setTimeoutPromise(delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Error")
        },delay)
    })
}

async function doStuff(){
    try{
    console.log("before error")
    const message = await setTimeoutPromise(550)
    console.log("after error")
    console.log("1")
    console.log(message)
    const error = await setTimeoutPromise(550)
    console.log("2")
    console.error(error)
    } catch (error){
        console.error(error)
    }
}

doStuff()

*/

function getValueWithDelay(value,delay){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(value)
        },delay)
    })
}

function getValueWithDelayError(value,delay){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            reject("Error")
        },delay)
    })
}

// async function doStuff(){
//     const val = await getValueWithDelay(250,500)
//     console.log(val)
//     const val2 = await getValueWithDelay(500,500)
//     console.log(val2)
// }
// doStuff()

async function didStuff(){
   try{
    const val = await getValueWithDelay(250,250)
    console.log(val)
    const val2 = await getValueWithDelay(500,250)
    console.log(val2)
    const val3 = await getValueWithDelayError(152,250)
    console.log(val3)
   } catch (error){
       console.error(error)
   }
}
didStuff()