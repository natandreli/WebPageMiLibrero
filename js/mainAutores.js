window.addEventListener("load", main);

function main(){
    const previoAutores = this.document.querySelector("#imgPrevioLibros");
    const siguienteAutores = this.document.querySelector("#imgSiguienteLibros");
    const sliderAutores = this.document.querySelector("#sliderLibrosLibros");

    const stephenKing = this.document.querySelector("#stephenKing");
    const suzanneCollins = this.document.querySelector("#suzanneCollins");
    const nealShusterman = this.document.querySelector("#nealShusterman");
    const JKRowling = this.document.querySelector("#JKRowling");
    const johnGreen = this.document.querySelector("#johnGreen");
    const kerstinGeir = this.document.querySelector("#kerstinGeir");
    const sallyThorne = this.document.querySelector("#sallyThorne");
    const annaMyers = this.document.querySelector("#annaMyers");
    const carlosCuauhtemocSanchez = this.document.querySelector("#carlosCuauhtemocSanchez");
    const davidAlmond = this.document.querySelector("#davidAlmond");
    const jeanUre = this.document.querySelector("#jeanUre");
    const sherbyMahurin = this.document.querySelector("#sherbyMahurin");
    const sofocles = this.document.querySelector("#sofocles");
    const maryShelley = this.document.querySelector("#maryShelley");
    const paulinaAguilarGutierrez = this.document.querySelector("#paulinaAguilarGutierrez");
    const robertFisher = this.document.querySelector("#robertFisher");

    const portada = this.document.querySelector("#sctInformacionPortada");
    const nombre = this.document.querySelector("#sctInformacionTituloAutor");
    const lugarDeNacimiento = this.document.querySelector("#sctInformacionLugarDeNacimiento");
    const fechaDeNacimiento = this.document.querySelector("#sctInformacionFechaDeNacimiento");
    const generoPredominanteEnSusObra = this.document.querySelector("#sctInformacionGeneroPredominanteEnSusObras");
    const puntuacionPromedioPorElLibrero = this.document.querySelector("#sctInformacionPuntuacionPromedioPorElLibrero");
    const puntuacionPromedioDeSusObras = this.document.querySelector("#sctInformacionPuntuacionPromedioDeSusObras");
    const biografia = this.document.querySelector("#sctInformacionBiografia");
    const opinion = this.document.querySelector("#sctInformacionOpinion");

    previoAutores.addEventListener("click", function(){
        sliderAutores.scrollLeft -= 700;
    });

    siguienteAutores.addEventListener("click", function(){
        sliderAutores.scrollLeft += 700;
    });

    stephenKing.addEventListener("click", function(){
        portada.src = "img/autores/stephenKing.jpg";
        nombre.innerHTML = "Stephen King";
    });

    suzanneCollins.addEventListener("click", function(){
        portada.src = "img/autores/suzanneCollins.jpg";
        nombre.innerHTML = "Suzanne Collins";
    });

    nealShusterman.addEventListener("click", function(){
        portada.src = "img/autores/nealShusterman.jpg";
        nombre.innerHTML = "Neal Shusterman";
    });

    JKRowling.addEventListener("click", function(){
        portada.src = "img/autores/jkRowling.PNG";
        nombre.innerHTML = "J. K. Rowling";
    });

    johnGreen.addEventListener("click", function(){
        portada.src = "img/autores/johnGreen.jpg";
        nombre.innerHTML = "John Green";
    });

    kerstinGeir.addEventListener("click", function(){
        portada.src = "img/autores/kerstinGier.jpg";
        nombre.innerHTML = "Kerstin Gier";
    });

    sallyThorne.addEventListener("click", function(){
        portada.src = "img/autores/sallyThorne.jpg";
        nombre.innerHTML = "Sally Thorne";
    });

    annaMyers.addEventListener("click", function(){
        portada.src = "img/autores/annaMyers.jpg";
        nombre.innerHTML = "Anna Myers";
    });

    carlosCuauhtemocSanchez.addEventListener("click", function(){
        portada.src = "img/autores/carlosCuauhtemocSanchez.PNG";
        nombre.innerHTML = "Carlos Cuauhtémoc Sánchez";
    });

    davidAlmond.addEventListener("click", function(){
        portada.src = "img/autores/davidAlmond.jpeg";
        nombre.innerHTML = "David Almond";
    });

    jeanUre.addEventListener("click", function(){
        portada.src = "img/autores/jeanUre.PNG";
        nombre.innerHTML = "Jean Ure";
    });

    sherbyMahurin.addEventListener("click", function(){
        portada.src = "img/autores/sherbyMahurin.jpg";
        nombre.innerHTML = "Sherby Mahurin";
    });

    sofocles.addEventListener("click", function(){
        portada.src = "img/autores/sofocles.jpg";
        nombre.innerHTML = "Sófocles";
    });

    maryShelley.addEventListener("click", function(){
        portada.src = "img/autores/maryShelley.jpg";
        nombre.innerHTML = "Mary Shelley";
    });

    paulinaAguilarGutierrez.addEventListener("click", function(){
        portada.src = "img/autores/paulinaAguilarGutierrez.jpg";
        nombre.innerHTML = "Paulina Aguilar Gutiérrez";
    });

    robertFisher.addEventListener("click", function(){
        portada.src = "img/autores/robertFisher.jpg";
        nombre.innerHTML = "Robert Fisher";
    });
}