const $menu = document.querySelector(".menu");
const $navBar = document.querySelector(".navbar");

$menu.addEventListener("click", () =>{
    $navBar.classList.toggle("navbar__active");
});