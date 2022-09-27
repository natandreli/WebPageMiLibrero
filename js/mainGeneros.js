window.addEventListener("load", main);

function main() {
    const previoTerror = this.document.querySelector("#imgPrevioTerror");
    const siguienteTerror = this.document.querySelector("#imgSiguienteTerror");
    const sliderTerror = this.document.querySelector("#sliderLibrosTerror");

    const previoCienciaFiccion = this.document.querySelector("#imgPrevioCienciaFiccion");
    const siguienteCienciaFiccion = this.document.querySelector("#imgSiguienteCienciaFiccion");
    const sliderCienciaFiccion = this.document.querySelector("#sliderLibrosCienciaFiccion");

    const previoFantasia = this.document.querySelector("#imgPrevioFantasia");
    const siguienteFantasia = this.document.querySelector("#imgSiguienteFantasia");
    const sliderFantasia = this.document.querySelector("#sliderLibrosFantasia");

    const previoLiteraturaJuvenil = this.document.querySelector("#imgPrevioLiteraturaJuvenil");
    const siguienteLiteraturaJuvenil = this.document.querySelector("#imgSiguienteLiteraturaJuvenil");
    const sliderLiteraturaJuvenil = this.document.querySelector("#sliderLibrosLiteraturaJuvenil");

    const previoLiteraturaInfantil = this.document.querySelector("#imgPrevioLiteraturaInfantil");
    const siguienteLiteraturaInfantil = this.document.querySelector("#imgSiguienteLiteraturaInfantil");
    const sliderLiteraturaInfantil = this.document.querySelector("#sliderLibrosLiteraturaInfantil");

    previoTerror.addEventListener("click", function () {
        sliderTerror.scrollLeft -= 700;
    });

    siguienteTerror.addEventListener("click", function () {
        sliderTerror.scrollLeft += 700;
    });

    previoCienciaFiccion.addEventListener("click", function () {
        sliderCienciaFiccion.scrollLeft -= 700;
    });

    siguienteCienciaFiccion.addEventListener("click", function () {
        sliderCienciaFiccion.scrollLeft += 700;
    });

    previoFantasia.addEventListener("click", function () {
        sliderFantasia.scrollLeft -= 700;
    });

    siguienteFantasia.addEventListener("click", function () {
        sliderFantasia.scrollLeft += 700;
    });

    previoLiteraturaJuvenil.addEventListener("click", function () {
        sliderLiteraturaJuvenil.scrollLeft -= 700;
    });

    siguienteLiteraturaJuvenil.addEventListener("click", function () {
        sliderLiteraturaJuvenil.scrollLeft += 700;
    });

    previoLiteraturaInfantil.addEventListener("click", function () {
        sliderLiteraturaInfantil.scrollLeft -= 700;
    });

    siguienteLiteraturaInfantil.addEventListener("click", function () {
        sliderLiteraturaInfantil.scrollLeft += 700;
    });
}