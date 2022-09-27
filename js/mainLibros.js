window.addEventListener("load", main);

function main() {
    const previoLibros = this.document.querySelector("#imgPrevioLibros");
    const siguienteLibros = this.document.querySelector("#imgSiguienteLibros");
    const sliderLibrosLibros = this.document.querySelector("#sliderLibrosLibros");

    const misery = this.document.querySelector("#Misery");
    const despues = this.document.querySelector("#Despues");
    const laCajaDeBotonesDeGwendy = this.document.querySelector("#LaCajaDeBotonesDeGwendy");
    const lasBellasDuermientes = this.document.querySelector("#LaBellasDurmientes");
    const frankenstein = this.document.querySelector("#Frankenstein");
    const laCiudadDeLosNictalopes = this.document.querySelector("#LaCiudadDeLosNictalopes");
    const losJuegosDelHambreI = this.document.querySelector("#LosJuegosDelHambreI");
    const losJuegosDelHambreII = this.document.querySelector("#LosJuegosDelHambreII");
    const losJuegosDelHambreIII = this.document.querySelector("#LosJuegosDelHambreIII");
    const baladaDePajarosCantoresYSerpientes = this.document.querySelector("#BaladaDePajarosCantoresYSerpientes");
    const siega = this.document.querySelector("#Siega");
    const nimbo = this.document.querySelector("#Nimbo");
    const trueno = this.document.querySelector("#Trueno");
    const elQuintoDragon = this.document.querySelector("#ElQuintoDragon");
    const harryPotterI = this.document.querySelector("#HarryPotterI");
    const harryPotterII = this.document.querySelector("#HarryPotterII");
    const harryPotterIII = this.document.querySelector("#HarryPotterIII");
    const harryPotterIV = this.document.querySelector("#HarryPotterIV");
    const silberI = this.document.querySelector("#SilberI");
    const silberII = this.document.querySelector("#SilberII");
    const silberIII = this.document.querySelector("#SilberIII");
    const elCaballeroDeLaArmaduraOxidada = this.document.querySelector("#ElCaballeroDeLaArmaduraOxidada");
    const edipoRey = this.document.querySelector("#EdipoRey");
    const asesinoDeBrujasI = this.document.querySelector("#AsesinoDeBrujasI");
    const asesinoDeBrujasII = this.document.querySelector("#AsesinoDeBrujasII");
    const juventudEnExtasis = this.document.querySelector("#JuventudEnExtasis");
    const bajoLaMismaEstrella = this.document.querySelector("#BajoLaMismaEstrella");
    const elTeoremaDeKatherine = this.document.querySelector("#ElTeoremaDeKatherine");
    const buscandoAAlaska = this.document.querySelector("#BuscandoAAlaska");
    const elEntreNosotras = this.document.querySelector("#ElEntreNosotras");
    const lasVentajasDeSerInvisible = this.document.querySelector("#LasVentajasDeSerInvisible");
    const laLeccionDeAugust = this.document.querySelector("#LaLeccionDeAugust");
    const milVecesHastaSiempre = this.document.querySelector("#MilVecesHastaSiempre");
    const carinoCuantoTeOdio = this.document.querySelector("#CarinoCuantoTeOdio");
    const memoriasYLadridos = this.document.querySelector("#MemoriasYLadridos");
    const meDicenSaraTomate = this.document.querySelector("#MeDicenSaraTomate");

    const sctInformacionTitulo = this.document.getElementById("sctInformacionTituloLibros");

    previoLibros.addEventListener("click", function () {
        sliderLibrosLibros.scrollLeft -= 700;
    });

    siguienteLibros.addEventListener("click", function () {
        sliderLibrosLibros.scrollLeft += 700;
    });

    misery.addEventListener("click", function(){
        sctInformacionTitulo.innerHTML = "Misery";
    });

    despues.addEventListener("click", function(){
        sctInformacionTitulo.innerHTML = "Después";
    });

    misery.addEventListener("click", function(){
        sctInformacionTitulo.innerHTML = "Misery";
    });

    despues.addEventListener("click", function(){
        sctInformacionTitulo.innerHTML = "Después";
    });
}