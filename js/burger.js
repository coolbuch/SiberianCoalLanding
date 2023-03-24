const menuButton = document.querySelector(".menu_btn")
const menu = document.querySelector(".burger-menu")
const menuCloseButton = document.querySelector(".burger-menu-close")
const links = document.querySelectorAll(".burger-menu__link")

if (menu){
    menu.style.visibility = "hidden"
}

menuButton.addEventListener("click", openMenu)
menuCloseButton.addEventListener("click", hideMenu)
links.forEach((el) => {el.addEventListener("click", hideMenu)})

function hideMenu(){
    menu.style.visibility = "hidden"
}

function openMenu(){
    menu.style.visibility = "visible"
}