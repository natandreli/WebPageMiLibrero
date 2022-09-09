window.addEventListener("load", main);

function main(){
    const previoAutores = this.document.querySelector("#imgPrevioLibros");
    const siguienteAutores = this.document.querySelector("#imgSiguienteLibros");
    const sliderAutores = this.document.querySelector("#sliderLibrosLibros");

    previoAutores.addEventListener("click", function(){
        sliderAutores.scrollLeft -= 700;
    });

    siguienteAutores.addEventListener("click", function(){
        sliderAutores.scrollLeft += 700;
    });
}