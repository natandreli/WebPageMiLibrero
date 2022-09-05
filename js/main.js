window.addEventListener("load", main);

function main(){
    const previo = this.document.querySelector(".imgPrevio");
    const siguiente = this.document.querySelector(".imgSiguiente");
    const slider = this.document.querySelector(".sliderLibros");

    window.addEventListener("scroll", function() {
        var nav = this.document.querySelector("nav");
        nav.classList.toggle("abajo", window.scrollY > 0);

    });

    previo.addEventListener("click", function(){
        slider.scrollLeft -= 300;
    });

    siguiente.addEventListener("click", function(){
        slider.scrollRigth += 300;
    });
}