window.addEventListener("load", main);

function main(){
    const previoLibros = this.document.querySelector("#imgPrevioLibros");
    const siguienteLibros = this.document.querySelector("#imgSiguienteLibros");
    const sliderLibrosLibros = this.document.querySelector("#sliderLibrosLibros");

    previoLibros.addEventListener("click", function(){
        sliderLibrosLibros.scrollLeft -= 700;
    });

    siguienteLibros.addEventListener("click", function(){
        sliderLibrosLibros.scrollLeft += 700;
    });
}