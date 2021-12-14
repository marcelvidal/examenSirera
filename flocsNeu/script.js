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
var contador = 0;



function iniciarNeu() {
    var posicio = 0;

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
        var height = amplada;



        //POSICIONS ALEATORIES ENTRE 0 I EL MAXIM DE LA PANTALLA
        var heightScreen = window.innerHeight;
        var widthScreen = window.innerWidth;

        //var topIamagePosition = RandomentreDos(0, heightScreen);
        var leftImagePosition = RandomentreDos(0, widthScreen);
        var topImagePosition = RandomentreDos(0, heightScreen);

        //CREAR LA IMATGE

        var img = document.createElement("img");
        img.src = "images/snow.png";

        img.style.width = amplada + "px";
        img.style.height = height + "px";
        img.style.top = topImagePosition + "px";
        img.style.left = leftImagePosition + "px";

        //AFEGIR IMATGE
        div.appendChild(img);





    } setInterval(function movimentNeu() {

        var flocs = document.getElementById("flocs");
        var moviment = false;
        var height = window.innerHeight;


        for (let i = 0; i < flocs.children.length; i++) {
            var top = flocs.children[i].style.top; // POSICIO ACTUAL IMATGE
            var left = flocs.children[i].style.left;
            top = Number.parseInt(top); // SEMPRE OPERAR AMB NUMEROS I AFEXIR RESULTAT AL FINAL


            //Tots els fills del div amb id flocs que son imatges
            if (top >= 0) { // si la posicio de la imatge es mes gran o igual a 0 
                moviment = true;
                contador++;
            }


            if (top >= height) { // si la posicio de la imatge a superat o es igual a la llargada maxima de la pantalla
                moviment = false;
            }

            if (moviment == true) {
                var resultat = top + contador; // OPERAR PRIMER AMB NUMEROS // RESULTAT = POSICIO ACTUAL IMATGE + CONTADOR
                flocs.children[i].style.top = resultat + "px"; // AFEGIR PX AL RESULTAT

            } else {
                // PER POSAR LA IMATGE QUE CAIGUI I NO COMENCIN TOTES DESDE ADAL DE TOT LA POSEM ON ESTAVA AL PRINCIPI
                var resultat = top = - flocs.children[i].top;
                flocs.children[i].style.top = resultat + "px";
               
                console.log("posicio imatge: " + topImagePosition + "posicio Actual:" + flocs.children[i].style.top)
            }





            // SI EL MOVIMENT ES FALSE ES QE A DE TORNAR A COMENÇAR TOT






        }



    }, 100);
}



