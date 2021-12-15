// CONSTRUIR FLOCS

//FUNCIO TAMANY FLOCS MAXIM I MINIM
function RandomentreDos(min, max) {
    var random = Math.floor((Math.random() * (max - min)) + min);
    return random;
}


// FLOCS
var maximFlocs = 60;
var fotogrames = 10;
var segons = 1 / fotogrames * 1000;
var posicio = 0;
var moviment = false;

// FUNCIOR QE VOLCA ELS FLOCS DE NEU(IMATGES) AL HTML
function iniciarNeu() {

    //CREAR DIV 
    var div = document.createElement("div");
    // AFEGIR ID AL DIV
    div.id = "flocs";
    // AFEGIRLO AL BODY
    document.body.appendChild(div);

    //CREAR IMATGES 
    // SEMPRE ES MILLOR TREBALLAR SOBRE UNA VARIABLE SELECCINADA PER ID I TREBALLAR AMB ELS FILLS 
    //var div = document.getElementById("flocs");


    for (let i = 0; i < maximFlocs; i++) {

        //GENERAR TAMANY ALEATORI DELS FLOCS
        var amplada = RandomentreDos(15, 30);
        var height = RandomentreDos(15, 30);


        //POSICIONS ALEATORIES ENTRE 0 I EL MAXIM DE LA PANTALLA
        var heightScreen = window.innerHeight;
        var widthScreen = window.innerWidth;



        //CREAR LA IMATGE
        var img = document.createElement("img");
        img.src = "images/snow.png";
        img.width = amplada;
        img.height = height;

        //MIDA IMATGE


        // POSICIO IMATGE
        img.style.top = RandomentreDos(0, heightScreen) + "px";
        img.style.left = RandomentreDos(0, widthScreen) + "px";


        //AFEGIR IMATGE
        div.appendChild(img);



    }
}

window.setInterval(function () { moureFlocs() }, segons);


/*
function moureFlocs() {


    var flocs = document.getElementById("flocs");

    // ALTURA I AMPLADA DE LA PAGINA
    var ScreenWidth = screen.width;
    var ScreenHeight = screen.height;


    for (var i = 0; i < flocs.children.length; i++) {
        var posicioVertical = flocs.children[i].style.top; // POSICIO ACTUAL DE LA IMATGE




        posicioVertical = parseInt(posicioVertical);


        if (posicioVertical >= ScreenHeight) {
            moviment = false;
        }

        if (posicioVertical >= 0) {
            moviment = true;
            posicio++;
        }


        if (moviment) {
            var resultat = posicioVertical + posicio; //posicio = +1
            flocs.children[i].style.top = resultat + "px"
            console.log("resultat ->" + resultat + "posicio ->" + posicio + "posicioVertical ->" + posicioVertical);
        }


      else{
        flocs.children[i].style.top = 0 + "px"
      }

    }

}
*/



function moureFlocs() {

    var flocs = document.getElementById("flocs");

    // ALTURA I AMPLADA DE LA PAGINA
    var ScreenWidth = screen.width;
    var ScreenHeight = screen.height;


    for (var i = 0; i < flocs.children.length; i++) {
        var posicioVertical = flocs.children[i].style.top; // POSICIO ACTUAL DE LA IMATGE


        posicioVertical = parseInt(posicioVertical);


        if (posicioVertical >= ScreenHeight) {
            moviment = false;
        }

        if (posicioVertical >= 0) {
            moviment = true;
            posicio++;
        }


        if (moviment) {
            var resultat = posicioVertical + posicio; //posicio = +1
            
            //console.log("resultat ->"+ resultat + "posicio ->"+posicio +"posicioVertical ->"+ posicioVertical );

            if (resultat > screen.height) {

                flocs.children[i].style.top = 0 +"px";
                posicio = 0;
                posicioVertical = 0;

                console.log( flocs.children[i].style.top);
            } else {

                flocs.children[i].style.top = resultat + "px"

            }
        } 
    }

}
