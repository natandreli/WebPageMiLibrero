//import 'bootstrap';

window.addEventListener("load", main);

function main() {
    const previoLibros = this.document.querySelector("#imgPrevioLibros");
    const siguienteLibros = this.document.querySelector("#imgSiguienteLibros");
    const sliderLibrosLibros = this.document.querySelector("#sliderLibrosLibros");

    const misery = this.document.querySelector("#Misery");
    const despues = this.document.querySelector("#Despues");
    const laCajaDeBotonesDeGwendy = this.document.querySelector("#LaCajaDeBotonesDeGwendy");
    const lasBellasDuermientes = this.document.querySelector("#LasBellasDurmientes");
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
    const miPapaEsUnHombrePajaro = this.document.querySelector("#MiPapaEsUnHombrePajaro");
    const segundasPrimerasImpresiones = this.document.querySelector("#SegundasPrimerasImpresiones");

    const portada = this.document.getElementById("sctInformacionPortada");
    const tituloLibro = this.document.getElementById("sctInformacionTituloLibro");
    const nombreAutor = this.document.getElementById("sctInformacionNombreAutor");
    const genero = this.document.getElementById("sctInformacionGenero");
    const fechaDePublicacion = this.document.getElementById("sctInformacionFechaDePublicacion");
    const sinopsis = this.document.getElementById("sctInformacionSinopsis");

    const inputIdResena = this.document.getElementById("inputIdResena");
    const inputIdLibro = this.document.getElementById("inputIdLibro");
    const inputNombreLibro = this.document.getElementById("inputNombreLibro");
    const inputAutorLibro = this.document.getElementById("inputAutorLibro");
    const inputPuntuacion = this.document.getElementById("inputPuntuacion");
    const inputResena = this.document.getElementById("inputResena");

    inputIdLibro.disabled = true;
    inputNombreLibro.disabled = true;
    inputAutorLibro.disabled = true;
    inputIdLibro.value = "1";
    inputNombreLibro.value = "Misery";
    inputAutorLibro.value = "Stephen King";

    previoLibros.addEventListener("click", function () {
        sliderLibrosLibros.scrollLeft -= 700;
    });

    siguienteLibros.addEventListener("click", function () {
        sliderLibrosLibros.scrollLeft += 700;
    });

    misery.addEventListener("click", function () {
        portada.src = "img/librosTerror/portadaMisery.jpg";
        tituloLibro.innerHTML = "Misery";
        nombreAutor.innerHTML = "Stephen King";
        genero.innerHTML = "G??nero: Terror";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 08 de junio de 1987";
        sinopsis.innerHTML = "Paul Shledon es un escritor que sufre un grave accidente y recobra el conocimiento en una apartada casa en la que vive una misteriosa mujer, corpulenta y de extra??o car??cter. Se trata de una antigua enfermera, involucrada en varias muertes misteriosas ocurridas en diversos hospitales. Fan??tica de un personaje de una serie de libros que ??l ha decido dejar de escribir, est?? dispuesta a hacer todo lo necesario para \"convencerlo\" de que retome la escritura. Esta mujer es capaz de los mayores horrores, y Paul, con las piernas rotas y entre terribles dolores, tendr?? que luchar por su vida.";
        inputIdLibro.value = "1";
        inputNombreLibro.value = "Misery";
        inputAutorLibro.value = "Stephen King";
    });

    despues.addEventListener("click", function () {
        portada.src = "img/librosTerror/portadaDespues.jpg";
        tituloLibro.innerHTML = "Despu??s";
        nombreAutor.innerHTML = "Stephen King";
        genero.innerHTML = "G??nero: Terror";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 02 de marzo de 2021";
        sinopsis.innerHTML = "Jamie Conklin, el ??nico hijo de una madre soltera, solo quiere tener una infancia normal. Sin embargo, naci?? con una habilidad sobrenatural que su madre le insta a mantener en secreto y que le permite ver aquello que nadie puede y enterarse de lo que el resto del mundo ignora. Cuando una inspectora del Departamento de Polic??a de Nueva York le obliga a evitar el ??ltimo atentado de un asesino que amenaza con seguir atacando incluso desde la tumba, Jamie no tardar?? en descubrir que el precio que debe pagar por su poder tal vez es demasiado alto.";
        inputIdLibro.value = "2";
        inputNombreLibro.value = "Despu??s";
        inputAutorLibro.value = "Stephen King";
    });

    laCajaDeBotonesDeGwendy.addEventListener("click", function () {
        portada.src = "img/librosTerror/portadaLaCajaDeBotonesDeGwendy.jfif";
        tituloLibro.innerHTML = "La caja de botones de Gwendy";
        nombreAutor.innerHTML = "Stephen King";
        genero.innerHTML = "G??nero: Terror";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 16 de mayo de 2017";
        sinopsis.innerHTML = "Existen tres v??as para llegar a Castle View desde la ciudad de Castle Rock: por la carretera 117, por Pleasant Road y por las Escaleras de los Suicidios. Cada d??a del verano de 1974, Gwendy Peterson, de doce a??os de edad, toma el camino de las escaleras, que ascienden en zigzag por la ladera rocosa. Pero un d??a, al llegar a lo alto, mientras recupera el aliento con la cara roja y las manos apoyadas sobre las rodillas, un desconocido la llama. All??, en un banco a la sombra, se sienta un hombre con una chaqueta negra y un peque??o sombrero. Llegar?? un d??a en el que Gwendy sufra pesadillas con ese sombrero...";
        inputIdLibro.value = "3";
        inputNombreLibro.value = "La caja de botones de Gwendy";
        inputAutorLibro.value = "Stephen King";
    });

    lasBellasDuermientes.addEventListener("click", function () {
        portada.src = "img/librosTerror/portadaBellasDurmientes.jpg";
        tituloLibro.innerHTML = "Bellas durmientes";
        nombreAutor.innerHTML = "Stephen King";
        genero.innerHTML = "G??nero: Terror";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 26 de septiembre de 2017";
        sinopsis.innerHTML = "En un futuro tan real y cercano que podr??a ser hoy, cuando las mujeres se duermen, brota de su cuerpo una especie de capullo que las a??sla del exterior. Si las despiertan, las molestan o tocan el capullo que las envuelve, reaccionan con una violencia extrema. Y durante el sue??o se evaden a otro mundo. Los hombres, por su parte, quedan abandonados a sus instintos primarios. La misteriosa Evie, sin embargo, es inmune a esta bendici??n o castigo del trastorno del sue??o. ??Se trata de una anomal??a m??dica que hay que estudiar? O ??es un demonio al que hay que liquidar?";
        inputIdLibro.value = "4";
        inputNombreLibro.value = "Bellas durmientes";
        inputAutorLibro.value = "Stephen King";
    });

    frankenstein.addEventListener("click", function () {
        portada.src = "img/librosTerror/portadaFrankenstein.jpg";
        tituloLibro.innerHTML = "Frankenstein";
        nombreAutor.innerHTML = "Mary Shelley";
        genero.innerHTML = "G??nero: Terror";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 01 de enero de 1818";
        sinopsis.innerHTML = "Tras la prematura muerte de su madre, V??ctor Frankenstein se obsesiona con vencer la muerte. Decide entonces estudiar medicina y se interesa por los experimentos del profesor Waldman, que lo inspirar??n para crear un monstruo de apariencia humana a partir de cad??veres.";
        inputIdLibro.value = "5";
        inputNombreLibro.value = "Frankenstein";
        inputAutorLibro.value = "Mary Shelley";
    });

    laCiudadDeLosNictalopes.addEventListener("click", function () {
        portada.src = "img/librosCienciaFiccion/portadaLaCiudadDeLosNictalopes.jpg";
        tituloLibro.innerHTML = "La ciudad de los Nict??lopes";
        nombreAutor.innerHTML = "Tanya Tynj??l??";
        genero.innerHTML = "G??nero: Distop??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 02 de mayo de 2003";
        sinopsis.innerHTML = "Wriixka vive en una ciudad viviente que le provee de todo lo necesario, le soluciona todos sus problemas e incluso toma decisiones por ella. Una ma??ana descubre que le han crecido alas y que su permanencia en la ciudad est?? en peligro. Si no quiere que la expulsen, tiene que ocultarlas hasta encontrar una soluci??n. Sin embargo, mientras m??s crecen??? ";
        inputIdLibro.value = "6";
        inputNombreLibro.value = "La ciudad de los Nict??lopes";
        inputAutorLibro.value = "Tanya Tynj??l??";
    });

    losJuegosDelHambreI.addEventListener("click", function () {
        portada.src = "img/librosCienciaFiccion/portadaLosJuegosDelHambreI.PNG";
        tituloLibro.innerHTML = "Los juegos del hambre";
        nombreAutor.innerHTML = "Suzanne Collins";
        genero.innerHTML = "G??nero: Distop??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 14 de septiembre de 2008";
        sinopsis.innerHTML = "Para demostrar su poder, el r??gimen del estado totalitario de Panem organiza cada a??o \"Los juegos del hambre\". En ellos, 24 j??venes compiten el uno contra el otro en una batalla en la que solo puede haber un superviviente. La joven Katniss se ofrece voluntaria para participar en los juegos para salvar a su hermana. Junto a ella participar?? Peeta, un joven al que ha conocido desde la infancia y que est?? enamorado de ella. Sin embargo, el Capitolio quiere convertirlos en contrincantes.";
        inputIdLibro.value = "7";
        inputNombreLibro.value = "Los juegos del hambre";
        inputAutorLibro.value = "Suzanne Collins";
    });

    losJuegosDelHambreII.addEventListener("click", function () {
        portada.src = "img/librosCienciaFiccion/portadaLosJuegosDelHambreII.PNG";
        tituloLibro.innerHTML = "Los juegos del hambre: En llamas";
        nombreAutor.innerHTML = "Suzanne Collins";
        genero.innerHTML = "G??nero: Distop??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 15 de marzo de 2012";
        sinopsis.innerHTML = "Katniss Everdeen volvi?? a casa a salvo despu??s de ganar la 74 edici??n de los Juegos del Hambre con su compa??ero Peeta. Sin embargo, ahora el Capitolio les obliga a abandonar de nuevo a su familia y amigos para participar en el Tour de la Victoria por todos los distritos. Mientras, el presidente Snow est?? preparando una nueva edici??n de los Juegos, que transformar??n Panem para siempre.";
        inputIdLibro.value = "8";
        inputNombreLibro.value = "Los juegos del hambre: En llamas";
        inputAutorLibro.value = "Suzanne Collins";
    });

    losJuegosDelHambreIII.addEventListener("click", function () {
        portada.src = "img/librosCienciaFiccion/portadaLosJuegosDelHambreIII.PNG";
        tituloLibro.innerHTML = "Los juegos del hambre: Sinsajo";
        nombreAutor.innerHTML = "Suzanne Collins";
        genero.innerHTML = "G??nero: Distop??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 13 de noviembre de 2014";
        sinopsis.innerHTML = "Katniss Everdeen se encuentra en el Distrito 13 despu??s de destrozar los juegos para siempre. Bajo el liderazgo de la comandante Coin y el consejo de sus amigos m??s leales, Katniss extiende sus alas mientras lucha por salvar a Peeta Mellark y a una naci??n alentada por su valent??a.";
        inputIdLibro.value = "9";
        inputNombreLibro.value = "Los juegos del hambre: Sinsajo";
        inputAutorLibro.value = "Suzanne Collins";
    });

    baladaDePajarosCantoresYSerpientes.addEventListener("click", function () {
        portada.src = "img/librosCienciaFiccion/portadaBaladaDePajarosCantoresYSerpientes.png";
        tituloLibro.innerHTML = "Balada de p??jaros cantores y serpientes";
        nombreAutor.innerHTML = "Suzanne Collins";
        genero.innerHTML = "G??nero: Distop??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 19 de mayo de 2020";
        sinopsis.innerHTML = "Es la ma??ana de la cosecha que dar?? inicio a los 10?? Juegos del Hambre anuales. En el Capitolio, Coriolanus Snow, de dieciocho a??os, se prepara para su ??nica oportunidad de alcanzar la gloria como mentor en los Juegos. La antes tan poderosa casa de Snow atraviesa tiempos dif??ciles, su destino depende de la peque??a posibilidad de que Coriolanus sea capaz de embaucar, burlar y maniobrar a sus compa??eros de estudios para guiar al tributo ganador. Las probabilidades est??n en su contra. Se le ha encomendado la humillante tarea de guiar al tributo femenino del Distrito 12, el m??s bajo de los m??s distritos. Sus destinos ahora est??n completamente entrelazados: cada elecci??n que haga Coriolanus podr??a conducir a favor o fracaso, triunfo o ruina. Dentro de la arena, ser?? una lucha a muerte. Fuera de la arena, Coriolanus comienza a sentir su condenado tributo... y debe sopesar su necesidad de seguir las reglas con su deseo de sobrevivir sin importar lo que sea necesario.";
        inputIdLibro.value = "10";
        inputNombreLibro.value = "Balada de p??jaros cantores y serpientes";
        inputAutorLibro.value = "Suzanne Collins";
    });

    siega.addEventListener("click", function () {
        portada.src = "img/librosCienciaFiccion/portadaSiega.jpg";
        tituloLibro.innerHTML = "Siega";
        nombreAutor.innerHTML = "Neal Shusterman";
        genero.innerHTML = "G??nero: Distop??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 22 de noviembre de 2016";
        sinopsis.innerHTML = "Antes, las personas mor??an por causas naturales. Exist??an asesinos invisibles llamados enfermedades, el envejecimiento era irreversible y se produc??an accidentes de los que no se pod??a regresar. Ahora, todo eso ha quedado atr??s y s??lo perdura una verdad muy simple: la gente tiene que morir. Y esa es la tarea de los segadores. Porque en un futuro donde la humanidad controla la muerte, ??qui??n decide cu??ndo y c??mo sembrarla? Citra y Rowan acaban de ser seleccionados como aprendices de segadores. ??Su objetivo? Superar las pruebas de su mentor, sean las que sean. Aunque en el proceso renuncien a todo lo que les hace humanos.";
        inputIdLibro.value = "11";
        inputNombreLibro.value = "Siega";
        inputAutorLibro.value = "Neal Shusterman";
    });

    nimbo.addEventListener("click", function () {
        portada.src = "img/librosCienciaFiccion/portadaNimbo.jfif";
        tituloLibro.innerHTML = "Nimbo";
        nombreAutor.innerHTML = "Neal Shusterman";
        genero.innerHTML = "G??nero: Distop??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 15 de octubre de 2018";
        sinopsis.innerHTML = "No ha pasado m??s que un a??o desde que los caminos de Citra y Rowan se separaron, pero en este tiempo los rumores sobre un justiciero que persigue a los segadores corruptos se han multiplicado. Por todo el continente se oyen susurros de que los culpables acaban siempre devorados por las llamas. La segadora Anastasia criba con compasi??n y desaf??a abiertamente las ideas del nuevo orden. No obstante, cuando su vida se ve amenazada y sus m??todos se cuestionan, queda claro que no todos los miembros de la Guada??a desean el cambio y que la podredumbre crece hasta en los cimientos m??s s??lidos. La muerte debe existir para que la vida tenga sentido. Pero ??cu??l es el precio que cada segador est?? dispuesto a pagar?";
        inputIdLibro.value = "12";
        inputNombreLibro.value = "Nimbo";
        inputAutorLibro.value = "Neal Shusterman";
    });

    trueno.addEventListener("click", function () {
        portada.src = "img/librosCienciaFiccion/portadaTrueno.jpg";
        tituloLibro.innerHTML = "Trueno";
        nombreAutor.innerHTML = "Neal Shusterman";
        genero.innerHTML = "G??nero: Distop??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 20 de julio de 2020";
        sinopsis.innerHTML = "Todo cambi?? hace tres a??os: fue entonces cuando Anastasia y Lucifer desaparecieron; cuando el segador Goddard lleg?? al poder; cuando el Nimbo retir?? la palabra a toda la humanidad, menos a Grayson Tolliver.";
        inputIdLibro.value = "13";
        inputNombreLibro.value = "Trueno";
        inputAutorLibro.value = "Neal Shusterman";
    });

    elQuintoDragon.addEventListener("click", function () {
        portada.src = "img/librosFantasia/portadaElQuintoDragon.jpg";
        tituloLibro.innerHTML = "El quinto drag??n";
        nombreAutor.innerHTML = "Paulina Aguilar Guti??rrez";
        genero.innerHTML = "G??nero: Fantas??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 01 de mayo de 2009";
        sinopsis.innerHTML = "Abi se acostumbra a la abuela, a las calurosas tardes en las islas, a las m??gicas leyendas de los kich??h, hasta que llega Jan y descubre un don fant??stico que le revelar?? su verdadera esencia.";
        inputIdLibro.value = "14";
        inputNombreLibro.value = "El quinto drag??n";
        inputAutorLibro.value = "Paulina Aguilar Guti??rrez";
    });

    harryPotterI.addEventListener("click", function () {
        portada.src = "img/librosFantasia/portadaHarryPotterI.png";
        tituloLibro.innerHTML = "Harry Potter y la piedra filosofal";
        nombreAutor.innerHTML = "J. K. Rowling";
        genero.innerHTML = "G??nero: Fantas??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 26 de junio de 1997";
        sinopsis.innerHTML = "Harry Potter se ha quedado hu??rfano y vive en casa de sus abominables t??os y el insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen d??a recibe una carta que cambiar?? su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el Colegio Hogwarts de Magia. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprender?? encantamientos, trucos fabulosos y t??cticas de defensa contra las malas artes. Se convertir?? en el campe??n escolar de Quidditch, especie de f??tbol a??reo que se juega montado sobre escobas, y har?? un pu??ado de buenos amigos... aunque tambi??n algunos temibles enemigos. Pero, sobre todo, conocer?? los secretos que le permitir??n cumplir su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico com??n y corriente: ??es un verdadero mago!";
        inputIdLibro.value = "15";
        inputNombreLibro.value = "Harry Potter y la piedra filosofal";
        inputAutorLibro.value = "J. K. Rowling";
    });

    harryPotterII.addEventListener("click", function () {
        portada.src = "img/librosFantasia/portadaHarryPotterII.png";
        tituloLibro.innerHTML = "Harry Potter y la c??mara secreta";
        nombreAutor.innerHTML = "J. K. Rowling";
        genero.innerHTML = "G??nero: Fantas??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 02 de julio de 1998";
        sinopsis.innerHTML = "Tras derrotar una vez m??s a lord Voldemort, su siniestro enemigo en Harry Potter y la piedra filosofal, Harry espera impaciente en casa de sus insoportables t??os el inicio del segundo curso del Colegio Hogwarts de Magia. Sin embargo, la espera dura poco, pues un elfo aparece en su habitaci??n y le advierte que una amenaza mortal se cierne sobre la escuela. As?? pues, Harry no se lo piensa dos veces y, acompa??ado de Ron, su mejor amigo, se dirige a Hogwarts en un coche volador. Pero ??puede un aprendiz de mago defender la escuela de los malvados que pretenden destruirla? Sin saber que alguien hab??a abierto la C??mara de los Secretos, dejando escapar una serie de monstruos peligrosos, Harry y sus amigos Ron y Hermione tendr??n que enfrentarse con ara??as gigantes, serpientes encantadas, fantasmas enfurecidos y, sobre todo, con la mism??sima reencarnaci??n de su m??s temible adversario.";
        inputIdLibro.value = "16";
        inputNombreLibro.value = "Harry Potter y la c??mara secreta";
        inputAutorLibro.value = "J. K. Rowling";
    });

    harryPotterIII.addEventListener("click", function () {
        portada.src = "img/librosFantasia/portadaHarryPotterIII.PNG";
        tituloLibro.innerHTML = "Harry Potter y el prisionero de Azkaban";
        nombreAutor.innerHTML = "J. K. Rowling";
        genero.innerHTML = "G??nero: Fantas??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 08 de julio de 1999";
        sinopsis.innerHTML = "Igual que en las dos primeras partes de la serie, Harry aguarda con impaciencia el inicio del tercer curso en el Colegio Hogwarts de Magia. Tras haber cumplido los trece a??os, solo y lejos de sus amigos, Harry se pelea con su bigotuda t??a Marge, a la que convierte en globo, y debe huir en un autob??s m??gico. Mientras tanto, de la prisi??n de Azkaban se ha escapado un terrible villano, Sirius Black, un asesino en serie con poderes m??gicos que fue c??mplice de lord Voldemort y que parece dispuesto a borrar a Harry del mapa. Y por si fuera poco, Harry deber?? enfrentarse tambi??n a unos terribles monstruos, los dementores, seres abominables capaces de robarle la felicidad a los magos y de eliminar todo recuerdo hermoso de aquellos que osan mirarlos. Lo que ninguno de estos malvados personajes sabe es que Harry, con la ayuda de sus fieles amigos Ron y Hermione, es capaz de todo y mucho m??s.";
        inputIdLibro.value = "17";
        inputNombreLibro.value = "Harry Potter y el prisionero de Azkaban";
        inputAutorLibro.value = "J. K. Rowling";
    });

    harryPotterIV.addEventListener("click", function () {
        portada.src = "img/librosFantasia/portadaHarryPotterIV.PNG";
        tituloLibro.innerHTML = "Harry Potter y el c??liz de fuego";
        nombreAutor.innerHTML = "J. K. Rowling";
        genero.innerHTML = "G??nero: Fantas??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 08 de julio de 2000";
        sinopsis.innerHTML = "Tras otro abominable verano con los Dursley, Harry se dispone a iniciar el cuarto curso en Hogwarts, la famosa escuela de magia y hechicer??a. A sus catorce a??os, a Harry le gustar??a ser un joven mago como los dem??s y dedicarse a aprender nuevos sortilegios, encontrarse con sus amigos Ron y Hermione y asistir con ellos a los Mundiales de quidditch. Sin embargo, al llegar al colegio le espera una gran sorpresa que lo obligar?? a enfrentarse a los desaf??os m??s temibles de toda su vida. SI logra superarlos, habr?? demostrado que ya no es un ni??o y que est?? preparado para vivir las nuevas y emocionantes experiencias que el futuro le depara.";
        inputIdLibro.value = "18";
        inputNombreLibro.value = "Harry Potter y el c??liz de fuego";
        inputAutorLibro.value = "J. K. Rowling";
    });

    silberI.addEventListener("click", function () {
        portada.src = "img/librosFantasia/portadaSilberI.jpg";
        tituloLibro.innerHTML = "Silber: El primer libro de los sue??os";
        nombreAutor.innerHTML = "Kerstin Gier";
        genero.innerHTML = "G??nero: Fantas??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 20 de junio de 2013";
        sinopsis.innerHTML = "??ltimamente, los sue??os de Liv Silber son bastante inquietantes. Sobre todo uno de ellos le preocupa much??simo. En ese sue??o se encuentra en un cementerio, de noche, observando a cuatro chicos que llevan a cabo un sombr??o ritual. Los chicos guardan una relaci??n muy real con la vida de Liv, puesto que Grayson y sus tres mejores amigos existen de verdad. Hace poco que Liv asiste al mismo instituto que los cuatro, quienes en realidad parecen bastante simp??ticos. Sin embargo, lo que resulta realmente inquietante -mucho m??s inquietante que el cementerio por la noche- es que los chicos saben cosas sobre ella que durante el d??a jam??s manifiestan... hasta que llega la noche y, con ella, el sue??o. Liv ignora c??mo lo saben, es un misterio absoluto, y ??qui??n se resiste a investigar un buen misterio?";
        inputIdLibro.value = "19";
        inputNombreLibro.value = "Silber: El primer libro de los sue??os";
        inputAutorLibro.value = "Kerstin Gier";
    });

    silberII.addEventListener("click", function () {
        portada.src = "img/librosFantasia/portadaSilberII.jpg";
        tituloLibro.innerHTML = "Silber: El segundo libro de los sue??os";
        nombreAutor.innerHTML = "Kerstin Gier";
        genero.innerHTML = "G??nero: Fantas??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 26 de junio de 2014";
        sinopsis.innerHTML = "Contin??an las aventuras y los intrigantes sue??os de Liv Silber en esta nueva entrega de la trilog??a. Liv est?? conmocionada: Secrecy conoce sus secretos m??s ??ntimos. Pero ??c??mo lo consigue? Y ??qu?? le oculta Henry? ??Qu?? siniestra figura va cometiendo excesos por las noches en los infinitos pasillos del mundo de los sue??os? Y ??por qu?? de repente su hermana Mia se vuelve son??mbula? Las pesadillas, los encuentros misteriosos y las persecuciones incre??bles no ayudan precisamente a disfrutar de un sue??o tranquilo, y encima durante el d??a Liv tambi??n debe lidiar con la acumulaci??n de problemas de una familia patchwork reci??n salida del horno junto con una abuela conspiradora. Y por si todo eso fuera poco, hay personas que a??n tienen cuentas pendientes con ella, tanto de d??a como de noche...";
        inputIdLibro.value = "20";
        inputNombreLibro.value = "Silber: El segundo libro de los sue??os";
        inputAutorLibro.value = "Kerstin Gier";
    });

    silberIII.addEventListener("click", function () {
        portada.src = "img/librosFantasia/portadaSilberIII.jpg";
        tituloLibro.innerHTML = "Silber: El tercer libro de los sue??os";
        nombreAutor.innerHTML = "Kerstin Gier";
        genero.innerHTML = "G??nero: Fantas??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 26 de abril de 2016";
        sinopsis.innerHTML = "Es primavera y la vida de Liv, Henry y Grayson ha vuelto a la normalidad. Liv y Henry vuelven a salir juntos, Jason est?? en Francia, Anabel ha salido del manicomio, y Arthur sigue fuera del grupo de amigos desde que intent?? matar a Liv. Pero un d??a empiezan los problemas. Liv le ha mentido a su novio, Henry, y ahora no sabe c??mo salir de este enga??o. En la escuela, despues de semanas de tranquilidad, vuelven a pasar cosas inquietantes. Los tres amigos, Liv, Grayson y Henry, quieren detener a Arthur lo antes posible, y para ello necesitan la ayuda de Anabel. Pero ella est?? muy desequilibrada, ya no toma sus medicamentos y vuelve a hablar del demonio y de que algo terrible va a pasar el d??a del eclipse solar. ??C??mo se resolver?? todo?";
        inputIdLibro.value = "21";
        inputNombreLibro.value = "Silber: El tercer libro de los sue??os";
        inputAutorLibro.value = "Kerstin Gier";
    });

    elCaballeroDeLaArmaduraOxidada.addEventListener("click", function () {
        portada.src = "img/librosFantasia/portadaElCaballeroDeLaArmaduraOxidada.jpg";
        tituloLibro.innerHTML = "El caballero de la armadura oxidada";
        nombreAutor.innerHTML = "Robert Fisher";
        genero.innerHTML = "G??nero: Fantas??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 01 de mayo de 1987";
        sinopsis.innerHTML = "El protagonista, un caballero deslumbrado por el brillo de su propia armadura, a pesar de ser bueno, generoso y amoroso, no consigue comprender y valorar con profundidad lo que tiene, descuidando \"sin querer\" las cosas y las personas que le rodean. Su armadura se va oxidando hasta que deja de brillar y, cuando se da cuenta, ya no puede quit??rsela. Prisionero de s?? mismo, emprende entonces un viaje al final del cual, gracias a la ayuda de diversos personajes, logra deshacerse de la armadura que le ha imposibilitado abrirse al mundo. Este libro nos ense??a, con un sutil sentido del humor, que debemos liberarnos de las barreras que nos impiden conocernos y amarnos a nosotros mismos para poder ser capaces de dar y recibir amor en abundancia.";
        inputIdLibro.value = "22";
        inputNombreLibro.value = "El caballero de la armadura oxidada";
        inputAutorLibro.value = "Robert Fisher";
    });

    edipoRey.addEventListener("click", function () {
        portada.src = "img/librosFantasia/portadaEdipoRey.jpg";
        tituloLibro.innerHTML = "Edipo Rey";
        nombreAutor.innerHTML = "S??focles";
        genero.innerHTML = "G??nero: Fantas??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 429 a. C.";
        sinopsis.innerHTML = "Cuando Edipo, ??el de los pies hinchados??, hijo del rey de Corinto, descubre que hay un secreto en su origen, abandona el hogar y parte en pos de la verdad. El destino, por boca del or??culo de Delfos, le indica cu??l ser?? su suerte: matar?? a su padre y se desposar?? con su madre. En Tebas hallar?? a la esfinge y la respuesta a su existencia.";
        inputIdLibro.value = "23";
        inputNombreLibro.value = "Edipo Rey";
        inputAutorLibro.value = "S??focles";
    });

    asesinoDeBrujasI.addEventListener("click", function () {
        portada.src = "img/librosFantasia/portadaAsesinoDeBrujasI.png";
        tituloLibro.innerHTML = "Asesino de brujas: La bruja blanca";
        nombreAutor.innerHTML = "Shelby Mahurin";
        genero.innerHTML = "G??nero: Fantas??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 14 de enero de 2020";
        sinopsis.innerHTML = "Unidos como uno para amarse, para honrarse o para arder. Dos a??os atr??s, Louise le Blanc huy?? de su aquelarre y se refugi?? en la ciudad de Cesarine, donde renunci?? a la magia para vivir de lo que pudiera robar. All??, cazan a brujas como Lou. Les temen. Y las queman. Como cazador de la Iglesia, Reid Diggory ha vivido su vida bajo una regla: ??No permitir??s que ninguna bruja viva??. Pero cuando Lou realiza una gran artima??a, tanto ella como Reid se ven obligados a aceptar una situaci??n impensada: el matrimonio. Lou, incapaz de ignorar sus sentimientos que son cada vez m??s fuertes, pero sin poder cambiar qui??n es, Lou debe elegir.";
        inputIdLibro.value = "24";
        inputNombreLibro.value = "Asesino de brujas: La bruja blanca";
        inputAutorLibro.value = "Shelby Mahurin";
    });

    asesinoDeBrujasII.addEventListener("click", function () {
        portada.src = "img/librosFantasia/portadaAsesinoDeBrujasII.png";
        tituloLibro.innerHTML = "Asesino de brujas: Los hijos del rey";
        nombreAutor.innerHTML = "Shelby Mahurin";
        genero.innerHTML = "G??nero: Fantas??a";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 12 de enero de 2021";
        sinopsis.innerHTML = "A donde ella vaya, ??l ir??. Donde ella se quede, ??l se quedar??. Hasta que la muerte los separe. Lou, Reid, Coco y Ansel huyen no solo del aquelarre, sino tambi??n del reino y de la Iglesia. Son fugitivos y no tienen donde ocultarse. Para sobrevivir, necesitan aliados. Y unos muy poderosos. Pero mientras Lou se preocupa cada vez m??s por salvar a sus seres queridos, se adentra en el lado oscuro de la magia. Y el precio a pagar podr??a ser la persona a la que m??s teme perder: Reid. Ellos est??n unidos por un juramento y solo existe una cosa que puede separarlos: la muerte.";
        inputIdLibro.value = "25";
        inputNombreLibro.value = "Asesino de brujas: Los hijos del rey";
        inputAutorLibro.value = "Shelby Mahurin";
    });

    juventudEnExtasis.addEventListener("click", function () {
        portada.src = "img/librosLiteraturaJuvenil/portadaJuventudEnExtasis.PNG";
        tituloLibro.innerHTML = "Juventud en ??xtasis";
        nombreAutor.innerHTML = "Carlos Cuauht??moc S??nchez";
        genero.innerHTML = "G??nero: Literatura juvenil";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 01 de enero de 1995";
        sinopsis.innerHTML = "Es una obra que est?? basada en la historia de la vida de un joven estudiante que tiene que pasar por una enfermedad de transmisi??n sexual para darse cuenta de que su vida sexual la lleva de manera equivocada, en el proceso de su tratamiento m??dico conoce a la que despu??s se convierte en su esposa. En la vida de este muchacho los problemas no solo lo abarcan a ??l si no que tambi??n s?? de cuenta que desde el noviazgo de sus padres comenzaron los problemas, despu??s su separaci??n y por ??ltimo su rencuentro, siendo este ??ltimo el m??s satisfactorio ya que ??l siempre supo que su padre estaba muerto y cuando lo conoce se sorprende tanto. En el transcurso de su tratamiento cambian muchas cosas dentro de ??l, como su concepto del aborto, de la mujer, del amor, la sexualidad, del matrimonio, a conocer el verdadero enamoramiento, a conocer a su madre, a dejar que sus sentimientos afloren sin reprimirlos y una de las cosas m??s importantes que aprende es a conocer lo que verdaderamente es hacer el amor, una frase que estaba demasiado en su vocabulario, pero que nunca antes hab??a sabido lo que esto significaba.";
        inputIdLibro.value = "26";
        inputNombreLibro.value = "Juventud en ??xtasis";
        inputAutorLibro.value = "Carlos Cuauht??moc S??nchez";
    });

    bajoLaMismaEstrella.addEventListener("click", function () {
        portada.src = "img/librosLiteraturaJuvenil/portadaBajoLaMismaEstrella.png";
        tituloLibro.innerHTML = "Bajo la misma estrella";
        nombreAutor.innerHTML = "John Green";
        genero.innerHTML = "G??nero: Literatura juvenil y romance";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 10 de enero de 2012";
        sinopsis.innerHTML = "A Hazel y a Gus les gustar??a tener vidas m??s corrientes. Algunos dir??an que no han nacido con estrella, que su mundo es injusto. Hazel y Gus son solo adolescentes, pero si algo les ha ense??ado el c??ncer que ambos padecen es que no hay tiempo para lamentaciones, porque, nos guste o no, solo existe el hoy y el ahora. Y por ello, con la intenci??n de hacer realidad el mayor deseo de Hazel -conocer a su escritor favorito-, cruzar??n juntos el Atl??ntico para vivir una aventura contrarreloj, tan cat??rtica como desgarradora. Destino: Amsterdam, el lugar donde reside el enigm??tico y malhumorado escritor, la ??nica persona que tal vez pueda ayudarles a ordenar las piezas del enorme puzle del que forman parte...";
        inputIdLibro.value = "27";
        inputNombreLibro.value = "Bajo la misma estrella";
        inputAutorLibro.value = "John Green";
    });

    elTeoremaDeKatherine.addEventListener("click", function () {
        portada.src = "img/librosLiteraturaJuvenil/portadaElTeoremaDeKatherine.jpg";
        tituloLibro.innerHTML = "El teorema de Katherine";
        nombreAutor.innerHTML = "John Green";
        genero.innerHTML = "G??nero: Literatura juvenil y romance";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 21 de septiembre de 2006";
        sinopsis.innerHTML = "Seg??n Colin Singleton existen dos tipos de persona: los que dejan y los que son dejados. ??l, sin duda, pertenece al segundo. Su ??ltima ex, Katherine XIX, no es una reina, sino la Katherine n??mero diecinueve que le ha roto el coraz??n. Para escapar de su mal de amores, y con el prop??sito de hallar un teorema que explique su maldici??n de las Katherines, Colin emprende junto a su amigo Hassan una aventura que le llevar?? a Gutshot, un pueblecito de Tennessee, y a la sospecha de que en la vida la inteligencia no siempre es la mejor compa??era de viaje.";
        inputIdLibro.value = "28";
        inputNombreLibro.value = "El teorema de Katherine";
        inputAutorLibro.value = "John Green";
    });

    buscandoAAlaska.addEventListener("click", function () {
        portada.src = "img/librosLiteraturaJuvenil/portadaBuscandoAAlaska.png";
        tituloLibro.innerHTML = "Buscando a Alaska";
        nombreAutor.innerHTML = "John Green";
        genero.innerHTML = "G??nero: Literatura juvenil y romance";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 03 de marzo de 2005";
        sinopsis.innerHTML = "Antes: Miles ve c??mo su vida transcurre sin emoci??n alguna. Su obsesi??n con memorizar las ??ltimas palabras de personajes ilustres le lleva a querer encontrar su Gran Quiz?? (como dijo Fran??ois Rabelais justo antes de morir). Decide mudarse a Culver Creek, un internado fuera de lo com??n, donde disfrutar?? por primera vez de la libertad y conocer?? a Alaska Young. La preciosa, descarada, fascinante y autodestructiva Alaska arrastrar?? a Miles a su mundo, lo empujar?? hacia el Gran Quiz?? y le robar?? el coraz??n... Despu??s: Nada volver?? a ser lo mismo. Miles, un joven que busca su destino, y Alaska, una chica perdida en el laberinto de la vida, se enfrenta a preguntas intemporales: ??Qu?? significado tiene nuestra existencia? ??Podemos llevar una vida plena tras vivir una tragedia sin resolver?";
        inputIdLibro.value = "29";
        inputNombreLibro.value = "Buscando a Alaska";
        inputAutorLibro.value = "John Green";
    });

    milVecesHastaSiempre.addEventListener("click", function () {
        portada.src = "img/librosLiteraturaJuvenil/portadaMilVecesHastaSiempre.jpg";
        tituloLibro.innerHTML = "Mil veces hasta siempre";
        nombreAutor.innerHTML = "John Green";
        genero.innerHTML = "G??nero: Literatura juvenil y romance";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 10 de octubre de 2017";
        sinopsis.innerHTML = "Aza nunca tuvo intenci??n de investigar el misterio del multimillonario fugitivo Russell Pickett. Pero hay una recompensa de cien mil d??lares en juego y su mejor y m??s intr??pida amiga, Daisy, no est?? dispuesta a dejarla escapar. As??, juntas, recorrer??n la corta distancia y las enormes diferencias que les separan del hijo de Russell Pickett, Davis.Aza lo est?? intentando. Trata de ser una buena hija, una buena amiga, una buena estudiante y, tal vez, incluso una buena detective, mientras vive en la espiral cada vez m??s estrecha de sus propios pensamientos.";
        inputIdLibro.value = "30";
        inputNombreLibro.value = "Mil veces hasta siempre";
        inputAutorLibro.value = "John Green";
    });

    elEntreNosotras.addEventListener("click", function () {
        portada.src = "img/librosLiteraturaJuvenil/portadaElEntreNosotras.jpg";
        tituloLibro.innerHTML = "??l entre nosotras";
        nombreAutor.innerHTML = "Anna Myers";
        genero.innerHTML = "G??nero: Literatura juvenil y romance";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 01 de septiembre de 1998";
        sinopsis.innerHTML = "- El es tan especial - dije y fui a sentarme con ella -. En verdad yo le gusto. De verdad, verdad. Nos hemos divertido mucho solo estando por ahi. Todo con el es de verdad emocionante - mire a Liz y espere una respuesta. -B Guau, es genial - se paro y de nuevo empezo a sacar cosas de su maleta - Entonces los dos son una pareja como las que hay en el colegio?";
        inputIdLibro.value = "31";
        inputNombreLibro.value = "??l entre nosotras";
        inputAutorLibro.value = "Anna Myers";
    });

    lasVentajasDeSerInvisible.addEventListener("click", function () {
        portada.src = "img/librosLiteraturaJuvenil/portadaLasVentajasDeSerInvisible.jpg";
        tituloLibro.innerHTML = "Las ventajas de ser invisible";
        nombreAutor.innerHTML = "Stephen Chbosky";
        genero.innerHTML = "G??nero: Literatura juvenil";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 01 de febrero de 1999";
        sinopsis.innerHTML = "Vivir al margen ofrece, una perspectiva ??nica. Pero siempre llega el momento, de entrar en escena y ver, el mundo desde dentro. Charlie es un chico realmente especial: lee much??simo, no sale con amigos ni con chicas y reflexiona sobre el mundo desde un punto de vista muy particular. Su ingenuidad, su incapacidad para relacionarse normalmente y su extrema sinceridad le crean m??s de un problema, especialmente ahora que su ??nico amigo ha muerto. Conocer a Sam y Patrick, los chicos m??s populares e interesantes del instituto, provocar?? un giro radical en su vida que lo sumergir?? de pleno en la adolescencia. Charlie, un chico ingenuo, mordaz y solitario, acaba de empezar el instituto. Vive con sus padres, su popular hermana y un hermano mayor que est?? a punto de comenzar la universidad. La cosa no pinta demasiado bien el primer d??a de instituto cuando solo consigue hacer un amigo: un alternativo profesor de Lengua interesado en despertar el genio creativo de Charlie. Cuando conoce a la bella Sam y el exc??ntrico Patrick, unos chicos llenos de ganas de exprimir la vida al m??ximo, empieza a comprender lo que es crecer y hacerse adulto. Junto a ellos recorrer?? caminos nuevos e inesperados: descubrir?? m??sica nueva, comenzar?? a salir de fiesta??? e incluso se enamorar?? por primera vez.";
        inputIdLibro.value = "32";
        inputNombreLibro.value = "Las ventajas de ser invisible";
        inputAutorLibro.value = "Stephen Chbosky";
    });

    laLeccionDeAugust.addEventListener("click", function () {
        portada.src = "img/librosLiteraturaJuvenil/portadaLaLeccionDeAugust.jpg";
        tituloLibro.innerHTML = "La lecci??n de August";
        nombreAutor.innerHTML = "Raquel Palacio";
        genero.innerHTML = "G??nero: Literatura juvenil";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 14 de febrero de 2012";
        sinopsis.innerHTML = "Su cara lo hace distinto y ??l solo quiere ser uno m??s. Camina siempre mirando al suelo, la cabeza gacha y el flequillo tratando en vano de esconder su rostro, pero, aun as??, es objeto de miradas furtivas, susurros ahogados y codazos de asombro. August sale poco, su vida transcurre entre las acogedoras paredes de su casa, entre la compa????a de su familia, su perra Daisy y las incre??bles historias de La guerra de las galaxias.Este a??o todo va a cambiar, porque este a??o va a ir, por primera vez, a la escuela. All?? aprender?? la lecci??n m??s importante de su vida, la que no se ense??a en las aulas ni en los libros de texto: crecer en la adversidad, aceptarse tal como es, sonre??r a los d??as grises y saber que, al final, siempre encontrar?? una mano amiga.En un mundo en el que el bullying entre los j??venes se est?? convirtiendo en una verdadera epidemia, los libros de la serie ??Wonder?? ofrecen una nueva visi??n refrescante, necesaria y esperanzadora.Hazte un favor y lee este libro: tu vida ser?? mejor.";
        inputIdLibro.value = "33";
        inputNombreLibro.value = "La lecci??n de August";
        inputAutorLibro.value = "Raquel Palacio";
    });

    carinoCuantoTeOdio.addEventListener("click", function () {
        portada.src = "img/librosLiteraturaJuvenil/portadaCarinoCuantoTeOdio.png";
        tituloLibro.innerHTML = "Cari??o, cu??nto te odio";
        nombreAutor.innerHTML = "Sally Thorne";
        genero.innerHTML = "G??nero: Romance";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 09 de agosto de 2016";
        sinopsis.innerHTML = "Lucy Hutton es la asistente de una editora de la vieja escuela, preocupada por la calidad de los t??tulos que publica. La editora se ve obligada a fusionar su peque??a editorial con una gran editorial comercial, y Lucy se ve obligada a trabajar con Joshua Templeman, el asistente del editor en jefe de la otra editorial, preocupado ??nicamente por las ventas. Lucy y Joshua se convierten inmediatamente en enemigos, pero del odio al amor ya sabemos que hay s??lo un paso?";
        inputIdLibro.value = "34";
        inputNombreLibro.value = "Cari??o, cu??nto te odio";
        inputAutorLibro.value = "Sally Thorne";
    });

    segundasPrimerasImpresiones.addEventListener("click", function () {
        portada.src = "img/librosLiteraturaJuvenil/portadaSegundasPrimerasImpresiones.jpg";
        tituloLibro.innerHTML = "Segundas primeras impresiones";
        nombreAutor.innerHTML = "Sally Thorne";
        genero.innerHTML = "G??nero: Romance";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 13 de abril de 2021";
        sinopsis.innerHTML = "Ruthie Midona lleva a??os trabajando en la administraci??n del complejo Providence, a la entera disposici??n de los adinerados residentes y de las especies raras de tortugas que rondan por el impecable c??sped. Sigue una rutina sin apenas cambios. Hasta que conoce a Teddy Prescott, el hijo del nuevo propietario de Providence, y su nuevo vecino. Alto, tatuado y con el pelo m??s maravilloso del mundo, Teddy est?? ahorrando para hacer realidad su sue??o de abrir un sal??n de tatuajes. Es la definici??n personificada del riesgo, y deja deslumbrada a Ruthie a primera vista? hasta que la confunde con una ancianita. Ruthie descubre la forma perfecta de vengarse de Teddy y su insultante primera impresi??n: las residentes m??s exc??ntricas acaban de poner un anuncio (??s??, otro!) en busca de un ayudante personal a quien atormentar. Las Parloni tienen noventa a??os, son unas peque??as amenazas andantes y ninguno de sus ayudantes ha durado ni una semana. Ruthie reconoce a un pusil??nime en cuanto lo ve y est?? m??s que dispuesta a ofrecerles a Teddy. Para sorpresa de Ruthie, Teddy demuestra ser el empleado definitivo y despliega su encanto por toda la villa, incluido el coraz??n de Ruthie, llen??ndolo con su visi??n chispeante, nunca seria, de la vida. Pero con el futuro de Providence pendiendo de un hilo y los planes de la familia de Teddy amenazando con destruir el peque??o universo de Ruthie, ??estar?? Teddy ah?? cuando m??s lo necesite?";
        inputIdLibro.value = "35";
        inputNombreLibro.value = "Segundas primeras impresiones";
        inputAutorLibro.value = "Sally Thorne";
    });

    memoriasYLadridos.addEventListener("click", function () {
        portada.src = "img/librosLiteraturaInfantil/portadaMemoriasYLadridos.jpg";
        tituloLibro.innerHTML = "Memorias y ladridos";
        nombreAutor.innerHTML = "Sebastian Murillo";
        genero.innerHTML = "G??nero: Literatura infantil";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 2008";
        sinopsis.innerHTML = "Dos perros uno que abandono el mundo terrenal para instalarse en un espacio atemporal y otro que sufre las tragedias y amenazas de la calle. Cruzan sus vidas de una manera inesperada. Un ni??o protagonista y testigo de los hechos opina sobre la vida y la muerte y cuenta sus vivencias.";
        inputIdLibro.value = "36";
        inputNombreLibro.value = "Memorias y ladridos";
        inputAutorLibro.value = "Sebastian Murillo";
    });

    meDicenSaraTomate.addEventListener("click", function () {
        portada.src = "img/librosLiteraturaInfantil/portadaMeDicenSaraTomate.PNG";
        tituloLibro.innerHTML = "Me dicen Sara Tomate";
        nombreAutor.innerHTML = "Jean Ure";
        genero.innerHTML = "G??nero: Literatura infantil";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 01 de enero de 2000";
        sinopsis.innerHTML = "El protagonista se llama Salvatore d???Amato, pero sus rivales le dicen Sara Tomate. ??l est?? descubriendo que le gustan las chicas y se muere de ganas por dar su primer beso. Tambi??n le gusta escribir poes??a. Al final, entender?? que es m??s importante la inteligencia que la apariencia.";
        inputIdLibro.value = "37";
        inputNombreLibro.value = "Me dicen Sara Tomate";
        inputAutorLibro.value = "Jean Ure";
    });

    miPapaEsUnHombrePajaro.addEventListener("click", function () {
        portada.src = "img/librosLiteraturaInfantil/portadaMiPapaEsUnHombrePajaro.jpg";
        tituloLibro.innerHTML = "Mi pap?? es un hombre p??jaro";
        nombreAutor.innerHTML = "David Almond";
        genero.innerHTML = "G??nero: Literatura infantil";
        fechaDePublicacion.innerHTML = "Fecha de publicaci??n: 01 de octubre de 2007";
        sinopsis.innerHTML = "En una ciudad lluviosa al norte de Inglaterra, cosas extra??as est??n pasando. Pap?? est?? armando un par de alas, comiendo moscas y arreglando un nido. La t??a Dorita est?? haciendo empanaditas. El se??or Pop?? est?? recorriendo las calles gritando muy fuerte. Hasta el se??or Menta, el profesor, est?? dando aletazos. Y viendo todo esto est?? Isabelita; quien extra??a a su mam?? y tiene que cuidar de su padre mientras piensa qu?? hermosos son los p??jaros. ??Qu?? est?? detr??s de todo esto? ??La Gran Competencia de P??jaros Humanos, por supuesto! Este libro muestra la importancia de los lazos familiares y del amor entre padres e hijos sobre todas las cosas. Adem??s, hace ??nfasis en la fortaleza que pueden llegar a tener los ni??os y la manera como ellos sobrellevan la p??rdida de un ser querido y logran salir adelante, ayudando a otros en el camino.";
        inputIdLibro.value = "38";
        inputNombreLibro.value = "Mi pap?? es un hombre p??jaro";
        inputAutorLibro.value = "David Almond";
    });
}