const $menu = document.querySelector(".nav");
const $navBar = document.querySelector(".navbar");

$menu.addEventListener("click", function() {
        $navBar.classList.toggle("navbar__active");
        console.log("oi");
    });