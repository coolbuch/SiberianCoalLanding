const modal = document.querySelector(".modal")
const errorText = document.querySelector(".modal-error")
const sendButton = document.querySelector('.modal-form button')
document.querySelector("#modal-button").addEventListener('click', toogleModal)
document.addEventListener('keydown', (e) => {
    if (modal.style.visibility === "visible"){
        if (e.key === "Escape")
            toogleModal()
    }
})

sendButton.addEventListener('click', () => {errorText.style.visibility = "visible"})

function toogleModal(){
    errorText.style.visibility = "hidden"
    if (modal.style.visibility !== "visible"){
        modal.style.visibility = "visible"
    }
    else{
        modal.style.visibility = "hidden"
    }
}