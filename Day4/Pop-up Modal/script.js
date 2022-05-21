const openModalBtn = document.getElementById("open-modal-btn")
const overlay = document.getElementById("overlay")
const modal = document.getElementById("modal")
const closeModalBtn = document.getElementById("close-modal-btn")

openModalBtn.addEventListener('click',()=>{
    // openModalBtn.style.display='none'

    overlay.classList.add('open')
    modal.classList.add('open')
  
})

closeModalBtn.addEventListener('click',()=>{
    closeModal()
})

overlay.addEventListener('click',()=>{
    closeModal()
})

function closeModal(){
    modal.classList.remove('open')
    overlay.classList.remove('open')
}