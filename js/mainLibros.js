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

    previoLibros.addEventListener("click", function () {
        sliderLibrosLibros.scrollLeft -= 700;
    });

    siguienteLibros.addEventListener("click", function () {
        sliderLibrosLibros.scrollLeft += 700;
    });

    misery.addEventListener("click", function(){
        portada.src = "img/librosTerror/portadaMisery.jpg";
        tituloLibro.innerHTML = "Misery";
        nombreAutor.innerHTML = "Stephen King";
        genero.innerHTML = "Género: Terror";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 08 de junio de 1987";
        sinopsis.innerHTML = "Paul Shledon es un escritor que sufre un grave accidente y recobra el conocimiento en una apartada casa en la que vive una misteriosa mujer, corpulenta y de extraño carácter. Se trata de una antigua enfermera, involucrada en varias muertes misteriosas ocurridas en diversos hospitales. Fanática de un personaje de una serie de libros que él ha decido dejar de escribir, está dispuesta a hacer todo lo necesario para \"convencerlo\" de que retome la escritura. Esta mujer es capaz de los mayores horrores, y Paul, con las piernas rotas y entre terribles dolores, tendrá que luchar por su vida.";
    });

    despues.addEventListener("click", function(){
        portada.src = "img/librosTerror/portadaDespues.jpg";
        tituloLibro.innerHTML = "Después";
        nombreAutor.innerHTML = "Stephen King";
        genero.innerHTML = "Género: Terror";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 02 de marzo de 2021";
        sinopsis.innerHTML = "Jamie Conklin, el único hijo de una madre soltera, solo quiere tener una infancia normal. Sin embargo, nació con una habilidad sobrenatural que su madre le insta a mantener en secreto y que le permite ver aquello que nadie puede y enterarse de lo que el resto del mundo ignora. Cuando una inspectora del Departamento de Policía de Nueva York le obliga a evitar el último atentado de un asesino que amenaza con seguir atacando incluso desde la tumba, Jamie no tardará en descubrir que el precio que debe pagar por su poder tal vez es demasiado alto.";
    });

    laCajaDeBotonesDeGwendy.addEventListener("click", function(){
        portada.src = "img/librosTerror/portadaLaCajaDeBotonesDeGwendy.jfif";
        tituloLibro.innerHTML = "La caja de botones de Gwendy";
        nombreAutor.innerHTML = "Stephen King";
        genero.innerHTML = "Género: Terror";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 16 de mayo de 2017";
        sinopsis.innerHTML = "Existen tres vías para llegar a Castle View desde la ciudad de Castle Rock: por la carretera 117, por Pleasant Road y por las Escaleras de los Suicidios. Cada día del verano de 1974, Gwendy Peterson, de doce años de edad, toma el camino de las escaleras, que ascienden en zigzag por la ladera rocosa. Pero un día, al llegar a lo alto, mientras recupera el aliento con la cara roja y las manos apoyadas sobre las rodillas, un desconocido la llama. Allí, en un banco a la sombra, se sienta un hombre con una chaqueta negra y un pequeño sombrero. Llegará un día en el que Gwendy sufra pesadillas con ese sombrero...";
    });

    lasBellasDuermientes.addEventListener("click", function(){
        portada.src = "img/librosTerror/portadaBellasDurmientes.jpg";
        tituloLibro.innerHTML = "Bellas durmientes";
        nombreAutor.innerHTML = "Stephen King";
        genero.innerHTML = "Género: Terror";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 26 de septiembre de 2017";
        sinopsis.innerHTML = "En un futuro tan real y cercano que podría ser hoy, cuando las mujeres se duermen, brota de su cuerpo una especie de capullo que las aísla del exterior. Si las despiertan, las molestan o tocan el capullo que las envuelve, reaccionan con una violencia extrema. Y durante el sueño se evaden a otro mundo. Los hombres, por su parte, quedan abandonados a sus instintos primarios. La misteriosa Evie, sin embargo, es inmune a esta bendición o castigo del trastorno del sueño. ¿Se trata de una anomalía médica que hay que estudiar? O ¿es un demonio al que hay que liquidar?";
    });

    frankenstein.addEventListener("click", function(){
        portada.src = "img/librosTerror/portadaFrankenstein.jpg";
        tituloLibro.innerHTML = "Frankenstein";
        nombreAutor.innerHTML = "Mary Shelley";
        genero.innerHTML = "Género: Terror";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 01 de enero de 1818";
        sinopsis.innerHTML = "Tras la prematura muerte de su madre, Víctor Frankenstein se obsesiona con vencer la muerte. Decide entonces estudiar medicina y se interesa por los experimentos del profesor Waldman, que lo inspirarán para crear un monstruo de apariencia humana a partir de cadáveres.";
    });

    laCiudadDeLosNictalopes.addEventListener("click", function(){
        portada.src = "img/librosCienciaFiccion/portadaLaCiudadDeLosNictalopes.jpg";
        tituloLibro.innerHTML = "La ciudad de los Nictálopes";
        nombreAutor.innerHTML = "Tanya Tynjälä";
        genero.innerHTML = "Género: Distopía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 02 de mayo de 2003";
        sinopsis.innerHTML = "Wriixka vive en una ciudad viviente que le provee de todo lo necesario, le soluciona todos sus problemas e incluso toma decisiones por ella. Una mañana descubre que le han crecido alas y que su permanencia en la ciudad está en peligro. Si no quiere que la expulsen, tiene que ocultarlas hasta encontrar una solución. Sin embargo, mientras más crecen… ";
    });

    losJuegosDelHambreI.addEventListener("click", function(){
        portada.src = "img/librosCienciaFiccion/portadaLosJuegosDelHambreI.PNG";
        tituloLibro.innerHTML = "Los juegos del hambre";
        nombreAutor.innerHTML = "Suzanne Collins";
        genero.innerHTML = "Género: Distopía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 14 de septiembre de 2008";
        sinopsis.innerHTML = "Para demostrar su poder, el régimen del estado totalitario de Panem organiza cada año \"Los juegos del hambre\". En ellos, 24 jóvenes compiten el uno contra el otro en una batalla en la que solo puede haber un superviviente. La joven Katniss se ofrece voluntaria para participar en los juegos para salvar a su hermana. Junto a ella participará Peeta, un joven al que ha conocido desde la infancia y que está enamorado de ella. Sin embargo, el Capitolio quiere convertirlos en contrincantes.";
    });

    losJuegosDelHambreII.addEventListener("click", function(){
        portada.src = "img/librosCienciaFiccion/portadaLosJuegosDelHambreII.PNG";
        tituloLibro.innerHTML = "Los juegos del hambre: En llamas";
        nombreAutor.innerHTML = "Suzanne Collins";
        genero.innerHTML = "Género: Distopía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 15 de marzo de 2012";
        sinopsis.innerHTML = "Katniss Everdeen volvió a casa a salvo después de ganar la 74 edición de los Juegos del Hambre con su compañero Peeta. Sin embargo, ahora el Capitolio les obliga a abandonar de nuevo a su familia y amigos para participar en el Tour de la Victoria por todos los distritos. Mientras, el presidente Snow está preparando una nueva edición de los Juegos, que transformarán Panem para siempre.";
    });

    losJuegosDelHambreIII.addEventListener("click", function(){
        portada.src = "img/librosCienciaFiccion/portadaLosJuegosDelHambreIII.PNG";
        tituloLibro.innerHTML = "Los juegos del hambre: Sinsajo";
        nombreAutor.innerHTML = "Suzanne Collins";
        genero.innerHTML = "Género: Distopía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 13 de noviembre de 2014";
        sinopsis.innerHTML = "Katniss Everdeen se encuentra en el Distrito 13 después de destrozar los juegos para siempre. Bajo el liderazgo de la comandante Coin y el consejo de sus amigos más leales, Katniss extiende sus alas mientras lucha por salvar a Peeta Mellark y a una nación alentada por su valentía.";
    });

    baladaDePajarosCantoresYSerpientes.addEventListener("click", function(){
        portada.src = "img/librosCienciaFiccion/portadaBaladaDePajarosCantoresYSerpientes.png";
        tituloLibro.innerHTML = "Balada de pájaros cantores y serpientes";
        nombreAutor.innerHTML = "Suzanne Collins";
        genero.innerHTML = "Género: Distopía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 19 de mayo de 2020";
        sinopsis.innerHTML = "Es la mañana de la cosecha que dará inicio a los 10° Juegos del Hambre anuales. En el Capitolio, Coriolanus Snow, de dieciocho años, se prepara para su única oportunidad de alcanzar la gloria como mentor en los Juegos. La antes tan poderosa casa de Snow atraviesa tiempos difíciles, su destino depende de la pequeña posibilidad de que Coriolanus sea capaz de embaucar, burlar y maniobrar a sus compañeros de estudios para guiar al tributo ganador. Las probabilidades están en su contra. Se le ha encomendado la humillante tarea de guiar al tributo femenino del Distrito 12, el más bajo de los más distritos. Sus destinos ahora están completamente entrelazados: cada elección que haga Coriolanus podría conducir a favor o fracaso, triunfo o ruina. Dentro de la arena, será una lucha a muerte. Fuera de la arena, Coriolanus comienza a sentir su condenado tributo... y debe sopesar su necesidad de seguir las reglas con su deseo de sobrevivir sin importar lo que sea necesario.";
    });

    siega.addEventListener("click", function(){
        portada.src = "img/librosCienciaFiccion/portadaSiega.jpg";
        tituloLibro.innerHTML = "Siega";
        nombreAutor.innerHTML = "Neal Shusterman";
        genero.innerHTML = "Género: Distopía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 22 de noviembre de 2016";
        sinopsis.innerHTML = "Antes, las personas morían por causas naturales. Existían asesinos invisibles llamados enfermedades, el envejecimiento era irreversible y se producían accidentes de los que no se podía regresar. Ahora, todo eso ha quedado atrás y sólo perdura una verdad muy simple: la gente tiene que morir. Y esa es la tarea de los segadores. Porque en un futuro donde la humanidad controla la muerte, ¿quién decide cuándo y cómo sembrarla? Citra y Rowan acaban de ser seleccionados como aprendices de segadores. ¿Su objetivo? Superar las pruebas de su mentor, sean las que sean. Aunque en el proceso renuncien a todo lo que les hace humanos.";
    });

    nimbo.addEventListener("click", function(){
        portada.src = "img/librosCienciaFiccion/portadaNimbo.jfif";
        tituloLibro.innerHTML = "Nimbo";
        nombreAutor.innerHTML = "Neal Shusterman";
        genero.innerHTML = "Género: Distopía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 15 de octubre de 2018";
        sinopsis.innerHTML = "No ha pasado más que un año desde que los caminos de Citra y Rowan se separaron, pero en este tiempo los rumores sobre un justiciero que persigue a los segadores corruptos se han multiplicado. Por todo el continente se oyen susurros de que los culpables acaban siempre devorados por las llamas. La segadora Anastasia criba con compasión y desafía abiertamente las ideas del nuevo orden. No obstante, cuando su vida se ve amenazada y sus métodos se cuestionan, queda claro que no todos los miembros de la Guadaña desean el cambio y que la podredumbre crece hasta en los cimientos más sólidos. La muerte debe existir para que la vida tenga sentido. Pero ¿cuál es el precio que cada segador está dispuesto a pagar?";
    });

    trueno.addEventListener("click", function(){
        portada.src = "img/librosCienciaFiccion/portadaTrueno.jpg";
        tituloLibro.innerHTML = "Trueno";
        nombreAutor.innerHTML = "Neal Shusterman";
        genero.innerHTML = "Género: Distopía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 20 de julio de 2020";
        sinopsis.innerHTML = "Todo cambió hace tres años: fue entonces cuando Anastasia y Lucifer desaparecieron; cuando el segador Goddard llegó al poder; cuando el Nimbo retiró la palabra a toda la humanidad, menos a Grayson Tolliver.";
    });

    elQuintoDragon.addEventListener("click", function(){
        portada.src = "img/librosFantasia/portadaElQuintoDragon.jpg";
        tituloLibro.innerHTML = "El quinto dragón";
        nombreAutor.innerHTML = "Paulina Aguilar Gutiérrez";
        genero.innerHTML = "Género: Fantasía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 01 de mayo de 2009";
        sinopsis.innerHTML = "Abi se acostumbra a la abuela, a las calurosas tardes en las islas, a las mágicas leyendas de los kichéh, hasta que llega Jan y descubre un don fantástico que le revelará su verdadera esencia.";
    });

    harryPotterI.addEventListener("click", function(){
        portada.src = "img/librosFantasia/portadaHarryPotterI.png";
        tituloLibro.innerHTML = "Harry Potter y la piedra filosofal";
        nombreAutor.innerHTML = "J. K. Rowling";
        genero.innerHTML = "Género: Fantasía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 26 de junio de 1997";
        sinopsis.innerHTML = "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y el insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el Colegio Hogwarts de Magia. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de Quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero, sobre todo, conocerá los secretos que le permitirán cumplir su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente: ¡es un verdadero mago!";
    });

    harryPotterII.addEventListener("click", function(){
        portada.src = "img/librosFantasia/portadaHarryPotterII.png";
        tituloLibro.innerHTML = "Harry Potter y la cámara secreta";
        nombreAutor.innerHTML = "J. K. Rowling";
        genero.innerHTML = "Género: Fantasía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 02 de julio de 1998";
        sinopsis.innerHTML = "Tras derrotar una vez más a lord Voldemort, su siniestro enemigo en Harry Potter y la piedra filosofal, Harry espera impaciente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia. Sin embargo, la espera dura poco, pues un elfo aparece en su habitación y le advierte que una amenaza mortal se cierne sobre la escuela. Así pues, Harry no se lo piensa dos veces y, acompañado de Ron, su mejor amigo, se dirige a Hogwarts en un coche volador. Pero ¿puede un aprendiz de mago defender la escuela de los malvados que pretenden destruirla? Sin saber que alguien había abierto la Cámara de los Secretos, dejando escapar una serie de monstruos peligrosos, Harry y sus amigos Ron y Hermione tendrán que enfrentarse con arañas gigantes, serpientes encantadas, fantasmas enfurecidos y, sobre todo, con la mismísima reencarnación de su más temible adversario.";
    });

    harryPotterIII.addEventListener("click", function(){
        portada.src = "img/librosFantasia/portadaHarryPotterIII.PNG";
        tituloLibro.innerHTML = "Harry Potter y el prisionero de Azkaban";
        nombreAutor.innerHTML = "J. K. Rowling";
        genero.innerHTML = "Género: Fantasía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 08 de julio de 1999";
        sinopsis.innerHTML = "Igual que en las dos primeras partes de la serie, Harry aguarda con impaciencia el inicio del tercer curso en el Colegio Hogwarts de Magia. Tras haber cumplido los trece años, solo y lejos de sus amigos, Harry se pelea con su bigotuda tía Marge, a la que convierte en globo, y debe huir en un autobús mágico. Mientras tanto, de la prisión de Azkaban se ha escapado un terrible villano, Sirius Black, un asesino en serie con poderes mágicos que fue cómplice de lord Voldemort y que parece dispuesto a borrar a Harry del mapa. Y por si fuera poco, Harry deberá enfrentarse también a unos terribles monstruos, los dementores, seres abominables capaces de robarle la felicidad a los magos y de eliminar todo recuerdo hermoso de aquellos que osan mirarlos. Lo que ninguno de estos malvados personajes sabe es que Harry, con la ayuda de sus fieles amigos Ron y Hermione, es capaz de todo y mucho más.";
    });

    harryPotterIV.addEventListener("click", function(){
        portada.src = "img/librosFantasia/portadaHarryPotterIV.PNG";
        tituloLibro.innerHTML = "Harry Potter y el cáliz de fuego";
        nombreAutor.innerHTML = "J. K. Rowling";
        genero.innerHTML = "Género: Fantasía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 08 de julio de 2000";
        sinopsis.innerHTML = "Tras otro abominable verano con los Dursley, Harry se dispone a iniciar el cuarto curso en Hogwarts, la famosa escuela de magia y hechicería. A sus catorce años, a Harry le gustaría ser un joven mago como los demás y dedicarse a aprender nuevos sortilegios, encontrarse con sus amigos Ron y Hermione y asistir con ellos a los Mundiales de quidditch. Sin embargo, al llegar al colegio le espera una gran sorpresa que lo obligará a enfrentarse a los desafíos más temibles de toda su vida. SI logra superarlos, habrá demostrado que ya no es un niño y que está preparado para vivir las nuevas y emocionantes experiencias que el futuro le depara.";
    });

    silberI.addEventListener("click", function(){
        portada.src = "img/librosFantasia/portadaSilberI.jpg";
        tituloLibro.innerHTML = "Silber: El primer libro de los sueños";
        nombreAutor.innerHTML = "Kerstin Gier";
        genero.innerHTML = "Género: Fantasía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 20 de junio de 2013";
        sinopsis.innerHTML = "Últimamente, los sueños de Liv Silber son bastante inquietantes. Sobre todo uno de ellos le preocupa muchísimo. En ese sueño se encuentra en un cementerio, de noche, observando a cuatro chicos que llevan a cabo un sombrío ritual. Los chicos guardan una relación muy real con la vida de Liv, puesto que Grayson y sus tres mejores amigos existen de verdad. Hace poco que Liv asiste al mismo instituto que los cuatro, quienes en realidad parecen bastante simpáticos. Sin embargo, lo que resulta realmente inquietante -mucho más inquietante que el cementerio por la noche- es que los chicos saben cosas sobre ella que durante el día jamás manifiestan... hasta que llega la noche y, con ella, el sueño. Liv ignora cómo lo saben, es un misterio absoluto, y ¿quién se resiste a investigar un buen misterio?";
    });

    silberII.addEventListener("click", function(){
        portada.src = "img/librosFantasia/portadaSilberII.jpg";
        tituloLibro.innerHTML = "Silber: El segundo libro de los sueños";
        nombreAutor.innerHTML = "Kerstin Gier";
        genero.innerHTML = "Género: Fantasía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 26 de junio de 2014";
        sinopsis.innerHTML = "Continúan las aventuras y los intrigantes sueños de Liv Silber en esta nueva entrega de la trilogía. Liv está conmocionada: Secrecy conoce sus secretos más íntimos. Pero ¿cómo lo consigue? Y ¿qué le oculta Henry? ¿Qué siniestra figura va cometiendo excesos por las noches en los infinitos pasillos del mundo de los sueños? Y ¿por qué de repente su hermana Mia se vuelve sonámbula? Las pesadillas, los encuentros misteriosos y las persecuciones increíbles no ayudan precisamente a disfrutar de un sueño tranquilo, y encima durante el día Liv también debe lidiar con la acumulación de problemas de una familia patchwork recién salida del horno junto con una abuela conspiradora. Y por si todo eso fuera poco, hay personas que aún tienen cuentas pendientes con ella, tanto de día como de noche...";
    });

    silberIII.addEventListener("click", function(){
        portada.src = "img/librosFantasia/portadaSilberIII.jpg";
        tituloLibro.innerHTML = "Silber: El tercer libro de los sueños";
        nombreAutor.innerHTML = "Kerstin Gier";
        genero.innerHTML = "Género: Fantasía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 26 de abril de 2016";
        sinopsis.innerHTML = "Es primavera y la vida de Liv, Henry y Grayson ha vuelto a la normalidad. Liv y Henry vuelven a salir juntos, Jason está en Francia, Anabel ha salido del manicomio, y Arthur sigue fuera del grupo de amigos desde que intentó matar a Liv. Pero un día empiezan los problemas. Liv le ha mentido a su novio, Henry, y ahora no sabe cómo salir de este engaño. En la escuela, despues de semanas de tranquilidad, vuelven a pasar cosas inquietantes. Los tres amigos, Liv, Grayson y Henry, quieren detener a Arthur lo antes posible, y para ello necesitan la ayuda de Anabel. Pero ella está muy desequilibrada, ya no toma sus medicamentos y vuelve a hablar del demonio y de que algo terrible va a pasar el día del eclipse solar. ¿Cómo se resolverá todo?";
    });

    elCaballeroDeLaArmaduraOxidada.addEventListener("click", function(){
        portada.src = "img/librosFantasia/portadaElCaballeroDeLaArmaduraOxidada.jpg";
        tituloLibro.innerHTML = "El caballero de la armadura oxidada";
        nombreAutor.innerHTML = "Robert Fisher";
        genero.innerHTML = "Género: Fantasía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 01 de mayo de 1987";
        sinopsis.innerHTML = "El protagonista, un caballero deslumbrado por el brillo de su propia armadura, a pesar de ser bueno, generoso y amoroso, no consigue comprender y valorar con profundidad lo que tiene, descuidando \"sin querer\" las cosas y las personas que le rodean. Su armadura se va oxidando hasta que deja de brillar y, cuando se da cuenta, ya no puede quitársela. Prisionero de sí mismo, emprende entonces un viaje al final del cual, gracias a la ayuda de diversos personajes, logra deshacerse de la armadura que le ha imposibilitado abrirse al mundo. Este libro nos enseña, con un sutil sentido del humor, que debemos liberarnos de las barreras que nos impiden conocernos y amarnos a nosotros mismos para poder ser capaces de dar y recibir amor en abundancia.";
    });

    edipoRey.addEventListener("click", function(){
        portada.src = "img/librosFantasia/portadaEdipoRey.jpg";
        tituloLibro.innerHTML = "Edipo Rey";
        nombreAutor.innerHTML = "Sófocles";
        genero.innerHTML = "Género: Fantasía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 429 a. C.";
        sinopsis.innerHTML = "Cuando Edipo, «el de los pies hinchados», hijo del rey de Corinto, descubre que hay un secreto en su origen, abandona el hogar y parte en pos de la verdad. El destino, por boca del oráculo de Delfos, le indica cuál será su suerte: matará a su padre y se desposará con su madre. En Tebas hallará a la esfinge y la respuesta a su existencia.";
    });

    asesinoDeBrujasI.addEventListener("click", function(){
        portada.src = "img/librosFantasia/portadaAsesinoDeBrujasI.png";
        tituloLibro.innerHTML = "Asesino de brujas: La bruja blanca";
        nombreAutor.innerHTML = "Shelby Mahurin";
        genero.innerHTML = "Género: Fantasía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 14 de enero de 2020";
        sinopsis.innerHTML = "Unidos como uno para amarse, para honrarse o para arder. Dos años atrás, Louise le Blanc huyó de su aquelarre y se refugió en la ciudad de Cesarine, donde renunció a la magia para vivir de lo que pudiera robar. Allí, cazan a brujas como Lou. Les temen. Y las queman. Como cazador de la Iglesia, Reid Diggory ha vivido su vida bajo una regla: «No permitirás que ninguna bruja viva». Pero cuando Lou realiza una gran artimaña, tanto ella como Reid se ven obligados a aceptar una situación impensada: el matrimonio. Lou, incapaz de ignorar sus sentimientos que son cada vez más fuertes, pero sin poder cambiar quién es, Lou debe elegir.";
    });

    asesinoDeBrujasII.addEventListener("click", function(){
        portada.src = "img/librosFantasia/portadaAsesinoDeBrujasII.png";
        tituloLibro.innerHTML = "Asesino de brujas: Los hijos del rey";
        nombreAutor.innerHTML = "Shelby Mahurin";
        genero.innerHTML = "Género: Fantasía";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 12 de enero de 2021";
        sinopsis.innerHTML = "A donde ella vaya, él irá. Donde ella se quede, él se quedará. Hasta que la muerte los separe. Lou, Reid, Coco y Ansel huyen no solo del aquelarre, sino también del reino y de la Iglesia. Son fugitivos y no tienen donde ocultarse. Para sobrevivir, necesitan aliados. Y unos muy poderosos. Pero mientras Lou se preocupa cada vez más por salvar a sus seres queridos, se adentra en el lado oscuro de la magia. Y el precio a pagar podría ser la persona a la que más teme perder: Reid. Ellos están unidos por un juramento y solo existe una cosa que puede separarlos: la muerte.";
    });

    juventudEnExtasis.addEventListener("click", function(){
        portada.src = "img/librosLiteraturaJuvenil/portadaJuventudEnExtasis.PNG";
        tituloLibro.innerHTML = "Juventud en éxtasis";
        nombreAutor.innerHTML = "Carlos Cuauhtémoc Sánchez";
        genero.innerHTML = "Género: Literatura juvenil";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 01 de enero de 1995";
        sinopsis.innerHTML = "Es una obra que está basada en la historia de la vida de un joven estudiante que tiene que pasar por una enfermedad de transmisión sexual para darse cuenta de que su vida sexual la lleva de manera equivocada, en el proceso de su tratamiento médico conoce a la que después se convierte en su esposa. En la vida de este muchacho los problemas no solo lo abarcan a él si no que también sé de cuenta que desde el noviazgo de sus padres comenzaron los problemas, después su separación y por último su rencuentro, siendo este último el más satisfactorio ya que él siempre supo que su padre estaba muerto y cuando lo conoce se sorprende tanto. En el transcurso de su tratamiento cambian muchas cosas dentro de él, como su concepto del aborto, de la mujer, del amor, la sexualidad, del matrimonio, a conocer el verdadero enamoramiento, a conocer a su madre, a dejar que sus sentimientos afloren sin reprimirlos y una de las cosas más importantes que aprende es a conocer lo que verdaderamente es hacer el amor, una frase que estaba demasiado en su vocabulario, pero que nunca antes había sabido lo que esto significaba.";
    });

    bajoLaMismaEstrella.addEventListener("click", function(){
        portada.src = "img/librosLiteraturaJuvenil/portadaBajoLaMismaEstrella.png";
        tituloLibro.innerHTML = "Bajo la misma estrella";
        nombreAutor.innerHTML = "John Green";
        genero.innerHTML = "Género: Literatura juvenil y romance";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 10 de enero de 2012";
        sinopsis.innerHTML = "A Hazel y a Gus les gustaría tener vidas más corrientes. Algunos dirían que no han nacido con estrella, que su mundo es injusto. Hazel y Gus son solo adolescentes, pero si algo les ha enseñado el cáncer que ambos padecen es que no hay tiempo para lamentaciones, porque, nos guste o no, solo existe el hoy y el ahora. Y por ello, con la intención de hacer realidad el mayor deseo de Hazel -conocer a su escritor favorito-, cruzarán juntos el Atlántico para vivir una aventura contrarreloj, tan catártica como desgarradora. Destino: Amsterdam, el lugar donde reside el enigmático y malhumorado escritor, la única persona que tal vez pueda ayudarles a ordenar las piezas del enorme puzle del que forman parte...";
    });

    elTeoremaDeKatherine.addEventListener("click", function(){
        portada.src = "img/librosLiteraturaJuvenil/portadaElTeoremaDeKatherine.jpg";
        tituloLibro.innerHTML = "El teorema de Katherine";
        nombreAutor.innerHTML = "John Green";
        genero.innerHTML = "Género: Literatura juvenil y romance";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 21 de septiembre de 2006";
        sinopsis.innerHTML = "Según Colin Singleton existen dos tipos de persona: los que dejan y los que son dejados. Él, sin duda, pertenece al segundo. Su última ex, Katherine XIX, no es una reina, sino la Katherine número diecinueve que le ha roto el corazón. Para escapar de su mal de amores, y con el propósito de hallar un teorema que explique su maldición de las Katherines, Colin emprende junto a su amigo Hassan una aventura que le llevará a Gutshot, un pueblecito de Tennessee, y a la sospecha de que en la vida la inteligencia no siempre es la mejor compañera de viaje.";
    });

    buscandoAAlaska.addEventListener("click", function(){
        portada.src = "img/librosLiteraturaJuvenil/portadaBuscandoAAlaska.png";
        tituloLibro.innerHTML = "Buscando a Alaska";
        nombreAutor.innerHTML = "John Green";
        genero.innerHTML = "Género: Literatura juvenil y romance";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 03 de marzo de 2005";
        sinopsis.innerHTML = "Antes: Miles ve cómo su vida transcurre sin emoción alguna. Su obsesión con memorizar las últimas palabras de personajes ilustres le lleva a querer encontrar su Gran Quizá (como dijo François Rabelais justo antes de morir). Decide mudarse a Culver Creek, un internado fuera de lo común, donde disfrutará por primera vez de la libertad y conocerá a Alaska Young. La preciosa, descarada, fascinante y autodestructiva Alaska arrastrará a Miles a su mundo, lo empujará hacia el Gran Quizá y le robará el corazón... Después: Nada volverá a ser lo mismo. Miles, un joven que busca su destino, y Alaska, una chica perdida en el laberinto de la vida, se enfrenta a preguntas intemporales: ¿Qué significado tiene nuestra existencia? ¿Podemos llevar una vida plena tras vivir una tragedia sin resolver?";
    });

    elEntreNosotras.addEventListener("click", function(){
        portada.src = "img/librosLiteraturaJuvenil/portadaElEntreNosotras.jpg";
        tituloLibro.innerHTML = "Él entre nosotras";
        nombreAutor.innerHTML = "Anna Myers";
        genero.innerHTML = "Género: Literatura juvenil y romance";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 01 de septiembre de 1998";
        sinopsis.innerHTML = "- El es tan especial - dije y fui a sentarme con ella -. En verdad yo le gusto. De verdad, verdad. Nos hemos divertido mucho solo estando por ahi. Todo con el es de verdad emocionante - mire a Liz y espere una respuesta. -B Guau, es genial - se paro y de nuevo empezo a sacar cosas de su maleta - Entonces los dos son una pareja como las que hay en el colegio?";
    });

    lasVentajasDeSerInvisible.addEventListener("click", function(){
        portada.src = "img/librosLiteraturaJuvenil/portadaLasVentajasDeSerInvisible.jpg";
        tituloLibro.innerHTML = "Las ventajas de ser invisible";
        nombreAutor.innerHTML = "Stephen Chbosky";
        genero.innerHTML = "Género: Literatura juvenil";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 01 de febrero de 1999";
        sinopsis.innerHTML = "Vivir al margen ofrece, una perspectiva única. Pero siempre llega el momento, de entrar en escena y ver, el mundo desde dentro. Charlie es un chico realmente especial: lee muchísimo, no sale con amigos ni con chicas y reflexiona sobre el mundo desde un punto de vista muy particular. Su ingenuidad, su incapacidad para relacionarse normalmente y su extrema sinceridad le crean más de un problema, especialmente ahora que su único amigo ha muerto. Conocer a Sam y Patrick, los chicos más populares e interesantes del instituto, provocará un giro radical en su vida que lo sumergirá de pleno en la adolescencia. Charlie, un chico ingenuo, mordaz y solitario, acaba de empezar el instituto. Vive con sus padres, su popular hermana y un hermano mayor que está a punto de comenzar la universidad. La cosa no pinta demasiado bien el primer día de instituto cuando solo consigue hacer un amigo: un alternativo profesor de Lengua interesado en despertar el genio creativo de Charlie. Cuando conoce a la bella Sam y el excéntrico Patrick, unos chicos llenos de ganas de exprimir la vida al máximo, empieza a comprender lo que es crecer y hacerse adulto. Junto a ellos recorrerá caminos nuevos e inesperados: descubrirá música nueva, comenzará a salir de fiesta… e incluso se enamorará por primera vez.";
    });

    laLeccionDeAugust.addEventListener("click", function(){
        portada.src = "img/librosLiteraturaJuvenil/portadaLaLeccionDeAugust.jpg";
        tituloLibro.innerHTML = "La lección de August";
        nombreAutor.innerHTML = "Raquel Palacio";
        genero.innerHTML = "Género: Literatura juvenil";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 14 de febrero de 2012";
        sinopsis.innerHTML = "Su cara lo hace distinto y él solo quiere ser uno más. Camina siempre mirando al suelo, la cabeza gacha y el flequillo tratando en vano de esconder su rostro, pero, aun así, es objeto de miradas furtivas, susurros ahogados y codazos de asombro. August sale poco, su vida transcurre entre las acogedoras paredes de su casa, entre la compañía de su familia, su perra Daisy y las increíbles historias de La guerra de las galaxias.Este año todo va a cambiar, porque este año va a ir, por primera vez, a la escuela. Allí aprenderá la lección más importante de su vida, la que no se enseña en las aulas ni en los libros de texto: crecer en la adversidad, aceptarse tal como es, sonreír a los días grises y saber que, al final, siempre encontrará una mano amiga.En un mundo en el que el bullying entre los jóvenes se está convirtiendo en una verdadera epidemia, los libros de la serie «Wonder» ofrecen una nueva visión refrescante, necesaria y esperanzadora.Hazte un favor y lee este libro: tu vida será mejor.";
    });

    milVecesHastaSiempre.addEventListener("click", function(){
        portada.src = "img/librosLiteraturaJuvenil/portadaMilVecesHastaSiempre.jpg";
        tituloLibro.innerHTML = "Mil veces hasta siempre";
        nombreAutor.innerHTML = "John Green";
        genero.innerHTML = "Género: Literatura juvenil y romance";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 10 de octubre de 2017";
        sinopsis.innerHTML = "Aza nunca tuvo intención de investigar el misterio del multimillonario fugitivo Russell Pickett. Pero hay una recompensa de cien mil dólares en juego y su mejor y más intrépida amiga, Daisy, no está dispuesta a dejarla escapar. Así, juntas, recorrerán la corta distancia y las enormes diferencias que les separan del hijo de Russell Pickett, Davis.Aza lo está intentando. Trata de ser una buena hija, una buena amiga, una buena estudiante y, tal vez, incluso una buena detective, mientras vive en la espiral cada vez más estrecha de sus propios pensamientos.";
    });

    carinoCuantoTeOdio.addEventListener("click", function(){
        portada.src = "img/librosLiteraturaJuvenil/portadaCarinoCuantoTeOdio.png";
        tituloLibro.innerHTML = "Cariño, cuánto te odio";
        nombreAutor.innerHTML = "Sally Thorne";
        genero.innerHTML = "Género: Romance";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 09 de agosto de 2016";
        sinopsis.innerHTML = "Lucy Hutton es la asistente de una editora de la vieja escuela, preocupada por la calidad de los títulos que publica. La editora se ve obligada a fusionar su pequeña editorial con una gran editorial comercial, y Lucy se ve obligada a trabajar con Joshua Templeman, el asistente del editor en jefe de la otra editorial, preocupado únicamente por las ventas. Lucy y Joshua se convierten inmediatamente en enemigos, pero del odio al amor ya sabemos que hay sólo un paso?";
    });

    segundasPrimerasImpresiones.addEventListener("click", function(){
        portada.src = "img/librosLiteraturaJuvenil/portadaSegundasPrimerasImpresiones.jpg";
        tituloLibro.innerHTML = "Segundas primeras impresiones";
        nombreAutor.innerHTML = "Sally Thorne";
        genero.innerHTML = "Género: Romance";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 13 de abril de 2021";
        sinopsis.innerHTML = "Ruthie Midona lleva años trabajando en la administración del complejo Providence, a la entera disposición de los adinerados residentes y de las especies raras de tortugas que rondan por el impecable césped. Sigue una rutina sin apenas cambios. Hasta que conoce a Teddy Prescott, el hijo del nuevo propietario de Providence, y su nuevo vecino. Alto, tatuado y con el pelo más maravilloso del mundo, Teddy está ahorrando para hacer realidad su sueño de abrir un salón de tatuajes. Es la definición personificada del riesgo, y deja deslumbrada a Ruthie a primera vista? hasta que la confunde con una ancianita. Ruthie descubre la forma perfecta de vengarse de Teddy y su insultante primera impresión: las residentes más excéntricas acaban de poner un anuncio (¡sí, otro!) en busca de un ayudante personal a quien atormentar. Las Parloni tienen noventa años, son unas pequeñas amenazas andantes y ninguno de sus ayudantes ha durado ni una semana. Ruthie reconoce a un pusilánime en cuanto lo ve y está más que dispuesta a ofrecerles a Teddy. Para sorpresa de Ruthie, Teddy demuestra ser el empleado definitivo y despliega su encanto por toda la villa, incluido el corazón de Ruthie, llenándolo con su visión chispeante, nunca seria, de la vida. Pero con el futuro de Providence pendiendo de un hilo y los planes de la familia de Teddy amenazando con destruir el pequeño universo de Ruthie, ¿estará Teddy ahí cuando más lo necesite?";
    });

    memoriasYLadridos.addEventListener("click", function(){
        portada.src = "img/librosLiteraturaInfantil/portadaMemoriasYLadridos.jpg";
        tituloLibro.innerHTML = "Memorias y ladridos";
        nombreAutor.innerHTML = "Sebastian Murillo";
        genero.innerHTML = "Género: Literatura infantil";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 2008";
        sinopsis.innerHTML = "Dos perros uno que abandono el mundo terrenal para instalarse en un espacio atemporal y otro que sufre las tragedias y amenazas de la calle. Cruzan sus vidas de una manera inesperada. Un niño protagonista y testigo de los hechos opina sobre la vida y la muerte y cuenta sus vivencias.";
    });

    meDicenSaraTomate.addEventListener("click", function(){
        portada.src = "img/librosLiteraturaInfantil/portadaMeDicenSaraTomate.PNG";
        tituloLibro.innerHTML = "Me dicen Sara Tomate";
        nombreAutor.innerHTML = "Jean Ure";
        genero.innerHTML = "Género: Literatura infantil";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 01 de enero de 2000";
        sinopsis.innerHTML = "El protagonista se llama Salvatore d’Amato, pero sus rivales le dicen Sara Tomate. Él está descubriendo que le gustan las chicas y se muere de ganas por dar su primer beso. También le gusta escribir poesía. Al final, entenderá que es más importante la inteligencia que la apariencia.";
    });

    miPapaEsUnHombrePajaro.addEventListener("click", function(){
        portada.src = "img/librosLiteraturaInfantil/portadaMiPapaEsUnHombrePajaro.jpg";
        tituloLibro.innerHTML = "Mi papá es un hombre pájaro";
        nombreAutor.innerHTML = "David Almond";
        genero.innerHTML = "Género: Literatura infantil";
        fechaDePublicacion.innerHTML = "Fecha de publicación: 01 de octubre de 2007";
        sinopsis.innerHTML = "En una ciudad lluviosa al norte de Inglaterra, cosas extrañas están pasando. Papá está armando un par de alas, comiendo moscas y arreglando un nido. La tía Dorita está haciendo empanaditas. El señor Popó está recorriendo las calles gritando muy fuerte. Hasta el señor Menta, el profesor, está dando aletazos. Y viendo todo esto está Isabelita; quien extraña a su mamá y tiene que cuidar de su padre mientras piensa qué hermosos son los pájaros. ¿Qué está detrás de todo esto? ¡La Gran Competencia de Pájaros Humanos, por supuesto! Este libro muestra la importancia de los lazos familiares y del amor entre padres e hijos sobre todas las cosas. Además, hace énfasis en la fortaleza que pueden llegar a tener los niños y la manera como ellos sobrellevan la pérdida de un ser querido y logran salir adelante, ayudando a otros en el camino.";
    });
}