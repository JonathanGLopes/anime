const $menu = document.querySelector(".nav");
const $navBar = document.querySelector(".navbar");

$menu.addEventListener("click", function() {
        $navBar.classList.toggle("navbar__active");
    });


const $btnVer = document.querySelector(".btn-vermais");
const $hide = document.querySelectorAll(".hide");


/* Não é possível adicionar o EventListener com o querySelectorAll porque ele é para um elemento de cada vez.
Já o All retorna um array com os elementos que foram selecionados e para percorrer esse array e fazer com que as classes fossem removidas e adicionas, foi utilizado o método forEach */
$hide.forEach(function(article){
    $btnVer.addEventListener("click", ()=>{
        article.classList.toggle('hide');

    if(article.classList.contains('hide')){
        $btnVer.innerHTML = "Ver mais";
    } else {
        $btnVer.innerHTML = "Ver menos";
    }
    });

});