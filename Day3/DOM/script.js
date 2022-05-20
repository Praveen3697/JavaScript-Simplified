const element=document.createElement("span")
element.innerText="Hello world"
// element.style.fontWeight = 'bold'
document.body.appendChild(element)

const dataAttribute= document.querySelector("[data-test]")
const divClass= document.querySelectorAll('.div-class')
const inputTxt=document.querySelector("input")

dataAttribute.style.color='red'

divClass.forEach(div => (div.style.color='green'))

console.log(inputTxt)