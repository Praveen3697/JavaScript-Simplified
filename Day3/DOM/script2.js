// const btn = document.querySelector("[data-btn]")

// btn.addEventListener('click',()=>{
//     console.log('clicked')
// })

const form=document.querySelector("[data-form]")

form.addEventListener('submit', e =>{
    e.preventDefault()
    console.log("form submitted")
})

const anchorTag = document.querySelector("[anchor-tag]")

anchorTag.addEventListener('click',e =>{
    e.preventDefault()
    console.log("clicked")
})

// other eventListeners to checkOut are mouseenter,mouseleave,mouseover,focus,blur