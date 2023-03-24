const searchButton = document.querySelector(".nav_search")
const searchPanel = document.querySelector(".nav_search_panel")
const closeButton = document.querySelector(".close_icon")
const searchInput = document.querySelector(".nav_search_panel input")

document.addEventListener("click", (event) => {
    if (event.target !== searchButton && 
        event.target !== searchPanel &&
        event.target !== searchInput)
        if (searchPanel)
            searchPanel.style.visibility = "hidden"
})

let searchBarVisible = false

if (searchPanel) {
    searchPanel.style.visibility = "hidden"

}
searchButton?.addEventListener("click", (event) => {
    if (searchPanel)
        if (searchPanel.style.visibility === "hidden"){
            searchPanel.style.visibility = "visible"
        }
        else{
            searchPanel.style.visibility = "hidden"
        }
   
})

closeButton?.addEventListener("click", (event) => {
    if (searchPanel)
        searchPanel.style.visibility = "hidden"
})

window.onload = () => {
    if (window.matchMedia('(min-width: 320px)').matches && 
    window.matchMedia('(max-width: 767px)').matches)
    {
        console.log(window.innerWidth)
        searchPanel.style.width = window.innerWidth + "px"
        searchInput.style.width = (window.innerWidth - 150) + "px" 
        console.log(searchInput.style.width)
    }
}
